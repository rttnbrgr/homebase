import DateFormatter from "../date-formatter";
import { PostTitle } from "./post-title";
import Author from "../../types/author";
import { Text, VStack } from "@chakra-ui/react";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <VStack bg="red500" alignItems="start" spacing="2">
      <PostTitle>{title}</PostTitle>
      <Text textStyle="p3">
        <DateFormatter dateString={date} />
      </Text>
    </VStack>
  );
};

export { PostHeader };
