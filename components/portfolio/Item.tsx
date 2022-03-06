import React, { memo } from "react";
import { Box, BoxProps } from "@chakra-ui/react";
import NextLink, { LinkProps } from "next/link";
import PortfolioImage, { PortfolioImageProps } from "./Image";

const portfolioGridItemStyles: BoxProps = {
  _hover: {
    bg: "pink",
    cursor: "pointer"
  }
};

type Props = BoxProps &
  PortfolioImageProps & {
    slug?: string;
  };

const PortfolioGridItem = ({
  slug,
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

  const projectLink = `/portfolio/${slug}`;

  return (
    <NextLink href={projectLink}>
      <Box {...portfolioGridItemStyles} {...props}>
        <PortfolioImage {...portfolioImageProps} />
      </Box>
    </NextLink>
  );
};

export default memo(PortfolioGridItem);
