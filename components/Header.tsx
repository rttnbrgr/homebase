import React from "react";
import NextLink from "next/link";
import {
  Box,
  BoxProps,
  Text,
  Link as ChakraLink,
  Flex,
  useColorMode,
  Button,
  TextProps,
  Container as ChakraContainer,
  HStack,
  VStack,
  UnorderedList,
  Spacer
} from "@chakra-ui/react";
import { miscLinks, linkLists } from "../lib/homepageLinks";
import { MonoLink, MonoLinkFork } from "./MonoLink";
import { MonoLinkList } from "./MonoLinkList";

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
  isHome?: boolean;
};

const Header = ({ title, isHome = false }: HeaderProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box as="header" layerStyle="debug">
        <ChakraContainer variant="refactor" py="4">
          <Flex justifyContent="space-between" alignItems="center">
            {/* Breadcrumb */}
            <HStack>
              <Text as="h1" textStyle="homeHeader" px="2">
                <NextLink href="/" passHref>
                  <ChakraLink
                    layerStyle="resetLink"
                    // Fix the decoration
                    // textDecoration={{ _hover: "none" }}
                  >
                    {isHome ? "@rttnbrgr" : "~"}
                  </ChakraLink>
                </NextLink>
              </Text>

              {!isHome && (
                <>
                  <Text>/</Text>
                  <Text>{title}</Text>
                </>
              )}
            </HStack>

            {/* Links */}
            <HStack spacing="6" align="start">
              <HStack
                spacing="4"
                align="start"
                display={{ base: "none", sm: "flex" }}>
                {miscLinks.map(({ linkText, ...props }, j) => {
                  // Selectively hide nav
                  if (linkText === "Fullstack Design") {
                    return null;
                  }
                  return (
                    <Text textStyle="h5" lineHeight="1" key={j}>
                      <MonoLinkFork key={j} {...props}>
                        {linkText}
                      </MonoLinkFork>
                    </Text>
                  );
                })}
              </HStack>
              <Button onClick={toggleColorMode} textStyle="h1">
                {colorMode}
              </Button>
            </HStack>
          </Flex>
        </ChakraContainer>
      </Box>
      {/* Old */}
      {/* <Flex {...headerStyles} layerStyle="debug">
        <NextLink href="/" passHref>
          <ChakraLink variant="reviewButton">
            <Button>Home</Button>
          </ChakraLink>
        </NextLink>
        <Text {...headerTextStyles}>{title}</Text>
        <Button onClick={toggleColorMode}>{colorMode}</Button>
      </Flex> */}
    </>
  );
};

Header.defaultProps = {
  title: "Testimonials"
};

export default Header;
