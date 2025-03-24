'use client';

import React from 'react';
import Image from 'next/image';

interface CommunitySectionProps {
  className?: string;
}

const activities = [
  {
    title: 'Meetup Tech',
    description: 'Organizzazione di meetup tecnologici',
    image: '/community/meetup.jpg',
    date: '2023'
  },
  {
    title: 'Hackathon',
    description: 'Partecipazione a hackathon',
    image: '/community/hackathon.jpg',
    date: '2023'
  },
  {
    title: 'Workshop',
    description: 'Conduzione di workshop',
    image: '/community/workshop.jpg',
    date: '2023'
  }
];

const CommunitySection: React.FC<CommunitySectionProps> = ({ className = '' }) => {
  return (
    <section id="community" className={className}>
      <div className="container">
        <h2 className="section-title">Attività Comunitarie</h2>
        <p className="section-subtitle">Il mio contributo alla community</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div key={activity.title} className="card">
              <div className="relative h-48 mb-4">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
              <p className="text-gray-400 mb-2">{activity.description}</p>
              <span className="text-sm text-gray-500">{activity.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySection; 