// app/dashboard/page.js

'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// --- FIX: Correct the import path ---
import { useZarf } from '../context/ZarfContext';
import { Send, ArrowLeft, ArrowRight, Check, Clipboard, RefreshCw } from 'lucide-react';
import { AnimatedDropdown } from '../../components/inputs';
import { AnimatedPillButton, AnimatedGhostButton } from '../../components/buttons';
import Steps from '../../components/steps';

const MAX_MESSAGE_LENGTH = 150;
const fontOptions = [
    { value: 'var(--font-inter)', label: 'Default' },
    { value: 'var(--font-comfortaa)', label: 'Comfortaa' },
    { value: 'var(--font-dancing-script)', label: 'Dancing Script' },
    { value: 'var(--font-lora)', label: 'Lora' },
    { value: 'var(--font-caveat)', label: 'Caveat' },
    { value: 'var(--font-pacifico)', label: 'Pacifico' },
    { value: 'var(--font-shadows)', label: 'Shadows Into Light' },
    { value: 'var(--font-poppins)', label: 'Poppins' },
    { value: 'var(--font-roboto-mono)', label: 'Roboto Mono' },
    { value: 'var(--font-playfair)', label: 'Playfair Display' },
    { value: 'var(--font-oswald)', label: 'Oswald' },
    { value: 'var(--font-raleway)', label: 'Raleway' },
    { value: 'var(--font-montserrat)', label: 'Montserrat' },
    { value: 'var(--font-indie-flower)', label: 'Indie Flower' },
];
const stepNames = ["Front", "Back", "Finalize", "Share"];

