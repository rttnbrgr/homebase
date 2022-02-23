import React from "react";
import Head from "next/head";
import Meta from "../../components/meta";
import { AspectRatio, Box, BoxProps, Text } from "@chakra-ui/react";
import {
  Layout,
  Grid,
  Item as PortfolioGridItem
} from "../../components/portfolio";
import { Url } from "url";

const mockPortfolio = [
  "red.100",
  "red.200",
  "red.300",
  "red.400",
  "red.500",
  "red.600",
  "red.700",
  "red.800",
  "red.900",
  "teal.100",
  "teal.200",
  "teal.300",
  "teal.400",
  "teal.500",
  "teal.600",
  "teal.700",
  "teal.800",
  "teal.900"
];

// type Props = {
//   title: string;
//   children?: React.ReactNode;
// };

// const PorfolioHeader = ({}: Props) => (
//   return (
//     <>
//     <Text textStyle="portfolio.header">Portfolio</Text>
//     {false && 'bar'}
//     </>
//   )
// )

type PortfolioProps = {};

function Portfolio({}: PortfolioProps) {
  return (
    <Layout>
      <Text textStyle="portfolio.header">Portfolio</Text>
      <Grid>
        {mockPortfolio.map((x, i) => (
          <PortfolioGridItem key={i} bg={x} />
        ))}
      </Grid>
    </Layout>
  );
}

export default Portfolio;

export const getStaticProps = async () => {
  return {
    props: {}
  };
};
