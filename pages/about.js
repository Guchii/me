/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Flex,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Head from "next/head";
const Skills = ({ niceProps }) => {
  const Skills = ["HTML", "CSS", "JS", "REACT", "FIGMA", "LINUX"];
  return (
    <Box {...niceProps}>
      <Text fontSize="4xl" marginBottom={8}>
        The About Page
      </Text>
      <Flex
        // alignItems={"center"}
        gap={20}
        justifyContent="flex-start"
        marginLeft={24}
      >
        <Text w="50%">
          <Text fontSize="4xl">Who am I</Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          provident culpa sed quas repellat aperiam illo laboriosam temporibus
          ducimus aut incidunt. Porro numquam reiciendis ut itaque dolores illo
          nihil, saepe nesciunt explicabo labore aliquid soluta commodi iure
          repudiandae quibusdam! Culpa aliquam ex odio natus veritatis repellat
          molestiae molestias ut minima!
        </Text>
        <Image
          borderRadius={15}
          src="http://placekitten.com/300/300"
          alt="guchii"
        />
      </Flex>
      <Box>
        <Text fontSize="3xl">Skills</Text>
        <UnorderedList
          styleType={"none"}
          padding={0}
          margin={0}
          display="grid"
          gap={4}
          gridTemplateColumns="1fr 1fr"
          width={"10%"}
          marginLeft={24}
        >
          {Skills.map((skill) => {
            return (
              <ListItem
                bg="beige"
                borderRadius={"full"}
                textAlign="center"
                key={skill}
                padding="4px 16px"
                _hover={{
                  filter: "brightness(0.8)",
                }}
                cursor="pointer"
              >
                {skill}
              </ListItem>
            );
          })}
        </UnorderedList>
      </Box>
      <Head>
        <title>About Me</title>
      </Head>
    </Box>
  );
};

export default Skills;
