import { Box, BoxProps } from "@chakra-ui/react";
import { MarkdownBlock } from "../MarkdownBlock";

type Props = BoxProps & {
  content: string;
};

const PostBody = ({ content, ...boxProps }: Props) => {
  return (
    <Box {...boxProps}>
      <MarkdownBlock content={content} />
    </Box>
  );
};

export { PostBody };
