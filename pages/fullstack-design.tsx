import React from "react";
import Head from "next/head";
import Meta from "../components/meta";
import {
  Box,
  ChakraProvider,
  Container,
  HStack,
  Text,
  VStack,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";
import theme from "../theme";
import { projects, Project } from "../lib/fullstackDesign";
import Header from "../components/reviews/Header";

/**
 * Project
 */

function Project({ title, description, links }: Project) {
  return (
    <VStack bg="" maxW="500px" spacing="4" align="start">
      <Text
        textStyle="review.text"
        p="2"
        layerStyle="reviewTheme.alt"
        display="inline-flex"
      >
        {title}
      </Text>
      <Text textStyle="review.text">{description}</Text>
      {links && (
        <HStack spacing={2}>
          {links.map(({ displayText, url }, i) => (
            <ChakraLink variant="reviewButton" key={i} href={url} isExternal>
              <Button>{displayText}</Button>
            </ChakraLink>
          ))}
        </HStack>
      )}
    </VStack>
  );
}

type ReviewProps = {};

function FullstackDesign({}: ReviewProps) {
  return (
    <>
      <Meta />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Fullstack Design | R T T N B R G R</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Box minH="100vh" m={"0 auto"}>
          <Header title="Fullstack Design" />
          <Container variant="review" pb="8">
            <VStack spacing={4}>
              {projects.map((project, i) => (
                <Project {...project} key={i} />
              ))}
            </VStack>
          </Container>
        </Box>
      </ChakraProvider>
    </>
  );
}

export default FullstackDesign;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
