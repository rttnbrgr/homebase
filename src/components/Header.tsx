import React from "react";
import {
  Box,
  Text,
  Flex,
  useColorMode,
  Button,
  Container as ChakraContainer,
  HStack
} from "@chakra-ui/react";
import { miscLinks } from "../lib/homepageLinks";
import { MonoLinkFork } from "./MonoLink";
import { Breadcrumb, BreadcrumbProps } from "./Breadcrumb";

type HeaderProps = BreadcrumbProps & {};

const Header = ({ title, isHome = false }: HeaderProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box as="header" layerStyle="">
        <ChakraContainer variant="refactor" py="4">
          <Flex justifyContent="space-between" alignItems="center">
            {/* Breadcrumb */}
            <Breadcrumb title={title} isHome={isHome} />

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
    </>
  );
};

Header.defaultProps = {
  title: "Testimonials"
};

export default Header;
