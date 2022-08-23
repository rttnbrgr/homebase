import markdownStyles from "../../styles/markdown-styles.module.css";
import { Box } from "@chakra-ui/react";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <Box mb="32" maxW="2xl" mx="auto">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Box>
  );
};

export { PostBody };
