// 1. Import `extendTheme`
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

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

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  config,
  breakpoints,
  styles: {
    global: {
      "h1, h2, h3, h4": {
        margin: 0,
        padding: 0,
        fontFamily: "sans-serif",
        lineHeight: 1
      }
    }
  },
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
    }
  },
  components: {
    Button: {
      defaultProps: {
        variant: "outline"
      }
    }
  }
});

export default theme;
