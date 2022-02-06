import React from "react";
import styled from "@emotion/styled";
import {
  VStack,
  BoxProps,
  Box,
  TextProps,
  Text,
  Image,
  ImageProps
} from "@chakra-ui/react";

// const StyledReview = styled.article`
const reviewStyles: BoxProps = {
  margin: "0 0 32px 16px"
};

const reviewTextStyle: TextProps = {
  fontFamily: '"Helvetica", sans-serif',
  fontSize: "1em",
  lineHeight: "1.25",
  color: "bg"
};

const reviewBoxStyles: BoxProps = {
  bg: "onBg",
  p: "1em",
  position: "relative",
  _after: {
    content: '""',
    position: "absolute",
    display: "inline-block",
    left: 0,
    top: "100%",
    borderTop: "24px solid",
    borderTopColor: "onBg",
    borderRight: "24px solid transparent"
  }
};

//   /* Reverse */
//   ${({ reverse, theme }) =>
//     reverse &&
//     css`
//       margin-right: 1em;
//       margin-left: 0;
//       .box {
//         &::after {
//           content: "";
//           position: absolute;
//           display: inline-block;
//           left: initial;
//           right: 0;
//           border-right: none;
//           right: 0;
//           border-left: 24px solid transparent;
//         }
//       }
//     `};

const userStyles: BoxProps = {
  display: "flex",
  mt: "0.5rem"
};

const avatarStyles: ImageProps = {
  flex: "0 0 48px",
  width: "48px",
  height: "48px",
  border: "2px solid transparent",
  borderColor: "onBg"
};

const metaStyles: BoxProps = {
  padding: "0 0.5em",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  border: "2px solid transparent",
  borderColor: "onBg",
  color: "onBg",
  borderLeft: "none",
  background: "bg"
};

const sharedTextStyles: TextProps = {
  fontFamily: '"Helvetica", sans-serif',
  fontSize: "0.75em",
  lineHeight: "1.33333333"
};

//   /* Reverse */
//   ${({ reverse, theme }) =>
//     reverse &&
//     css`
//       flex-direction: row-reverse;
//       text-align: right;

//       .meta {
//         border: 2px solid ${theme.colors.text};
//         border-right: none;
//       }
//     `};

type ReviewProps = {
  name: string;
  title: string;
  avatar: StaticImageData;
  fullText?: string;
  reviewText: string;
  //
  reverse?: any;
};

const Review = ({
  reviewText,
  avatar,
  name,
  title,
  reverse = false
}: ReviewProps) => (
  <VStack padding="4" as="article" align="left">
    <Box {...reviewStyles}>
      <Box {...reviewBoxStyles}>
        <Text {...reviewTextStyle} as="p">
          {reviewText}
        </Text>
      </Box>
    </Box>
    <Box {...userStyles}>
      <Image src={avatar.src} alt="profile" {...avatarStyles} />
      <Box {...metaStyles}>
        <Text as="h2" {...sharedTextStyles}>
          {name}
        </Text>
        <Text as="h3" {...sharedTextStyles}>
          {title}
        </Text>
      </Box>
      {!!reverse && <Text {...sharedTextStyles}>reverse</Text>}
    </Box>
  </VStack>
);

// export default Review;
export { Review };
