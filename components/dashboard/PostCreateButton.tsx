import React from 'react';

interface PostCreateButtonProps {
  variant?: 'default' | 'outline';
}

const PostCreateButton: React.FC<PostCreateButtonProps> = ({ variant = 'default' }) => {
  const handleClick = () => {
    // Implement post creation logic here
    console.log('Create new post');
  };

  const buttonClasses = variant === 'outline'
    ? 'border border-gray-300 text-gray-700 hover:bg-gray-100'
    : 'bg-teal-600 text-white hover:bg-blue-600';

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-md ${buttonClasses}`}
    >
      Create Post
    </button>
  );
};

export default PostCreateButton;