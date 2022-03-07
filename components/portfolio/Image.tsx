import React from "react";
import { AspectRatio, BoxProps, Text } from "@chakra-ui/react";
import NextImage, { ImageProps } from "next/image";

export type PortfolioImageProps = Omit<ImageProps, "src"> & {
  src?: ImageProps["src"];
  bg?: BoxProps["bg"];
};

const ratioOfThumbs = 4 / 3;

const PortfolioImage = ({
  src,
  loader,
  alt,
  width,
  height,
  bg
}: PortfolioImageProps) => {
  return (
    <AspectRatio ratio={ratioOfThumbs} bg={src ? "" : bg}>
      {src ? (
        <NextImage
          loader={loader}
          src={src}
          alt={alt}
          width={width}
          height={height}
          layout="fill"
          objectFit="cover"
        />
      ) : (
        <Text>{alt ? alt : "No IMG"}</Text>
      )}
    </AspectRatio>
  );
};

PortfolioImage.defaultProps = {
  // src: photo,
  alt: "Picture of the author"
};

export default PortfolioImage;
