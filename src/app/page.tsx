import BlurFade from "@/components/blur-fade";
import Greeting from "@/components/greeting";
import Link from "@/components/link";
import { gridClass } from "@/lib/class-utils";

export default function Home() {
  return (
    <div className={`${gridClass} leading-relaxed text-xl space-y-8 my-40`}>
      <Greeting />
      <BlurFade>
        <h1 className="text-5xl">I&apos;m Matthew&nbsp;Simo</h1>
      </BlurFade>

      <BlurFade delay={0.2}>
        <p>
          I&apos;m a Software Engineer & UX Designer based in Texas and I like
          to build things for humans. I work as a Senior Solutions Architect of
          Front-End Engineering at{" "}
          <Link href="https://www.rightpoint.com/">Rightpoint</Link> where I
          lead teams that build software that aims to improves people&rsquo;s
          lives. You can usually find me exploring the intersection of humans
          &amp; computers.
        </p>
      </BlurFade>
      <BlurFade delay={0.4}>
        <p>
          <Link href="/about">Find out more</Link> or{" "}
          <Link href="/posts">see some posts</Link>
        </p>
      </BlurFade>
    </div>
  );
}
