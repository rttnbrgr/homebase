import React from "react";
import {
  HStack,
  Text,
  VStack,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";

type ProjectLink = {
  displayText: string;
  url: string;
};

export type ProjectProps = {
  title: string;
  description: string;
  links: ProjectLink[];
};

function Project({ title, description, links }: ProjectProps) {
  return (
    <VStack bg="" maxW="500px" spacing="4" align="start">
      <Text
        textStyle="review.text"
        p="2"
        layerStyle="reviewTheme.alt"
        display="inline-flex"
      >
        {title}
      </Text>
      <Text textStyle="review.text">{description}</Text>
      {links && (
        <HStack spacing={2}>
          {links.map(({ displayText, url }, i) => (
            <ChakraLink variant="reviewButton" key={i} href={url} isExternal>
              <Button>{displayText}</Button>
            </ChakraLink>
          ))}
        </HStack>
      )}
    </VStack>
  );
}

export { Project };
