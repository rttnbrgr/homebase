// 1. Import `extendTheme`
import { extendTheme, ThemeConfig, TextProps } from "@chakra-ui/react";
import { createBreakpoints, mode, Styles } from "@chakra-ui/theme-tools";
import { styles as Review } from "../components/Review";
import { styles as Button } from "../components/Button";
import {
  fonts,
  fontSizes,
  baseTextStyles,
  rootIndexTextStyles,
  textStyles
} from "./typography";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false
};

const breakpoints = createBreakpoints({
  sm: "40em", // 640
  smedium: "48em", // 768
  md: "52em", // 832
  lg: "64em", // 1024
  xl: "80em", // 1280
  "2xl": "90em" // 1440
});

const styles: Styles = {
  global: props => ({
    body: {
      fontFamily: "default",
      bg: mode("bg", "onBg")(props),
      color: mode("onBg", "bg")(props),
      borderColor: mode("onBg", "bg")(props)
    }
    // "h1, h2, h3, h4": {
    //   ...baseTextStyles
    // }
  })
};

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  config,
  breakpoints,
  styles,
  colors: {
    bg: "white",
    onBg: "#0f1014",
    debugColor: "blue"
  },
  sizes: {
    "2xl": "42rem"
  },
  layerStyles: {
    debug: {
      bg: {
        base: "red.500",
        sm: "green.500",
        smedium: "teal.500",
        md: "purple.500",
        lg: "yellow.500",
        xl: "pink.500"
      }
    },
    reviewBorder: {
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "inherit"
    },
    reviewTheme: {
      default: {
        bg: "bg",
        color: "onBg",
        borderColor: "onBg"
      },
      alt: {
        bg: "onBg",
        color: "bg",
        borderColor: "bg"
      }
    },
    resetList: {
      listStyle: "none",
      margin: 0,
      padding: 0
    },
    resetLink: {
      textDecoration: "none",
      color: "inherit",
      fontSize: "inherit"
    }
  },
  fonts,
  fontSizes,
  textStyles: {
    ...textStyles,
    review: {
      header: {
        ...baseTextStyles,
        fontSize: { base: "1.5em", md: "4em" },
        fontWeight: 700,
        lineHeight: "1.333",
        textTransform: "uppercase",
        letterSpacing: "-0.5px"
      },
      avatarBox: {
        ...baseTextStyles,
        fontSize: "0.75em",
        lineHeight: "1.33333333"
      },
      text: {
        ...baseTextStyles,
        fontSize: "1em",
        lineHeight: "1.25"
      }
    },
    homeRoot: {
      ...rootIndexTextStyles
    },
    homeHeader: {
      display: "inline-block",
      px: "0.25rem"
    }
  },
  components: {
    Button,
    Link: {
      variants: {
        reviewButton: {
          fontSize: "xs", // copied from button,
          // fontSize: "inherit",
          textDecoration: "none",
          lineHeight: 1,
          _hover: {
            textDecoration: "none"
          }
        }
      }
    },
    Review,
    Container: {
      baseStyle: {
        // border: "1px solid green"
      },
      variants: {
        refactor: {
          // the width and padding are based on this
          textStyle: "homeRoot",
          px: "1.5rem",
          maxWidth: "30em"
          // boxShadow: "inset 0 0 0 4px green"
        },
        reviews: {
          maxW: "500px"
        },
        none: {
          maxW: "none"
        }
      }
    }
  }
});

export default theme;
