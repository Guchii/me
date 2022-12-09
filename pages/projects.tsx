import { Heading, HStack, IconButton, Link, Spacer, Stack, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import Head from 'next/head';
import { BiLinkExternal } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';

import projects from '../projects.json';

const Projects = () => {
  return (
    <VStack gap={8} alignItems="start">
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
      <Wrap spacing={8} w="full">
        {projects.map((project, i) => (
          <WrapItem h="180px" w="400px" key={i}>
            <Stack
              height={"full"}
              width={"full"}
              rounded={"xl"}
              boxShadow={"lg"}
              px={8}
              py={6}
              textAlign={{ sm: "center", md: "left" }}
              _hover={{
                boxShadow: "xl",
                transform: "translateY(-2px)",
              }}
              transitionDuration="0.3s"
            >
              <Heading fontSize={24}>{project.name}</Heading>
              <Text>
                {project.desc.slice(0, 40)}
                {project.desc.length > 40 && "..."}
              </Text>
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
                />
                <IconButton
                  aria-label="steam"
                  colorScheme={"purple"}
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
