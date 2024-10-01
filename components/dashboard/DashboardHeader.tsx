import React from 'react';

interface DashboardHeaderProps {
  heading: string;
  text?: string;
  children?: React.ReactNode;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ heading, text, children }) => {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="grid gap-1">
        <h1 className="text-2xl font-bold tracking-wide text-gray-900">{heading}</h1>
        {text && <p className="text-neutral-500">{text}</p>}
      </div>
      {children}
    </div>
  );
};

export default DashboardHeader;