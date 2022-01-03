import Header from "./Header";
import Footer from "./Footer";
import { Flex } from "@chakra-ui/react";
const Layout = ({ children }) => {
  return (
    <>
      <Flex
        direction={"column"}
        minHeight="100vh"
        maxWidth={"1400px"}
        marginX={"auto"}
        justifyContent={"space-between"}
      >
        <Header />
        <Flex
          alignItems={"center"}
          maxWidth={"full"}
          justifyContent={"center"}
          gap={5}
          direction={{ sm: "column-reverse", lg: "row" }}
          flex={"1"}
        >
          {children}
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
