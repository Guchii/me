import {
  Flex,
  Grid,
  HStack,
  IconButton,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { FaGithub } from "react-icons/fa";
import { v4 } from "uuid";
import { BiLinkExternal } from "react-icons/bi";
const Projects = () => {
  const projects = [
    {
      name: "Plug Talk",
      desc: "Open source community chat app",
      source: "https://github.com/teamPlugTalk/PlugTalk",
      url: "https://plugtalk.netlify.app/",
    },
    {
      name: "Dump Code Here",
      desc: "Polished paste bin, Runs on serverless functions",
      source: "https://github.com/guchii/dumpcodehere",
      url: "https://dumpcodehere.vercel.app/",
    },
    {
      name: "The Free Times",
      desc: "Free to read e news paper",
      source: "https://github.com/guchii/the-free-times",
      url: "https://guchii.github.io/the-free-times",
    },
  ];
  const rd = (url) => window.open(url, "_blank");
  return (
    <>
      <Head>
        <title>Projects | Shivom Srivastava</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍜</text></svg>"
        ></link>
      </Head>
      <Grid
        maxWidth={1400}
        mx={"auto"}
        gap={30}
        p={6}
        templateColumns={"repeat( auto-fill, minmax(400px, 1fr))"}
        maxHeight={"80vh"}
        overflowY={"auto"}
        overflowX={"hidden"}
        width={"100%"}
      >
        {projects.map((project) => (
          <Stack
            key={v4()}
            height={"auto"}
            rounded={"xl"}
            width={{ sm: "90%", md: "100%" }}
            boxShadow={"xl"}
            p={4}
            spacing={2}
          >
            <Text fontSize={30} lineHeight={5}>
              {project.name}
            </Text>
            <Text>{project.desc}</Text>
            <Spacer />
            <HStack>
              <IconButton
                aria-label="source"
                size={"lg"}
                icon={<FaGithub />}
                colorScheme={"purple"}
                onClick={() => rd(project.source)}
              />
              <IconButton
                aria-label="steam"
                colorScheme={"purple"}
                size={"lg"}
                icon={<BiLinkExternal />}
                onClick={() => rd(project.url)}
              />
            </HStack>
          </Stack>
        ))}
      </Grid>
    </>
  );
};

export default Projects;
