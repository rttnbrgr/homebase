import React from "react";
import {
  Grid,
  GridItem,
  GridItemProps,
  GridProps,
  SimpleGrid,
  SimpleGridProps
} from "@chakra-ui/react";
import {
  Layout,
  Image as PortfolioImage,
  Body as PortfolioBody,
  BackLink as PortfolioBackLink
} from "../../components/portfolio";
import { responsivePad } from "../../components/portfolio/utils";
import photo from "../../public/assets/portfolio/sample.jpeg";
import {} from "@chakra-ui/react";
import {
  getPortfolioProjectBySlug,
  getAllPortfolioProjects
} from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

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

const projectBannerGridItemStyles: GridItemProps = {
  colStart: { lg: 1 },
  colSpan: { lg: 2 }
};
const backLinkGridItemStyles: GridItemProps = {
  display: { base: "flex" },
  flexDirection: "column",
  justifyContent: "flex-end"
};
const projectBodyGridItemStyles: GridItemProps = {
  border: "1px solid red",
  rowStart: { lg: 2 },
  colStart: { lg: 3 },
  colSpan: { lg: 2 }
};
const projectImagesGridItemStyles: GridItemProps = {
  colSpan: { lg: 2 },
  rowStart: { lg: 2 }
};

// ✅ build image stack
// ✅ build responsive styyles
// ✅ build portfolio image comp (aspect + img)
// build props mocking
// source real images
// 🙅‍♀️ extract grid styles

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
        <GridItem {...projectBannerGridItemStyles}>
          <PortfolioImage src={photo} alt="Picture of the author" />
        </GridItem>
        {/* Back Link*/}
        <GridItem {...backLinkGridItemStyles}>
          <PortfolioBackLink />
        </GridItem>
        {/* Project Body */}
        <GridItem {...projectBodyGridItemStyles}>
          <PortfolioBody content={project.content} title={project.title} />
        </GridItem>
        {/* Images */}
        <GridItem {...projectImagesGridItemStyles}>
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
