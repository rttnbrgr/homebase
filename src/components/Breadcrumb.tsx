import React from "react";
import NextLink from "next/link";
import { Text, Link as ChakraLink, HStack } from "@chakra-ui/react";
import { BoxText } from "./BoxText";

export type BreadcrumbProps = {
  title?: string;
  isHome?: boolean;
};

const Breadcrumb = ({ title, isHome }: BreadcrumbProps) => {
  return (
    <HStack>
      <BoxText as="h1">
        <NextLink href="/" passHref>
          <ChakraLink layerStyle="resetLink">
            {isHome ? "@rttnbrgr" : "~"}
          </ChakraLink>
        </NextLink>
      </BoxText>

      {!isHome && (
        <>
          <Text>/</Text>
          <Text>{title}</Text>
        </>
      )}
    </HStack>
  );
};

export { Breadcrumb };
