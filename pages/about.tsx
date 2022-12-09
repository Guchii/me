/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  ListItem,
  Text,
  UnorderedList,
  Stack,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import skills from "../skills.json"

const Skills = () => {
  const [selected, setSelected] = useState(0);
  return (
    <Box>
      <Stack
        direction={{ sm: "column", md: "row" }}
        spacing={8}
        alignItems="center"
      >
        <Text fontSize="xl">
          <Heading
            fontSize="5xl"
            _after={{
              content: '" "',
              bg: "purple.300",
              height: "4px",
              width: "100%",
              display: "block",
            }}
            marginBottom={4}
          >
            About Me
          </Heading>
          Hi! I’m a fullstack developer from Bennett University and I love
          working with React, Typescript, and Python. I’m really passionate
          about software development and I love learning new technologies. I’ve
          been programming for over three years and I love it! I’m a fast
          learner and I always try to find ways to improve my skills.
        </Text>
        <Image
          borderRadius={15}
          src="http://placekitten.com/500/500"
          alt="guchii"
          width={350}
          height={350}
        />
      </Stack>
      <Head>
        <title>About Me</title>
      </Head>
    </Box>
  );
};

export default Skills;
