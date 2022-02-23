import React from "react";
import { Text } from "@chakra-ui/react";
import {
  Layout as PortfolioLayout,
  Grid as PortfolioGrid,
  Item as PortfolioGridItem
} from "../../components/portfolio";

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

type PortfolioProps = {};

function Portfolio({}: PortfolioProps) {
  return (
    <PortfolioLayout>
      <Text textStyle="portfolio.header">Portfolio</Text>
      <PortfolioGrid>
        {mockPortfolio.map((x, i) => (
          <PortfolioGridItem key={i} bg={x} />
        ))}
      </PortfolioGrid>
    </PortfolioLayout>
  );
}

export default Portfolio;

export const getStaticProps = async () => {
  return {
    props: {}
  };
};
