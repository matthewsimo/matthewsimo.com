import Header from "@/components/header";
import Footer from "@/components/footer";
import { backdrop } from "@/lib/class-utils";
import BlurFade from "@/components/blur-fade";

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={backdrop}>
      <Header />
      <BlurFade>
        <main>{children}</main>
        <Footer />
      </BlurFade>
    </div>
  );
}
