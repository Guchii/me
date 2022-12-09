import { Flex, IconButton, Link, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { FaSteam } from "react-icons/fa";
import { SiMyanimelist } from "react-icons/si";

const Footer = () => {
  const router = useRouter();
  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });
  const Links = [
    {
      name: "linkedin",
      icon: AiFillLinkedin,
      link: "https://in.linkedin.com/in/shivom-srivastava",
    },
    {
      name: "github",
      icon: AiFillGithub,
      link: "https://github.com/guchii",
    },
    {
      name: "mail",
      icon: AiFillMail,
      link: "mailto:shvomsrivastava@gmail.com",
    },
    {
      name: "instagram",
      icon: AiFillInstagram,
      link: "https://instagram.com/guchi.xd",
    },
    {
      name: "steam",
      icon: FaSteam,
      link: "https://steamcommunity.com/id/guchixd/",
    },
    {
      name: "myanimelist",
      icon: SiMyanimelist,
      link: "https://myanimelist.net/animelist/guchiii",
    },
  ];
  return (
    <>
      <Flex
        paddingBlock={6}
        justifyContent={"space-between"}
        direction={{ sm: "column", md: "row" }}
        maxWidth={1400}
        width={"100%"}
        mx="auto"
        gap={6}
        paddingInline={{ sm: 6, "2xl": 0 }}
      >
        <Flex
          wrap={{ sm: "wrap", md: "nowrap" }}
          justifyContent={"center"}
          alignItems={"center"}
          gap={3}
        >
          {Links.map((ll) => {
            return (
              <IconButton
                key={ll.name}
                aria-label={ll.name}
                size={buttonSize}
                icon={<ll.icon />}
                as={Link}
                href={ll.link}
                isExternal
                transitionDuration="0.3s"
                _hover={{
                  transform: "scale(1.1)",
                }}
              />
            );
          })}
        </Flex>
        <Link
          href="https://github.com/guchii/guchii.github.io"
          isExternal
          textAlign={"center"}
        >
          Designed & Built by Shivom Srivastava
        </Link>
      </Flex>
    </>
  );
};

export default Footer;
