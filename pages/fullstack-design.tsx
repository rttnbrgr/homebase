import React from "react";
import Head from "next/head";
import { Container, VStack } from "@chakra-ui/react";
import { projects } from "../lib/fullstackDesign";
import Header from "../components/Header";
import { Layout } from "../components/Layout";
import { Project } from "../components/Project";
import MetaPage from "../components/MetaPage";

type ReviewProps = {};

function FullstackDesign({}: ReviewProps) {
  return (
    <Layout>
      <MetaPage title="Fullstack Design" />
      <Header title="Fullstack Design" />
      <Container variant="review" pb="8">
        <VStack spacing={4}>
          {projects.map((project, i) => (
            <Project {...project} key={i} />
          ))}
        </VStack>
      </Container>
    </Layout>
  );
}

export default FullstackDesign;

export const getStaticProps = async () => {
  return {
    props: {}
  };
};
