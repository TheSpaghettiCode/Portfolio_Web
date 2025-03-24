'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  navVariants, 
  navItemVariants, 
  mobileMenuVariants, 
  mobileNavItemVariants 
} from '../utils/animations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Aggiorna la sezione attiva durante lo scroll
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;
      
      sections.forEach(section => {
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId || '');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home', id: 'home' },
    { href: '/#about', label: 'About', id: 'about' },
    { href: '/#skills', label: 'Skills', id: 'skills' },
    { href: '/#experience', label: 'Experience', id: 'experience' },
    { href: '/#projects', label: 'Projects', id: 'projects' },
    { href: '/#certificates', label: 'Certificates', id: 'certificates' },
    { href: '/#community', label: 'Community', id: 'community' },
    { href: '/#contact', label: 'Contact', id: 'contact' },
  ];

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-dark/95 backdrop-blur-md shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/" 
              className="text-2xl font-bold text-primary hover:text-primary/90 transition-colors"
            >
              Portfolio
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    activeSection === item.id ? 'text-primary' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                    initial={false}
                    animate={{ 
                      width: activeSection === item.id ? '100%' : '0%',
                      opacity: activeSection === item.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden text-white/80 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="md:hidden overflow-hidden bg-dark/95 backdrop-blur-md mt-4 rounded-lg"
            >
              <div className="py-4 space-y-4">
                {navItems.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={mobileNavItemVariants}
                  >
                    <Link
                      href={item.href}
                      className={`block text-sm font-medium transition-colors px-6 py-2 ${
                        activeSection === item.id ? 'text-primary' : 'text-white/80 hover:text-white'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 