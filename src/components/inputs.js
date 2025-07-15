// components/inputs.js

"use client";
import React, { useState, useRef, useEffect } from "react"; // Added useRef and useEffect
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

const spring = { type: "spring", stiffness: 400, damping: 30 };

// ---------- Input with Validation (FIXED) ----------
export const AnimatedInput = ({
  label,
  type = "text",
  value,
  onChange,
  disabled,
  placeholder = " ", // A single space is crucial for :placeholder-shown to work
  validation = "default",
}) => {
  const borderColors = {
    default: "border-gray-300 focus:border-black",
    success: "border-green-500 focus:border-green-600",
    error: "border-red-500 focus:border-red-600",
  };
  const labelColors = {
    default: "text-gray-500 peer-focus:text-black",
    success: "text-green-600 peer-focus:text-green-600",
    error: "text-red-600 peer-focus:text-red-600",
  };

  const ringClass = borderColors[validation] || borderColors.default;
  const labelClass = labelColors[validation] || labelColors.default;

  return (
    <div className="relative w-full">
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`peer w-full px-4 pt-6 pb-2 text-base bg-white border rounded-xl appearance-none
          focus:outline-none focus:ring-0 transition-colors duration-200
          ${ringClass} ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
      />
      <label
        htmlFor={label}
        className={`absolute left-4 top-4 text-base transition-all duration-200 pointer-events-none
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
          peer-focus:top-2 peer-focus:text-xs
          /* --- FIX: This is more robust than checking the value prop for positioning the label --- */
          -translate-y-1/2 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs
          ${labelClass}
        `}
      >
        {label}
      </label>
    </div>
  );
};


// --- Custom Animated Dropdown (FIXED) ---
export const AnimatedDropdown = ({ label, options = [], value, onChange, disabled }) => {
    const [isOpen, setIsOpen] = useState(false);
    // --- FIX: Add a ref to the component's root element ---
    const dropdownRef = useRef(null);
    
    const selectedOption = options.find((opt) => opt.value === value);
    const selectedLabel = selectedOption ? selectedOption.label : "Select...";
  
    const handleSelect = (optionValue) => {
      if (onChange) {
        onChange(optionValue);
      }
      setIsOpen(false);
    };

    // --- FIX: Add effect to handle clicks outside the dropdown ---
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);
  
    return (
      // --- FIX: Attach the ref here ---
      <div className="relative w-full" ref={dropdownRef}>
        <label className="block text-sm font-medium text-gray-500 mb-1 ml-1">{label}</label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            disabled={disabled}
            className={`w-full flex items-center justify-between bg-white border border-gray-300 rounded-xl px-4 py-3 text-base text-left
              focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition
              ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <span>{selectedLabel}</span>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </motion.div>
          </button>
  
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg p-1"
              >
                {options.map((opt) => (
                  <li
                    key={opt.value}
                    onClick={() => handleSelect(opt.value)}
                    className="p-2 text-base rounded-md hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                  >
                    {opt.label}
                    {value === opt.value && <Check size={16} className="text-blue-500" />}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  };

// ... (Rest of the file: AnimatedSegmentedControl, AnimatedMultiSelect, AnimatedToggle remain the same)
// ---------- Segmented Control (No changes needed) ----------
export const AnimatedSegmentedControl = ({ options = [], value, onChange }) => (
  <div className="inline-flex p-1 bg-gray-200 rounded-full">
    {options.map((opt) => {
      const isActive = opt.value === value;
      return (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none ${
            isActive ? "text-white" : "text-gray-700 hover:text-black"
          }`}
        >
          {isActive && (
            <motion.div
              layoutId="segmented-pill"
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              className="absolute inset-0 bg-black rounded-full"
              style={{ zIndex: 0 }}
            />
          )}
          <span className="relative z-10">{opt.label}</span>
        </button>
      );
    })}
  </div>
);

// ---------- Multi Select (No changes needed) ----------
export const AnimatedMultiSelect = ({ label, options, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (value) => {
    setSelected((current) =>
      current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value]
    );
  };

  return (
    <div className="relative w-full">
      <label className="block text-sm font-medium text-gray-500 mb-1 ml-1">{label}</label>
      <div className="relative">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-white border border-gray-300 rounded-xl p-3 text-left focus:outline-none focus:ring-2 focus:ring-black"
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-700">
              {selected.length > 0 ? `${selected.length} selected` : "Select options..."}
            </span>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </motion.div>
          </div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg"
            >
              <div className="p-2 space-y-1">
                {options.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => toggleOption(opt.value)}
                    className="w-full text-left py-2 px-3 flex items-center justify-between rounded-md hover:bg-gray-100"
                  >
                    <span>{opt.label}</span>
                    {selected.includes(opt.value) && <Check size={16} className="text-black" />}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};


// ---------- Toggle (Corrected) ----------
export const AnimatedToggle = ({ label, value, onChange }) => (
  <div className="flex items-center justify-between w-full max-w-xs p-4 bg-white rounded-xl border border-gray-200">
    <span className="text-gray-700 font-medium">{label}</span>
    <motion.div
      onClick={() => {
          if (onChange) {
            onChange(!value)
          }
        }
      }
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
        value ? "justify-end bg-black" : "justify-start bg-gray-300"
      }`}
      transition={spring}
    >
      <motion.div
        layout
        className="w-6 h-6 bg-white rounded-full shadow-md"
        transition={spring}
      />
    </motion.div>
  </div>
);