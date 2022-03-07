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
          sx={{
            "* + *": {
              marginTop: "1rem"
            },
            h3: {
              fontSize: "1.25rem"
            },
            a: {
              textDecoration: "underline"
            }
          }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      )}
    </>
  );
};

export default PortfolioBody;
