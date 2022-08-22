import MoreStories from "../../components/more-stories";
import { Layout } from "../../components/Layout";
import { getAllPosts } from "../../lib/api";
import Post from "../../types/post";
import MetaPage from "../../components/MetaPage";
import { Box, Container } from "@chakra-ui/react";

type Props = {
  allPosts: Post[];
};

const Blog = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout title="Blog">
        <MetaPage title="Blog" />
        <Container variant="refactor">
          <Box textStyle="resetRefactor">
            {allPosts.length > 0 && <MoreStories posts={allPosts} />}
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
