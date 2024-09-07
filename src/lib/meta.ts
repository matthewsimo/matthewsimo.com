import type { Metadata } from "next";

export const generateMeta = (meta: Metadata): Metadata => {
  const defaultMeta: Metadata = {
    openGraph: {
      siteName: "Matthew Simo",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      site: "@matthewsimo",
    },
    title: "Matthew Simo",
    description:
      "The website of Matthew Simo, a Software Engineer & UX Designer based in Texas",
  };

  return { ...defaultMeta, ...meta };
};
