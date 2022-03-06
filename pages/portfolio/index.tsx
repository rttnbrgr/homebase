import React from "react";
import { Text } from "@chakra-ui/react";
import {
  Layout as PortfolioLayout,
  Grid as PortfolioGrid,
  Item as PortfolioGridItem
} from "../../components/portfolio";
import { getAllPortfolioProjects } from "../../lib/api";
import Link from "next/link";
import { Project } from "../../types/project";

type PortfolioProps = {
  projects: Project[];
};

function Portfolio({ projects }: PortfolioProps) {
  console.log("projects", projects);
  return (
    <PortfolioLayout>
      <Text textStyle="portfolio.header">Portfolio</Text>
      <Text textStyle="portfolio.header">
        <Link href="/blog">Blog</Link>
      </Text>
      <PortfolioGrid>
        {projects.map(({ title, slug, thumb }, j) => (
          <PortfolioGridItem key={j} alt={title} src={thumb} slug={slug} />
        ))}
      </PortfolioGrid>
    </PortfolioLayout>
  );
}

export default Portfolio;

export const getStaticProps = async () => {
  const projects = getAllPortfolioProjects([
    "title",
    "slug",
    "thumb",
    "assetDir"
  ]);
  return {
    props: { projects }
  };
};
