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
        <link rel="me" href="https://mastodon.social/@matthewsimo" />
      </head>
      <GoogleTagManager gtmId="G-4SBJQ1ZHYZ" />
      <body className={`font-sans text-main`}>{children}</body>
    </html>
  );
}
