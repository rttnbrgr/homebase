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
  getAllPortfolioProjects,
  getProjectImagesByPath
} from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

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
  rowGap: responsivePad,
  maxWidth: {
    base: "480px",
    sm: "none"
  }
};

const projectBannerGridItemStyles: GridItemProps = {
  colStart: { lg: 1 },
  colSpan: { lg: 2 },
  maxWidth: {
    base: "480px",
    sm: "none"
  }
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

interface projectShape {
  title?: string;
  content?: string;
  assets?: string[];
  slug?: string;
  thumb?: string;
}

type PortfolioProjectProps = {
  project: projectShape;
};

function PortfolioProject({ project }: PortfolioProjectProps) {
  console.log("🧳🧳🧳🧳🧳🧳🧳🧳🧳🧳🧳🧳🧳🧳🧳");
  console.log("project?", project);
  const { title, content, assets } = project;
  console.log("project.assets?", project.assets);

  return (
    <Layout title={title}>
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
          <PortfolioBody content={content} title={title} />
        </GridItem>
        {/* Images */}
        <GridItem {...projectImagesGridItemStyles}>
          {/* stack */}
          <SimpleGrid {...nestedGridStyles}>
            {assets && assets.map((x, i) => <PortfolioImage key={i} src={x} />)}
          </SimpleGrid>
        </GridItem>
      </Grid>
    </Layout>
  );
}

export default PortfolioProject;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  // console.log("🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨");

  const { slug } = params;

  const assets = getProjectImagesByPath(slug);

  // console.log("params", params);
  const project = getPortfolioProjectBySlug(params.slug, [
    "title",
    "content",
    "thumb"
    // "assets"
  ]);

  const content = await markdownToHtml(project.content || "");

  return {
    props: {
      project: {
        assets,
        ...project,
        content
      }
    }
  };
}

export async function getStaticPaths() {
  /**
   *  this feels redundant?
   *  getPortfolioProjectSlugs()
   *   => slugs.map(getSlug())
   *   => slugs??;
   */

  // get all project slugs
  const projects = getAllPortfolioProjects(["slug"]);

  console.log("getAllPortfolioProjects", projects);

  return {
    paths: projects.map(project => {
      return {
        params: {
          slug: project.slug
        }
      };
    }),
    fallback: false
  };
}

// update asset dir logid
// build thumbnail constructor
// seperate out get images call
