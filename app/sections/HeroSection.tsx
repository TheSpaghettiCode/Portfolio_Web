'use client';

import React from 'react';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter, FaUser, FaInstagram, FaYoutube, FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeInUp, slideIn } from '../utils/animations';
import TypewriterText from '../components/TypewriterText';

const HeroSection = () => {
  const roles = [
    'Mobile',
    'Game',
    'Unreal',
    'Unity',
    'Web',
    'Android',
    'C++',
  ];

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      id="home" 
      className="min-h-screen pt-16 flex items-center"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeInUp} className="flex-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              I am a{' '}
              <TypewriterText words={roles} />{' '}
              <span>Developer</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              Passionate about creating beautiful and functional mobile applications
              that make a difference in people&apos;s lives.
            </p>
            <div className="flex items-center gap-6 mb-8">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="GitHub"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="LinkedIn"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Twitter"
              >
                <FaTwitter size={24} />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Instagram"
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="YouTube"
              >
                <FaYoutube size={24} />
              </motion.a>
              <motion.a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Discord"
              >
                <FaDiscord size={24} />
              </motion.a>
            </div>
            <motion.button 
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-lg transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </motion.button>
          </motion.div>
          <motion.div 
            className="relative flex-1 max-w-3xl mx-auto md:ml-auto"
            variants={slideIn}
            custom="right"
          >
            <div className="aspect-square rounded-full overflow-hidden shadow-xl bg-dark-light flex items-center justify-center max-w-[600px] mx-auto">
              <FaUser size={400} className="text-gray-600" />
            </div>
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-primary text-white px-8 py-3 rounded-full text-2xl font-medium shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              Available for work
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection; 