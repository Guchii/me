import { Heading, HStack, IconButton, Link, Spacer, Stack, Text, useColorModeValue, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import Head from 'next/head';
import { BiLinkExternal } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import projects from '../projects.json';

const Projects = () => {
  const cardColor = useColorModeValue('gruvbox.fg2', 'gruvbox.bg2');
  return (
    <VStack gap={8} minHeight={"70vh"} justify="center" alignItems={{sm: "center", md: "start"}}>
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
      <Wrap spacing={8} w="full" justify={{sm: "center", md: "start"}}>
        {projects.map((project, i) => (
          <WrapItem h="200px" w="400px" key={i}>
            <Stack
              height={"full"}
              width={"full"}
              boxShadow={"lg"}
              px={12}
              py={6}
              textAlign={{ sm: "center", md: "left" }}
              bg={cardColor}
              _hover={{
                boxShadow: "xl",
                transform: "translateY(-2px)",
              }}
              transitionDuration="0.3s"
              userSelect={"none"}
            >
              <Heading fontSize={24}>{project.name}</Heading>
              <Text>
                {project.desc.slice(0, 50)}
                {project.desc.length > 50 && "..."}
              </Text>
              <Spacer />
              <HStack justify={{ sm: "center", md: "flex-start" }}>
                <IconButton
                  aria-label="source"
                  size={"lg"}
                  icon={<FaGithub />}
                  as={Link}
                  isExternal
                  href={project.source}
                />
                <IconButton
                  aria-label="steam"
                  size={"lg"}
                  as={Link}
                  isExternal
                  href={project.source}
                  icon={<BiLinkExternal />}
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
