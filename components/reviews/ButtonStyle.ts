import { mode } from "@chakra-ui/theme-tools";
import type { SystemStyleFunction } from "@chakra-ui/theme-tools";

const variantReviewOutline: SystemStyleFunction = props => ({
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: mode("onBg", "bg")(props),
  borderRadius: "none",
  color: mode("onBg", "bg")(props),
  py: 0,
  px: 2,

  height: "2em",
  // textStyle avatarBox + updates + padding
  fontFamily: "default",
  fontWeight: 700,
  fontSize: "xs",
  lineHeight: "1",
  textTransform: "uppercase",
  textDecoration: "none",

  _hover: {
    textDecoration: "none"
  },
  _focus: {
    outline: "none"
  }
});

const buttonStyles = {
  variants: {
    reviewOutline: variantReviewOutline
  },
  defaultProps: {
    variant: "reviewOutline"
  }
};

export default buttonStyles;
