import { Box } from "@chakra-ui/react";
import { textStyles } from "../theme/typography";

type Props = {
  content: string;
};

const sx = {
  h1: {
    mt: 12,
    mb: 4,
    ...textStyles.h3
  },
  h2: {
    mt: 12,
    mb: 4,
    ...textStyles.h4
  },
  h3: {
    mt: 8,
    mb: 3,
    ...textStyles.h5
  },
  "p, ul, ol, blockquote": {
    my: 6,
    ...textStyles.p2
  }
};

const MarkdownBlock = ({ content }: Props) => {
  return <Box sx={sx} dangerouslySetInnerHTML={{ __html: content }} />;
};

export { MarkdownBlock };
