import Link from 'next/link';
import { Post } from '../types/types';

const PostCard = ({ post }) => {
  return (
    <div className="border-2 border-solid border-amber-900 my-6">
      <Link href={`/blog/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>

      <p>{post.subtitle}</p>
      <p>{post.date}</p>
    </div>
  );
};

export default PostCard;
