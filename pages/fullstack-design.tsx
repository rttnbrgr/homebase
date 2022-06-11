import React from "react";
import Head from "next/head";
import { Container, VStack } from "@chakra-ui/react";
import { projects } from "../lib/fullstackDesign";
import Header from "../components/reviews/Header";
import { LayoutChakra } from "../components/layouts/LayoutChakra";
import { Project } from "../components/fullstackDesign/Project";
import MetaPage from "../components/MetaPage";

type ReviewProps = {};

function FullstackDesign({}: ReviewProps) {
  return (
    <LayoutChakra>
      <MetaPage title="Fullstack Design" />
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
