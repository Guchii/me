import {
  Heading,
  HStack,
  IconButton,
  Link,
  Spacer,
  Stack,
  Text,
  useColorMode,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useMemo, useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const { colorMode } = useColorMode();
  const menuColors = useMemo(() => {
    const light = colorMode === "light";
    return {
      card: light ? "gruvbox.fg2" : "gruvbox.bg2",
      button: {
        bg: light ? "gruvbox.bg2" : "gruvbox.fg2",
        fg: light ? "gruvbox.fg" : "gruvbox.bg",
      },
    };
  }, [colorMode]);
  const [myProjects, setMyProjects] = useState<
    Array<{
      name: string;
      description: string;
      url: string;
      homepageUrl: string;
    }>
  >([]);
  const fetchProjects = async () => {
    const response = await fetch("/projects.json");
    const data = await response.json();
    console.log(data);
    setMyProjects(data);
  };
  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <VStack
      gap={8}
      minHeight={"70vh"}
      justify="center"
      alignItems={{ sm: "center", md: "start" }}
    >
      <Head>
        <title>Projects</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍜</text></svg>"
        ></link>
      </Head>
      <Heading fontSize={"4xl"} textAlign={{ sm: "center", md: "left" }}>
        Projects
      </Heading>
      <Wrap spacing={8} w="full" justify={{ sm: "center", md: "start" }}>
        {myProjects.map((project, i) => (
          <WrapItem h="200px" w="400px" key={i}>
            <Stack
              height={"full"}
              width={"full"}
              boxShadow={"lg"}
              px={12}
              py={6}
              textAlign={{ sm: "center", md: "left" }}
              bg={menuColors.card}
              _hover={{
                boxShadow: "xl",
                transform: "translateY(-2px)",
              }}
              transitionDuration="0.3s"
              userSelect={"none"}
            >
              <Text>
                {project.description || "No Description for the project :("}
              </Text>
              <Spacer />
              <HStack
                justify={{ sm: "center", md: "flex-start" }}
                alignItems={"center"}
              >
                <Heading marginRight={"auto"} wordBreak="break-all" maxW={"180px"} fontSize={24}>{project.name}</Heading>
                <IconButton
                  aria-label="source"
                  size={"lg"}
                  icon={<FaGithub />}
                  as={Link}
                  isExternal
                  href={project.url}
                  bg={menuColors.button.bg}
                  color={menuColors.button.fg}
                  _hover={{
                    bg: menuColors.button.bg,
                  }}
                  _active={{
                    bg: menuColors.button.bg,
                  }}
                />
                <IconButton
                  aria-label="homepage"
                  size={"lg"}
                  as={Link}
                  isExternal
                  href={project.homepageUrl ||  project.url}
                  icon={<BiLinkExternal />}
                  bg={menuColors.button.bg}
                  color={menuColors.button.fg}
                  _hover={{
                    bg: menuColors.button.bg,
                  }}
                  _active={{
                    bg: menuColors.button.bg,
                  }}
                />
              </HStack>
            </Stack>
          </WrapItem>
        ))}
      </Wrap>
    </VStack>
  );
};

export default Projects;
