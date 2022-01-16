import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
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
        width={1400}
        mx={"auto"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={20}
      >
        <Image
          src={"/naruto1.jpg"}
          alt="naruto"
          width={1280 * 0.3}
          height={720 * 0.3}
        />
        <Box boxShadow={"lg"} p={6} width={400}>
          <form
            action="https://formsubmit.co/shvomsrivastava@gmail.com"
            method="POST"
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
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
            <Button colorScheme={"teal"} type={"submit"}>
              Submit Response
            </Button>
          </form>
        </Box>
      </Flex>
    </>
  );
};

export default Contact;
