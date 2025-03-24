'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectsSectionProps {
  className?: string;
}

interface Project {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  type: 'personal' | 'work';
  links: {
    github?: string;
    live?: string;
  };
}

const projects: Project[] = [
  {
    title: 'Movie Booking App',
    description: 'A fully functional Flutter application for booking movie tickets, built using Flutter Clean Architecture, BLoC, REST API, Firebase Auth, and Unit Tests.',
    images: ['/images/movie-app-1.jpg', '/images/movie-app-2.jpg', '/images/movie-app-3.jpg', '/images/movie-app-4.jpg'],
    technologies: ['Flutter', 'Firebase', 'REST API', 'SQLite'],
    type: 'personal',
    links: {
      github: 'https://github.com/yourusername/movie-booking-app',
      live: 'https://movie-booking-app.demo'
    }
  },
  {
    title: 'Fruit Cutting Game',
    description: 'A fun fruit-cutting game developed with Flutter and Flame, built using Clean Architecture with smooth slicing mechanics and dynamic animations. The leaderboard is stored on GitHub Pages and managed via GitHub Actions.',
    images: ['/images/fruit-game.jpg'],
    technologies: ['Flutter', 'Flame', 'GitHub Actions'],
    type: 'personal',
    links: {
      github: 'https://github.com/yourusername/fruit-cutting-game',
      live: 'https://fruit-cutting-game.demo'
    }
  }
];

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ className = '' }) => {
  const [activeFilter, setActiveFilter] = useState<'personal' | 'work'>('personal');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const projectVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <section id="projects" className={`py-20 bg-[#1A202C] ${className}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Projects
            <motion.div
              className="h-1 w-24 bg-primary mx-auto mt-2"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </h2>
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => setActiveFilter('personal')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'personal'
                ? 'bg-primary text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              Personal Projects
            </span>
          </motion.button>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => setActiveFilter('work')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'work'
                ? 'bg-primary text-white'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full" />
              Work/Client Projects
            </span>
          </motion.button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {projects
            .filter(project => project.type === activeFilter)
            .map((project, index) => (
              <motion.div
                key={index}
                variants={projectVariants}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden group hover:bg-gray-800/70 transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative aspect-[4/3] md:aspect-[3/2] overflow-hidden">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.links.github && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-gray-900/80 rounded-full text-white hover:text-primary transition-colors"
                        >
                          <FaGithub size={24} />
                        </motion.a>
                      )}
                      {project.links.live && (
                        <motion.a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-gray-900/80 rounded-full text-white hover:text-primary transition-colors"
                        >
                          <FaExternalLinkAlt size={22} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-between">
                    <div>
                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors"
                      >
                        {project.title}
                      </motion.h3>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-6 mb-6"
                      >
                        <p className="text-gray-300 text-base leading-relaxed">
                          {project.description}
                        </p>
                      </motion.div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-wrap gap-2"
                    >
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection; 