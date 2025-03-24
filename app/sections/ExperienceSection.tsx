'use client';

import React from 'react';

interface Experience {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    company: 'Tech Company',
    position: 'Senior Mobile Developer',
    period: '2021 - Present',
    responsibilities: [
      'Led the development of multiple high-impact mobile applications',
      'Mentored junior developers and conducted code reviews',
      'Implemented CI/CD pipelines for automated testing and deployment',
      'Optimized app performance and reduced load times by 40%'
    ]
  },
  {
    company: 'Mobile Agency',
    position: 'Mobile Developer',
    period: '2019 - 2021',
    responsibilities: [
      'Developed cross-platform mobile applications using Flutter',
      'Integrated RESTful APIs and implemented offline-first architecture',
      'Collaborated with design team to implement pixel-perfect UI',
      'Maintained and updated existing applications'
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-[#1A202C]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-white mb-12">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 font-mono text-sm"
            >
              <div className="text-gray-400">
                <span className="text-[#22C55E]">const</span>{' '}
                <span className="text-yellow-400">experience_{index + 1}</span>{' '}
                <span className="text-[#22C55E]">=</span>{' '}
                <span className="text-blue-400">{'{'}</span>
              </div>
              <div className="pl-4">
                <div>
                  <span className="text-purple-400">company:</span>{' '}
                  <span className="text-orange-300">'{exp.company}'</span>,
                </div>
                <div>
                  <span className="text-purple-400">position:</span>{' '}
                  <span className="text-orange-300">'{exp.position}'</span>,
                </div>
                <div>
                  <span className="text-purple-400">period:</span>{' '}
                  <span className="text-orange-300">'{exp.period}'</span>,
                </div>
                <div>
                  <span className="text-purple-400">responsibilities:</span>{' '}
                  <span className="text-blue-400">[</span>
                </div>
                {exp.responsibilities.map((resp, i) => (
                  <div key={i} className="pl-4">
                    <span className="text-orange-300">'{resp}'</span>
                    {i < exp.responsibilities.length - 1 ? ',' : ''}
                  </div>
                ))}
                <div>
                  <span className="text-blue-400">]</span>
                </div>
              </div>
              <div className="text-blue-400">{'}'}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 