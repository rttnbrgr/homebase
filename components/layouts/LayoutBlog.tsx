import Alert from "../blog/alert";
import Footer from "../blog/footer";
import Meta from "../meta";
import { ChakraProvider } from "@chakra-ui/react";
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
        <div className="min-h-screen">
          <Alert preview={preview} />
          <main>{children}</main>
        </div>
      </ChakraProvider>
      <Footer />
    </>
  );
};

export { LayoutBlog };
