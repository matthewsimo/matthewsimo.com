import { Writable } from "stream";
import { MDX } from "@/components/mdx";

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

    writableStream.on("error", reject);

    ReactDOMServer.renderToPipeableStream(element).pipe(writableStream);
  });
}

export async function renderStaticMDX(content: string): Promise<string> {
  return await renderToStaticMarkup(<MDX source={content} />);
}
