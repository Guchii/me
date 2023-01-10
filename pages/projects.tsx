import { Grid, Heading, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import Card from "components/Card";
import CardMobile from "components/CardMobile";
import Head from "next/head";

const Projects = ({ data }: { data: Projects }) => {
  const isMobile = !useMediaQuery("(pointer: fine)")[0];
  return (
    <VStack
      gap={8}
      minHeight={"70vh"}
      justify="center"
      alignItems={{ sm: "center", md: "start" }}
    >
      <Head>
        <title>Projects</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍜</text></svg>"
        />
      </Head>
      <Heading
        fontSize={"4xl"}
        display="flex"
        alignItems={"center"}
        gap={4}
        justifyContent={{ sm: "center", md: "space-between" }}
        w="full"
        textAlign={{ sm: "center", md: "left" }}
      >
        Projects{" "}
        <Text display={{ sm: "none", md: "block" }} fontSize={"md"}>
          Last Updated: {new Date(data.updated_at).toLocaleString()}
        </Text>
      </Heading>
      <Grid
        templateColumns={{
          sm: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={8}
        w="full"
      >
        {data.projects.map((project, i) => {
          return isMobile ? (
            <CardMobile key={project.name} project={project} />
          ) : (
            <Card key={project.name} project={project} />
          );
        })}
      </Grid>
    </VStack>
  );
};

export default Projects;
