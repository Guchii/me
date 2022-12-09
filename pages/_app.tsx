import { Box, ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyTheme from "../styles/theme";

import "@fontsource/montserrat/700.css";
import "@fontsource/plus-jakarta-sans/400.css";
import { AppProps } from "next/app";

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const niceProps = {
    maxWidth: 1400,
    mx: "auto",
    height: "100%",
    paddingInline: { sm: 6, "2xl": 0 },
  };
  return (
    <ChakraProvider theme={MyTheme} resetCSS>
      <Header />
      <Box minHeight={"calc(100vh - 88px - 96px)"}>
        <Component niceProps={niceProps} {...pageProps} />
      </Box>
      <Footer />
    </ChakraProvider>
  );
};
export default MyApp;
