import { ChakraProvider } from "@chakra-ui/react";
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
        <div className="min-h-screen flex justify-center items-start">
          <main>{children}</main>
        </div>
        <Footer />
      </ChakraProvider>
    </>
  );
};

export { LayoutChakra };
