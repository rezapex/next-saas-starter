import React from 'react';

interface Post {
  id: string;
  title: string;
  // Add other post properties as needed
}

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className="p-4 border-b last:border-b-0">
      <h3 className="text-lg font-semibold">{post.title}</h3>
      {/* Add more post details here */}
    </div>
  );
};

export default PostItem;