import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/blog/container";
import Header from "../../components/blog/header";
import { PostHeader } from "../../components/post";
import { LayoutChakra } from "../../components/layouts";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import { PostTitle, PostBody } from "../../components/post";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../types/post";
import { Box } from "@chakra-ui/react";

type Props = {
  post: PostType;
  morePosts: PostType[];
};

const Post = ({ post, morePosts }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <LayoutChakra>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Head>
              <title>
                {post.title} | Next.js Blog Example with {CMS_NAME}
              </title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <Box as="article" mb="32" maxW="2xl" mx="auto">
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </Box>
          </>
        )}
      </Container>
    </LayoutChakra>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage"
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug
        }
      };
    }),
    fallback: false
  };
}
