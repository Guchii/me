import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
import "@fontsource/plus-jakarta-sans";
const theme = extendTheme({
  fonts: {
    heading: "Plus Jakarta Sans",
    body: "Plus Jakarta Sans",
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
