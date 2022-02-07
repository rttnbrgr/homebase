import React from "react";
import NextLink from "next/link";
import {
  BoxProps,
  Text,
  Link as ChakraLink,
  Flex,
  useColorMode,
  Button
} from "@chakra-ui/react";

const headerStyles: BoxProps = {
  justifyContent: {
    base: "space-between",
    sm: "center"
  },
  alignItems: "center",
  px: 4,
  py: 2
};

type HeaderProps = {};

const Header = (props: HeaderProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex {...headerStyles}>
      <NextLink href="/" passHref>
        <ChakraLink variant="reviewButton">
          <Button>Home</Button>
        </ChakraLink>
      </NextLink>
      <Text textStyle="review.header" px={{ base: 0, sm: 4, md: 8 }}>
        Testimonials
      </Text>
      <Button onClick={toggleColorMode}>{colorMode}</Button>
    </Flex>
  );
};

export default Header;
