import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "15+", label: "Open Source" },
  ];

  return (
    <section id="about" className="section" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        About Me
      </motion.h2>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 60,
        alignItems: 'center',
      }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#8888a0', 
            lineHeight: 2,
            marginBottom: 30,
          }}>
            I'm a passionate <span style={{ color: '#00d4aa' }}>React Developer</span> with 
            over 5 years of experience building scalable web applications. I specialize in 
            creating performant, accessible, and visually stunning user interfaces.
          </p>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#8888a0', 
            lineHeight: 2,
            marginBottom: 30,
          }}>
            My journey started with vanilla JavaScript, and I've evolved with the ecosystem 
            to master modern frameworks and tools. I believe in writing 
            <span style={{ color: '#a78bfa' }}> clean, maintainable code</span> that stands 
            the test of time.
          </p>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#8888a0', 
            lineHeight: 2,
          }}>
            When I'm not coding, you'll find me contributing to open-source projects, 
            writing technical articles, or exploring the latest web technologies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 20,
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass-card hoverable"
              style={{ textAlign: 'center', padding: 30 }}
            >
              <h3 style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #00d4aa, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: 10,
              }}>
                {stat.number}
              </h3>
              <p style={{ color: '#8888a0', fontSize: '0.9rem' }}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;


