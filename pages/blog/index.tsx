import Container from "../../components/blog/container";
import MoreStories from "../../components/more-stories";
import { Layout } from "../../components/layouts";
import { getAllPosts } from "../../lib/api";
import Post from "../../types/post";
import Header from "../../components/blog/header";
import MetaPage from "../../components/MetaPage";

type Props = {
  allPosts: Post[];
};

const Blog = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <MetaPage title="Blog" />
        <Container>
          <Header />
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
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
