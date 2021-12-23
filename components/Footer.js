import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";
import { FaSteam } from "react-icons/fa";
import { useRouter } from "next/router";
import { Flex, IconButton, Link } from "@chakra-ui/react";
const Footer = () => {
  const router = useRouter();
  const rd = (url) => window.open(url, "_blank");
  return (
    <>
      <Flex
        p={6}
        justifyContent={"space-between"}
        alignItems={"center"}
        wrap={"wrap"}
      >
        <Flex justifyContent={"space-between"} alignItems={"center"} gap={3}>
          <IconButton
            aria-label="instagram"
            size={"lg"}
            icon={<AiFillInstagram />}
            onClick={() => rd("https://instagram.com/guchi_xd/")}
          />
          <IconButton
            aria-label="github"
            size={"lg"}
            icon={<AiFillGithub />}
            onClick={() => rd("https://github.com/guchii")}
          />
          <IconButton
            aria-label="steam"
            size={"lg"}
            icon={<FaSteam />}
            onClick={() => rd("https://steamcommunity.com/id/guchixd/")}
          />
          <IconButton
            aria-label="mail"
            size={"lg"}
            icon={<AiFillMail />}
            onClick={() => rd("mailto:shvomsrivastava@gmail.com")}
          />
        </Flex>
        <Link
          href="https://github.com/guchii/personal-website-nextjs"
          isExternal
        >
          Made with ❤️
        </Link>
      </Flex>
    </>
  );
};

export default Footer;
