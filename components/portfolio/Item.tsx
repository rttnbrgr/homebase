import React from "react";
import { AspectRatio, Box, BoxProps } from "@chakra-ui/react";
import NextLink, { LinkProps } from "next/link";

const portfolioGridItemStyles: BoxProps = {
  _hover: {
    bg: "pink",
    cursor: "pointer"
  }
};

type Props = LinkProps & BoxProps & {};

const PortfolioGridItem = ({ href, ...props }: Props) => {
  return (
    <NextLink href={href}>
      <AspectRatio ratio={16 / 9}>
        <Box {...portfolioGridItemStyles} {...props} />
      </AspectRatio>
    </NextLink>
  );
};

PortfolioGridItem.defaultProps = {
  href: "/portfolio/1"
};

export default PortfolioGridItem;
