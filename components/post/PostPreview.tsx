import DateFormatter from "../date-formatter";
import Author from "../../types/author";
import { Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { Link as ChakraLink } from "@chakra-ui/react";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug
}: Props) => {
  return (
    <VStack spacing="5" alignItems="left">
      <VStack spacing="1" alignItems="left">
        <Text textStyle="h4Fork">
          <NextLink as={`/blog/${slug}`} href="/blog/[slug]">
            <ChakraLink layerStyle="resetLink">{title}</ChakraLink>
          </NextLink>
        </Text>
        <Text textStyle="p2">
          <DateFormatter dateString={date} />
        </Text>
      </VStack>
      <Text textStyle="p2">{excerpt}</Text>
    </VStack>
  );
};

export { PostPreview };
