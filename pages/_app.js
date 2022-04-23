import { ChakraProvider, Flex } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyTheme from "../styles/theme";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/montserrat/700.css";

const MyApp = ({ Component, pageProps }) => {
  const niceProps = {
    p: 6,
    width: "100%",
    maxWidth: 1400,
    mx: "auto",
    height: "calc(100vh - 88px - 96px)",
    overflowY: "auto",
  };
  return (
    <ChakraProvider theme={MyTheme} resetCSS>
      <Header />
      <Component niceProps={niceProps} {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
};
export default MyApp;
