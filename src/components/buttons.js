"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

// Reusable tooltip wrapper with Apple-style design
const Tooltip = ({ text, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <AnimatePresence>
        {isHovered && text && (
          <motion.div
            className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-2 rounded-lg bg-gray-800/90 backdrop-blur-md text-white text-sm whitespace-nowrap z-50 shadow-lg"
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          >
            {text}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800/90" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Apple-style spinner
const Spinner = () => (
  <motion.div
    className="animate-spin"
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
  >
    <Loader2 size={16} />
  </motion.div>
);

// Apple-style animations
const appleSpring = { 
  type: "spring", 
  stiffness: 350, 
  damping: 25 
};

const appleTapSpring = { 
  scale: 0.96,
  transition: { duration: 0.1 }
};

const appleHover = { 
  scale: 1.02,
  transition: appleSpring
};

// Reusable Button Wrapper with Apple aesthetics
const AnimatedButton = ({
  children,
  onClick,
  className,
  loading,
  disabled,
  tooltip,
  Icon,
  shape = "full",
  variant = "primary"
}) => {
  const isDisabled = loading || disabled;

  return (
    <Tooltip text={tooltip}>
      <motion.button
        whileTap={isDisabled ? {} : appleTapSpring}
        whileHover={isDisabled ? {} : appleHover}
        transition={appleSpring}
        onClick={isDisabled ? undefined : onClick}
        disabled={isDisabled}
        className={`
          relative flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2
          ${shape === "circle" ? "w-10 h-10 rounded-full" : shape === "pill" ? "px-6 py-2.5 rounded-full" : "px-6 py-2.5 rounded-xl"}
          ${isDisabled ? "opacity-40 cursor-not-allowed" : "shadow-sm hover:shadow-md active:shadow-sm"} 
          transition-shadow duration-200
          ${className}
        `}
      >
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="spinner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Spinner />
            </motion.div>
          ) : Icon ? (
            <motion.div
              key="icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <Icon size={18} />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </Tooltip>
  );
};

// Apple Blue Primary Button (Pill-shaped)
export const AnimatedPillButton = (props) => (
  <AnimatedButton
    {...props}
    shape="pill"
    className={`bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 ${props.className || ""}`}
  />
);

// Apple Blue Primary Button (Square/Rounded)
export const AnimatedSquareButton = (props) => (
  <AnimatedButton
    {...props}
    className={`bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 ${props.className || ""}`}
  />
);

// Apple Secondary Button
export const AnimatedGhostButton = (props) => (
  <AnimatedButton
    {...props}
    className={`border border-gray-300 text-gray-800 bg-white hover:bg-gray-50 active:bg-gray-100 ${props.className || ""}`}
  />
);

// Apple Icon Button
export const AnimatedIconButton = ({ Icon, ...props }) => (
  <AnimatedButton
    {...props}
    Icon={Icon}
    shape="circle"
    className={`bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300 ${props.className || ""}`}
  />
);

// Apple-style Toggle Switch
export const AnimatedToggleButton = ({ isOn, toggle, tooltip }) => (
  <Tooltip text={tooltip}>
    <motion.div
      onClick={toggle}
      className={`w-12 h-7 flex items-center rounded-full p-0.5 cursor-pointer transition-colors duration-200 ${
        isOn ? "bg-green-500 justify-end" : "bg-gray-300 justify-start"
      }`}
      whileTap={{ scale: 0.98 }}
      transition={appleSpring}
    >
      <motion.div
        className="w-6 h-6 bg-white rounded-full shadow-sm"
        layout
        transition={appleSpring}
      />
    </motion.div>
  </Tooltip>
);

// Apple-style Pressable Button
export const AnimatedPressButton = (props) => (
  <AnimatedButton
    {...props}
    shape="rounded"
    className={`bg-gray-100 text-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 active:bg-gray-300 ${props.className || ""}`}
  />
);

// Apple-style Glass Button (like Control Center)
export const AnimatedGlassButton = (props) => (
  <AnimatedButton
    {...props}
    className={`backdrop-blur-xl bg-white/20 border border-white/30 text-white hover:bg-white/30 active:bg-white/40 ${props.className || ""}`}
  />
);

// Apple Destructive Button
export const AnimatedDestructiveButton = (props) => (
  <AnimatedButton
    {...props}
    className={`bg-red-600 text-white hover:bg-red-700 active:bg-red-800 ${props.className || ""}`}
  />
);

// Apple Success Button
export const AnimatedSuccessButton = (props) => (
  <AnimatedButton
    {...props}
    className={`bg-green-600 text-white hover:bg-green-700 active:bg-green-800 ${props.className || ""}`}
  />
);

// Apple Tertiary Button
export const AnimatedTertiaryButton = (props) => (
  <AnimatedButton
    {...props}
    className={`text-blue-600 hover:text-blue-700 active:text-blue-800 hover:bg-blue-50 active:bg-blue-100 ${props.className || ""}`}
  />
);