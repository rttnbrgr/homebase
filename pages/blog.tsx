import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import { LayoutDefault } from "../components/layouts/LayoutDefault";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import Post from "../types/post";
import Header from "../components/header";

type Props = {
  allPosts: Post[];
};

const Blog = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <LayoutDefault>
        <Head>
          <title>Blog</title>
        </Head>
        <Container>
          <Header />
          {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </Container>
      </LayoutDefault>
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
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
