// app/dashboard/profile/page.js

'use client'; // <-- CRITICAL FIX: Add this line

import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function ProfilePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex flex-col items-center justify-center text-center bg-white p-12 rounded-2xl border border-zinc-200/80 shadow-sm min-h-[400px]"
    >
      <User className="w-16 h-16 text-zinc-300 mb-4" />
      <h2 className="text-2xl font-bold text-zinc-800">Profile & Settings</h2>
      <p className="mt-2 text-zinc-500 max-w-sm">
        Manage your account details and subscription here. This feature is coming soon!
      </p>
    </motion.div>
  );
}