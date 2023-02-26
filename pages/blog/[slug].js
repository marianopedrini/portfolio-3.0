import { MDXRemote } from 'next-mdx-remote';
import { getFiles, getFileBySlug } from '@/lib/mdx';
import MDXComponents from '@/components/MDXComponents';

export default function Post({ source, frontmatter }) {
  return (
    <main>
      <div className="container mx-auto pt-40">
        <MDXRemote {...source} components={MDXComponents} />
      </div>
    </main>
  );
}

export async function getStaticProps({ params }) {
  const { source, frontmatter } = await getFileBySlug(params.slug);

  return {
    props: {
      source,
      frontmatter,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles();

  const paths = posts.map((posts) => ({
    params: {
      slug: posts.replace(/\.md/, ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
