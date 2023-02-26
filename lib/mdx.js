import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';

const root = process.cwd();

export const getFiles = () => fs.readdirSync(path.join(root, 'posts'));

export const getFileBySlug = async (slug) => {
  const mdxSource = fs.readFileSync(
    path.join(root, 'posts', `${slug}.md`),
    'utf-8'
  );

  const { data, content } = await matter(mdxSource);
  const source = await serialize(content, {});

  return {
    source,
    frontmatter: {
      slug,
      ...data,
    },
  };
};

export const getAllFilesMetadata = () => {
  const files = getFiles();
  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, 'posts', postSlug),
      'utf-8'
    );
    const { data } = matter(mdxSource);

    return [{ ...data, slug: postSlug.replace('.md', '') }, ...allPosts];
  }, []);
};
