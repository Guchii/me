import {
  ChakraProvider,
  extendTheme,
  Flex,
  useMediaQuery,
} from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import Footer from "../components/Footer";
import Header from "../components/Header";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
});

const theme = extendTheme({ breakpoints });

const MyApp = ({ Component, pageProps }) => {
  const [isBigEnough] = useMediaQuery("(min-width: 320px)");
  const niceProps = {
    p: 6,
    width: "100%",
    maxWidth: 1400,
    mx: "auto",
  };
  return (
    <ChakraProvider theme={theme} resetCSS>
      {isBigEnough ? (
        <Flex
          direction={"column"}
          minHeight="100vh"
          justifyContent="space-between"
        >
          <Header />
          <Component niceProps={niceProps} {...pageProps} />
          <Footer />
        </Flex>
      ) : (
        <>
          Your device&apos;s resolution may be very small. Please switch to
          desktop mode if you are on a mobile browser.
        </>
      )}
    </ChakraProvider>
  );
};
export default MyApp;
