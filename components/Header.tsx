import {
  Button,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiExternalLink } from "react-icons/fi";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex
        paddingBlock={6}
        gap={6}
        justifyContent={{ sm: "center", md: "space-between" }}
        alignItems={"center"}
        direction={"row"}
        maxWidth={1400}
        width={"100%"}
        mx="auto"
        fontSize="lg"
        paddingInline={{ sm: 6, "2xl": 0 }}
        position="sticky"
        top={0}
        zIndex={1000}
        // bg={{ sm: useColorModeValue("white", "gray.800"), md: "none" }}
        backdropFilter={{ sm: "blur(10px)", md: "none" }}
      >
        <NextLink href="/">
          <Text fontWeight={"black"} fontSize="xl">
            SS
          </Text>
        </NextLink>
        <Flex gap={4} width={"100%"} display={{ sm: "none", md: "flex" }}>
          <LinkItem text="About" href="/about" />
          <LinkItem text="Projects" href="/projects" />
          <LinkItem text="Contact" href="/contact" />
          <LinkItem
            text="Blog"
            href="https://guchiii.hashnode.dev/"
            isExternal
          />
        </Flex>
        <Flex w="100%">
          <IconButton
            aria-label="Search database"
            icon={
              colorMode === "light" ? <BsFillMoonFill /> : <BsFillSunFill />
            }
            onClick={toggleColorMode}
            marginLeft="auto"
            marginRight={3}
          />
          <Button
            as={Link}
            isExternal
            href="https://cv.shivom.tech"
            colorScheme="purple"
            display={{ sm: "none", md: "flex" }}
          >
            Resume
          </Button>
          <Menu isLazy>
            <MenuButton
              display={{ sm: "flex", md: "none" }}
              as={IconButton}
              icon={<GiHamburgerMenu />}
            ></MenuButton>
            <MenuDivider />
            <MenuList>
              {["About", "Projects", "Contact"].map((nice) => (
                <NextLink key={nice} href={`/${nice.toLowerCase()}`} passHref>
                  <MenuItem closeOnSelect as="a">
                    {nice}
                  </MenuItem>
                </NextLink>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </>
  );
};

const LinkItem = ({
  text,
  href,
  isExternal,
}: {
  text: string;
  href: string;
  isExternal?: boolean;
}) => {
  if (!isExternal)
    return (
      <Button as={NextLink} href={href || "/"} bg="none">
        {text}
      </Button>
    );
  return (
    <Button as={Link} href={href || "/"} isExternal bg="none" gap={2}>
      {text} <FiExternalLink />
    </Button>
  );
};

export default Header;
