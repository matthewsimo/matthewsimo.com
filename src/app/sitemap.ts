import { getPosts } from "@/lib/posts";

export const baseUrl = "https://matthewsimo.com";

export default async function sitemap() {
  let blogs = (await getPosts()).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  let routes = ["", "/about", "/posts", "/projects", "/uses"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
