import React from 'react';

interface EmptyPlaceholderProps {
  children: React.ReactNode;
}

const EmptyPlaceholder: React.FC<EmptyPlaceholderProps> & {
  Icon: React.FC<{ name: string }>;
  Title: React.FC<{ children: React.ReactNode }>;
  Description: React.FC<{ children: React.ReactNode }>;
} = ({ children }) => {
  return <div className="flex flex-col items-center justify-center space-y-4 p-8">{children}</div>;
};

EmptyPlaceholder.Icon = ({ name }) => {
  return <div className="text-4xl">{name}</div>; // You can replace this with an actual icon component
};

EmptyPlaceholder.Title = ({ children }) => {
  return <h3 className="text-xl font-semibold">{children}</h3>;
};

EmptyPlaceholder.Description = ({ children }) => {
  return <p className="text-sm text-gray-500">{children}</p>;
};

export default EmptyPlaceholder;