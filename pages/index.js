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
export default function Home() {
  const router = useRouter();
  return (
    <>
      <Flex
        width={1400}
        mx={"auto"}
        gap={20}
        minHeight={300}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Flex flexDirection={"column"} fontSize={20} height={"100%"}>
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
          <Flex gap={3}>
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
        </Flex>
        <Image
          src="https://github.com/guchii.png"
          alt="Shivom Srivastava"
          rounded={"full"}
          height={"300px"}
          border="solid"
          borderColor={"teal"}
          borderWidth={4}
          cursor={"pointer"}
          p={3}
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
