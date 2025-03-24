'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaDownload, FaStar, FaCode } from 'react-icons/fa';

interface Metric {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
}

interface ProjectMetricsProps {
  metrics: Metric[];
}

const ProjectMetrics: React.FC<ProjectMetricsProps> = ({ metrics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              {metric.icon}
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white">{metric.label}</h4>
              <p className="text-2xl font-bold text-primary">{metric.value}</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm">{metric.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectMetrics; 