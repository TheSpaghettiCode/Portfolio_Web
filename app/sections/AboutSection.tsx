'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';
import { useLanguage } from '../hooks/useLanguage';

const AboutSection = () => {
  const { t } = useLanguage();

  const facts = [
    {
      title: '5+',
      description: 'Years of Experience'
    },
    {
      title: '50+',
      description: 'Projects Completed'
    },
    {
      title: '20+',
      description: 'Happy Clients'
    },
    {
      title: '100%',
      description: 'Success Rate'
    }
  ];

  return (
    <motion.section
      id="about"
      className="py-20"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="container mx-auto px-6">
        <motion.div variants={fadeInUp} className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">{t('about.title')}</h2>
          <p className="text-xl text-gray-400">{t('about.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp}>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t('about.description')}
            </p>
            <motion.button
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={staggerContainer}
          >
            {facts.map((fact, index) => (
              <motion.div
                key={fact.title}
                className="bg-dark-light p-6 rounded-lg text-center"
                variants={fadeInUp}
                custom={index}
              >
                <h3 className="text-3xl font-bold text-primary mb-2">
                  {fact.title}
                </h3>
                <p className="text-gray-400">{fact.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection; 