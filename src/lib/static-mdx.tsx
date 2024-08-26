import { Writable } from "stream";
import { MDX } from "@/components/mdx";
import { components } from "@/components/mdx";
import BestOf, { BestOfProps } from "@/components/best-of";
import Heading from "@/components/heading";

async function renderToStaticMarkup(element: any): Promise<string> {
  const ReactDOMServer = (await import("react-dom/server")).default;

  return new Promise((resolve, reject) => {
    let html = "";
    const writableStream = new Writable({
      write(chunk, encoding, callback) {
        html += chunk;
        callback();
      },
    });

    writableStream.on("finish", () => {
      resolve(html);
    });

    writableStream.on("error", (e) => {
      reject(e);
    });

    ReactDOMServer.renderToPipeableStream(element).pipe(writableStream);
  });
}

const staticComponents = {
  ...components,
  a: (props: any) => <a {...props} />,
  Link: (props: any) => <a {...props} />,
  BestOf: ({ title, link }: BestOfProps) => (
    <Heading level={6} as="h4">
      <a href={link}>{title}</a>
    </Heading>
  ),
};

export async function renderStaticMDX(content: string): Promise<string> {
  return await renderToStaticMarkup(
    <MDX source={content} components={staticComponents} />
  );
}
