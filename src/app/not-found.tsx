import BlurFade from "@/components/blur-fade";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { backdrop, gridClass } from "@/lib/class-utils";

export default function NotFound() {
  return (
    <div className={backdrop}>
      <Header />
      <BlurFade>
        <main>
          <section className={gridClass}>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
              404 - Page Not Found
            </h1>
            <p className="mb-4">The page you are looking for does not exist.</p>
          </section>
        </main>
        <Footer />
      </BlurFade>
    </div>
  );
}
