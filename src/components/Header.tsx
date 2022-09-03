import React, { useMemo, useState } from "react";
import {
  Box,
  Text,
  Flex,
  useColorMode,
  Button,
  Container as ChakraContainer,
  HStack,
  IconButton
} from "@chakra-ui/react";
import { miscLinks } from "../lib/homepageLinks";
import { MonoLinkFork } from "./MonoLink";
import { Breadcrumb, BreadcrumbProps } from "./Breadcrumb";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

type ColorModetoggleProps = {};

const ColorModetoggle = ({}: ColorModetoggleProps) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLightMode = useMemo(() => colorMode === "light", [colorMode]);
  const icon = isLightMode ? <SunIcon /> : <MoonIcon />;
  // const icon = isLightMode ? <HamburgerIcon /> : <CloseIcon/>

  return (
    <>
      <IconButton
        variant="base"
        aria-label="Toggle color mode"
        icon={icon}
        onClick={toggleColorMode}
      />
    </>
  );
};

type NavMenuToggleProps = {};

const NavMenuToggle = ({}: NavMenuToggleProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const icon = menuOpen ? <CloseIcon /> : <HamburgerIcon />;

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <IconButton
        variant="base"
        aria-label="Toggle color mode"
        icon={icon}
        onClick={toggleMenu}
      />
    </>
  );
};

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
              <HStack spacing="0">
                {/* <Button onClick={toggleColorMode} textStyle="h1">
                  {colorMode}
                </Button> */}
                <ColorModetoggle />
                <NavMenuToggle />
              </HStack>
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
