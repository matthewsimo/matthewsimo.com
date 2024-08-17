import "@/app/globals.css";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import { PropsWithChildren } from "react";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: "600",
});

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <head>
        <link rel="me" href="https://mastodon.social/@matthewsimo" />
      </head>
      <GoogleTagManager gtmId="G-4SBJQ1ZHYZ" />
      <body className={`${inter.variable} font-sans text-main bg-main`}>
        {children}
      </body>
    </html>
  );
};

PageLayout.displayName = "PageLayout";

export default PageLayout;
