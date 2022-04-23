import { ChakraProvider } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyTheme from "../styles/theme";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/montserrat/700.css";

const MyApp = ({ Component, pageProps }) => {
  const niceProps = {
    width: "100%",
    maxWidth: 1400,
    mx: "auto",
    height: "calc(100vh - 88px - 96px)",
    overflowY: "auto",
    sx: {
      "&::-webkit-scrollbar": {
        width: "8px",
        borderRadius: "15px",
        backgroundColor: `rgba(0, 0, 0, 0.05)`,
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: `rgba(0, 0, 0, 0.05)`,
      },
    },
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
