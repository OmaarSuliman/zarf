// // src/app/context/dashboard-client-layout.js

// 'use client';

// import React from 'react';
// import { usePathname, useRouter } from 'next/navigation';
// import { motion } from 'framer-motion';
// // --- FIX: The file is in the same folder, so the path is much simpler. ---
// import { ZarfProvider } from './ZarfContext'; 
// import { PlusCircle, Mail, User, Sparkles } from 'lucide-react';

// const FADE_IN_VARIANTS = {
//   hidden: { opacity: 0, y: 10 },
//   show: { opacity: 1, y: 0, transition: { type: 'spring' } },
// };

// export default function DashboardClientLayout({ children }) {
//   const pathname = usePathname();
//   const router = useRouter();

//   const dashboardTabs = [
//     { id: '/dashboard', label: 'Create New', icon: <PlusCircle /> },
//     { id: '/dashboard/my-zarfs', label: 'My Zarfs', icon: <Mail /> },
//     { id: '/dashboard/profile', label: 'Profile', icon: <User /> },
//   ];
  
//   const handleTabClick = (tabId) => {
//     router.push(tabId);
//   };

//   return (
//     <ZarfProvider>
//       <motion.div
//         initial="hidden"
//         animate="show"
//         variants={{ show: { transition: { staggerChildren: 0.1 } } }}
//         className="max-w-7xl mx-auto"
//       >
//         <motion.header variants={FADE_IN_VARIANTS} className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
//           <div>
//             <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 flex items-center gap-2">
//               <Sparkles className="h-8 w-8 text-blue-500" />
//               <span>My Dashboard</span>
//             </h1>
//             <p className="mt-1 text-zinc-500">
//               Welcome back, Abdelrahman! Let&apos;s create something special.
//             </p>
//           </div>
//         </motion.header>
        
//         <motion.div variants={FADE_IN_VARIANTS} className="mt-8">
//           <div className="w-full">
//               <div className="flex p-1 bg-gray-200 rounded-lg">
//                   {dashboardTabs.map((tab) => {
//                       const isActive = pathname === tab.id;
//                       return (
//                           <button
//                               key={tab.id}
//                               onClick={() => handleTabClick(tab.id)}
//                               className={`relative flex-1 flex items-center justify-center gap-2 px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors focus:outline-none ${
//                               isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-800'
//                               }`}
//                               style={{ WebkitTapHighlightColor: "transparent" }}
//                           >
//                               {isActive && (
//                               <motion.div
//                                   layoutId="dashboard-tab-indicator"
//                                   className="absolute inset-0 z-0 bg-white rounded-md shadow-sm"
//                                   transition={{ type: 'spring', stiffness: 350, damping: 30 }}
//                               />
//                               )}
//                               <span className="relative z-10">{tab.icon}</span>
//                               <span className="relative z-10">{tab.label}</span>
//                           </button>
//                       )
//                   })}
//               </div>
//           </div>
//         </motion.div>

//         <div className="relative mt-6">
//           {children}
//         </div>
//       </motion.div>
//     </ZarfProvider>
//   );
// }

// src/app/context/dashboard-client-layout.js

'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
// FIX: The file is in the same folder, so the path is much simpler.
import { ZarfProvider } from './ZarfContext';
import { PlusCircle, Mail, User, Sparkles } from 'lucide-react';

const FADE_IN_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

export default function DashboardClientLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const dashboardTabs = [
    { id: '/dashboard', label: 'Create New', icon: <PlusCircle /> },
    { id: '/dashboard/my-zarfs', label: 'My Zarfs', icon: <Mail /> },
    { id: '/dashboard/profile', label: 'Profile', icon: <User /> },
  ];

  const handleTabClick = (tabId) => {
    router.push(tabId);
  };

  return (
    <ZarfProvider>
      <motion.div
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        className="max-w-7xl mx-auto"
      >
        <motion.header variants={FADE_IN_VARIANTS} className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-blue-500" />
              <span>My Dashboard</span>
            </h1>
            <p className="mt-1 text-zinc-500">
              Welcome back, Abdelrahman! Let&apos;s create something special.
            </p>
          </div>
        </motion.header>

        <motion.div variants={FADE_IN_VARIANTS} className="mt-8">
          <div className="w-full">
              <div className="flex p-1 bg-gray-200 rounded-lg">
                  {dashboardTabs.map((tab) => {
                      const isActive = pathname === tab.id;
                      return (
                          <button
                              key={tab.id}
                              onClick={() => handleTabClick(tab.id)}
                              className={`relative flex-1 flex items-center justify-center gap-2 px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors focus:outline-none ${
                              isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-800'
                              }`}
                              style={{ WebkitTapHighlightColor: "transparent" }}
                          >
                              {isActive && (
                              <motion.div
                                  layoutId="dashboard-tab-indicator"
                                  className="absolute inset-0 z-0 bg-white rounded-md shadow-sm"
                                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                              />
                              )}
                              <span className="relative z-10">{tab.icon}</span>
                              <span className="relative z-10">{tab.label}</span>
                          </button>
                      )
                  })}
              </div>
          </div>
        </motion.div>

        <div className="relative mt-6">
          {children}
        </div>
      </motion.div>
    </ZarfProvider>
  );
}
