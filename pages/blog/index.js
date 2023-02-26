import { getAllFilesMetadata } from '@/lib/mdx';
import PostCard from '@/components/PostCard';
import { Post } from '@/types/types';

export default function Blog({ posts }) {
  return (
    <>
      <main className="container mx-auto pt-40" id="blog">
        <h1>Testing</h1>
        <div>
          {posts.map((post) => {
            return <PostCard post={post} key={post.slug} />;
          })}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();

  return {
    props: { posts },
  };
}
