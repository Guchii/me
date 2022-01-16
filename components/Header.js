import NextLink from "next/link";
import {
  Flex,
  Link,
  Button,
  IconButton,
  useColorMode,
  Box,
} from "@chakra-ui/react";
import { BsFillMoonFill } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex
        p={6}
        gap={6}
        justifyContent={"flex-start"}
        alignItems={"center"}
        direction={{ sm: "column", lg: "row" }}
        width={1400}
        mx="auto"
      >
        <Flex gap={4} width={"100%"}>
          <LinkItem text="Home" href={"/"} />
          <LinkItem text="Skills" href={"skills"} />
          <LinkItem text="Projects" href="/projects" />
          <LinkItem text="Contact" href="/contact" />
          <LinkItem
            text="Blog"
            href={"https://guchiii.hashnode.dev/"}
            isExternal
          />
        </Flex>
        <Flex gap={3} marginLeft={{ sm: "none", lg: "auto" }}>
          <IconButton
            aria-label="Search database"
            icon={<BsFillMoonFill />}
            onClick={toggleColorMode}
          />
          <Button
            onClick={() => window.open("/Resume.pdf", "_self")}
            colorScheme="teal"
          >
            Resume
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

const LinkItem = ({ text, href, isExternal }) => {
  if (!isExternal)
    return (
      <NextLink href={href || "/"} passHref>
        <Link _focus={{ boxShadow: "none" }}>{text}</Link>
      </NextLink>
    );
  return (
    <Link _focus={{ boxShadow: "none" }} href={href || "/"} isExternal>
      {text}{" "}
      <BiLinkExternal
        style={{ display: "inline", transform: "translateY(4px)" }}
      />
    </Link>
  );
};

export default Header;
