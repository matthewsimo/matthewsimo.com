import { MDXProvider } from "@mdx-js/react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import Link from "./link";
import Box from "./box";
import Heading, { type HeadingProps } from "./heading";
import { ComponentProps, DetailedHTMLProps, HTMLAttributes } from "react";
import BestOf from "./best-of";

type MDXHeadingProps = DetailedHTMLProps<
  HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>;
const makeHeading =
  (level: HeadingProps["level"] = 1) =>
  (props: MDXHeadingProps) =>
    <Heading as={level ? `h${level}` : "h1"} level={level} {...props} />;

const components: ComponentProps<typeof MDXProvider>["components"] = {
  h1: makeHeading(1),
  h2: makeHeading(2),
  h3: makeHeading(3),
  h4: makeHeading(4),
  h5: makeHeading(5),
  h6: makeHeading(6),
  a: Link,
  Link,
  Heading,
  Box,
  BestOf,
};

export function MDX(props: MDXRemoteProps) {
  console.log({ props });
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
