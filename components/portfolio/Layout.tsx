import React from "react";
import {
  AspectRatio,
  Box,
  ChakraProvider,
  Container,
  ContainerProps,
  ResponsiveValue
} from "@chakra-ui/react";
import theme from "../../theme";
import PortfolioMeta from "../../components/portfolio/Meta";
import { responsivePad } from "./utils";

const containerStyles: ContainerProps = {
  px: responsivePad,
  pb: 8,
  maxW: {
    base: "1600px"
  }
};

type Props = {
  title?: string;
  children?: React.ReactNode;
};

const PortfolioLayout = ({ title, children }: Props) => {
  return (
    <>
      <PortfolioMeta title={title} />
      <ChakraProvider theme={theme}>
        <Box minH="100vh" layerStyle="debug" pt="4">
          <Box bg="white">
            <Container {...containerStyles}>{children}</Container>
          </Box>
        </Box>
      </ChakraProvider>
    </>
  );
};

export default PortfolioLayout;
