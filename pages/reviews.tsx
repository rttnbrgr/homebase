import React from "react";
import Head from "next/head";
import Meta from "../components/meta";
import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import theme from "../theme";
import reviews from "../lib/reviews";
import { Review } from "../components/reviews";
import Header from "../components/reviews/Header";

type ReviewProps = {};

function Reviews({}: ReviewProps) {
  return (
    <>
      <Meta />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>REVIEWS | R T T N B R G R</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Box minH="100vh">
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
        </Box>
      </ChakraProvider>
    </>
  );
}

export default Reviews;

export const getStaticProps = async () => {
  return {
    props: {}
  };
};
