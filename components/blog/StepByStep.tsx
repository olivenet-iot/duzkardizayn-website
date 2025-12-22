import React from 'react';

interface Step {
  title: string;
  description: string;
}

interface StepByStepProps {
  title?: string;
  steps: Step[];
}

export default function StepByStep({ title, steps }: StepByStepProps) {
  return (
    <div className="my-8">
      {title && (
        <h4 className="font-semibold text-gray-900 mb-6 text-lg md:text-xl">
          {title}
        </h4>
      )}
      <div className="relative">
        {/* Dikey bağlantı çizgisi */}
        <div className="absolute left-5 top-10 bottom-10 w-0.5 bg-gold-primary/30" />

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="relative flex gap-4 md:gap-6">
              {/* Numara dairesi */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gold-primary flex items-center justify-center shadow-lg">
                  <span className="text-navy-dark font-bold text-sm">
                    {index + 1}
                  </span>
                </div>
              </div>

              {/* İçerik */}
              <div className="flex-1 bg-white rounded-lg shadow-md p-4 md:p-5 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <h5 className="font-semibold text-gray-900 mb-2">
                  {step.title}
                </h5>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
