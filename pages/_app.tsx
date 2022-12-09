import { Box, ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyTheme from "../styles/theme";

import "@fontsource/space-mono"
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
