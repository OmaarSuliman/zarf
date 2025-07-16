// // components/aurora-background.js

// 'use client';

// import { motion } from 'framer-motion';

// // A single, reusable, animated blob component
// const Blob = ({ className, animationProps }) => (
//   <motion.div
//     className={`absolute rounded-full mix-blend-hard-light filter blur-3xl opacity-20 ${className}`}
//     animate={animationProps.animate}
//     transition={animationProps.transition}
//   />
// );

// export default function AuroraBackground() {
//   const blobs = [
//     {
//       className: "w-96 h-96 bg-blue-500 -top-20 -left-40",
//       animationProps: {
//         animate: { x: [0, 100, 0], y: [0, -50, 0] },
//         transition: { duration: 30, repeat: Infinity, repeatType: 'mirror' }
//       }
//     },
//     {
//       className: "w-72 h-72 bg-rose-500 -bottom-20 -right-20",
//       animationProps: {
//         animate: { x: [0, -80, 0], y: [0, 60, 0] },
//         transition: { duration: 25, repeat: Infinity, repeatType: 'mirror' }
//       }
//     },
//     {
//       className: "w-80 h-80 bg-teal-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
//       animationProps: {
//         animate: { scale: [1, 1.1, 1] },
//         transition: { duration: 20, repeat: Infinity, repeatType: 'mirror' }
//       }
//     },
//     {
//       className: "w-64 h-64 bg-purple-500 top-0 -right-20",
//       animationProps: {
//         animate: { x: [0, 50, 0], y: [0, 80, 0] },
//         transition: { duration: 35, repeat: Infinity, repeatType: 'mirror' }
//       }
//     },
//     {
//       className: "w-96 h-96 bg-yellow-400 bottom-0 -left-32",
//       animationProps: {
//         animate: { x: [0, 70, 0], y: [0, -60, 0] },
//         transition: { duration: 28, repeat: Infinity, repeatType: 'mirror' }
//       }
//     }
//   ];

//   return (
//     <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
//       {blobs.map((blob, i) => (
//         <Blob key={i} className={blob.className} animationProps={blob.animationProps} />
//       ))}
//     </div>
//   );
// }
// components/aurora-background.js

'use client';

import { motion } from 'framer-motion';

// A single, reusable, animated blob component
const Blob = ({ className, animationProps }) => (
  <motion.div
    className={`absolute rounded-full mix-blend-hard-light filter blur-3xl opacity-20 ${className}`}
    animate={animationProps.animate}
    transition={animationProps.transition}
  />
);

export default function AuroraBackground() {
  const blobs = [
    {
      className: "w-96 h-96 bg-blue-500 -top-20 -left-40",
      animationProps: {
        animate: { x: [0, 100, 0], y: [0, -50, 0] },
        transition: { duration: 30, repeat: Infinity, repeatType: 'mirror' }
      }
    },
    {
      className: "w-72 h-72 bg-rose-500 -bottom-20 -right-20",
      animationProps: {
        animate: { x: [0, -80, 0], y: [0, 60, 0] },
        transition: { duration: 25, repeat: Infinity, repeatType: 'mirror' }
      }
    },
    {
      className: "w-80 h-80 bg-teal-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
      animationProps: {
        animate: { scale: [1, 1.1, 1] },
        transition: { duration: 20, repeat: Infinity, repeatType: 'mirror' }
      }
    },
    {
      className: "w-64 h-64 bg-purple-500 top-0 -right-20",
      animationProps: {
        animate: { x: [0, 50, 0], y: [0, 80, 0] },
        transition: { duration: 35, repeat: Infinity, repeatType: 'mirror' }
      }
    },
    {
      className: "w-96 h-96 bg-yellow-400 bottom-0 -left-32",
      animationProps: {
        animate: { x: [0, 70, 0], y: [0, -60, 0] },
        transition: { duration: 28, repeat: Infinity, repeatType: 'mirror' }
      }
    }
  ];

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
      {blobs.map((blob, i) => (
        <Blob key={i} className={blob.className} animationProps={blob.animationProps} />
      ))}
    </div>
  );
}