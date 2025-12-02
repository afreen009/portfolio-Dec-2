import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Korean Cafe",
      description: "A beautifully crafted Korean cafe website (꽃피는 카페 - Blooming Cafe) featuring Korean-style burgers, matcha drinks, online ordering, chat assistant, table reservations, and a stunning Korean aesthetic design.",
      tech: ["HTML", "CSS", "JavaScript"],
      color: "#f472b6",
      gradient: "linear-gradient(135deg, #f472b633, #ec489933)",
      github: "https://github.com/afreen009/korean-cafe",
      live: "https://korean-cafe-website.netlify.app/",
      // Live screenshot from the actual site
      image: "https://api.microlink.io/?url=https://korean-cafe-website.netlify.app&screenshot=true&meta=false&embed=screenshot.url",
    },
    {
      title: "NEXT Grab",
      description: "A Flutter-based mobile application designed to reduce food waste by connecting users with restaurants, bakeries, and grocery stores offering surplus food at discounted prices. Inspired by Too Good To Go, enabling users to browse, purchase, and pick up unsold food while promoting sustainability.",
      tech: ["Flutter", "Firebase", "Google Maps", "Stripe"],
      color: "#4ade80",
      gradient: "linear-gradient(135deg, #4ade8033, #22c55e33)",
      github: "https://github.com/afreen009/FLUTTER--NextGrab",
      live: "#",
      // Mobile app - using placeholder image
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=500&fit=crop",
    },
    {
      title: "Suburbia Skate",
      description: "A skateboard e-commerce platform where users can choose their own design to create custom skateboards. Built to support young skaters and DIY projects, giving back to communities that keep skateboarding alive and evolving.",
      tech: ["React", "Next.js", "GSAP", "Three.js", "Prismic"],
      color: "#00d4aa",
      gradient: "linear-gradient(135deg, #00d4aa33, #00b4d833)",
      github: "https://github.com/afreen009/suburbia-skate",
      live: "https://suburbia-skate.vercel.app/",
      image: "https://api.microlink.io/?url=https://suburbia-skate.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    },
    {
      title: "AI Trip Planner",
      description: "A full-stack AI-powered trip planning application. Users can plan their vacation by providing their preferences, and the site generates personalized trip plans with hotel recommendations using Gemini AI.",
      tech: ["React", "Gemini AI", "Firebase", "TailwindCSS"],
      color: "#a78bfa",
      gradient: "linear-gradient(135deg, #a78bfa33, #8b5cf633)",
      github: "https://github.com/afreen009/AI-TRIP-PLANNER",
      live: "https://ai-trip-planner-liart.vercel.app/",
      // Live screenshot from the actual site
      image: "https://api.microlink.io/?url=https://ai-trip-planner-liart.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    },
    {
      title: "Spotify Clone",
      description: "A responsive Spotify clone built with React and Tailwind CSS. Users can play music from Featured Charts, Biggest Hits, and more with a beautiful, responsive UI that mirrors the Spotify experience.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      color: "#22c55e",
      gradient: "linear-gradient(135deg, #22c55e33, #16a34a33)",
      github: "https://github.com/afreen009/spotify-clone",
      live: "https://shifa-afreen-fahim-spotify-clone.netlify.app/",
      // Live screenshot from the actual site
      image: "https://api.microlink.io/?url=https://shifa-afreen-fahim-spotify-clone.netlify.app&screenshot=true&meta=false&embed=screenshot.url",
    },
    {
      title: "Swolenormos",
      description: "A fitness website where users can generate personalized workout plans based on their choices. Uses predefined data and calculations to create workouts based on muscle groups, strength, and power levels.",
      tech: ["HTML", "CSS", "JavaScript"],
      color: "#ff6b6b",
      gradient: "linear-gradient(135deg, #ff6b6b33, #ef444433)",
      github: "https://github.com/afreen009/swoley-fit-main",
      live: "https://swolenormos.netlify.app/",
      // Live screenshot from the actual site
      image: "https://api.microlink.io/?url=https://swolenormos.netlify.app&screenshot=true&meta=false&embed=screenshot.url",
    },
    {
      title: "rResto",
      description: "A beautifully designed restaurant website featuring an interactive menu, about section, and customer reviews. Styled with modern CSS for an elegant dining experience presentation.",
      tech: ["HTML", "CSS", "JavaScript"],
      color: "#ffd93d",
      gradient: "linear-gradient(135deg, #ffd93d33, #f59e0b33)",
      github: "https://github.com/afreen009/restro-web",
      live: "https://rrresto.netlify.app/",
      // Live screenshot from the actual site
      image: "https://api.microlink.io/?url=https://rrresto.netlify.app&screenshot=true&meta=false&embed=screenshot.url",
    },
  ];

  return (
    <section id="projects" className="section" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Featured Projects
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: 40,
      }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            className="hoverable"
            style={{
              position: 'relative',
              borderRadius: 20,
              overflow: 'hidden',
              background: 'rgba(26, 26, 37, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
            }}
          >
            {/* Project Image/Gradient Background */}
            <div style={{
              height: 220,
              overflow: 'hidden',
              position: 'relative',
              background: project.gradient,
            }}>
              {/* Project Screenshot */}
              {project.image ? (
                <motion.img
                  src={project.image}
                  alt={project.title}
                  animate={{
                    scale: hoveredProject === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                  }}
                  onError={(e) => {
                    // Fallback if image fails to load
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              ) : (
                <>
                  {/* Decorative Elements for Coming Soon */}
                  <motion.div
                    animate={{
                      rotate: hoveredProject === index ? 180 : 0,
                      scale: hoveredProject === index ? 1.2 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                    style={{
                      position: 'absolute',
                      top: 20,
                      right: 20,
                      width: 80,
                      height: 80,
                      border: `2px solid ${project.color}44`,
                      borderRadius: 20,
                    }}
                  />
                  <motion.div
                    animate={{
                      y: hoveredProject === index ? -10 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                    style={{
                      position: 'absolute',
                      bottom: 30,
                      left: 30,
                      width: 60,
                      height: 60,
                      background: `${project.color}22`,
                      borderRadius: '50%',
                    }}
                  />
                  <motion.div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      fontSize: '4rem',
                      opacity: 0.3,
                      color: project.color,
                    }}
                  >
                    {'</>'}
                  </motion.div>
                </>
              )}
              
              {/* Gradient overlay for image */}
              {project.image && (
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  background: `linear-gradient(to top, rgba(10, 10, 15, 0.8), transparent)`,
                  pointerEvents: 'none',
                }} />
              )}
              
              <AnimatePresence>
                {hoveredProject === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(10, 10, 15, 0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 20,
                    }}
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        background: project.color,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0a0a0f',
                      }}
                    >
                      <FiGithub style={{ fontSize: 22 }} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      transition={{ delay: 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        background: '#f0f0f5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#0a0a0f',
                      }}
                    >
                      <FiExternalLink style={{ fontSize: 22 }} />
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div style={{ padding: 30 }}>
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                color: project.color,
                marginBottom: 15,
                fontFamily: "'Sora', sans-serif",
              }}>
                {project.title}
              </h3>
              <p style={{
                color: '#8888a0',
                lineHeight: 1.8,
                marginBottom: 20,
                fontSize: '0.95rem',
              }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="code"
                    style={{
                      padding: '6px 12px',
                      background: `${project.color}15`,
                      color: project.color,
                      borderRadius: 6,
                      fontSize: '0.8rem',
                    }}
                  >
                    {tech}
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

export default Projects;

