// // app/v/[slug]/page.js

// 'use client';

// import React, { Suspense } from 'react';
// import { useSearchParams } from 'next/navigation';
// import { motion } from 'framer-motion';
// // Using path alias for robustness, assuming your jsconfig.json or tsconfig.json is set up
// import AnimatedZarf from '../../../components/zarf';
// import AuroraBackground from '../../../components/aurora-background';


// function ZarfDisplay() {
//   const searchParams = useSearchParams();
//   const messageOne = decodeURIComponent(searchParams.get('m1') || 'Hello!');
//   const fontOne = decodeURIComponent(searchParams.get('f1') || 'var(--font-inter)');
//   const messageTwo = decodeURIComponent(searchParams.get('m2') || 'You are amazing!');
//   const fontTwo = decodeURIComponent(searchParams.get('f2') || 'var(--font-inter)');

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.9 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
//     >
//       <AnimatedZarf
//         messageOne={messageOne}
//         fontOne={fontOne}
//         messageTwo={messageTwo}
//         fontTwo={fontTwo}
//       />
//     </motion.div>
//   );
// }

// export default function ZarfViewerPage() {
//   return (
//     // --- THIS IS THE FIX: Removed the "bg-black" class from main. ---
//     // The main element is now a transparent container.
//     <main className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden">
//       <AuroraBackground />

//       {/* This blurred overlay now sits on top of the Aurora, creating the effect */}
//       <div className="absolute inset-0 z-0 bg-black/10 backdrop-blur-2xl" />

//       <Suspense fallback={<div className="w-80 h-52 bg-white/10 rounded-2xl animate-pulse" />}>
//         <div className="relative z-10">
//           <ZarfDisplay />
//         </div>
//       </Suspense>
//     </main>
//   );
// }

// app/v/[slug]/page.js

'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import AnimatedZarf from '../../../components/zarf';
import AuroraBackground from '../../../components/aurora-background';


function ZarfDisplay() {
  const searchParams = useSearchParams();
  const messageOne = decodeURIComponent(searchParams.get('m1') || 'Hello!');
  const fontOne = decodeURIComponent(searchParams.get('f1') || 'var(--font-inter)');
  const messageTwo = decodeURIComponent(searchParams.get('m2') || 'You are amazing!');
  const fontTwo = decodeURIComponent(searchParams.get('f2') || 'var(--font-inter)');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
    >
      <AnimatedZarf
        messageOne={messageOne}
        fontOne={fontOne}
        messageTwo={messageTwo}
        fontTwo={fontTwo}
      />
    </motion.div>
  );
}

export default function ZarfViewerPage() {
  return (
    // The main element is a transparent container.
    <main className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden">
      <AuroraBackground />

      {/* This blurred overlay now sits on top of the Aurora, creating the effect */}
      <div className="absolute inset-0 z-0 bg-black/10 backdrop-blur-2xl" />

      <Suspense fallback={<div className="w-80 h-52 bg-white/10 rounded-2xl animate-pulse" />}>
        <div className="relative z-10">
          <ZarfDisplay />
        </div>
      </Suspense>
    </main>
  );
}