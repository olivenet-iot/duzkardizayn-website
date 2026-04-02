import React from 'react';

interface BlogContentProps {
  children: React.ReactNode;
}

export default function BlogContent({ children }: BlogContentProps) {
  return (
    <article className="prose prose-lg max-w-none">
      {children}
    </article>
  );
}
