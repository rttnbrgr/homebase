import React, { useState } from "react";
import Head from "next/head";
import Meta from "../components/meta";
import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  ChakraProvider,
  Text,
  Container,
  TextProps,
  Flex
} from "@chakra-ui/react";
import theme from "../theme";
import reviews from "../lib/reviews";
import { Review } from "../components/reviews";

const headerStyles: BoxProps = {
  justifyContent: {
    base: "space-between",
    sm: "center"
  },
  alignItems: "center",
  px: 4,
  py: 2
};

type ReviewProps = {};

function Reviews({}: ReviewProps) {
  const [currentTheme, setTheme] = useState("light");

  const toggleTheme = () => {
    console.log("currentTheme2: ", currentTheme);
    if (currentTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

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
        {/* <Box layerStyle="debug" minH="100vh"> */}
        <Box minH="100vh">
          <Flex {...headerStyles}>
            <Button>Home</Button>
            <Text textStyle="review.header" px={{ base: 0, sm: 4 }}>
              Testimonials
            </Text>
            <Button onClick={() => toggleTheme()}>{currentTheme}</Button>
          </Flex>
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
