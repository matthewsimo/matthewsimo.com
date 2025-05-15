import { baseUrl } from "@/app/sitemap";
import { gridClass } from "@/lib/class-utils";
import { getPost, getPosts } from "@/lib/posts";
import PostIntro from "@/components/post-intro";
import { MDX } from "@/components/mdx";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(({ slug }) => ({
    slug,
  }));
}

type PostProps = { params: Promise<{ slug: string }> };
export async function generateMetadata(props: PostProps) {
  const params = await props.params;
  const post = await getPost(params.slug);
  if (!post) {
    return;
  }

  let { title, date: publishedTime, img } = post;
  let ogImage = img ? img : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    openGraph: {
      title,
      type: "article",
      publishedTime,
      url: `${baseUrl}/posts/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      images: [ogImage],
    },
  };
}

export default async function Post(props: PostProps) {
  const params = await props.params;
  const post = await getPost(params.slug);

  return (
    <>
      <PostIntro post={post} />
      <article className={`space-y-6 pb-10 relative`}>
        <>
          <div className={`${gridClass} prose line-numbers`}>
            <MDX source={post.content} />
          </div>

          {Boolean(post.imgAttribution) && (
            <div
              className={`${gridClass} pt-1 sm:pt-2 xl:pt-3  italic sm:text-lg max-w-prose mx-auto`}
            >
              <small
                dangerouslySetInnerHTML={{ __html: post.imgAttribution || "" }}
              />
            </div>
          )}
        </>
      </article>
    </>
  );
}
