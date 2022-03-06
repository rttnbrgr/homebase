import React from "react";
import { Box, Grid, GridItem, GridProps, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import {
  Layout,
  Grid as PortfolioGrid,
  Image as PortfolioImage
} from "../../components/portfolio";
import { responsivePad } from "../../components/portfolio/utils";
import NextImage, { ImageProps } from "next/image";
import photo from "../../public/assets/portfolio/sample.jpeg";
import { SimpleGrid, SimpleGridProps, BoxProps } from "@chakra-ui/react";
import {
  getPortfolioProjectBySlug,
  getAllPortfolioProjects
} from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

//
import markdownStyles from "./markdown-styles.module.css";
import { getProjectImagesByPath } from "../../lib/api";

type Props = {
  content: string;
};

const ProjectBody = ({ content }: Props) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

// export default ProjectBody;
//

const mockPortfolio = ["orange.300", "teal.500", "orange.500", "orange.700"];

const parentGridStyles: GridProps = {
  templateColumns: {
    base: "repeat(1, 1fr)",
    // sm: "repeat(2, 1fr)",
    lg: "repeat(4, 1fr)"
    // xl: "repeat(4, 1fr)"
  },
  columnGap: responsivePad,
  rowGap: responsivePad
};

const nestedGridStyles: SimpleGridProps = {
  columns: {
    base: 1,
    sm: 2
  },
  columnGap: responsivePad,
  rowGap: responsivePad
};

// ✅ build image stack
// ✅ build responsive styyles
// ✅ build portfolio image comp (aspect + img)
// build props mocking
// source real images

type PortfolioProjectProps = {
  title: string;
  project: any;
};

function PortfolioProject({ title, project }: PortfolioProjectProps) {
  console.log("🧳🧳🧳🧳🧳🧳🧳🧳🧳🧳🧳🧳🧳🧳🧳");
  console.log("project?", project);
  console.log("project.assets?", project.assets);
  return (
    <Layout title={project.title ? project.title : "title"}>
      <Grid {...parentGridStyles}>
        {/* Banner Image */}
        <GridItem colStart={{ lg: 1 }} colSpan={{ lg: 2 }}>
          <PortfolioImage src={photo} alt="Picture of the author" />
        </GridItem>
        {/* Return Link*/}
        <GridItem
          display={{ base: "flex" }}
          flexDirection="column"
          justifyContent="flex-end"
        >
          <NextLink href="/portfolio">
            <Box _hover={{ cursor: "pointer" }}>
              <Text textStyle="portfolio.header">←</Text>
            </Box>
          </NextLink>
        </GridItem>
        {/* Project Body */}
        <GridItem
          border="1px solid lime"
          rowStart={{ lg: 2 }}
          colStart={{ lg: 3 }}
          colSpan={{ lg: 2 }}
        >
          <Text textStyle="portfolio.header">{project.title}</Text>
          <Text textStyle="portfolio.text">
            I helped rebuild the entire Sprinklr Display platform from the
            ground up. The platform is used for both command centers (internal
            facing) and social displays (think IG posts on the jumbotron at your
            favorite sporting event).
          </Text>
          <Text textStyle="portfolio.text">
            I helped architect the entire frontend in modern React, Typescript,
            and Mobx. I also built a number of our data visualization modules
            which were powered by D3.{" "}
          </Text>
          <Text textStyle="portfolio.text">
            I design and implemented a variety of visualizations based around
            social post data. Our visualizations helped showcase the content and
            surface insightful engagement metrics and trends.
          </Text>
          <hr />
          <ProjectBody content={project.content} />
        </GridItem>
        {/* Images */}
        <GridItem colSpan={{ lg: 2 }} rowStart={{ lg: 2 }}>
          {/* stack */}
          <SimpleGrid {...nestedGridStyles}>
            {mockPortfolio.map((x, i) => (
              <PortfolioImage key={i} bg={x} />
            ))}
            {project.assets &&
              project.assets.map((x, i) => <PortfolioImage key={i} src={x} />)}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Layout>
  );
}

// PortfolioProject.defaultProps = {
//   title: "Portfolio Item"
// };

export default PortfolioProject;

type Params = {
  params: {
    slug: string;
  };
};

// empty
// export async function getStaticProps() {
//   return {
//     props: {}
//   };
// }

export async function getStaticProps({ params }: Params) {
  // console.log("🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨");

  getProjectImagesByPath("foo");

  // console.log("👺👺👺👺👺👺👺👺👺👺");

  // console.log("params", params);
  const project = getPortfolioProjectBySlug(params.slug, [
    "title",
    "slug",
    "assetDir",
    "thumb",
    "content",
    "assets"
  ]);

  // console.log("project", project);

  const content = await markdownToHtml(project.content || "");
  // console.log("content", content);

  return {
    props: {
      project: {
        ...project,
        content
      }
    }
  };
}

// export const getStaticPaths = async () => {
//   return {
//     paths: ["/portfolio/1"],
//     fallback: false
//   };
// };

export async function getStaticPaths() {
  const projects = getAllPortfolioProjects(["slug"]);
  return {
    // props: { projects }
    paths: projects.map(project => {
      return {
        params: {
          slug: project.slug
        }
      };
    }),
    fallback: false
  };

  // const posts = getAllPosts(["slug"]);

  // return {
  //   paths: posts.map(post => {
  //     return {
  //       params: {
  //         slug: post.slug
  //       }
  //     };
  //   }),
  //   fallback: false
  // };
}
