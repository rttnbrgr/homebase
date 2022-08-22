import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Meta from "../MetaRoot";
import theme from "../../theme";
import Footer from "../Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutChakra = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      <ChakraProvider theme={theme}>
        <Box minH="100vh" boxShadow="inset 0 0 0 4px pink">
          <main>{children}</main>
          <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
};

export { LayoutChakra };
