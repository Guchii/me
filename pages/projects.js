import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  IconButton,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
const Projects = ({ niceProps }) => {
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
      name: "guchii.github.io",
      desc: "This very website",
      source: "https://github.com/guchii/guchii.github.io",
      url: "/",
    },
    {
      name: "The Free Times",
      desc: "Free to read e news paper",
      source: "https://github.com/guchii/the-free-times",
      url: "https://guchii.github.io/the-free-times",
    },
    {
      name: "Nara Link Locker",
      desc: "Minimalistic link locker web application",
      source: "https://github.com/guchii/nara",
      url: "https://narall.surge.sh",
    },
    {
      name: "The Pocket Gita",
      desc: "Beautiful Gita Reader Web Application",
      source: "https://github.com/guchii/the-pocket-gita",
      url: "https://guchii.github.io/the-pocket-gita",
    },
    {
      name: "The Pocket Gita API",
      desc: "Free to use Gita API",
      source: "https://github.com/guchii/the-pocket-gita-api",
      url: "https://the-pocket-gita.herokuapp.com/",
    },
  ];
  const rd = (url) => window.open(url, "_blank");
  return (
    <Box {...niceProps}>
      <Head>
        <title>Projects | Shivom Srivastava</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍜</text></svg>"
        ></link>
      </Head>
      <Heading gridColumn={"span 4"} fontSize={"4xl"}>
        My Projects
      </Heading>
      <Grid
        gap={30}
        templateColumns={"repeat(auto-fit, minmax(350px, 1fr))"}
        overflowY={"auto"}
        overflowX={"hidden"}
      >
        {projects.map((project, i) => (
          <Stack
            key={i}
            height={"auto"}
            rounded={"xl"}
            width={{ sm: "100%", md: "100%" }}
            boxShadow={"xl"}
            paddingBlock={8}
            paddingInline={4}
          >
            <Heading fontSize={30}>{project.name}</Heading>
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
    </Box>
  );
};

export default Projects;
