import React from "react";
import { VStack, Box, Text, useStyleConfig } from "@chakra-ui/react";
import { Review } from "../../lib/reviews";

type ReviewNewProps = Omit<Review, "avatar">;

const ReviewNew = ({ reviewText, name, title }: ReviewNewProps) => {
  const styles = useStyleConfig("ReviewNew", {});

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

export { ReviewNew };
