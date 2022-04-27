import { Button, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import NextLink from "next/link";
import { useState } from "react";

export default function Home({ niceProps }) {
  return (
    <>
      <HStack
        minHeight={300}
        justifyContent={"center"}
        alignItems={"center"}
        gap={8}
        {...niceProps}
      >
        <Flex
          flexDirection={"column"}
          fontSize={20}
          height={"100%"}
          textAlign={{ sm: "center", md: "start" }}
          justify="center"
        >
          <Text textColor={"purple.600"} fontSize="2xl">
            Hello, My name is
          </Text>
          <Heading fontSize={"7xl"}>Shivom Srivastava</Heading>
          <Text marginBottom={8} fontSize="2xl">
            I&apos;m a{" "}
            <Text
              display={"inline"}
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontWeight="bold"
            >
              full stack developer
            </Text>{" "}
            and I love to develop small and usable stuff.
          </Text>
          <Flex justifyContent={{ sm: "center", md: "flex-start" }} gap={3}>
            <NextLink href="/projects" passHref>
              <Button as="a" colorScheme={"purple"} size={"lg"}>
                Projects
              </Button>
            </NextLink>
            <NextLink href="/Resume.pdf" passHref>
              <Button as="a" colorScheme={"purple"} size={"lg"}>
                Resume
              </Button>
            </NextLink>
          </Flex>
        </Flex>
        <Image
          src="https://placekitten.com/500"
          alt="Shivom Srivastava"
          rounded={"full"}
          display={{ sm: "none", md: "block" }}
          boxShadow="2xl"
          draggable={false}
          height="400px"
          width="400px"
        />
      </HStack>
      <Head>
        <title>Shivom Srivastava</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"
        />
      </Head>
    </>
  );
}
