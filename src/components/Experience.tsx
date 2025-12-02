import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      role: "Teaching Assistant",
      company: "BrainStation",
      period: "Aug 2024 - Nov 2024",
      location: "Toronto, Ontario, Canada · Remote",
      type: "Permanent Full-time",
      description: "Assisted in teaching web development courses, providing guidance to students on React, JavaScript, and modern web technologies. Supported curriculum delivery and helped students debug code and understand complex concepts.",
      skills: ["Teaching", "React.js", "JavaScript", "Mentoring"],
      color: "#00d4aa",
    },
    {
      role: "Senior Software Engineer",
      company: "Tech Mahindra",
      period: "Oct 2022 - Oct 2023",
      location: "India · Remote",
      type: "Permanent Full-time",
      description: "Led frontend development initiatives using React.js, implementing responsive designs and optimizing application performance. Collaborated with cross-functional teams to deliver high-quality enterprise solutions.",
      skills: ["React.js", "CSS", "JavaScript", "Team Leadership"],
      color: "#a78bfa",
    },
    {
      role: "Associate Technology Level 2",
      company: "Publicis Sapient",
      period: "Mar 2022 - Oct 2022",
      location: "India · Remote",
      type: "Permanent Full-time",
      description: "Developed mobile applications using Flutter framework, creating cross-platform solutions for clients. Worked on UI/UX implementations and integrated backend APIs for seamless user experiences.",
      skills: ["Flutter", "Dart", "Mobile Development", "API Integration"],
      color: "#ffd93d",
    },
    {
      role: "Flutter Developer",
      company: "Applaunch.io",
      period: "May 2021 - Mar 2022",
      location: "On-site",
      type: "Permanent Full-time",
      description: "Built and maintained Flutter applications from scratch, focusing on clean architecture and reusable components. Implemented state management solutions and integrated third-party services.",
      skills: ["Flutter", "Firebase", "State Management", "UI Development"],
      color: "#ff6b6b",
    },
    {
      role: "Flutter Developer",
      company: "B&I Limited",
      period: "Feb 2020 - Jan 2021",
      location: "Bangalore, Karnataka, India · Remote",
      type: "Contract Full-time",
      description: "Developed cross-platform mobile applications using Flutter. Collaborated with design teams to implement pixel-perfect UIs and ensured smooth app performance across iOS and Android platforms.",
      skills: ["Flutter", "Dart", "Cross-platform", "Mobile Apps"],
      color: "#60a5fa",
    },
  ];

  return (
    <section id="experience" className="section" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Experience
      </motion.h2>

      <div style={{ position: 'relative', maxWidth: 900 }}>
        {/* Timeline line */}
        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: '100%' } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{
            position: 'absolute',
            left: 20,
            top: 0,
            width: 2,
            background: 'linear-gradient(180deg, #00d4aa, #a78bfa, #ffd93d, #ff6b6b, #60a5fa)',
          }}
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role + exp.company}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
            style={{
              position: 'relative',
              paddingLeft: 60,
              marginBottom: 40,
            }}
          >
            {/* Timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: index * 0.15 + 0.5, type: 'spring' }}
              style={{
                position: 'absolute',
                left: 10,
                top: 5,
                width: 22,
                height: 22,
                borderRadius: '50%',
                background: exp.color,
                boxShadow: `0 0 20px ${exp.color}66`,
              }}
            />

            <div className="glass-card hoverable" style={{ marginLeft: 20 }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 12,
                flexWrap: 'wrap',
                gap: 10,
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: exp.color,
                    marginBottom: 5,
                    fontFamily: "'Sora', sans-serif",
                  }}>
                    {exp.role}
                  </h3>
                  <p style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: 4 }}>
                    {exp.company}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                    {exp.location} · {exp.type}
                  </p>
                </div>
                <span className="code" style={{
                  padding: '6px 14px',
                  background: `${exp.color}15`,
                  color: exp.color,
                  borderRadius: 20,
                  fontSize: '0.8rem',
                  whiteSpace: 'nowrap',
                }}>
                  {exp.period}
                </span>
              </div>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16, fontSize: '0.95rem' }}>
                {exp.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {exp.skills.map(skill => (
                  <span
                    key={skill}
                    style={{
                      padding: '6px 14px',
                      background: `${exp.color}10`,
                      border: `1px solid ${exp.color}30`,
                      borderRadius: 20,
                      fontSize: '0.8rem',
                      color: exp.color,
                      fontWeight: 500,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
