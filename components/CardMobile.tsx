import {
  Flex,
  FlexProps,
  GridItem,
  Heading,
  IconButton,
  Link,
  Text,
  useColorMode,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { FC, useEffect, useMemo, useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const CardMobile: FC<{ project: Unpacked<Projects["projects"]> }> = ({
  project,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const { colorMode } = useColorMode();
  const menuColors = useMemo(() => {
    const light = colorMode === "light";
    return {
      card: light ? "gruvbox.fg2" : "gruvbox.bg2",
      button: {
        bg: light ? "gruvbox.bg2" : "gruvbox.fg2",
        fg: light ? "gruvbox.fg" : "gruvbox.bg",
      },
    };
  }, [colorMode]);
  return (
    <GridItem
      position={"relative"}
      h={200}
      key={crypto.randomUUID().slice(0, 4)}
      onClick={() => setActive((prev) => !prev)}
    >
      <VStack
        height={"full"}
        width={"full"}
        bg={menuColors.card}
        boxShadow={active ? "xl" : "none"}
        transform={active ? "translateY(-2px)" : "none"}
        transitionDuration="0.3s"
        userSelect={"none"}
        textAlign={"center"}
        justify={"center"}
        px={8}
        py={8}
      >
        <Heading w="full" textAlign={"center"} fontSize={"2xl"}>
          {project.name}
        </Heading>
        <Text>
          {project.description || "No Description for the project :("}
        </Text>
        <Flex
          justify={"center"}
          alignItems="center"
          gap={4}
          w="full"
          h="full"
          pos={"absolute"}
          inset={0}
          top={-2}
          opacity={active ? 1 : 0}
          display={active ? "flex" : "none"}
          bg={menuColors.card}
          transitionDuration={"0.3s"}
        >
          <IconButton
            aria-label="source"
            size={"lg"}
            icon={<FaGithub />}
            as={Link}
            isExternal
            href={project.url}
            bg={menuColors.button.bg}
            color={menuColors.button.fg}
            _hover={{
              bg: menuColors.button.bg,
            }}
            _active={{
              bg: menuColors.button.bg,
            }}
          />
          <IconButton
            aria-label="homepage"
            size={"lg"}
            as={Link}
            isExternal
            href={project.homepageUrl || project.url}
            icon={<BiLinkExternal />}
            bg={menuColors.button.bg}
            color={menuColors.button.fg}
            _hover={{
              bg: menuColors.button.bg,
            }}
            _active={{
              bg: menuColors.button.bg,
            }}
          />
        </Flex>
      </VStack>
    </GridItem>
  );
};

export default CardMobile;
