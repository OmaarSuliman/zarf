// // app/dashboard/my-zarfs/page.js

// 'use client';

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { AnimatedIconButton } from '../../../components/buttons';
// import { Mail, Trash2, Inbox } from 'lucide-react';
// // import { Oswald } from 'next/font/google';

// // --- MOCK DATA ---
// // In a real application, this data would come from your database.
// const mockZarfs = [
//   {
//     id: 1,
//     slug: 'for-my-best-friend',
//     messageOne: 'Happy Birthday! Hope you have a great day.',
//     createdAt: new Date('2023-10-26T10:00:00Z'),
//   },
//   {
//     id: 2,
//     slug: 'a-simple-thank-you',
//     messageOne: 'Just wanted to say thank you for everything.',
//     createdAt: new Date('2023-10-24T15:30:00Z'),
//   },
//   {
//     id: 3,
//     slug: 'special-note-x7y2z1',
//     messageOne: 'Thinking of you!',
//     createdAt: new Date('2023-09-15T11:45:00Z'),
//   },
//   {
//     id: 4,
//     slug: 'b7bk-ya-sisi',
//     messageOne: 'b7bk ya sisi ❤️',
//     createdAt: new Date(),
//   },
// ];

// // --- ZarfListItem Component ---
// // A self-contained component for each item in the list.
// const ZarfListItem = ({ zarf, onDelete }) => {
//   return (
//     <motion.li
//       layout
//       initial={{ opacity: 0, y: 20, scale: 0.98 }}
//       animate={{ opacity: 1, y: 0, scale: 1 }}
//       exit={{ opacity: 0, x: -50, height: 0, padding: 0, margin: 0, border: 0 }}
//       transition={{ duration: 0.3, ease: 'easeInOut' }}
//       className="bg-white p-4 rounded-xl border border-zinc-200/80 shadow-sm hover:border-zinc-300 hover:shadow-md transition-all duration-200 flex items-center gap-4"
//     >
//       <div className="bg-zinc-100 p-3 rounded-lg">
//         <Mail className="w-5 h-5 text-zinc-500" />
//       </div>
//       <div className="flex-1">
//         <p className="font-semibold text-zinc-800 text-sm truncate">/{zarf.slug}</p>
//         <p className="text-zinc-500 text-xs truncate">
//           {zarf.messageOne} • Created on{' '}
//           {zarf.createdAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
//         </p>
//       </div>
//       <AnimatedIconButton 
//         Icon={Trash2} 
//         onClick={() => onDelete(zarf.id)}
//         tooltip="Delete Zarf"
//         className="text-red-500 bg-red-50 hover:bg-red-100 active:bg-red-200"
//       />
//     </motion.li>
//   );
// };


// // --- Main Page Component ---
// export default function MyZarfsPage() {
//   const [zarfs, setZarfs] = useState(mockZarfs);

//   // This function handles the deletion of a zarf from the list.
//   const handleDeleteZarf = (idToDelete) => {
//     setZarfs(currentZarfs => currentZarfs.filter(zarf => zarf.id !== idToDelete));
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 10 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3, ease: "easeOut" }}
//     >
//       {zarfs.length === 0 ? (
//         // --- EMPTY STATE ---
//         // This shows up when all zarfs have been deleted.
//         <div className="flex flex-col items-center justify-center text-center bg-zinc-50 p-12 rounded-2xl border border-dashed border-zinc-300 min-h-[400px]">
//           <Inbox className="w-16 h-16 text-zinc-400 mb-4" />
//           <h2 className="text-2xl font-bold text-zinc-800">Your Zarfs will appear here</h2>
//           <p className="mt-2 text-zinc-500 max-w-sm">
//             Go to the &quot;Create New&quot; tab to make your first one!
//           </p>
//         </div>
//       ) : (
//         // --- LIST VIEW ---
//         // This shows the list of zarfs.
//         <ul className="space-y-3">
//           <AnimatePresence>
//             {zarfs.map(zarf => (
//               <ZarfListItem 
//                 key={zarf.id} 
//                 zarf={zarf} 
//                 onDelete={handleDeleteZarf} 
//               />
//             ))}
//           </AnimatePresence>
//         </ul>
//       )}
//     </motion.div>
//   );
// }
// app/dashboard/my-zarfs/page.js

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedIconButton } from '../../../components/buttons';
import { Mail, Trash2, Inbox } from 'lucide-react';

// MOCK DATA
const mockZarfs = [
  {
    id: 1,
    slug: 'for-my-best-friend',
    messageOne: 'Happy Birthday! Hope you have a great day.',
    createdAt: new Date('2023-10-26T10:00:00Z'),
  },
  {
    id: 2,
    slug: 'a-simple-thank-you',
    messageOne: 'Just wanted to say thank you for everything.',
    createdAt: new Date('2023-10-24T15:30:00Z'),
  },
  {
    id: 3,
    slug: 'special-note-x7y2z1',
    messageOne: 'Thinking of you!',
    createdAt: new Date('2023-09-15T11:45:00Z'),
  },
];

// ZarfListItem Component
const ZarfListItem = ({ zarf, onDelete }) => {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, x: -50, height: 0, padding: 0, margin: 0, border: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="bg-white p-4 rounded-xl border border-zinc-200/80 shadow-sm hover:border-zinc-300 hover:shadow-md transition-all duration-200 flex items-center gap-4"
    >
      <div className="bg-zinc-100 p-3 rounded-lg">
        <Mail className="w-5 h-5 text-zinc-500" />
      </div>
      <div className="flex-1">
        <p className="font-semibold text-zinc-800 text-sm truncate">/{zarf.slug}</p>
        <p className="text-zinc-500 text-xs truncate">
          {zarf.messageOne} • Created on{' '}
          {zarf.createdAt.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
        </p>
      </div>
      <AnimatedIconButton
        Icon={Trash2}
        onClick={() => onDelete(zarf.id)}
        tooltip="Delete Zarf"
        className="text-red-500 bg-red-50 hover:bg-red-100 active:bg-red-200"
      />
    </motion.li>
  );
};


// Main Page Component
export default function MyZarfsPage() {
  const [zarfs, setZarfs] = useState(mockZarfs);

  const handleDeleteZarf = (idToDelete) => {
    setZarfs(currentZarfs => currentZarfs.filter(zarf => zarf.id !== idToDelete));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {zarfs.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center bg-zinc-50 p-12 rounded-2xl border border-dashed border-zinc-300 min-h-[400px]">
          <Inbox className="w-16 h-16 text-zinc-400 mb-4" />
          <h2 className="text-2xl font-bold text-zinc-800">Your Zarfs will appear here</h2>
          <p className="mt-2 text-zinc-500 max-w-sm">
            Go to the "Create New" tab to make your first one!
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          <AnimatePresence>
            {zarfs.map(zarf => (
              <ZarfListItem
                key={zarf.id}
                zarf={zarf}
                onDelete={handleDeleteZarf}
              />
            ))}
          </AnimatePresence>
        </ul>
      )}
    </motion.div>
  );
}