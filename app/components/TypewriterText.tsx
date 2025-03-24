'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypewriterTextProps {
  words: string[];
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const isWaitingRef = useRef(false);

  // Effetto per il cursore lampeggiante
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // Effetto per l'animazione del testo
  useEffect(() => {
    const typeText = () => {
      const currentWord = words[currentWordIndex];
      
      if (isWaitingRef.current) {
        timeoutRef.current = setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
          isWaitingRef.current = false;
          typeText();
        }, 2500);
        return;
      }

      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
          timeoutRef.current = setTimeout(typeText, 100);
        } else {
          isWaitingRef.current = true;
          setIsWaiting(true);
          timeoutRef.current = setTimeout(typeText, 2500);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
          timeoutRef.current = setTimeout(typeText, 80);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex(prev => (prev + 1) % words.length);
          timeoutRef.current = setTimeout(typeText, 800);
        }
      }
    };

    typeText();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentText, currentWordIndex, isDeleting, words]);

  return (
    <span className="inline-block min-w-[200px] relative">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: {
              duration: 0.2,
              ease: "easeOut",
              opacity: { duration: 0.1 },
              scale: { duration: 0.2 }
            }
          }}
          exit={{ 
            opacity: 0, 
            y: -10, 
            scale: 0.95,
            transition: {
              duration: 0.2,
              ease: "easeIn",
              opacity: { duration: 0.1 },
              scale: { duration: 0.2 }
            }
          }}
          className="text-primary font-bold inline-block"
        >
          {currentText.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.1,
                  delay: index * 0.05,
                  ease: "easeOut"
                }
              }}
              exit={{ 
                opacity: 0, 
                y: -10,
                transition: {
                  duration: 0.1,
                  delay: (currentText.length - index) * 0.05,
                  ease: "easeIn"
                }
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: cursorVisible ? 1 : 0,
          scale: cursorVisible ? 1 : 0.8,
          transition: {
            duration: 0.1,
            ease: "easeOut"
          }
        }}
        className="inline-block w-[4px] h-[1em] bg-primary ml-[2px] align-middle"
      />
    </span>
  );
};

export default TypewriterText; 