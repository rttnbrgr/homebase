import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { stringify } from "remark";

/**
 * Blog
 */

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

/**
 * Portfolio
 */

// returns the full path to our _portfolio folder on the system
const portfolioProjectsDirectory = join(process.cwd(), "_portfolio");

// returns the array of project filesnames; including extension
export function getPortfolioProjectSlugs() {
  return fs.readdirSync(portfolioProjectsDirectory);
}

export function getProjectImagesByPath(slug: string) {
  // console.log("🚨🚨🚨🚨 getProjectImagesByPath 🚨🚨🚨🚨");
  // console.log("slug: ", slug);

  const publicPath = join("/assets/portfolio/", slug);
  const assetDirectory = join(process.cwd(), "public", publicPath);

  let images = fs
    // Get all images in the assets dir
    .readdirSync(assetDirectory)
    // remove ds store
    .filter(x => !x.startsWith(".DS_Store"))
    // remove the thumb
    .filter(x => !x.startsWith("thumb"))
    // prepend file name w/ public path
    .map(x => publicPath.concat("/", x));
  console.log("imageFilesSync2", images);

  return images;
}

type projectFields =
  | "title"
  | "slug"
  | "assetDir"
  | "thumb"
  | "content"
  | "assets";

// what are all the valid fields

export function getPortfolioProjectBySlug(slug: string, fields: string[] = []) {
  console.log("🚨 getPortfolioProjectBySlug: slug", slug);
  // strip the `.md`
  const realSlug = slug.replace(/\.md$/, "");
  // get the unix path + add back teh md
  const fullPath = join(portfolioProjectsDirectory, `${realSlug}.md`);
  // get the md file
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // parse the md file
  const { data, content } = matter(fileContents);

  /**
   * Prepare the date string for sort
   */
  let sortDateString = "";

  // Transform from date => String
  if (typeof data.dateSort === "object") {
    sortDateString = data.dateSort.toISOString().split("T")[0];
  } else {
    console.log("🚨 this shouldnt happen");
    sortDateString = data.dateSort;
  }

  const assetPath = join("/assets/portfolio/", `${realSlug}`);
  console.log("assetPath", assetPath);
  const thumbPath = join(assetPath, `/thumb.jpg`);
  console.log("thumbPath", thumbPath);

  // Prepare the types
  interface itemsObject {
    [key: string]: string;
  }
  interface assetObject {
    assets?: string[];
  }

  // Wierd union since its alls trings except the array of assets
  type Item = itemsObject & assetObject;

  const items: Item = {
    // always return sort date
    dateSort: sortDateString
  };

  // prepare asset dir
  // prepare portfolio link
  // plus slug
  //  prepare thumb
  // prepare project slug/link

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === "slug") {
      console.log("in slug", field);
      items[field] = realSlug;
    }
    if (field === "content") {
      console.log("in content", field);
      items[field] = content;
    }
    // Do I need this?
    if (field === "assetDir") {
      console.log("in assetDir", field);
      items[field] = assetPath;
    }
    if (field === "thumb") {
      console.log("in thumb", field);
      items[field] = thumbPath;
    }

    // if (field === "assets") {
    //   // console.log("asking for assets");
    //   // const foo = getProjectImagesByPath(slug);
    //   // console.log("xxx restult of getProjectImagesByPath xxx", foo);
    //   // items[field] = foo;

    //   // items.assets = foo;
    //   items[field] = "foo";
    //   // items[field] = getProjectImagesByPath(slug);
    // }

    // the catch all for any yaml value
    if (typeof data[field] !== "undefined") {
      console.log("fields in last catch: ", field);
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPortfolioProjects(fields: string[] = []) {
  // Get all the slugs
  const slugs = getPortfolioProjectSlugs();
  console.log("slugs", slugs);

  const portfolioProjects = slugs
    .map(slug => getPortfolioProjectBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => {
      return post1.dateSort > post2.dateSort ? -1 : 1;
    });
  // console.log("portfolioProjects", portfolioProjects);

  return portfolioProjects;
}
