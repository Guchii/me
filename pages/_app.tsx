import { Box, ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyTheme from "../styles/theme";

import "@fontsource/montserrat/700.css";
import "@fontsource/plus-jakarta-sans/400.css";
import { AppProps } from "next/app";
import Layout from "../components/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
  
  return (
    <ChakraProvider theme={MyTheme} resetCSS>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};
export default MyApp;
