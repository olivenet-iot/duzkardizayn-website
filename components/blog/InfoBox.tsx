import React from 'react';

interface InfoBoxProps {
  type: 'info' | 'tip' | 'warning';
  title?: string;
  children: React.ReactNode;
}

const typeStyles = {
  info: {
    container: 'bg-blue-50 border-l-4 border-blue-500',
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'text-blue-800',
    text: 'text-blue-700',
  },
  tip: {
    container: 'bg-gold-primary/10 border-l-4 border-gold-primary',
    icon: (
      <svg className="w-6 h-6 text-gold-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'text-gray-800',
    text: 'text-gray-700',
  },
  warning: {
    container: 'bg-red-50 border-l-4 border-red-500',
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: 'text-red-800',
    text: 'text-red-700',
  },
};

const defaultTitles = {
  info: 'Bilgi',
  tip: 'İpucu',
  warning: 'Uyarı',
};

export default function InfoBox({ type, title, children }: InfoBoxProps) {
  const styles = typeStyles[type];
  const displayTitle = title || defaultTitles[type];

  return (
    <div className={`${styles.container} p-4 md:p-6 rounded-r-lg my-6`}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 mt-0.5">
          {styles.icon}
        </div>
        <div className="flex-1">
          <h4 className={`font-semibold ${styles.title} mb-2`}>
            {displayTitle}
          </h4>
          <div className={`${styles.text} text-sm md:text-base leading-relaxed`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
