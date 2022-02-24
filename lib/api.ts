import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  console.log("🚨 getPostBySlug");
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  console.log("📢 getAllPosts");
  const slugs = getPostSlugs();
  console.log("slugs", slugs);
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  // console.log("posts", posts);
  return posts;
}

const portfolioProjectsDirectory = join(process.cwd(), "_portfolio");

export function getPortfolioProjectSlugs() {
  return fs.readdirSync(portfolioProjectsDirectory);
}

export function getPortfolioProjectBySlug(slug: string, fields: string[] = []) {
  console.log("🚨 getPortfolioProjectBySlug");
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(portfolioProjectsDirectory, `${realSlug}.md`);
  const assetPath = join("/assets/portfolio/", `${realSlug}`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  console.log("data", data);
  console.log("content", content);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (field === "assetDir") {
      items[field] = assetPath;
    }

    // the catch all
    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPortfolioProjects(fields: string[] = []) {
  console.log("📢 getAllPortfolioProjects");

  const slugs = getPortfolioProjectSlugs();
  console.log("slugs", slugs);

  const portfolioProjects = slugs
    .map(slug => getPortfolioProjectBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.dateSort > post2.dateSort ? -1 : 1));
  console.log("portfolioProjects", portfolioProjects);

  return portfolioProjects;
}
