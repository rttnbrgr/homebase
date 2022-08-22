import React from "react";
import { Container, Flex, SimpleGrid, VStack } from "@chakra-ui/react";
import reviews from "../lib/reviews";
import { Review } from "../components/reviews";
import Header from "../components/reviews/Header";
import { Layout } from "../components/Layout";
import MetaPage from "../components/MetaPage";

type ReviewsProps = {};

function Reviews({}: ReviewsProps) {
  return (
    <Layout>
      <MetaPage title="REVIEWS" />
      <Header />
      <Container variant="none" py="8" px={{ base: 0, lg: 12 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing="12">
          {reviews.map((review, i) => {
            const { name, title, reviewText } = review;
            return (
              <Flex align="start" justify="center" key={i}>
                <Review
                  name={name}
                  title={title}
                  reviewText={reviewText}
                  key={i}
                />
              </Flex>
            );
          })}
        </SimpleGrid>
      </Container>
    </Layout>
  );
}

export default Reviews;

export const getStaticProps = async () => {
  return {
    props: {}
  };
};
