import NextLink, { LinkProps as NextLinkProps } from "next/link";
import {
  BoxProps,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
  ListItem,
  Text,
  TextProps,
  useColorModeValue
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { SystemStyleFunction } from "@chakra-ui/theme-tools";

type BoxTextProps = TextProps;

/**
 * Over eager optimization
 */
const baseStyles: SystemStyleFunction = props => ({
  display: "inline-block",
  // can't use mode outside of the theme
  bg: mode("onBg", "bg")(props),
  color: mode("onbg", "onBg")(props),
  px: 2
});

// pre-org for moving it into a Chakra component
const BoxTextStyles = {
  baseStyles
};

const styles: BoxProps = {
  display: "inline-block",
  px: 2
};

// These can be overriden
const defaults: TextProps = {
  as: "h1",
  textStyle: "homeHeader"
};

const BoxText = ({ children, ...textProps }: BoxTextProps) => {
  const bg = useColorModeValue("onBg", "bg");
  const color = useColorModeValue("bg", "onBg");
  const colorModeStyles = {
    bg,
    color
  };

  return (
    <Text {...styles} {...defaults} {...colorModeStyles} {...textProps}>
      {children}
    </Text>
  );
};

export { BoxText };
