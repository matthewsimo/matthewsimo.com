import { getPosts } from "@/lib/posts";
import { renderStaticMDX } from "@/lib/static-mdx";
import { Feed, type Item } from "feed";

const domain = "https://www.matthewsimo.com";

const author = {
  name: "Matthew Simo",
  email: "hi@matthewsimo.com",
  link: domain,
};

export const dynamic = "force-static";

export async function GET(request: Request) {
  const feed = new Feed({
    title: "matthewsimo.com",
    description:
      "The personal blog of Matthew Simo, Software Engineer & UX Designer based in Texas.",
    link: domain,
    id: `${domain}/`,
    language: "en",
    copyright: `All rights reserved ${new Date().getFullYear()}, Matthew Simo`,
    feedLinks: {
      atom: `${domain}/feed.xml`,
    },
    image: `${domain}/img/favicon.jpg`,
    favicon: `${domain}/img/icon-light.svg`,
    author,
  });

  const allPosts = await getPosts();

  const items = await Promise.all(
    allPosts
      .filter((p) => !p.draft)
      .map(async ({ title, slug, date, content }): Promise<Item> => {
        const html = await renderStaticMDX(content);
        return {
          title,
          link: `${domain}/posts/${slug}`,
          date: new Date(date),
          author: [author],
          content: html,
        };
      })
  );
  items.forEach((item) => feed.addItem(item));

  return new Response(feed.atom1(), {
    status: 200,
    headers: {
      "Content-Type": "application/atom+xml",
    },
  });
}
