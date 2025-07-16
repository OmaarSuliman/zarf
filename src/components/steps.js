// components/steps.js

'use client';

import { motion } from 'framer-motion';

export default function Steps({ steps, currentStep, setCurrentStep }) {
  return (
    <div className="flex w-full items-center justify-center p-1 bg-zinc-100 rounded-full mb-8">
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        return (
          <button
            key={step}
            onClick={() => setCurrentStep(index)}
            // disable clicking future steps
            disabled={index > currentStep && !isCompleted}
            className={`relative flex-1 rounded-full text-center text-sm font-medium transition-colors duration-300 focus:outline-none py-2 ${
              isActive ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-800"
            } ${index > currentStep && !isCompleted ? 'cursor-not-allowed opacity-50' : ''}`}
          >
            {isActive && (
              <motion.div
                layoutId="steps-indicator"
                className="absolute inset-0 z-0 bg-white rounded-full shadow-sm"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10">{step}</span>
          </button>
        );
      })}
    </div>
  );
}