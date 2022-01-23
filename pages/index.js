import Head from "next/head";
import {
  Heading,
  Text,
  Tooltip,
  Flex,
  Image,
  Button,
  Grid,
  Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const MotionImage = motion(Image);
const MotionFlex = motion(Flex);
export default function Home({ niceProps }) {
  const router = useRouter();
  return (
    <>
      <Flex
        gap={20}
        minHeight={300}
        justifyContent={"center"}
        alignItems={"center"}
        {...niceProps}
      >
        <MotionFlex
          flexDirection={"column"}
          fontSize={20}
          height={"100%"}
          textAlign={{ sm: "center", md: "start" }}
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Text textColor={"teal"}>Hello, My name is</Text>
          <Heading
            size={"4xl"}
            sx={{ fontFamily: "Londrina Solid, cursive" }}
            letterSpacing={3}
          >
            Shivom Srivastava
          </Heading>
          <Text marginBottom={15}>
            I&apos;m a frontend developer and I love to develop small and usable
            stuff.
          </Text>
          <Flex justifyContent={{ sm: "center", md: "flex-start" }} gap={3}>
            <Button
              colorScheme={"teal"}
              size={"lg"}
              onClick={() => router.push("/projects")}
            >
              Projects
            </Button>
            <Button
              colorScheme={"teal"}
              size={"lg"}
              onClick={() => window.open("/Resume.pdf", "_self")}
            >
              Resume
            </Button>
          </Flex>
        </MotionFlex>
        <MotionImage
          src="https://github.com/guchii.png"
          alt="Shivom Srivastava"
          rounded={"full"}
          height={"300px"}
          width={"300px"}
          border="solid"
          borderColor={"teal"}
          borderWidth={4}
          cursor={"pointer"}
          display={{ sm: "none", md: "block" }}
          p={3}
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          draggable={false}
        />
      </Flex>
      <Head>
        <title>Shivom Srivastava</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"
        ></link>
      </Head>
    </>
  );
}
