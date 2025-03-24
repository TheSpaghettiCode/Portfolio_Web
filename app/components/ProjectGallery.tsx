'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface ProjectGalleryProps {
  images: string[];
  title: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ images, title }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const previousImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="space-y-4">
      {/* Grid delle immagini */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image}
              alt={`${title} - Image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-medium">Clicca per ingrandire</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal per la visualizzazione a schermo intero */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes size={24} />
            </button>

            <button
              className="absolute left-4 text-white hover:text-primary transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
            >
              <FaChevronLeft size={24} />
            </button>

            <button
              className="absolute right-4 text-white hover:text-primary transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <FaChevronRight size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage]}
                alt={`${title} - Image ${selectedImage + 1}`}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectGallery; 