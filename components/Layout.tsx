import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Meta from "./MetaRoot";
import theme from "../theme";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
  title: string;
  hideHeader?: boolean;
};

const Layout = ({ children, title, hideHeader }: LayoutProps) => {
  return (
    <>
      <Meta />
      <ChakraProvider theme={theme}>
        <Box minH="100vh" boxShadow="inset 0 0 0 4px pink">
          {!hideHeader && <Header title={title} />}
          <main>{children}</main>
          <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
};

export { Layout };
