'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../components/Timeline';

interface Experience {
  company: string;
  position: string;
  period: string;
  logo?: string;
  responsibilities: string[];
  technologies: string[];
  projects: {
    name: string;
    link: string;
    description: string;
  }[];
}

const experiences: Experience[] = [
  {
    company: 'Tech Company',
    position: 'Senior Mobile Developer',
    period: '2021 - Present',
    logo: '/images/tech-company-logo.png',
    responsibilities: [
      'Led the development of multiple high-impact mobile applications',
      'Mentored junior developers and conducted code reviews',
      'Implemented CI/CD pipelines for automated testing and deployment',
      'Optimized app performance and reduced load times by 40%'
    ],
    technologies: ['Flutter', 'React Native', 'Firebase', 'Git', 'CI/CD'],
    projects: [
      {
        name: 'E-Commerce Mobile App',
        link: 'https://ecommerce-app.demo',
        description: 'Cross-platform e-commerce application with 100k+ downloads'
      },
      {
        name: 'Fitness Tracking App',
        link: 'https://fitness-app.demo',
        description: 'Health and fitness tracking application with real-time sync'
      }
    ]
  },
  {
    company: 'Mobile Agency',
    position: 'Mobile Developer',
    period: '2019 - 2021',
    logo: '/images/mobile-agency-logo.png',
    responsibilities: [
      'Developed cross-platform mobile applications using Flutter',
      'Integrated RESTful APIs and implemented offline-first architecture',
      'Collaborated with design team to implement pixel-perfect UI',
      'Maintained and updated existing applications'
    ],
    technologies: ['Flutter', 'Dart', 'REST API', 'SQLite', 'Figma'],
    projects: [
      {
        name: 'Social Media App',
        link: 'https://social-app.demo',
        description: 'Social networking platform with real-time messaging'
      },
      {
        name: 'Food Delivery App',
        link: 'https://food-delivery.demo',
        description: 'Food delivery platform with live tracking'
      }
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-[#1A202C]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Work Experience
            <motion.div
              className="h-1 w-24 bg-primary mx-auto mt-2"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            La mia progressione professionale e le esperienze che hanno plasmato la mia carriera
          </p>
        </motion.div>

        <Timeline items={experiences} />
      </div>
    </section>
  );
};

export default ExperienceSection; 