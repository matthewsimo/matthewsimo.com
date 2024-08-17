import type { Metadata } from "next";
import { backdrop } from "@/lib/class-utils";
import PageLayout from "@/components/page-layout";

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
    <PageLayout>
      <main className={backdrop}>{children}</main>
    </PageLayout>
  );
}
