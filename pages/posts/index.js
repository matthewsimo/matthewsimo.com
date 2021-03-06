import Link from 'next/link'
import { Link as ThemeLink, Heading, Box, Text } from 'theme-ui';

import { getPosts } from 'lib/posts';
import { utils } from 'lib/theme';

function Posts({ posts }) {
  return (
    <Box sx={{ minHeight: 300, paddingTop: [5, 6] }}>
      <Heading as="h2">Posts</Heading>
      {posts.length > 0 && (
        <Box as="ul" sx={{ ...utils.block('padding', [3, 4]) }}>
          {posts.map(post => (
            <Text as="li" key={`post-${post.slug}`}>
              <Link
                href="/posts/[slug]"
                as={`/posts/${post.slug}`}
                passHref
              >
                <ThemeLink>{post.title}</ThemeLink>
              </Link>
              {post.date && (
                <>
                  {" "}
                  <Text as="time" dateTime={post.date}>{post.date}</Text>
                </>
              )}
            </Text>
          ))}
        </Box>
      )
      }
    </Box >
  )

}

export default Posts;

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: { posts },
  }
}