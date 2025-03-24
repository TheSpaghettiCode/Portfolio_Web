'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaBriefcase, FaCalendarAlt, FaBuilding, FaExternalLinkAlt } from 'react-icons/fa';

interface TimelineItem {
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

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative">
      {/* Linea verticale */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20" />

      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className={`relative mb-12 flex ${
            index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
          }`}
        >
          {/* Punto sulla timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full z-10" />

          {/* Contenuto */}
          <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-gray-800/70 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                {item.logo && (
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                    <Image
                      src={item.logo}
                      alt={`${item.company} logo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-bold text-white">{item.company}</h3>
                  <div className="flex items-center gap-2 text-gray-400">
                    <FaBriefcase className="text-primary" />
                    <span>{item.position}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-gray-400 mb-4">
                <FaCalendarAlt className="text-primary" />
                <span>{item.period}</span>
              </div>

              {/* Tecnologie */}
              <div className="flex flex-wrap gap-2 mb-4">
                {item.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Responsabilità */}
              <div className="space-y-2 mb-4">
                {item.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2 text-gray-300">
                    <span className="text-primary mt-1">•</span>
                    <span>{resp}</span>
                  </div>
                ))}
              </div>

              {/* Progetti */}
              {item.projects.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Progetti Principali:</h4>
                  <div className="space-y-2">
                    {item.projects.map((project, i) => (
                      <a
                        key={i}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <span>{project.name}</span>
                        <FaExternalLinkAlt size={12} />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline; 