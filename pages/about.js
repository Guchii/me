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
const Skills = ({ niceProps }) => {
  const Skills = [
    {
      id: 1,
      name: "HTML",
      full: "HyperText Markup Language",
      info: "",
    },
    {
      id: 2,
      name: "CSS",
      full: "Cascading StyleSheets",
      info: "",
    },
    {
      id: 3,
      name: "JS",
      full: "Javascript",
      info: "",
    },
    {
      id: 4,
      name: "React",
      info: "React is Good",
    },
    {
      id: 5,
      name: "Next JS",
      info: "",
    },
    {
      id: 6,
      name: "Figma",
      info: "",
    },
    {
      id: 7,
      name: "LINUX",
      info: "",
    },
  ];
  const [selected, setSelected] = useState(0);
  return (
    <Box {...niceProps}>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          provident culpa sed quas repellat aperiam illo laboriosam temporibus
          ducimus aut incidunt. Porro numquam reiciendis ut itaque dolores illo
          nihil, saepe nesciunt explicabo labore aliquid soluta commodi iure
          repudiandae quibusdam! Culpa aliquam ex odio natus veritatis repellat
          molestiae molestias ut minima!
        </Text>
        <Image
          borderRadius={15}
          src="http://placekitten.com/500/500"
          alt="guchii"
          width={350}
          height={350}
        />
      </Stack>
      {/* <Box>
        <Heading fontSize="5xl" marginBottom={8}>
          Skills
        </Heading>
        <HStack>
          <UnorderedList
            styleType={"none"}
            padding={0}
            margin={0}
            display="grid"
            gap={4}
            gridTemplateColumns="1fr 1fr 1fr"
            // marginLeft={24}
            marginRight={"auto"}
            w="20%"
          >
            {Skills.map((skill, i) => {
              return (
                <ListItem
                  key={skill.id}
                  onMouseEnter={() => setSelected(i + 1)}
                  onMouseLeave={() => setSelected(0)}
                >
                  <Button
                    colorScheme={"purple"}
                    borderRadius="full"
                    w={"full"}
                    textTransform="uppercase"
                  >
                    {skill.name}
                  </Button>
                </ListItem>
              );
            })}
          </UnorderedList>
          <SkillShowcase selected={selected} Skills2={Skills} />
        </HStack>
      </Box> */}
      <Head>
        <title>About Me</title>
      </Head>
    </Box>
  );
};

const SkillShowcase = ({ selected, Skills2 }) => {
  if (selected) {
    const { name, info } = Skills2[selected - 1];
    return (
      <Box w="60%">
        <Text fontSize={"3xl"}>{name} </Text>
        <Text>{info}</Text>
      </Box>
    );
  }
  return (
    <Box w="60%">
      <Text fontSize={"3xl"}>Hover over a Skill</Text>
      <Text>
        Lorem ipsum sit, amet consectetur adipisicing elit. Reprehenderit est
        dolore facere? Sequi quod delectus dicta facere quia. Quas, tempore.
      </Text>
    </Box>
  );
};

export default Skills;
