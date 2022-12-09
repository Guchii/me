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
  List,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import skills from "../skills.json";

const Skills = () => {
  return (
    <Box>
      <Stack
        minHeight={"70vh"}
        spacing={8}
        justifyContent="center"
        alignItems="center"
      >
        <Text fontSize="xl">
          <Heading
            fontSize="4xl"
            _after={{
              content: '" "',
              bg: "purple.300",
              height: "4px",
              width: "100%",
              display: "block",
              marginTop: "1rem",
            }}
            marginBottom={4}
          >
            About
          </Heading>
          Hi! I’m a fullstack developer from Bennett University and I love
          working with <strong>React, Typescript, and Python</strong>. I’m
          really passionate about software development and I love learning new
          technologies. I’ve been programming for over three years and I love
          it! I’m a fast learner and I always try to find ways to improve my
          skills.
        </Text>
        <VStack w="full" alignItems={"start"}>
          <Heading fontSize={"xl"} marginBottom={4} size={"lg"}>
            Programming Languages
          </Heading>
          <Stack
            direction={{ sm: "column", md: "row" }}
            justifyContent={"space-between"}
            gap={{sm: 4, md: 0}}
            alignItems={"start"}
            w={{ sm: "full", md: "xl" }}
          >
            <UnorderedList>
              <Heading marginBottom={2} size={"xs"}>
                In order of competence:
              </Heading>
              {(["Python", "Typescript", "C/C++", "Java"] as Array<string>).map(
                (lang, i) => (
                  <ListItem key={i}>{lang}</ListItem>
                )
              )}
            </UnorderedList>
            <UnorderedList position={"relative"} right={{sm: -4, md: 0}}> 
              <Heading marginBottom={2} size={"xs"}>
                Learning/Interested in:
              </Heading>
              {(["Solidity", "Go", "Rust"] as Array<string>).map((lang, i) => (
                <ListItem key={i}>{lang}</ListItem>
              ))}
            </UnorderedList>
          </Stack>
        </VStack>
      </Stack>
      <Head>
        <title>About</title>
      </Head>
    </Box>
  );
};

export default Skills;
