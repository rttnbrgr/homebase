import React from "react";
import { VStack, Box, Text, useStyleConfig } from "@chakra-ui/react";
import type { SystemStyleFunction } from "@chakra-ui/theme-tools";
import { Review } from "../../lib/reviews";

const baseStyle: SystemStyleFunction = props => {
  return {
    maxWidth: { base: "400px", smedium: "600px" }
  };
};

const reviewStyles = {
  baseStyle,
  variants: {},
  defaultProps: {}
};

type ReviewProps = Omit<Review, "avatar">;

const Review = ({ reviewText, name, title }: ReviewProps) => {
  const styles = useStyleConfig("Review", {});

  return (
    <Box __css={styles}>
      <VStack spacing={{ base: "3", smedium: "5" }} align="start">
        <Text textStyle={{ base: "p3", smedium: "p2" }} fontStyle={"italic"}>
          {reviewText}
        </Text>
        <VStack spacing={{ base: "1", smedium: "2" }} align="start">
          <Text textStyle={{ base: "h6", smedium: "h5" }}>{name}</Text>
          <Text
            textStyle={{ base: "l2" }}
            fontSize={{ base: "sm", smedium: "initial" }}
          >
            {title}
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};

const styles = reviewStyles;

export { Review, reviewStyles, styles };
export type { ReviewProps };
