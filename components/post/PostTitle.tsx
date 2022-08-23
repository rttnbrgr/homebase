import { ReactNode } from "react";
import { Text } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <Text as="h1" textStyle={{ base: "h2", md: "h1", lg: "jumbo" }}>
      {children}
    </Text>
  );
};

export { PostTitle };
