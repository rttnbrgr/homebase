import { mode } from "@chakra-ui/theme-tools";
import type { SystemStyleFunction } from "@chakra-ui/theme-tools";
import { textStyles } from "../theme/typography";

const variantReviewOutline: SystemStyleFunction = props => ({
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: mode("onBg", "bg")(props),
  borderRadius: "none",
  color: mode("onBg", "bg")(props),
  py: 0,
  px: 2,

  height: "2em",
  // textStyles key not supported
  ...textStyles.bOutline,
  textDecoration: "none",

  _hover: {
    textDecoration: "none"
  },
  _focus: {
    outline: "none"
  }
});

const styles = {
  variants: {
    reviewOutline: variantReviewOutline
  },
  defaultProps: {
    variant: "reviewOutline"
  }
};

export { styles };
