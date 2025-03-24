'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, width, height, className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-gray-800 animate-pulse"
        />
      )}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`duration-700 ease-in-out ${
          isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
        }`}
        onLoadingComplete={() => setIsLoading(false)}
        loading="lazy"
        quality={75}
      />
    </div>
  );
};

export default LazyImage; 