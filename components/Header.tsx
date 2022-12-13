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
import { useMemo } from "react";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const menuColors = useMemo(() => {
    console.log("recomputhing menu colors");
    const light = colorMode === "light";
    return {
      bg: light ? "gruvbox.bg2" : "gruvbox.fg",
      fg: light ? "gruvbox.fg" : "gruvbox.bg",
      hover: light ? "gruvbox.bg3" : "gruvbox.fg3",
    };
  }, [colorMode]);
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
            variant="header"
          />
          <Button
            as={Link}
            isExternal
            href="https://cv.shivom.tech"
            display={{ sm: "none", md: "flex" }}
            variant="header"
          >
            Resume
          </Button>
          <Menu isLazy>
            <MenuButton
              display={{ sm: "flex", md: "none" }}
              as={IconButton}
              icon={<GiHamburgerMenu />}
              variant="header"
            ></MenuButton>
            <MenuDivider />
            <MenuList bg={menuColors.bg} color={menuColors.fg}>
              {["About", "Projects", "Contact"].map((nice) => (
                <NextLink key={nice} href={`/${nice.toLowerCase()}`} passHref>
                  <MenuItem
                    closeOnSelect
                    bg={menuColors.bg}
                    _hover={{
                      bg: menuColors.hover,
                    }}
                  >
                    <Link>{nice}</Link>
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
  return (
    <Button
      _hover={{
        bg: useColorModeValue("gruvbox.fg2", "gruvbox.bg2"),
      }}
      _active={{
        bg: "none",
      }}
      as={NextLink}
      href={href || "/"}
      bg="none"
      passHref
    >
      <Link w="full" display={"inline-flex"} gap={2}>
        {text} {isExternal ? <FiExternalLink /> : null}
      </Link>
    </Button>
  );
};

export default Header;
