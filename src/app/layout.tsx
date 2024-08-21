import "@/app/globals.css";
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Matthew Simo",
  description:
    "The website of Matthew Simo, a Software Engineer & UX Designer based in Texas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="me" href="https://mastodon.social/@matthewsimo" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Blog RSS"
          href="https://www.matthewsimo.com/feed.xml"
        />
      </head>
      <GoogleTagManager gtmId="G-4SBJQ1ZHYZ" />
      <body className={` text-main`}>{children}</body>
    </html>
  );
}
