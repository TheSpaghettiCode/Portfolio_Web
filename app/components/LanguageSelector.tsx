'use client';

import React, { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { languages } from '../translations';
import { useLanguage } from '../hooks/useLanguage';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-dark-light hover:bg-dark-light/80 transition-colors"
      >
        <FaGlobe className="text-primary" />
        <span className="text-white">{languages[language]}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-dark-light rounded-lg shadow-lg py-2 z-50">
          {Object.entries(languages).map(([code, name]) => (
            <button
              key={code}
              onClick={() => {
                changeLanguage(code as any);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left hover:bg-dark-light/80 transition-colors ${
                language === code ? 'text-primary' : 'text-white'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector; 