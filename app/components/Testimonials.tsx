'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
  rating: number;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <FaQuoteLeft className="text-primary text-4xl mb-4 mx-auto md:mx-0" />
              <p className="text-gray-300 text-lg mb-6 italic">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < testimonials[currentIndex].rating
                        ? 'text-yellow-400'
                        : 'text-gray-600'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <div>
                <h4 className="text-xl font-bold text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-400">
                  {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={previousTestimonial}
          className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
        >
          <FaChevronLeft className="text-white" />
        </button>
        <button
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
        >
          <FaChevronRight className="text-white" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-primary' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials; 