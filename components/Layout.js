import Header from "./Header";
import Footer from "./Footer";
import { Flex } from "@chakra-ui/react";
const Layout = ({ children }) => {
  return (
    <>
      <Flex direction="column" minHeight="100vh" justifyContent="space-between">
        <Header />
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
