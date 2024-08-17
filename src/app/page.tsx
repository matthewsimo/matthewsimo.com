import { gridClass } from "@/lib/class-utils";
import Link from "@/components/link";

export default function Home() {

  return (
<div className={`${gridClass} leading-relaxed text-xl space-y-8 my-40`}>
  <span className="text-3xl">
    Howdy
  </span>
    <h1 className="text-5xl">
      I'm Matthew&nbsp;Simo
    </h1>

<p>
I'm a Software Engineer & UX Designer based in Texas and I like to build things for humans. I
work as a Senior Solutions Architect of Front-End Engineering at{' '}
<Link href="https://www.rightpoint.com/">Rightpoint</Link> where I lead teams that build software
that aims to improves people&rsquo;s lives. You can usually find me exploring the intersection of
humans &amp; computers.
</p>
<p>
    <Link href="/about">Find out more</Link> or <Link href="/posts">see some posts</Link>
</p>
</div>
  );
}
