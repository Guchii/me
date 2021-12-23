import Head from "next/head";
import { Heading, Text, Tooltip, Flex, Image, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  return (
    <>
      <Flex
        alignItems={"center"}
        maxWidth={"full"}
        justifyContent={"center"}
        gap={5}
      >
        <Flex direction="column" gap={4} maxWidth={"700px"}>
          <Heading as="h1">👋 Hello There!</Heading>
          <Text fontSize="xl">
            My name is Shivom Srivastava. I am a frontend developer, a learning
            data scientist, and an anime enthusiast.
          </Text>
          <Flex gap={3}>
            <Button
              colorScheme={"teal"}
              onClick={() => router.push("/projects")}
            >
              My Projects
            </Button>
            <Button colorScheme={"teal"} onClick={() => router.push("/skills")}>
              My Skills
            </Button>
          </Flex>
        </Flex>
        <Tooltip label="Yours Truely" hasArrow>
          <Image
            cursor={"pointer"}
            borderRadius="full"
            boxSize="300px"
            src="https://github.com/guchii.png"
            alt="Shivom Srivastava"
            boxShadow={"md"}
            sx={{
              filter: "grayscale(50%)",
            }}
          />
        </Tooltip>
      </Flex>
      <Head>
        <title>Shivom Srivastava | Web Developer, Data Scientist</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"
        ></link>
      </Head>
    </>
  );
}
