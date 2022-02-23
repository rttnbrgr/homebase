import React, { memo } from "react";
import { AspectRatio, Box, BoxProps } from "@chakra-ui/react";
import NextLink, { LinkProps } from "next/link";
import PortfolioImage, { PortfolioImageProps } from "./Image";

const portfolioGridItemStyles: BoxProps = {
  _hover: {
    bg: "pink",
    cursor: "pointer"
  }
};

type Props = LinkProps & BoxProps & PortfolioImageProps & {};

const PortfolioGridItem = ({
  href,
  src,
  loader,
  alt,
  width,
  height,
  ...props
}: Props) => {
  const portfolioImageProps = {
    src,
    loader,
    alt,
    width,
    height
  };
  return (
    <NextLink href={href}>
      {/* just the hover styles */}
      <Box {...portfolioGridItemStyles} {...props}>
        <PortfolioImage {...portfolioImageProps} />
      </Box>
    </NextLink>
  );
};

PortfolioGridItem.defaultProps = {
  href: "/portfolio/1"
};

export default memo(PortfolioGridItem);
