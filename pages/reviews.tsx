import React from "react";
import Head from "next/head";
import { Container } from "@chakra-ui/react";
import reviews from "../lib/reviews";
import { Review } from "../components/reviews";
import Header from "../components/reviews/Header";
import { LayoutChakra } from "../components/layouts";

type ReviewProps = {};

function Reviews({}: ReviewProps) {
  return (
    <LayoutChakra>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>REVIEWS | R T T N B R G R</title>
      </Head>

      <Header />
      <Container variant="review" pb="8">
        {reviews.map((review, i) => {
          const { name, title, avatar, reviewText } = review;
          const reverseVal = !!(i % 2);
          return (
            <Review
              name={name}
              title={title}
              avatar={avatar}
              reverse={reverseVal}
              reviewText={reviewText}
              key={i}
            />
          );
        })}
      </Container>
    </LayoutChakra>
  );
}

export default Reviews;

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
