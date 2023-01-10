import "../styles/globals.css";
import "@fontsource/space-mono";

import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { useEffect, useState } from "react";

import Layout from "components/Layout";
import Transition from "components/Transition";
import MyTheme from "styles/theme";

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
        <Transition>
          <Component data={data} {...pageProps} />
        </Transition>
      </Layout>
    </ChakraProvider>
  );
};
export default MyApp;
