import BlurFade from "@/components/blur-fade";
import { gridClass } from "@/lib/class-utils";
import { getPosts } from "@/lib/posts";
import Link from "@/components/link";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <article className={`${gridClass}`}>
      <div className="space-y-6 pb-10">
        <BlurFade>
          <h1 className="text-4xl font-semibold">Posts</h1>
        </BlurFade>

        {posts.length > 0 && (
          <ul className="text-xl py-6 space-y-6">
            {posts.map(({ title, id, date, slug, img, readingTime }, i) => (
              <BlurFade key={id} delay={0.05 * i}>
                <li
                  key={id}
                  className="flex justify-start items-baseline gap-4 sm:gap-6"
                >
                  <span className="font-mono text-main-700 grow-0">{id}</span>
                  <div className="grow flex flex-col gap-2">
                    <Link
                      className="outline-none focus:underline focus:text-main-400 focus:ring focus:ring-main focus:ring-offset-4 focus:ring-offset-main focus:ring-opacity-75 rounded-sm text-main-primary font-normal hover:underline hover:text-main-400 cursor-pointer"
                      href={`/posts/${slug}`}
                    >
                      {title}
                    </Link>
                    <time className="text-main-200" dateTime={date}>
                      {date}
                    </time>
                  </div>
                </li>
              </BlurFade>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
