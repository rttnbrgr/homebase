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
  TextProps
} from "@chakra-ui/react";
import theme from "../theme";
import reviews from "../lib/reviews";
import { Review } from "../components/reviews";

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutFork = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <Head>
        {/* do I need these? */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>R T T N B R G R | 🤢🍔</title>
      </Head>
      <div className="min-h-screen flex justify-center items-center">
        <main>{children}</main>
      </div>
    </>
  );
};

const headerStyles: BoxProps = {
  backgroundColor: "bg",
  textAlign: "center",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 1em"
};

// export const StyledButton = styled.button`
// `;

const buttonStyles: ButtonProps = {
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "onBg",
  borderRadius: "none",
  backgroundColor: "bg",
  color: "onBg",
  padding: "0 8px",
  height: "2em",
  fontSize: "0.75rem",
  lineHeight: "1",
  textTransform: "uppercase",
  fontFamily: "inherit",
  fontWeight: "inherit",
  _focus: {
    outline: "none"
  },
  /* link styles */
  textDecoration: "none"
  // width: "3.5rem"
};

const headerTextStyle: TextProps = {
  // base
  margin: 0,
  padding: 0,
  fontFamily: "sans-serif",
  lineHeight: 1,
  //
  color: "onBg",
  fontSize: { base: "1.5em", md: "4em" },
  lineHeight: "1.3333333333",
  padding: {
    base: "0.83333333333em 0",
    md: "0 1em"
  },
  textTransform: "uppercase",
  letterSpacing: "-0.5px"
};

const appHeroStyles: BoxProps = {
  backgroundColor: "bg",
  // color: "onBg",
  color: "red",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start"
  // color: "white"
};

const reviewColumnStyles: BoxProps = {
  mx: "auto",
  p: "1em",
  pb: "3em",
  maxWidth: "500px"
};

type ReviewProps = {};

// function Reviews({ Component, pageProps }: ReviewProps) {
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
    <ChakraProvider theme={theme}>
      <Box layerStyle="debug">
        <LayoutFork>
          <Box {...headerStyles}>
            <Button>Home</Button>
            <Text {...headerTextStyle}>Testimonials</Text>
            <Button {...buttonStyles} onClick={() => toggleTheme()}>
              {currentTheme}
            </Button>
          </Box>
          <Box {...appHeroStyles}>
            <Box {...reviewColumnStyles}>
              {reviews.map((review, i) => {
                const { name, title, avatar, reviewText } = review;
                return (
                  <Review
                    name={name}
                    title={title}
                    avatar={avatar}
                    reverse={i % 2}
                    reviewText={reviewText}
                    key={i}
                  />
                );
              })}
            </Box>
          </Box>
        </LayoutFork>
      </Box>
    </ChakraProvider>
  );
}

export default Reviews;

export const getStaticProps = async () => {
  return {
    props: {}
  };
};
