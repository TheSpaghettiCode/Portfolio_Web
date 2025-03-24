'use client';

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';

interface LazyLoadProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const defaultFallback = (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="w-full h-full flex items-center justify-center"
  >
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
  </motion.div>
);

const LazyLoad: React.FC<LazyLoadProps> = ({ 
  children, 
  fallback = defaultFallback 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazyLoad; 