'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useLanguage } from '../hooks/useLanguage';

const certificates = [
  {
    title: 'Flutter Development',
    issuer: 'Google',
    date: '2023',
    image: '/certificates/flutter.jpg'
  },
  {
    title: 'Mobile App Development',
    issuer: 'Udacity',
    date: '2023',
    image: '/certificates/mobile.jpg'
  },
  {
    title: 'Java Programming',
    issuer: 'Oracle',
    date: '2022',
    image: '/certificates/java.jpg'
  }
];

const CertificatesSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Cambia ogni 5 secondi

    return () => clearInterval(interval);
  }, []);

  const nextCertificate = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevCertificate = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.section
      id="certificates"
      className="py-20"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="container mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t('certificates.title')}</h2>
          <p className="text-xl text-gray-400">{t('certificates.subtitle')}</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            className="relative aspect-[16/9] rounded-lg overflow-hidden"
            variants={fadeInUp}
          >
            <div className="absolute inset-0 flex items-center justify-center bg-dark-light">
              <Image
                src={certificates[currentIndex].image}
                alt={certificates[currentIndex].title}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {certificates[currentIndex].title}
              </h3>
              <p className="text-gray-300">
                {certificates[currentIndex].issuer} • {certificates[currentIndex].date}
              </p>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevCertificate}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextCertificate}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary scale-110' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CertificatesSection;