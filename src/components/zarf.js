// 'use client';
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function AnimatedZarf() {
//   const [opened, setOpened] = useState(false);
//   const [flipped, setFlipped] = useState(false);

//   // --- Animation Variants ---

//   const cutLineVariants = {
//     hidden: { pathLength: 0, opacity: 0 },
//     visible: {
//       pathLength: 1,
//       opacity: 1,
//       transition: { duration: 0.6, ease: 'easeInOut' },
//     },
//   };

//   const envelopeFrontVariants = {
//     closed: { y: 0 },
//     open: {
//       y: '75%',
//       transition: { delay: 0.5, duration: 0.8, ease: [0.25, 1, 0.5, 1] },
//     },
//   };
  
//   const messageCardVariants = {
//     closed: { y: '5%', opacity: 0 },
//     open: {
//       y: '-30%',
//       opacity: 1,
//       transition: { delay: 0.8, duration: 0.8, ease: [0.25, 1, 0.5, 1] },
//     },
//   };

//   const messageContentVariants = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
//     exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
//   };

//   const zigzagPath = "M0 5 L15 2 L30 5 L45 2 L60 5 L75 2 L90 5 L105 2 L120 5 L135 2 L150 5 L165 2 L180 5 L195 2 L210 5 L225 2 L240 5 L255 2 L270 5 L285 2 L300 5 L315 2 L320 5";

//   const NoiseFilter = () => (
//     <svg width="0" height="0" style={{ position: 'absolute' }}>
//       <defs>
//         <filter id="noiseFilter">
//           <feTurbulence
//             type="fractalNoise"
//             baseFrequency="0.65"
//             numOctaves="3"
//             stitchTiles="stitch"
//             result="noise"
//           />
//           <feColorMatrix
//             in="noise"
//             type="matrix"
//             values="1 0 0 0 0
//                     0 1 0 0 0
//                     0 0 1 0 0
//                     0 0 0 -1 1"
//             result="noiseAlpha"
//           />
//           <feComposite
//             in="SourceGraphic"
//             in2="noiseAlpha"
//             operator="in"
//             result="coloredNoise"
//           />
//           <feBlend in="SourceGraphic" in2="coloredNoise" mode="multiply" />
//         </filter>
//       </defs>
//     </svg>
//   );

//   // --- Interaction Handler ---

//   const handleClick = () => {
//     if (!opened) {
//       setOpened(true);
//     } else if (!flipped) {
//       setFlipped(true);
//     } else {
//       setOpened(false);
//       setTimeout(() => setFlipped(false), 800);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="text-center">
//         <div
//           className="relative w-80 h-52 mx-auto cursor-pointer"
//           onClick={handleClick}
//         >
//           {/* Layer 1: Envelope Back (Static) */}
//           <div 
//             className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl border border-gray-200/50"
//             style={{ zIndex: 1 }}
//           />
          
//           {/* Layer 2: The Message Card (Animates Up) */}
//           <motion.div
//             className="absolute inset-0 flex items-center justify-center"
//             style={{ zIndex: 2 }}
//             variants={messageCardVariants}
//             initial="closed"
//             animate={opened ? 'open' : 'closed'}
//           >
//             <NoiseFilter />
//             <div className="w-[90%] h-[90%] shadow-lg rounded-lg flex items-center justify-center p-6 border border-gray-300" style={{ backgroundImage: 'radial-gradient(circle,rgb(255, 255, 255) 90%,rgb(255, 255, 255) 100%)', filter: 'url(#noiseFilter)' }}>
//               <AnimatePresence mode="wait">
//                 {!flipped ? (
//                   <motion.div
//                     key="message1"
//                     className="text-center space-y-2"
//                     variants={messageContentVariants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                   >
//                     <div className="text-4xl mb-2">💌</div>
//                     <p className="text-gray-800 text-xl font-medium tracking-wide px-6">
//                       b7bk ya sisi ❤️
//                     </p>
//                     <p className="text-gray-500 text-sm">tap to continue</p>
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="message2"
//                     className="text-center space-y-2"
//                     variants={messageContentVariants}
//                     initial="initial"
//                     animate="animate"
//                     exit="exit"
//                   >
//                     <div className="text-4xl mb-2">😘</div>
//                     <p className="text-gray-800 text-xl font-medium tracking-wide px-6">
//                       teezak mlbn 😘
//                     </p>
//                     <p className="text-gray-500 text-sm">tap to close</p>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>
//           </motion.div>

//           {/* Layer 3: Envelope Front (Animates Down) - NOW CONTAINS THE ZIGZAG */}
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl"
//             style={{ zIndex: 3 }}
//             variants={envelopeFrontVariants}
//             initial="closed"
//             animate={opened ? 'open' : 'closed'}
//           >
//             {/* Top flap part */}
//             <div className="absolute top-0 left-0 w-full h-[54px]">
//               <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-60" />
//             </div>
//             {/* Address lines part */}
//             <div className="absolute bottom-8 left-8 right-8 space-y-2">
//               <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
//               <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
//               <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-3/4" />
//             </div>

//             {/* The zigzag cut is part of the front panel, so it moves down with it */}
//             <motion.svg
//               className="absolute top-[52px] left-0 w-full h-3 pointer-events-none"
//               viewBox="0 0 320 10"
//               preserveAspectRatio="none"
//               style={{ zIndex: 10 }} // zIndex only needs to be higher than other elements in this div
//             >
//               <motion.path
//                 d={zigzagPath}
//                 stroke="rgba(156, 163, 175, 0.5)"
//                 strokeWidth={1}
//                 fill="none"
//                 variants={cutLineVariants}
//                 initial="hidden"
//                 animate={opened ? 'visible' : 'hidden'}
//               />
//             </motion.svg>
//           </motion.div>
//         </div>

//         {/* Subtle hint */}
//         <motion.p
//           className="text-gray-400 text-sm mt-8"
//           initial={{ opacity: 1 }}
//           animate={{ opacity: opened ? 0 : 1 }}
//           transition={{ duration: 0.3 }}
//         >
//           tap envelope to open
//         </motion.p>
//       </div>
//     </div>
//   );
// }
// components/zarf.js

'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AnimatedZarf({
  messageOne = "Hello There!",
  messageTwo = "You're awesome!",
  fontOne = 'var(--font-inter)',
  fontTwo = 'var(--font-inter)'
}) {
  const [opened, setOpened] = useState(false);
  const [flipped, setFlipped] = useState(false);

  // Use a spring transition for a more natural feel
  const spring = { type: 'spring', stiffness: 300, damping: 30 };

  const envelopeFrontVariants = {
    closed: { y: 0, transition: spring },
    open: { y: '75%', transition: { ...spring, delay: 0.3 } },
  };

  const messageCardVariants = {
    closed: { y: '5%', opacity: 0, scale: 0.95, transition: spring },
    open: { y: '-30%', opacity: 1, scale: 1, transition: { ...spring, delay: 0.5 } },
  };

  const messageContentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const zigzagPath = "M0 5 L15 2 L30 5 L45 2 L60 5 L75 2 L90 5 L105 2 L120 5 L135 2 L150 5 L165 2 L180 5 L195 2 L210 5 L225 2 L240 5 L255 2 L270 5 L285 2 L300 5 L315 2 L320 5";

  const handleClick = () => {
    if (!opened) setOpened(true);
    else if (!flipped) setFlipped(true);
    else {
      setOpened(false);
      setTimeout(() => setFlipped(false), 500); // reduced timeout
    }
  };

  return (
    <div className="text-center">
      <div className="relative w-80 h-52 mx-auto cursor-pointer" onClick={handleClick} style={{ perspective: '1000px' }}>

        {/* Layer 1: Envelope Back (Static) */}
        <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl border border-gray-200/50" style={{ zIndex: 1, transform: 'translateZ(0)' }} />

        {/* Layer 2: The Message Card */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ zIndex: 2, transformStyle: 'preserve-3d' }}
          variants={messageCardVariants}
          initial="closed"
          animate={opened ? 'open' : 'closed'}
        >
          <motion.div
            className="w-[90%] h-[90%] shadow-lg rounded-lg flex items-center justify-center p-6 border border-gray-300 bg-white"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={spring}
          >
            <AnimatePresence mode="wait">
              {!flipped ? (
                <motion.div key="message1" className="text-center space-y-2" style={{ backfaceVisibility: 'hidden' }} variants={messageContentVariants} initial="initial" animate="animate" exit="exit">
                  <div className="text-4xl mb-2"></div>
                  <p className="text-gray-800 text-xl font-medium tracking-wide px-2 break-words" style={{ fontFamily: fontOne }}>
                    {messageOne}
                  </p>
                  <p className="text-gray-500 text-sm font-sans">tap to continue</p>
                </motion.div>
              ) : (
                <motion.div key="message2" className="text-center space-y-2" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }} variants={messageContentVariants} initial="initial" animate="animate" exit="exit">
                   <div className="text-4xl mb-2"></div>
                   <p className="text-gray-800 text-xl font-medium tracking-wide px-2 break-words" style={{ fontFamily: fontTwo }}>
                     {messageTwo}
                   </p>
                   <p className="text-gray-500 text-sm font-sans">tap to close</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Layer 3: Envelope Front */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-2xl"
          style={{ zIndex: 3, transform: 'translateZ(0)' }}
          variants={envelopeFrontVariants}
          initial="closed"
          animate={opened ? 'open' : 'closed'}
        >
          <div className="absolute top-0 left-0 w-full h-[54px]"><div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full opacity-60" /></div>
          <div className="absolute bottom-8 left-8 right-8 space-y-2"><div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" /><div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" /><div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent w-3/4" /></div>
          {/* Path animation is generally performant */}
          <motion.svg className="absolute top-[52px] left-0 w-full h-3 pointer-events-none" viewBox="0 0 320 10" preserveAspectRatio="none">
            <motion.path
                d={zigzagPath}
                stroke="rgba(156, 163, 175, 0.5)"
                strokeWidth={1}
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: opened ? 1 : 0, opacity: opened ? 1 : 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut', delay: opened ? 0.1 : 0 }}
            />
          </motion.svg>
        </motion.div>
      </div>
      <motion.p className="text-gray-400 text-sm mt-8" initial={{ opacity: 1 }} animate={{ opacity: opened ? 0 : 1 }} transition={{ duration: 0.3 }}>
        tap envelope to open
      </motion.p>
    </div>
  );
}