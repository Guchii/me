import {
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { BsFillMoonFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

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
      >
        <NextLink href="/" passHref>
          <Text as="a" fontWeight={"black"} fontSize="xl">
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
            icon={<BsFillMoonFill />}
            onClick={toggleColorMode}
            marginLeft="auto"
            marginRight={3}
          />
          <Button
            onClick={() => window.open("/Resume.pdf", "_self")}
            colorScheme="purple"
            display={{ sm: "none", md: "block" }}
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

const LinkItem = ({ text, href, isExternal }) => {
  if (!isExternal)
    return (
      <NextLink href={href || "/"} passHref>
        <Button bg="none" as={"a"}>
          {text}
        </Button>
      </NextLink>
    );
  return (
    <Button as={"a"} bg="none" href={href || "/"} isExternal>
      {text}
    </Button>
  );
};

export default Header;
