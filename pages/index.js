import Head from "next/head";
import { Heading, Text, Tooltip, Flex, Box, Image, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
export default function Home() {
    const router = useRouter();
    return (
        <>
            <Flex alignItems={"center"} maxWidth={"full"} justifyContent={"center"} gap={5}  >
                <Flex direction='column' gap={4} maxWidth={"700px"}>
                    <Heading as="h1">
                        Hello There!
                    </Heading>
                    <Text fontSize="xl">
                        My Name is Shivom Srivastava. I am a Frontend Developer, Learning Data Scientist, and an Anime Enthusiast.
                    </Text>
                    <Flex gap={3}>
                        <Button colorScheme={"teal"} onClick={()=>router.push("/projects")}>My Projects</Button>
                        <Button colorScheme={"teal"} onClick={()=>router.push("/skills")}>My Skills</Button>
                    </Flex>

                </Flex>
                <Tooltip label="Yours Truely" hasArrow >
                    <Image
                        cursor={"pointer"}
                        borderRadius='full'
                        boxSize="300px"
                        src='https://github.com/guchii.png'
                        alt='Shivom Srivastava'
                        boxShadow={"md"}
                        sx={{
                            filter: "grayscale(50%)"
                        }}
                    />
                </Tooltip>
            </Flex>
            <Head>
                <title>Shivom Srivastava</title>
            </Head>
        </>
    );
}
