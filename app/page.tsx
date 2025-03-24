import React from 'react';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import CertificatesSection from './sections/CertificatesSection';
import CommunitySection from './sections/CommunitySection';
import ContactSection from './sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection className="section-alt" />
      <ExperienceSection />
      <ProjectsSection className="section-alt" />
      <CertificatesSection />
      <CommunitySection className="section-alt" />
      <ContactSection />
    </>
  );
} 