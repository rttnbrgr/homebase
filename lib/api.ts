import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { stringify } from "remark";

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

export function getProjectImagesByPath(slug: string) {
  console.log("getProjectImagesByPath");

  const staticDir = "public/assets/portfolio/sample";
  // const publicPortfolioPath =
  const publicDir = "/assets/portfolio/sample";
  const directoryPath1 = "public/assets/portfolio/jaguar";
  const directoryPath = join(process.cwd(), staticDir);

  let imageFilesSync = fs
    .readdirSync(directoryPath)
    .filter(x => !x.startsWith(".DS_Store"))
    .map(x => publicDir.concat("/", x)); // remove ds store
  console.log("imageFilesSync", imageFilesSync);

  return imageFilesSync;

  /*
  //passsing directoryPath and callback function
  // let imageFiles = await fs.promises.readdir(directoryPath, function (err, files) {
  let imageFiles = await fs.readdirSync(directoryPath, function (err, files) {
    // console.log("inside readdir", files);
    //handling error
    if (err) {
      console.log("Unable to scan directory: " + err);
      return [];
    }
    //listing all files using forEach
    // files.forEach(function (file) {
    //   // Do whatever you want to do with the file
    //   console.log(file);
    // });

    
    let images = files
      // remove ds store
      .filter(x => !x.startsWith(".DS_Store"))
      .map(function (file) {
        // Do whatever you want to do with the file
        console.log("file: ", file);
        return file;
      });

    const foooo = "fo";

    console.log("what are the images", images);
    console.log("images.length?", images.length);

    // return images.length ? images : ["assets", "here"];
    return images.length;
  });
  */

  // return images.length ? images : ["assets", "here"];
  // return ["assets", "here"];
}

type projectFields =
  | "title"
  | "slug"
  | "assetDir"
  | "thumb"
  | "content"
  | "assets";

export function getPortfolioProjectBySlug(slug: string, fields: string[] = []) {
  // console.log("🚨 getPortfolioProjectBySlug");
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(portfolioProjectsDirectory, `${realSlug}.md`);
  const assetPath = join("/assets/portfolio/", `${realSlug}`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // console.log("data", data);
  // console.log("content", content);
  interface itemsObject {
    [key: string]: string;
  }
  interface assetObject {
    assets?: string[];
  }

  type Item = itemsObject & assetObject;

  const items: Item = {};

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
    if (field === "assets") {
      // console.log("asking for assets");
      // const foo = getProjectImagesByPath(slug);
      // console.log("xxx restult of getProjectImagesByPath xxx", foo);
      // items[field] = foo;

      // items.assets = foo;
      // items[field] = "foo";
      items[field] = getProjectImagesByPath(slug);
    }

    // the catch all
    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPortfolioProjects(fields: string[] = []) {
  // console.log("📢 getAllPortfolioProjects");

  const slugs = getPortfolioProjectSlugs();
  // console.log("slugs", slugs);

  const portfolioProjects = slugs
    .map(slug => getPortfolioProjectBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.dateSort > post2.dateSort ? -1 : 1));
  // console.log("portfolioProjects", portfolioProjects);

  return portfolioProjects;
}
