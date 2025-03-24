'use client';

import React from 'react';
import { 
  FaDatabase, 
  FaGitAlt, 
  FaDocker, 
  FaJava, 
  FaGithub, 
  FaAndroid,
  FaUnity,
  FaCode,
  FaBrain
} from 'react-icons/fa';
import { 
  SiUnrealengine, 
  SiCplusplus,
  SiPostgresql,
  SiMysql,
} from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { motion } from 'framer-motion';

interface SkillsSectionProps {
  className?: string;
}

const skills = [
  { name: 'Unreal Engine', icon: SiUnrealengine, color: 'text-white' },
  { name: 'Unity', icon: FaUnity, color: 'text-gray-200' },
  { name: 'C++', icon: SiCplusplus, color: 'text-blue-500' },
  { name: 'Java', icon: FaJava, color: 'text-red-500' },
  { name: 'GitHub', icon: FaGithub, color: 'text-white' },
  { name: 'Android', icon: FaAndroid, color: 'text-green-500' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
  { name: 'MySQL', icon: SiMysql, color: 'text-orange-500' },
  { name: 'VS Code', icon: VscCode, color: 'text-blue-500' },
  { name: 'Git', icon: FaGitAlt, color: 'text-red-500' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
  { name: 'ChatGPT', icon: FaBrain, color: 'text-green-400' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const skillVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.8
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const SkillsSection: React.FC<SkillsSectionProps> = ({ className = '' }) => {
  return (
    <motion.section 
      id="skills" 
      className={`${className} py-20`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Skills</h2>
          <p className="text-xl text-gray-400 mb-12">Technologies I work with</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              variants={skillVariants}
              whileHover={{ 
                scale: 1.05,
                rotate: [0, -2, 2, -2, 0],
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-dark-light rounded-xl p-6 text-center shadow-lg backdrop-blur-sm bg-opacity-80"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ 
                  rotate: 360,
                  transition: { duration: 0.6, ease: "easeInOut" }
                }}
              >
                <skill.icon className={`w-12 h-12 mx-auto mb-4 ${skill.color}`} />
              </motion.div>
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection; 