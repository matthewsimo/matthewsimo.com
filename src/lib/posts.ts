import fs from "node:fs/promises";
import { readingTime as estReadingTime } from "reading-time-estimator";
import { Expand } from "./type-utils";

type Metadata = {
  id: string;
  title: string;
  tone: "light" | "dark";
  draft?: boolean;
  img?: string;
  imgAttribution?: string;
};

export type Post = Expand<
  Metadata & {
    date: string;
    slug: string;
    readingTime: {
      minutes: number;
      words: number;
      text: string;
    };
    content: string;
  }
>;

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterLines = frontMatterBlock.trim().split("\n");
  let metadata: Partial<Record<keyof Metadata, unknown>> = {};

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

export const getPosts = async () => {
  "use server";

  const posts = await fs.readdir("./_posts");

  const foundPosts = await Promise.all(
    posts.map(async (post): Promise<Post> => await getPost(post))
  );

  const showDrafts = process.env.SHOW_DRAFTS
    ? JSON.parse(process.env.SHOW_DRAFTS)
    : false;
  const sortedPosts = foundPosts
    .filter((post) => !post.draft || showDrafts)
    .sort((a: Post, b: Post) => {
      return b.date < a.date ? -1 : a.date < b.date ? 1 : 0;
    });

  return sortedPosts;
};

export const getPost = async (slug: string) => {
  "use server";

  const file = await fs.readFile(
    `./_posts/${slug}${slug.endsWith(".mdx") ? "" : ".mdx"}`,
    "utf-8"
  );
  const readingTime = estReadingTime(file, 200);
  const { metadata, content } = parseFrontmatter(file);

  return {
    ...getDateAndSlug(slug),
    ...metadata,
    readingTime,
    content,
  };
};

export function getDateAndSlug(postSlug: string) {
  const [Y, M, D, ...restSlug] = postSlug.replace(".mdx", "").split("-");
  const date = `${Y}-${M}-${D}`;
  const slug = `${date}-${restSlug.join("-")}`;
  return { date, slug };
}
