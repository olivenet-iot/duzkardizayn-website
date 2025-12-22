'use client';

import React from 'react';

interface BlogContentProps {
  children: React.ReactNode;
}

export default function BlogContent({ children }: BlogContentProps) {
  return (
    <article className="prose prose-lg max-w-none">
      <style jsx global>{`
        .prose {
          color: #374151;
          max-width: none;
        }

        .prose h2 {
          font-family: var(--font-montserrat), sans-serif;
          color: #1f2937;
          font-weight: 700;
          font-size: 1.75rem;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #D4A017;
        }

        .prose h3 {
          font-family: var(--font-montserrat), sans-serif;
          color: #1f2937;
          font-weight: 600;
          font-size: 1.35rem;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }

        .prose p {
          margin-bottom: 1.25rem;
          line-height: 1.8;
        }

        .prose a {
          color: #D4A017;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }

        .prose a:hover {
          color: #B8860B;
          text-decoration: underline;
        }

        .prose strong {
          color: #1f2937;
          font-weight: 600;
        }

        .prose ul {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }

        .prose ul li {
          margin-bottom: 0.5rem;
          position: relative;
        }

        .prose ul li::marker {
          color: #D4A017;
        }

        .prose ol {
          margin: 1rem 0;
          padding-left: 1.5rem;
        }

        .prose ol li {
          margin-bottom: 0.5rem;
        }

        .prose ol li::marker {
          color: #D4A017;
          font-weight: 600;
        }

        .prose blockquote {
          border-left: 4px solid #D4A017;
          background: #f8f9fa;
          padding: 1rem 1.5rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #4b5563;
        }

        .prose img {
          border-radius: 0.5rem;
          margin: 1.5rem 0;
        }

        .prose hr {
          border-color: #e5e7eb;
          margin: 2rem 0;
        }

        @media (max-width: 768px) {
          .prose h2 {
            font-size: 1.5rem;
          }

          .prose h3 {
            font-size: 1.2rem;
          }
        }
      `}</style>
      {children}
    </article>
  );
}
