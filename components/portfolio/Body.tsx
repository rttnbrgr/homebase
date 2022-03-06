import React from "react";
import { Box, Text } from "@chakra-ui/react";

type Props = {
  content?: string;
  title?: string;
};

const PortfolioBody = ({ content, title }: Props) => {
  return (
    <>
      {title && <Text textStyle="portfolio.header">{title}</Text>}
      {content && (
        <Box
          textStyle="portfolio.text"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </>
  );
};

export default PortfolioBody;
