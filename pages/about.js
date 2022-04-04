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
import { useState } from "react";
const Skills = ({ niceProps }) => {
  const Skills = ["HTML", "CSS", "JS", "REACT", "FIGMA", "LINUX"];
  const [selected, setSelected] = useState(0);
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
        <Flex>
          <UnorderedList
            styleType={"none"}
            padding={0}
            margin={0}
            display="grid"
            gap={4}
            gridTemplateColumns="1fr 1fr"
            marginLeft={24}
            marginRight={"auto"}
            w="20%"
          >
            {Skills.map((skill, i) => {
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
                  onMouseEnter={() => setSelected(i + 1)}
                  onMouseLeave={() => setSelected(0)}
                >
                  {skill}
                </ListItem>
              );
            })}
          </UnorderedList>
          <Box w="60%">
            {/* <Text fontSize={"3xl"}>React</Text> */}
            <Text fontSize={"3xl"}>
              {selected ? Skills[selected - 1] : "Hover over a Skill Please"}
            </Text>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit est dolore facere? Sequi quod delectus dicta facere
              quia. Quas, tempore.
            </Text>
          </Box>
        </Flex>
      </Box>
      <Head>
        <title>About Me</title>
      </Head>
    </Box>
  );
};

export default Skills;
