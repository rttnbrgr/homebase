// 1. Import `extendTheme`
import { extendTheme, ThemeConfig, TextProps } from "@chakra-ui/react";
import { createBreakpoints, mode, Styles } from "@chakra-ui/theme-tools";
import Review from "../components/reviews/ReviewStyle";
import Button from "../components/reviews/ButtonStyle";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false
};

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em"
});

const fonts = {
  // default: '"Times New Roman", "Helvetica", sans-serif',
  default: '"Helvetica", sans-serif',
  debug: "monospace"
};

const baseTextStyles: TextProps = {
  margin: 0,
  padding: 0,
  lineHeight: 1,
  fontFamily: fonts.default,
  fontWeight: 700
};

const styles: Styles = {
  global: props => ({
    body: {
      fontFamily: "default",
      bg: mode("bg", "onBg")(props),
      color: mode("onBg", "bg")(props),
      borderColor: mode("onBg", "bg")(props)
    },
    "h1, h2, h3, h4": {
      ...baseTextStyles
    }
  })
};

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  config,
  breakpoints,
  styles,
  colors: {
    bg: "white",
    onBg: "black"
  },
  layerStyles: {
    debug: {
      bg: {
        base: "red.500",
        sm: "green.500",
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
    }
  },
  fonts,
  textStyles: {
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
    portfolio: {
      header: {
        ...baseTextStyles,
        fontSize: { base: "1.5em", md: "4em" },
        fontWeight: 700,
        lineHeight: "1.333",
        textTransform: "uppercase",
        letterSpacing: "-0.5px"
      },
      text: {
        ...baseTextStyles,
        fontSize: {
          base: "1em",
          sm: "1em",
          md: "1em",
          lg: "1em"
        },
        lineHeight: "1.25",
        maxW: {
          base: "400px",
          sm: "400px",
          md: "400px",
          lg: "400px"
        }
      }
    }
  },
  components: {
    Button,
    Link: {
      variants: {
        reviewButton: {
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
      variants: {
        reviews: {
          maxW: "500px"
        }
      }
    }
  }
});

export default theme;
