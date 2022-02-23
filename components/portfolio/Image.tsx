import React from "react";
import { AspectRatio, BoxProps, Text } from "@chakra-ui/react";
import NextImage, { ImageProps } from "next/image";
import photo from "../../public/assets/portfolio/sample.jpeg";

export type PortfolioImageProps = Omit<ImageProps, "src"> & {
  src?: ImageProps["src"];
  bg?: BoxProps["bg"];
};

const PortfolioImage = ({
  src,
  loader,
  alt,
  width,
  height,
  bg
}: PortfolioImageProps) => {
  return (
    <AspectRatio ratio={16 / 9} bg={src ? "" : bg}>
      {src ? (
        <NextImage
          loader={loader}
          src={src}
          alt={alt}
          width={width}
          height={height}
          layout="fill"
        />
      ) : (
        <Text>No IMG</Text>
      )}
    </AspectRatio>
  );
};

PortfolioImage.defaultProps = {
  // src: photo,
  alt: "Picture of the author"
};

export default PortfolioImage;
