import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiGraphql, SiTailwindcss, SiRedux, SiMongodb, SiPostgresql, SiAmazonwebservices } from 'react-icons/si';
import { IconType } from 'react-icons';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories: {
    title: string;
    color: string;
    skills: { name: string; icon: IconType; level: number }[];
  }[] = [
    {
      title: "Frontend",
      color: "#00d4aa",
      skills: [
        { name: "React", icon: FaReact, level: 95 },
        { name: "TypeScript", icon: SiTypescript, level: 90 },
        { name: "Next.js", icon: SiNextdotjs, level: 88 },
        { name: "Tailwind CSS", icon: SiTailwindcss, level: 92 },
      ],
    },
    {
      title: "State & Data",
      color: "#a78bfa",
      skills: [
        { name: "Redux", icon: SiRedux, level: 85 },
        { name: "GraphQL", icon: SiGraphql, level: 80 },
        { name: "MongoDB", icon: SiMongodb, level: 78 },
        { name: "PostgreSQL", icon: SiPostgresql, level: 75 },
      ],
    },
    {
      title: "Backend & DevOps",
      color: "#ffd93d",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 82 },
        { name: "Docker", icon: FaDocker, level: 70 },
        { name: "AWS", icon: SiAmazonwebservices, level: 72 },
        { name: "Git", icon: FaGitAlt, level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="section" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Skills & Expertise
      </motion.h2>

      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: 40,
      }}>
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: catIndex * 0.2, duration: 0.6 }}
            className="glass-card"
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: category.color,
              marginBottom: 30,
              fontFamily: "'Sora', sans-serif",
            }}>
              {category.title}
            </h3>

            {category.skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: catIndex * 0.2 + skillIndex * 0.1, duration: 0.4 }}
                style={{ marginBottom: 25 }}
                className="hoverable"
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    {React.createElement(skill.icon, { size: 24, style: { color: category.color } })}
                    <span style={{ color: '#f0f0f5', fontWeight: 500 }}>{skill.name}</span>
                  </div>
                  <span style={{ color: '#8888a0', fontSize: '0.9rem' }}>{skill.level}%</span>
                </div>
                <div style={{
                  height: 6,
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: 3,
                  overflow: 'hidden',
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: catIndex * 0.2 + skillIndex * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                    style={{
                      height: '100%',
                      background: `linear-gradient(90deg, ${category.color}, ${category.color}88)`,
                      borderRadius: 3,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

