import Header from "@/components/header";
import Footer from "@/components/footer";
import { backdrop } from "@/lib/class-utils";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={backdrop}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
