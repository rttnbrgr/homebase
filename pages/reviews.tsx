import React from "react";
import { Container, Flex, VStack } from "@chakra-ui/react";
import reviews from "../lib/reviews";
import { Review } from "../components/reviews";
import Header from "../components/reviews/Header";
import { LayoutChakra } from "../components/layouts";
import MetaPage from "../components/MetaPage";

type ReviewsProps = {};

function Reviews({}: ReviewsProps) {
  return (
    <LayoutChakra>
      <MetaPage title="REVIEWS" />
      <Header />
      <Container variant="review" pb="8">
        <VStack spacing="8">
          {reviews.map((review, i) => {
            const { name, title, reviewText } = review;
            return (
              <Review
                name={name}
                title={title}
                reviewText={reviewText}
                key={i}
              />
            );
          })}
        </VStack>
      </Container>
    </LayoutChakra>
  );
}

export default Reviews;

export const getStaticProps = async () => {
  return {
    props: {}
  };
};
