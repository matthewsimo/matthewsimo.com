import PostIntro from "@/components/post-intro";
import { gridClass } from "@/lib/class-utils";
import { getPost, getPosts } from "@/lib/posts";
import { MDX } from "@/components/mdx";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(({ slug }) => ({
    slug,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  return (
    <>
      <PostIntro post={post} />
      <article className={`${gridClass} relative`}>
        <div className="space-y-6 pb-10">
          <MDX source={post.content} />

          {Boolean(post.imgAttribution) && (
            <div className="pt-1 sm:pt-2 xl:pt-3 text-main-300 italic sm:text-lg max-w-prose mx-auto">
              <small
                dangerouslySetInnerHTML={{ __html: post.imgAttribution || "" }}
              />
            </div>
          )}
        </div>
      </article>
    </>
  );
}
