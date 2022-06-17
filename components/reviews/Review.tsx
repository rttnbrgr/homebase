import React from "react";
import { VStack, Box, Text, useStyleConfig } from "@chakra-ui/react";
import type { SystemStyleFunction } from "@chakra-ui/theme-tools";
import { Review } from "../../lib/reviews";

const baseStyle: SystemStyleFunction = props => {
  return {
    maxWidth: "400px"
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
      <VStack spacing="3" align="start">
        <Text textStyle="p3" fontStyle={"italic"}>
          {reviewText}
        </Text>
        <VStack spacing="1" align="start">
          <Text textStyle="h6">{name}</Text>
          <Text textStyle="l2" fontSize="sm">
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
