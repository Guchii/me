import NextLink from "next/link";
import {
  Flex,
  Heading,
  Link,
  Spacer,
  Button,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { BsFillMoonFill } from "react-icons/bs";
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
      >
        <Heading size={"lg"}>Shivom Srivastava</Heading>
        <Flex gap={4}>
          <LinkItem text="Home" href={"/"} />
          <LinkItem text="Skills" href={"skills"} />
          <LinkItem text="Projects" href="/projects" />
          <LinkItem
            text="Blog"
            href={"https://guchiii.hashnode.dev/"}
            isExternal
          />
          <LinkItem text="Contact" href="/contact" />
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
      {text}
    </Link>
  );
};

export default Header;
