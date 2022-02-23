import React from "react";
import { AspectRatio, Box, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { Layout, Grid } from "../../components/portfolio";

const mockPortfolio = ["orange.300", "teal.500", "orange.500", "orange.700"];

type PortfolioProjectProps = {};

function PortfolioProject({}: PortfolioProjectProps) {
  return (
    <Layout>
      {/* <NextLink href="/portfolio">
        <Text textStyle="portfolio.header">← Portfolio Item</Text>
      </NextLink> */}
      <NextLink href="/portfolio">
        <Text textStyle="portfolio.header">← Display </Text>
      </NextLink>

      <Text textStyle="portfolio.text">
        I helped rebuild the entire Sprinklr Display platform from the ground
        up. The platform is used for both command centers (internal facing) and
        social displays (think IG posts on the jumbotron at your favorite
        sporting event).
      </Text>
      <Text textStyle="portfolio.text">
        I helped architect the entire frontend in modern React, Typescript, and
        Mobx. I also built a number of our data visualization modules which were
        powered by D3.{" "}
      </Text>
      <Text textStyle="portfolio.text">
        I design and implemented a variety of visualizations based around social
        post data. Our visualizations helped showcase the content and surface
        insightful engagement metrics and trends.
      </Text>
      <Grid>
        {mockPortfolio.map((x, i) => (
          <NextLink href="/portfolio/1" key={i}>
            <AspectRatio ratio={16 / 9} key={i}>
              <Box
                bg={x}
                h="100px"
                _hover={{ bg: "pink", cursor: "pointer" }}
              />
            </AspectRatio>
          </NextLink>
        ))}
      </Grid>
    </Layout>
  );
}

export default PortfolioProject;

export async function getStaticProps(context) {
  // console.log("context", context);
  return {
    props: {} // will be passed to the page component as props
  };
}

export const getStaticPaths = async () => {
  return {
    paths: ["/portfolio/1"],
    fallback: false
  };
};
