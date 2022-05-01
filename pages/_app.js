import { Box, ChakraProvider } from "@chakra-ui/react";
import { motion } from "framer-motion";

import "../styles/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyTheme from "../styles/theme";

import "@fontsource/montserrat/700.css";
import "@fontsource/plus-jakarta-sans/400.css";

const ChakraBox = motion(Box);

const MyApp = ({ Component, pageProps, router }) => {
  const niceProps = {
    maxWidth: 1400,
    mx: "auto",
    height: "100%",
    paddingInline: { sm: 6, "2xl": 0 },
  };
  return (
    <ChakraProvider theme={MyTheme} resetCSS>
      <Header />
      <ChakraBox
        minHeight={"calc(100vh - 88px - 96px)"}
        key={router.route}
        initial={"empty"}
        animate={"final"}
        variants={{
          empty: {
            opacity: 0,
            scale: 0.8,
            x: Math.floor(Math.random * 10) > 4 ? 200 : -200,
          },
          final: {
            opacity: 1,
            scale: 1,
            x: 0,
          },
        }}
      >
        <Component niceProps={niceProps} {...pageProps} />
      </ChakraBox>
      <Footer />
    </ChakraProvider>
  );
};
export default MyApp;
