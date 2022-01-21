import Header from "./Header";
import Footer from "./Footer";
import { Flex } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

const Layout = ({ children }) => {
  const [isBigEnough] = useMediaQuery("(min-width: 320px)");
  return (
    <>
      <Flex direction="column" minHeight="100vh" justifyContent="space-between">
        {isBigEnough ? (
          <>
            <Header />
            {children}
            <Footer />
          </>
        ) : (
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            width="100vw"
            height={"100vh"}
            p={6}
          >
            Your Device&apos;s resolution is not big enough to view this
            content. Please switch to desktop mode if you are on a mobile
            browser
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default Layout;
