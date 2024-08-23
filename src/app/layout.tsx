import "@/app/globals.css";
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { backdrop } from "@/lib/class-utils";
import { ScrollArea } from "@/components/scroll-area";

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
    <html lang="en" suppressHydrationWarning>
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
      <body className={`text-main`}>
        <ThemeProvider
          themes={["light", "dark"]}
          defaultTheme="dark"
          attribute="class"
        >
          <div className={backdrop}>
            <ScrollArea className="w-full h-dvh">
              <Header />
              <main>{children}</main>
              <Footer />
            </ScrollArea>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
