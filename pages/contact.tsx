import {
  AspectRatio,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Page | Shivom Srivastava</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤙</text></svg>"
        ></link>
      </Head>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        direction={{ sm: "column", md: "row" }}
        gap={12}
        minHeight="inherit"
      >
        <Box>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            The Contact Page
          </Heading>
          <AspectRatio ratio={16 / 9}>
            <Image
              src={"/naruto1.jpg"}
              alt="naruto"
              marginTop={4}
              height={"full"}
              width="full"
              rounded={"xl"}
              shadow={"2xl"}
              draggable="false"
            />
          </AspectRatio>
        </Box>
        <Box boxShadow={"lg"} p={6} maxWidth={400} width={"100%"}>
          <form
            action="https://formsubmit.co/shvomsrivastava@gmail.com"
            method="POST"
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type={"text"} name="name" placeholder="guchiii" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type={"email"}
                name="email"
                placeholder="guchiii@mail.com"
              />
            </FormControl>
            <FormControl id="message" isRequired>
              <FormLabel>Your Message</FormLabel>
              <Textarea
                placeholder="#include <iostream>..."
                name="message"
                rows={4}
                maxHeight={"50%"}
                resize={"none"}
              />
            </FormControl>
            <input
              type="hidden"
              name="_next"
              value="https://shivom.me/thanks"
            ></input>
            <input
              type="hidden"
              name="_subject"
              value="New submission!"
            ></input>
            <Button variant={"primary"} type={"submit"}>
              Submit Response
            </Button>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default Contact;
