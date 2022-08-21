import { SystemStyleObjectRecord, TextProps } from "@chakra-ui/react";

const fonts = {
  default: '"Helvetica Neue", sans-serif',
  debug: "monospace"
};

const fontSizes = {
  sm: "0.75rem", // 12
  md: "1.0rem", // 16
  lg: "1.25rem", // 20
  xl: "1.5rem", // 24
  "2xl": "1.75rem", // 28
  "3xl": "2.5rem", // 40
  "4xl": "3.25rem", // 52
  "5xl": "4.25rem", // 68
  "6xl": "5.5rem" // 88
};

const baseTextStyles: TextProps = {
  margin: 0,
  padding: 0,
  lineHeight: 1,
  fontFamily: fonts.default,
  fontWeight: 700
};

const rootIndexTextStyles = {
  fontSize: {
    // base: "1rem"
    base: "1.5rem",
    smedium: "2.5rem",
    "2xl": "3.25rem"
  },
  fontFamily: "default",
  color: "onBg",
  lineHeight: "1.2",
  fontWeight: 700,
  fontStyle: "normal",
  letterSpacing: "-0.7px"
};

const headings = {
  // 88/104
  jumbo: {
    fontSize: ["6xl"],
    fontWeight: "bold",
    // lineHeight: "6.5rem",
    // letterSpacing: "-0.0225em",
    lineHeight: "5.75rem",
    letterSpacing: "-0.035em"
  },

  // 68/80
  h1: {
    fontSize: ["5xl"],
    fontWeight: "700",
    lineHeight: "5rem",
    letterSpacing: "-0.02em"
  },

  // 52/60
  h2: {
    fontSize: ["4xl"],
    fontWeight: "700",
    lineHeight: "3.75rem",
    letterSpacing: "-0.0175em"
  },

  // 40,48
  h3: {
    fontSize: ["3xl"],
    fontWeight: "700",
    lineHeight: "3rem",
    letterSpacing: "-0.0175em"
  },

  // 28/32
  h4: {
    fontSize: ["2xl"],
    fontWeight: "500",
    lineHeight: "2rem",
    letterSpacing: "-0.015em"
  },
  // edit for the blog
  h4Fork: {
    fontSize: ["32px"],
    fontWeight: "400",
    lineHeight: "36px",
    letterSpacing: "-0.015em"
  },

  // 20/24
  h5: {
    fontSize: ["lg"],
    fontWeight: "500",
    lineHeight: "1.5rem",
    letterSpacing: "-0.0125em"
  },

  // 16/20
  h6: {
    fontSize: ["md"],
    fontWeight: "500",
    lineHeight: "1.25rem",
    letterSpacing: "-0.0125em"
  }
};

const paragraphs = {
  // 24/36
  p1: {
    fontSize: ["xl"],
    fontWeight: "400",
    lineHeight: "2.25rem"
  },

  // 20/32
  p2: {
    fontSize: ["lg"],
    fontWeight: "400",
    lineHeight: "2rem"
  },

  // 16/24
  p3: {
    fontSize: ["md"],
    fontWeight: "400",
    lineHeight: "1.5rem"
  },

  // 12/20
  p4: {
    fontSize: ["sm"],
    fontWeight: "400",
    lineHeight: "1.25rem"
  }
};

const labels = {
  // 20/100%
  l1: {
    fontSize: ["lg"],
    fontWeight: "400",
    lineHeight: "1",
    letterSpacing: "0.05em",
    textTransform: "uppercase"
  },

  // 16/100%
  l2: {
    fontSize: ["md"],
    fontWeight: "400",
    lineHeight: "1",
    letterSpacing: "0.05em",
    textTransform: "uppercase"
  }
};

const buttons = {
  // 16/100%
  b1: {
    fontSize: ["md"],
    fontWeight: "400",
    lineHeight: "1"
  },

  // 12/100
  b2: {
    fontSize: ["md"],
    fontWeight: "400",
    lineHeight: "1"
  }
};

// type textStyles = [key: string];
// [key: ThemeTypings["textStyles"]]
// const textStyles: [key: string] = {
const textStyles: SystemStyleObjectRecord = {
  ...headings,
  ...paragraphs,
  ...labels,
  ...buttons
};

export { fonts, fontSizes, baseTextStyles, rootIndexTextStyles, textStyles };
