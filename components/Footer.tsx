import { REPO_PATH } from "../lib/constants";
import {
  Box,
  Container as ChakraContainer,
  Text,
  Link as ChakraLink
} from "@chakra-ui/react";
import NextLink from "next/link";

const Footer = () => {
  return (
    <>
      <Box as="footer" layerStyle="" py="8">
        <ChakraContainer bg="transparent" variant="refactor">
          <Text as="h3">Statically Generated with Next.js.</Text>
          <Text>
            <ChakraLink href={REPO_PATH} layerStyle="resetLink" isExternal>
              View on GitHub
            </ChakraLink>
          </Text>
        </ChakraContainer>
      </Box>
    </>
  );
};

export default Footer;
