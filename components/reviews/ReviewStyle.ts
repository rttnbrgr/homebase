import { mode } from "@chakra-ui/theme-tools";
import type {
  SystemStyleObject,
  SystemStyleFunction
} from "@chakra-ui/theme-tools";

const baseStyle: SystemStyleFunction = props => {
  return {
    wrapper: {
      p: 4
    },
    review: {
      mb: 8
    },
    reviewBox: {
      bg: mode("onBg", "bg")(props),
      color: mode("bg", "onBg")(props),
      p: "1em",
      position: "relative",
      _after: {
        content: '""',
        position: "absolute",
        display: "inline-block",
        top: "100%",
        borderTop: "24px solid",
        borderTopColor: mode("onBg", "bg")(props)
      }
    },
    reviewUser: {
      display: "flex",
      mt: "0.5rem",
      // have to reset since TW reset sets this and beats the global styles
      borderColor: mode("onBg", "bg")(props)
      // debug
      // color: "pink.500"
    },
    avatar: {
      flex: "0 0 48px",
      width: "48px",
      height: "48px",
      layerStyle: "reviewBorder"
    },
    meta: {
      padding: "0 0.5em",
      justifyContent: "center",
      flexDirection: "column",
      layerStyle: "reviewBorder"
    }
  };
};

const reviewStyles = {
  // The parts of the component
  parts: ["wrapper", "review", "reviewBox", "reviewUser", "avatar", "meta"],
  baseStyle,
  variants: {
    left: {
      wrapper: {
        alignItems: "flex-start"
      },
      review: {
        ml: 4
      },
      reviewBox: {
        _after: {
          left: 0,
          borderRight: "24px solid transparent"
        }
      },
      reviewUser: {
        flexDirection: "row",
        textAlign: "left"
      },
      meta: {
        borderLeft: "none"
      }
    },
    right: {
      wrapper: {
        alignItems: "flex-end"
      },
      review: {
        mr: 4
      },
      reviewBox: {
        _after: {
          right: 0,
          borderLeft: "24px solid transparent"
        }
      },
      reviewUser: {
        flexDirection: "row-reverse",
        textAlign: "right"
      },
      meta: {
        borderRight: "none"
      }
    }
  },
  // The default `size` or `variant` values
  defaultProps: {
    variant: "left"
  }
};

export default reviewStyles;
