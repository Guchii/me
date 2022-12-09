import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  IconButton,
  Link,
  Spacer,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Head from "next/head";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import projects from "../projects.json";

const Projects = () => {
  return (
    <Box>
      <Head>
        <title>Projects</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍜</text></svg>"
        ></link>
      </Head>
      <Heading fontSize={"4xl"} textAlign={{ sm: "center", md: "left" }}>
        My Projects
      </Heading>
      <Wrap spacingX={4}>
        {projects.map((project, i) => (
          <WrapItem
          >
            <Stack
              key={i}
              height={"auto"}
              rounded={"xl"}
              width={{ sm: "100%", md: "100%" }}
              boxShadow={"xl"}
              px={8} py={6}
              textAlign={{ sm: "center", md: "left" }}
            >
              <Heading fontSize={30}>{project.name}</Heading>
              <Text>{project.desc}</Text>
              <Spacer />
              <HStack justify={{ sm: "center", md: "flex-start" }}>
                <IconButton
                  aria-label="source"
                  size={"lg"}
                  icon={<FaGithub />}
                  colorScheme={"purple"}
                  as={Link}
                  isExternal
                  href={project.source}
                  // onClick={() => rd(project.source)}
                />
                <IconButton
                  aria-label="steam"
                  colorScheme={"purple"}
                  size={"lg"}
                  as={Link}
                  isExternal
                  href={project.source}
                  icon={<BiLinkExternal />}
                  // onClick={() => rd(project.url)}
                />
              </HStack>
            </Stack>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

export default Projects;
