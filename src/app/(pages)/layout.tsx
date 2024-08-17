import PageLayout from "@/components/page-layout";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { backdrop } from "@/lib/class-utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PageLayout>
      <div className={backdrop}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </PageLayout>
  );
}
