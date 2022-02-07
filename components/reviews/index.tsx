import React from "react";
import {
  VStack,
  Box,
  Text,
  Image,
  useMultiStyleConfig,
  Flex,
  useColorMode,
  Button
} from "@chakra-ui/react";
import { Review } from "../../lib/reviews";

type ReviewProps = Review & {
  reverse: boolean;
};

const Review = ({
  reviewText,
  avatar,
  name,
  title,
  reverse = false
}: ReviewProps) => {
  const variant = reverse ? "right" : "left";
  const styles = useMultiStyleConfig("Review", { variant });

  return (
    <VStack as="article" sx={styles.wrapper}>
      <Box __css={styles.review}>
        <Box __css={styles.reviewBox}>
          <Text as="p" textStyle="review.text">
            {reviewText}
          </Text>
        </Box>
      </Box>
      <Box __css={styles.reviewUser}>
        <Image src={avatar.src} alt={name} __css={styles.avatar} />

        <Flex sx={styles.meta}>
          <Text as="h2" textStyle="review.avatarBox">
            {name}
          </Text>
          <Text as="h3" textStyle="review.avatarBox">
            {title}
          </Text>
        </Flex>
      </Box>
    </VStack>
  );
};

// export default Review;
export { Review };