export default function CreateNewZarfPage() {
  const { formState, handleStateChange, resetFormState } = useZarf();
  const [currentStep, setCurrentStep] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  const handleGenerateLink = () => {
    const params = new URLSearchParams();
    params.append('m1', encodeURIComponent(formState.messageOne));
    params.append('f1', encodeURIComponent(formState.fontOne));
    params.append('m2', encodeURIComponent(formState.messageTwo));
    params.append('f2', encodeURIComponent(formState.fontTwo));
    const link = `/v/${formState.customSlug}?${params.toString()}`;
    handleStateChange('generatedLink', link);
    setCurrentStep(3);
  };

  const handleCopyLink = () => {
    const fullUrl = `${window.location.origin}${formState.generatedLink}`;
    navigator.clipboard.writeText(fullUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  
  const handleCreateAnother = () => {
    resetFormState();
    setCurrentStep(0);
  };
  
  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
      <div className="mt-8 flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full lg:w-1/3 lg:sticky top-28 order-1 lg:order-2">
          <h3 className="font-semibold text-zinc-800 px-2 mb-2">Live Preview</h3>
          <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-2xl flex items-center justify-center p-4 border border-zinc-200/80 overflow-hidden">
            <div className="relative w-[90%] h-[90%] bg-white rounded-lg shadow-xl flex flex-col items-center justify-center p-6 text-center" style={{ fontFamily: currentStep === 0 ? formState.fontOne : formState.fontTwo }}>
              <AnimatePresence mode="wait">
                <motion.div key={currentStep} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }} className="w-full">
                  <p className="text-xl font-medium tracking-wide break-words">
                    {currentStep <= 1 ? (currentStep === 0 ? formState.messageOne : formState.messageTwo) : "Ready to share!"}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="w-full lg:flex-1 bg-white p-6 md:p-8 rounded-2xl border border-zinc-200/80 shadow-sm order-2 lg:order-1">
          <Steps steps={stepNames} currentStep={currentStep} setCurrentStep={setCurrentStep} />
          <AnimatePresence mode="wait">
            <motion.div key={currentStep} variants={stepVariants} initial="hidden" animate="visible" exit="exit" transition={{ duration: 0.3, ease: 'easeInOut' }}>
              {currentStep === 0 && (
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-center mb-2"><label className="text-sm font-medium text-zinc-600">Front Message</label><span className="text-xs font-medium text-zinc-400">{formState.messageOne.length}/{MAX_MESSAGE_LENGTH}</span></div>
                    <textarea value={formState.messageOne} onChange={(e) => handleStateChange('messageOne', e.target.value)} maxLength={MAX_MESSAGE_LENGTH} rows={4} className="w-full p-3 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                  </div>
                  <AnimatedDropdown label="Font Style" options={fontOptions} value={formState.fontOne} onChange={(v) => handleStateChange('fontOne', v)} />
                </div>
              )}
              {currentStep === 1 && (
                 <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-center mb-2"><label className="text-sm font-medium text-zinc-600">Back Message (Surprise)</label><span className="text-xs font-medium text-zinc-400">{formState.messageTwo.length}/{MAX_MESSAGE_LENGTH}</span></div>
                    <textarea value={formState.messageTwo} onChange={(e) => handleStateChange('messageTwo', e.target.value)} maxLength={MAX_MESSAGE_LENGTH} rows={4} className="w-full p-3 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                  </div>
                  <AnimatedDropdown label="Font Style" options={fontOptions} value={formState.fontTwo} onChange={(v) => handleStateChange('fontTwo', v)} />
                </div>
              )}
              {currentStep === 2 && (
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-zinc-800">Choose Your Link</h3>
                    <p className="text-sm text-zinc-500">Make it personal! This will be the public URL for your Zarf.</p>
                    <div className="flex items-center gap-2 p-3 bg-zinc-100 border border-zinc-200 rounded-xl">
                        <span className="text-zinc-400 text-sm">zarf.com/v/</span>
                        <input type="text" value={formState.customSlug} onChange={(e) => handleStateChange('customSlug', e.target.value.replace(/\s+/g, '-').toLowerCase())} className="flex-1 bg-transparent focus:outline-none text-zinc-800 font-medium"/>
                    </div>
                </div>
              )}
              {currentStep === 3 && (
                <div className="space-y-4 text-center">
                    <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center"><Check className="w-8 h-8 text-green-600" /></div>
                    <h3 className="text-lg font-semibold text-zinc-800">Your Zarf is Ready!</h3>
                    <p className="text-sm text-zinc-500">Copy the link below and share it with someone special.</p>
                    <div className="flex items-center gap-2 p-3 bg-zinc-100 border border-zinc-200 rounded-xl">
                        <input type="text" value={`${typeof window !== 'undefined' ? window.location.origin : ''}${formState.generatedLink}`} readOnly className="flex-1 bg-transparent focus:outline-none text-blue-600 text-sm"/>
                        <button onClick={handleCopyLink} className="text-sm font-medium px-3 py-1 bg-white rounded-md border shadow-sm">
                            {isCopied ? <Check size={16} className="text-green-500"/> : <Clipboard size={16} />}
                        </button>
                    </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
          
          <div className="pt-8 mt-8 border-t flex justify-between items-center">
             {currentStep < 3 ? (
                <>
                    <AnimatedGhostButton onClick={() => setCurrentStep(s => Math.max(0, s - 1))} disabled={currentStep === 0}>
                        <ArrowLeft className="mr-2 h-4 w-4"/> Back
                    </AnimatedGhostButton>
                    {currentStep < 2 ? (
                        <AnimatedPillButton onClick={() => setCurrentStep(s => s + 1)}>Next <ArrowRight className="ml-2 h-4 w-4"/></AnimatedPillButton>
                    ) : (
                        <AnimatedPillButton onClick={handleGenerateLink} className="bg-green-600 hover:bg-green-700">
                            Generate Link <Send className="ml-2 h-4 w-4"/>
                        </AnimatedPillButton>
                    )}
                </>
             ) : (
                <AnimatedGhostButton onClick={handleCreateAnother} className="w-full">
                    <RefreshCw className="mr-2 h-4 w-4"/> Create Another Zarf
                </AnimatedGhostButton>
             )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}