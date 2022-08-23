import { Layout } from "../../components/Layout";
import { getAllPosts } from "../../lib/api";
import Post from "../../types/post";
import MetaPage from "../../components/MetaPage";
import { Box, Container, SimpleGrid, Text } from "@chakra-ui/react";
import { PostPreview } from "../../components/post";

type Props = {
  allPosts: Post[];
};

const Blog = ({ allPosts }: Props) => {
  return (
    <>
      <Layout title="Blog">
        <MetaPage title="Blog" />
        <Container variant="refactor">
          <Box textStyle="resetRefactor">
            {allPosts.length > 0 && (
              <Box mb="32" maxW="2xl" mx="auto">
                <Text as="h2" textStyle={{ base: "h2", md: "h1", lg: "jumbo" }}>
                  Posts
                </Text>

                <SimpleGrid columns={1} spacingY="12" pt="4">
                  {allPosts.map(post => (
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
            )}
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt"
  ]);

  return {
    props: { allPosts }
  };
};
