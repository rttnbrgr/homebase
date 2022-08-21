import React from "react";
import NextLink from "next/link";
import {
  BoxProps,
  Text,
  Link as ChakraLink,
  Flex,
  useColorMode,
  Button,
  TextProps
} from "@chakra-ui/react";

const headerStyles: BoxProps = {
  justifyContent: {
    base: "space-between",
    md: "center"
  },
  alignItems: "center",
  px: 4,
  py: { base: 2, md: 4 }
};

const headerTextStyles: TextProps = {
  // maxWidth: "500px", // repalce with thme var
  textAlign: "center",
  lineHeight: "1",
  px: { base: 0, sm: 4, md: 8 },
  textStyle: "review.header"
};

type HeaderProps = {
  title: string;
};

const Header = ({ title = "Testimonials" }: HeaderProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex {...headerStyles}>
      <NextLink href="/" passHref>
        <ChakraLink variant="reviewButton">
          <Button>Home</Button>
        </ChakraLink>
      </NextLink>
      <Text {...headerTextStyles}>{title}</Text>
      <Button onClick={toggleColorMode}>{colorMode}</Button>
    </Flex>
  );
};

Header.defaultProps = {
  title: "Testimonials"
};

export default Header;
