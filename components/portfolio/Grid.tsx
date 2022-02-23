import React from "react";
import { SimpleGrid, SimpleGridProps } from "@chakra-ui/react";
import { responsivePad } from "./utils";

const gridStyles: SimpleGridProps = {
  columns: {
    base: 1,
    sm: 2,
    lg: 3,
    xl: 4
  },
  columnGap: responsivePad,
  rowGap: responsivePad
};

type Props = {
  children: React.ReactNode;
};

const PortfolioGrid = ({ children }: Props) => {
  return <SimpleGrid {...gridStyles}>{children}</SimpleGrid>;
};

export default PortfolioGrid;
