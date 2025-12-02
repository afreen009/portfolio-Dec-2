import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: scrolled ? '15px 10%' : '25px 10%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 1000,
        background: scrolled ? 'var(--nav-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border-color)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="hoverable"
        style={{
          fontFamily: "'Sora', sans-serif",
          fontSize: '1.5rem',
          fontWeight: 800,
          background: 'linear-gradient(135deg, #00d4aa 0%, #a78bfa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          cursor: 'pointer',
        }}
      >
        {'<Dev />'}
      </motion.div>

      {/* Desktop Navigation */}
      <div style={{ 
        display: 'flex', 
        gap: '40px',
        alignItems: 'center',
        '@media (max-width: 768px)': {
          display: 'none',
        },
      } as React.CSSProperties}>
        {navItems.map((item, index) => (
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -2 }}
            className="hoverable nav-link"
            style={{
              fontFamily: "'Sora', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 500,
              color: activeSection === item.toLowerCase() ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              position: 'relative',
              transition: 'color 0.3s ease',
            }}
          >
            {item}
            <AnimatePresence>
              {activeSection === item.toLowerCase() && (
                <motion.div
                  layoutId="activeIndicator"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  exit={{ width: 0 }}
                  style={{
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    height: 2,
                    background: 'var(--gradient-1)',
                    borderRadius: 1,
                  }}
                />
              )}
            </AnimatePresence>
          </motion.a>
        ))}
        
        {/* Theme Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <ThemeToggle />
        </motion.div>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        className="hoverable mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          display: 'none',
          flexDirection: 'column',
          gap: '5px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '10px',
        }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
          style={{ width: 25, height: 2, background: 'var(--accent-cyan)', borderRadius: 2 }}
        />
        <motion.span
          animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
          style={{ width: 25, height: 2, background: 'var(--accent-cyan)', borderRadius: 2 }}
        />
        <motion.span
          animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
          style={{ width: 25, height: 2, background: 'var(--accent-cyan)', borderRadius: 2 }}
        />
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--nav-bg)',
              backdropFilter: 'blur(20px)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              borderBottom: '1px solid var(--border-color)',
            }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="hoverable"
                style={{
                  fontFamily: "'Sora', sans-serif",
                  fontSize: '1rem',
                  fontWeight: 500,
                  color: activeSection === item.toLowerCase() ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                  transition: 'color 0.3s ease',
                }}
              >
                {item}
              </motion.a>
            ))}
            <div style={{ paddingTop: 10 }}>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-link {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;

