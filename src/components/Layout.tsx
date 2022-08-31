import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import Meta from "./MetaRoot";
import theme from "../theme";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  hideHeader?: boolean;
  isHome?: boolean;
};

const Layout = ({ children, title, hideHeader, isHome }: LayoutProps) => {
  return (
    <>
      <Meta />
      <ChakraProvider theme={theme}>
        <Box minH="100vh">
          {!hideHeader && <Header title={title} isHome={isHome} />}
          <main>{children}</main>
          <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
};

export { Layout };
