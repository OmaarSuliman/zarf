// app/example/page.js

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedZarf from '../../components/zarf';
import AuroraBackground from '../../components/aurora-background';

export default function ExampleZarfPage() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden">
      <AuroraBackground />

      {/* This blurred overlay now sits on top of the Aurora, creating the effect */}
      <div className="absolute inset-0 z-0 bg-black/10 backdrop-blur-2xl" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <AnimatedZarf
            messageOne="A little something for you!"
            fontOne="var(--font-caveat)"
            messageTwo="أتمنى لك يوماً جميلاً" // "I wish you a beautiful day"
            fontTwo="var(--font-lemonada)"
          />
        </motion.div>
      </div>
    </main>
  );
}