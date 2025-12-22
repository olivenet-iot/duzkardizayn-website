import React from 'react';

interface CheckListProps {
  title?: string;
  items: string[];
  variant?: 'check' | 'warning' | 'info';
}

const variantStyles = {
  check: {
    icon: (
      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    bg: 'bg-green-50',
    border: 'border-green-200',
  },
  warning: {
    icon: (
      <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    bg: 'bg-amber-50',
    border: 'border-amber-200',
  },
  info: {
    icon: (
      <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    bg: 'bg-blue-50',
    border: 'border-blue-200',
  },
};

export default function CheckList({ title, items, variant = 'check' }: CheckListProps) {
  const styles = variantStyles[variant];

  return (
    <div className={`${styles.bg} ${styles.border} border rounded-lg p-4 md:p-6 my-6`}>
      {title && (
        <h4 className="font-semibold text-gray-900 mb-4 text-lg">
          {title}
        </h4>
      )}
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 group"
          >
            <span className="flex-shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110">
              {styles.icon}
            </span>
            <span className="text-gray-700 text-sm md:text-base leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
