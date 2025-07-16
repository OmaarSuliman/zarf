// components/tabs.js

"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const AnimatedTabView = ({ tabs, defaultTab, content }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div className="w-full">
      <div className="flex p-1 bg-gray-200 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex-1 flex items-center justify-center gap-2 px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none ${
              activeTab === tab.id ? 'text-gray-900' : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute inset-0 z-0 bg-white rounded-md shadow-sm"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.icon}</span>
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="relative mt-4 min-h-[120px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="p-6 bg-white rounded-lg border border-gray-200/80"
          >
            {content && content[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};