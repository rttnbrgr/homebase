import Footer from "../Footer";
import Meta from "../MetaRoot";
import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const LayoutBlog = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <ChakraProvider theme={theme}>
        <Box minH="100vh" boxShadow="inset 0 0 0 4px green">
          <main>
            <Footer />
            {children}
          </main>
          <Footer />
        </Box>
      </ChakraProvider>
    </>
  );
};

export { LayoutBlog };
