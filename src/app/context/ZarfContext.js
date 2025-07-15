// context/ZarfContext.js

'use client';

import { createContext, useState, useContext } from 'react';

// 1. Create the Context
const ZarfContext = createContext();

const initialFormState = {
  messageOne: "A message from the heart...",
  fontOne: 'var(--font-inter)',
  messageTwo: "...and a little surprise!",
  fontTwo: 'var(--font-inter)',
  customSlug: `special-note-${Math.random().toString(36).substring(2, 8)}`,
  generatedLink: "",
};

// 2. Create the Provider component
export function ZarfProvider({ children }) {
  const [formState, setFormState] = useState(initialFormState);

  const handleStateChange = (field, value) => {
    setFormState(prev => ({ ...prev, [field]: value }));
  };
  
  const resetFormState = () => {
    setFormState({
        ...initialFormState,
        customSlug: `special-note-${Math.random().toString(36).substring(2, 8)}`,
    });
  };

  return (
    <ZarfContext.Provider value={{ formState, handleStateChange, resetFormState }}>
      {children}
    </ZarfContext.Provider>
  );
}

// 3. Create a custom hook to use the context easily
export function useZarf() {
  return useContext(ZarfContext);
}