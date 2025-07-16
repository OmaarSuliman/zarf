// app/dashboard/profile/page.js

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Save } from 'lucide-react';
import { AnimatedPillButton } from '../../../components/buttons';
import { AnimatedInput } from '../../../components/inputs';

export default function ProfilePage() {
  const [username, setUsername] = useState('Abdelrahman');
  const [email, setEmail] = useState('user@example.com');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaving(true);
    // Simulate API call
    setTimeout(() => {
        setIsSaving(false);
        alert('Profile saved!');
    }, 1500);
  };


  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="bg-white p-6 md:p-8 rounded-2xl border border-zinc-200/80 shadow-sm"
    >
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-zinc-400" />
        </div>
        <div>
            <h2 className="text-2xl font-bold text-zinc-800">Profile & Settings</h2>
            <p className="mt-1 text-zinc-500">Manage your account details.</p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-6 max-w-lg">
        <AnimatedInput
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <AnimatedInput
            label="Email Address"
            type="email"
            value={email}
            disabled // Don't allow email changes for now
        />
        <div className="pt-4 border-t border-zinc-200">
            <AnimatedPillButton type="submit" loading={isSaving}>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
            </AnimatedPillButton>
        </div>
      </form>

    </motion.div>
  );
}