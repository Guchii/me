import { ChakraProvider, Flex, useMediaQuery } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyTheme from "../styles/theme";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/montserrat/700.css";

const MyApp = ({ Component, pageProps }) => {
  const [isBigEnough] = useMediaQuery("(min-width: 320px)");
  const niceProps = {
    p: 6,
    width: "100%",
    maxWidth: 1400,
    mx: "auto",
  };
  return (
    <ChakraProvider theme={MyTheme} resetCSS>
      {!isBigEnough ? (
        <>
          Your device&apos;s resolution may be very small. Please switch to
          desktop mode if you are on a mobile browser.
        </>
      ) : (
        <Flex
          direction={"column"}
          minHeight="100vh"
          justifyContent="space-between"
          overflow="hidden"
        >
          <Header />
          <Component niceProps={niceProps} {...pageProps} />
          <Footer />
        </Flex>
      )}
    </ChakraProvider>
  );
};
export default MyApp;
