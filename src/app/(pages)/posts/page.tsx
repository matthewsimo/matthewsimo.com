import { gridClass } from "@/lib/class-utils";
import { getPosts } from "@/lib/posts";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <article className={`${gridClass}`}>
      <div className="space-y-6 pb-10">
        <h1 className="text-4xl font-semibold">Posts</h1>

        {posts.length > 0 && (
          <ul className="text-xl py-6 space-y-2">
            {posts.map(({ title, id, date, slug, img, readingTime }) => (
              <li key={id}>
                <span className="font-mono">{id}</span> -
                <a
                  className="outline-none focus:underline focus:text-main-400 focus:ring focus:ring-main focus:ring-offset-4 focus:ring-offset-main focus:ring-opacity-75 rounded-sm text-main-primary font-normal hover:underline hover:text-main-400 cursor-pointer"
                  href={`/posts/${slug}`}
                >
                  {title}
                </a>
                -{" "}
                <time className="text-main-300" dateTime={date}>
                  {date}
                </time>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
