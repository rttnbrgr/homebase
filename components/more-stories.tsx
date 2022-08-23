import { PostPreview } from "./post";
import Post from "../types/post";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <Box mb="32" maxW="2xl" mx="auto">
      <Text as="h2" textStyle={{ base: "h2", md: "h1", lg: "jumbo" }}>
        Posts
      </Text>

      <SimpleGrid columns={1} spacingY="12" pt="4">
        {posts.map(post => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default MoreStories;
