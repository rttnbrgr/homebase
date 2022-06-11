import React from "react";
import Head from "next/head";
import { Container, VStack } from "@chakra-ui/react";
import { projects } from "../lib/fullstackDesign";
import Header from "../components/reviews/Header";
import { LayoutChakra } from "../components/layouts/LayoutChakra";
import { Project } from "../components/fullstackDesign/Project";

type ReviewProps = {};

function FullstackDesign({}: ReviewProps) {
  return (
    <LayoutChakra>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Fullstack Design | R T T N B R G R</title>
      </Head>
      <Header title="Fullstack Design" />
      <Container variant="review" pb="8">
        <VStack spacing={4}>
          {projects.map((project, i) => (
            <Project {...project} key={i} />
          ))}
        </VStack>
      </Container>
    </LayoutChakra>
  );
}

export default FullstackDesign;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
