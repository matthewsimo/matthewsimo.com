import { MDXProvider } from "@mdx-js/react";
import rehypePrism from "rehype-prism-plus";
import rehypeCodeTitles from "rehype-code-titles";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import Link from "./link";
import Box from "./box";
import Heading, { type HeadingProps } from "./heading";
import { ComponentProps, DetailedHTMLProps, HTMLAttributes } from "react";
import BestOf from "./best-of";

/* eslint-disable react/display-name */

type MDXHeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;
function makeHeading(as: HeadingProps["as"], level: HeadingProps["level"]) {
  return (props: MDXHeadingProps) => (
    <Heading as={as} level={level} {...props} />
  );
}

export const components: ComponentProps<typeof MDXProvider>["components"] = {
  h1: makeHeading("h1", 2),
  h2: makeHeading("h2", 3),
  h3: makeHeading("h3", 4),
  h4: makeHeading("h4", 5),
  h5: makeHeading("h5", 5),
  h6: makeHeading("h6", 6),
  a: Link,
  Link: Link,
  Heading,
  Box,
  BestOf,
};

export function MDX(props: MDXRemoteProps) {
  return (
    <MDXRemote
      {...props}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypePrism,
            rehypeCodeTitles,
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: "wrap" }],
          ],
        },
      }}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}

MDX.displayName = "MDX";
