import { Box, ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MyTheme from "../styles/theme";

import "@fontsource/space-mono"
import { AppProps } from "next/app";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [data, setData] = useState<Projects>({ updated_at: "", projects: [] });
  const fetchProjects = async () => {
    const response = await fetch("/projects.json");
    const data = await response.json();
    setData(data);
  };
  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <ChakraProvider theme={MyTheme} resetCSS>
      <Layout>
        <Component data={data} {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};
export default MyApp;
