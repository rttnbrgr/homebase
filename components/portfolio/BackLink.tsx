import React from "react";
import { Box, Text } from "@chakra-ui/react";
import NextLink from "next/link";

type Props = {
  backLink: string;
};

const PortfolioBackLink = ({ backLink }: Props) => {
  return (
    <NextLink href={backLink}>
      <Box _hover={{ cursor: "pointer" }}>
        <Text textStyle="portfolio.header">←</Text>
      </Box>
    </NextLink>
  );
};

PortfolioBackLink.defaultProps = {
  backLink: "/portfolio"
};

export default PortfolioBackLink;
