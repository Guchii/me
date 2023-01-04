import {
  Box,
  chakra,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  shouldForwardProp,
  Spacer,
  Stack,
  Text,
  useColorMode,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";

const amogusContainerVariants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 2.2,
    },
  }
}

const amogusVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}
const Projects: NextPage = () => {
  return (
    <VStack gap={4} minHeight={"70vh"}>
      <Box textAlign={"center"} mt={16}>
        <Heading
          as={motion.h1}
          animate={{
            color: "#FB4934",
            transition: {
              duration: 1,
              delay: 2.2,
              ease: "easeInOut",
            },
          }}
          fontSize={"5xl"}
        >
          Animations Playground
        </Heading>
        <Text fontSize={"xl"} mb={8}>
          Realized I had framer motion in this project&apos;s dependencies. So,
          had to use it.
        </Text>
      </Box>
      <Box
        my={8}
        w="700px"
        bg={"gruvbox.fg2"}
        h="350px"
        mx={"auto"}
        position="relative"
        overflow={"hidden"}
      >
        <Box
          as={motion.div}
          h="full"
          bg="gruvbox.fg"
          w="full"
          position={"absolute"}
          top={0}
          right={0}
          zIndex={12}
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          transitionDelay={"0.3s"}
          transitionDuration={"1.4s"}
          transitionTimingFunction={"cubic-bezier(0.85, 0, 0.15, 1)"}
        ></Box>
        <Image
          as={motion.img}
          objectFit={"cover"}
          alt="hosein-shirvani-Z_Z03pDOa-A-unsplash"
          src="/hosein-shirvani-Z_Z03pDOa-A-unsplash.jpg"
          position={"absolute"}
          initial={{ scale: "160%" }}
          animate={{ scale: "100%" }}
          transitionDelay={"0.2s"}
          transitionDuration={"1.4s"}
          transitionTimingFunction={"cubic-bezier(0.85, 0, 0.15, 1)"}
          w="full"
          h="350px"
        />
      </Box>
      <Text
        as={motion.p}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transitionDelay={"1.4s"}
        transitionDuration={"0.8s"}
        transitionTimingFunction={"ease-in-out"}
        fontWeight={"bold"}
      >
        Picture&apos;s not mine.{" "}
        <Link href="https://unsplash.com/photos/Z_Z03pDOa-A" isExternal>
          Photo by Hosein Shirvani
        </Link>
      </Text>
     
      <Head>
        <title>Playground</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍜</text></svg>"
        ></link>
      </Head>
    </VStack>
  );
};

export default Projects;
