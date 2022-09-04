import React, { useMemo } from "react";
import {
  Box,
  Text,
  Flex,
  Container as ChakraContainer,
  useDisclosure,
  VStack,
  BoxProps
} from "@chakra-ui/react";
import { miscLinks } from "../lib/homepageLinks";
import { MonoLinkFork } from "./MonoLink";
import { Breadcrumb, BreadcrumbProps } from "./Breadcrumb";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { ColorModetoggle } from "./ColorModeToggle";
import { NavMenuToggle } from "./NavMenuToggle";

/**
 * Nav Menu
 */

const offset = "72px";

const MenuDrawerStyles: BoxProps = {
  position: "absolute",
  zIndex: 1,
  // Add watcher to manage this
  top: offset,
  right: 0,
  left: 0,
  // px: 4,
  px: "1.5rem",
  pr: 24,
  pt: 2,
  pb: 8,
  layerStyle: "debug",
  transition: "transform .3s ease"
};

function getMenuTransform(isOpen: boolean) {
  // const offset = "72px";
  return {
    transform: `translateY(${isOpen ? "0" : `calc((100% + ${offset}) * -1)`})`
  };
}

type NavMenuProps = {
  isOpen: boolean;
};

const NavMenu = ({ isOpen }: NavMenuProps) => {
  const menuTransform = useMemo(() => getMenuTransform(isOpen), [isOpen]);

  return (
    <Box {...MenuDrawerStyles} sx={menuTransform}>
      <VStack spacing="4" align="start">
        {miscLinks
          .filter(x => x.showInNav)
          .map(({ linkText, ...props }, j) => {
            return (
              <Text textStyle="homeRoot" lineHeight="1" key={j}>
                <MonoLinkFork key={j} {...props}>
                  {linkText}
                </MonoLinkFork>
              </Text>
            );
          })}
      </VStack>
    </Box>
  );
};

/**
 * Header
 */

const headerStyles: BoxProps = {
  position: "relative",
  zIndex: 1
};

type HeaderProps = BreadcrumbProps & {};

const Header = ({ title, isHome = false }: HeaderProps) => {
  // Menus
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuIcon = isOpen ? <CloseIcon /> : <HamburgerIcon />;
  const menuHandler = isOpen ? onClose : onOpen;

  return (
    <>
      {/* Nav Menu */}
      <NavMenu isOpen={isOpen} />

      {/* Header */}
      <Box as="header" layerStyle="debug" {...headerStyles}>
        <ChakraContainer variant="refactor" py="4">
          <Flex justifyContent="space-between" alignItems="center">
            {/* Breadcrumb */}
            <Breadcrumb title={title} isHome={isHome} />

            {/* Links */}
            <HStack spacing="6" align="center">
              <HStack
                spacing="4"
                align="start"
                display={{ base: "none", sm: "flex" }}>
                {miscLinks
                  .filter(x => x.showInNav)
                  .map(({ linkText, ...props }, j) => {
                    return (
                      <Text textStyle="h5" lineHeight="1" key={j}>
                        <MonoLinkFork key={j} {...props}>
                          {linkText}
                        </MonoLinkFork>
                      </Text>
                    );
                  })}
              </HStack>
              {/* Icon Stack */}
              <HStack spacing="0">
                <ColorModetoggle />
                <NavMenuToggle icon={menuIcon} onClick={menuHandler} />
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
