// // app/dashboard/layout.js

// import React from 'react';
// import DashboardClientLayout from '../context/dashboard-client-layout';

// export default function DashboardLayout({ children }) {
//   return (
//     <div className="min-h-screen bg-zinc-50/50 font-sans">
//       <main className="p-4 sm:p-6 md:p-10">
//         <DashboardClientLayout>
//           {children}
//         </DashboardClientLayout>
//       </main>
//     </div>
//   );
// }

// app/dashboard/layout.js

import React from 'react';
import DashboardClientLayout from '../context/dashboard-client-layout';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-zinc-50/50 font-sans">
      <main className="p-4 sm:p-6 md:p-10">
        <DashboardClientLayout>
          {children}
        </DashboardClientLayout>
      </main>
    </div>
  );
}