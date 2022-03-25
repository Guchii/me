import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import NextLink from "next/link";
import { useState } from "react";

const MotionImage = motion(Image);
const MotionFlex = motion(Flex);

const beforeLoadImageVariant = { initial: {}, final: {} };
const afterLoadImageVariant = {
  initial: { scale: 0 },
  final: { rotate: 360, scale: 1 },
};

export default function Home({ niceProps }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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
            <NextLink href="/projects">
              <a>
                <Box colorScheme={"teal"} size={"lg"}>
                  Projects
                </Box>
              </a>
            </NextLink>
            <NextLink href="/Resume.pdf">
              <a>
                <Box colorScheme={"teal"} size={"lg"}>
                  Resume
                </Box>
              </a>
            </NextLink>
          </Flex>
        </MotionFlex>
        <Box height="300px" width="300px">
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
            display={{ sm: "none", md: !isImageLoaded ? "none" : "block" }}
            p={3}
            variants={
              isImageLoaded ? afterLoadImageVariant : beforeLoadImageVariant
            }
            initial="initial"
            animate="final"
            draggable={false}
            onLoad={(_e) => setIsImageLoaded(true)}
          />
        </Box>
      </Flex>
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
