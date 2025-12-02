import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowDown } from 'react-icons/fi';

const Hero: React.FC = () => {
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9] as const,
      },
    }),
  };

  const name = "Shifa Afreen Fahim";
  const title = "React Developer";

  return (
    <section id="hero" className="section" style={{ 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: 300,
          height: 300,
          border: '1px solid rgba(0, 212, 170, 0.2)',
          borderRadius: '50%',
        }}
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          top: '15%',
          right: '12%',
          width: 200,
          height: 200,
          border: '1px solid rgba(167, 139, 250, 0.2)',
          borderRadius: '50%',
        }}
      />
      <motion.div
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: 100,
          height: 100,
          background: 'linear-gradient(135deg, rgba(0, 212, 170, 0.1), rgba(167, 139, 250, 0.1))',
          borderRadius: 20,
          transform: 'rotate(45deg)',
        }}
      />
      <motion.div
        animate={{ x: [-10, 10, -10], y: [10, -10, 10] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '30%',
          left: '15%',
          width: 60,
          height: 60,
          background: 'linear-gradient(135deg, rgba(255, 217, 61, 0.1), rgba(255, 107, 107, 0.1))',
          borderRadius: 15,
        }}
      />

      <div style={{ textAlign: 'center', maxWidth: 900, zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="code"
          style={{
            color: '#00d4aa',
            fontSize: '1.1rem',
            marginBottom: 20,
          }}
        >
          {'// Hello, I\'m'}
        </motion.p>

        <h1 style={{ 
          fontSize: 'clamp(3rem, 10vw, 7rem)',
          fontWeight: 800,
          lineHeight: 1.1,
          marginBottom: 20,
        }}>
          {name.split('').map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              style={{
                display: 'inline-block',
                background: letter === ' ' ? 'none' : 'linear-gradient(135deg, #f0f0f5, #8888a0)',
                WebkitBackgroundClip: letter === ' ' ? 'unset' : 'text',
                WebkitTextFillColor: letter === ' ' ? 'unset' : 'transparent',
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </h1>

        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            fontWeight: 700,
            background: 'linear-gradient(135deg, #00d4aa 0%, #00b4d8 50%, #a78bfa 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: 30,
          }}
        >
          {title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{
            fontSize: '1.2rem',
            color: '#8888a0',
            maxWidth: 600,
            margin: '0 auto 40px',
            lineHeight: 1.8,
          }}
        >
          Crafting exceptional digital experiences with React, TypeScript, and modern web technologies. 
          Passionate about clean code and intuitive user interfaces.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          style={{ display: 'flex', gap: 20, justifyContent: 'center', marginBottom: 50, flexWrap: 'wrap' }}
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="magnetic-button hoverable"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </motion.button>
          <motion.a
            href="/Shifa_Afreen_Fahim_CV.pdf"
            download="Shifa_Afreen_Fahim_CV.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="magnetic-button hoverable"
            style={{
              background: 'linear-gradient(135deg, #00d4aa, #00b4d8)',
              border: 'none',
              color: '#0a0a0f',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Download CV
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          style={{ display: 'flex', gap: 30, justifyContent: 'center' }}
        >
          <motion.a
            href="https://github.com/afreen009"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: '#00d4aa' }}
            className="hoverable"
            style={{ color: '#8888a0', fontSize: '1.5rem', transition: 'color 0.3s' }}
          >
            <FiGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: '#00d4aa' }}
            className="hoverable"
            style={{ color: '#8888a0', fontSize: '1.5rem', transition: 'color 0.3s' }}
          >
            <FiLinkedin />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: '#00d4aa' }}
            className="hoverable"
            style={{ color: '#8888a0', fontSize: '1.5rem', transition: 'color 0.3s' }}
          >
            <FiTwitter />
          </motion.a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hoverable"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: 50,
          left: '50%',
          transform: 'translateX(-50%)',
          color: '#8888a0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FiArrowDown size={24} />
      </motion.a>
    </section>
  );
};

export default Hero;

