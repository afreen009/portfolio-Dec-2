import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className="hoverable theme-toggle"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'relative',
        width: 70,
        height: 36,
        borderRadius: 20,
        border: 'none',
        cursor: 'pointer',
        background: isDark 
          ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)' 
          : 'linear-gradient(135deg, #87CEEB 0%, #98D8F0 100%)',
        boxShadow: isDark 
          ? 'inset 0 2px 10px rgba(0, 0, 0, 0.3), 0 2px 10px rgba(0, 212, 170, 0.2)' 
          : 'inset 0 2px 10px rgba(255, 255, 255, 0.3), 0 2px 10px rgba(255, 200, 50, 0.3)',
        overflow: 'hidden',
        transition: 'background 0.5s ease, box-shadow 0.5s ease',
      }}
    >
      {/* Stars (visible in dark mode) */}
      <AnimatePresence>
        {isDark && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                position: 'absolute',
                top: 8,
                left: 12,
                width: 3,
                height: 3,
                borderRadius: '50%',
                background: '#fff',
                boxShadow: '0 0 4px #fff',
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                position: 'absolute',
                top: 18,
                left: 20,
                width: 2,
                height: 2,
                borderRadius: '50%',
                background: '#fff',
                boxShadow: '0 0 3px #fff',
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.4 }}
              style={{
                position: 'absolute',
                top: 6,
                left: 28,
                width: 2,
                height: 2,
                borderRadius: '50%',
                background: '#fff',
                boxShadow: '0 0 3px #fff',
              }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Clouds (visible in light mode) */}
      <AnimatePresence>
        {!isDark && (
          <>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.8, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              style={{
                position: 'absolute',
                top: 6,
                left: 8,
                width: 18,
                height: 10,
                borderRadius: 10,
                background: 'rgba(255, 255, 255, 0.9)',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
            />
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.6, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              style={{
                position: 'absolute',
                top: 20,
                left: 14,
                width: 14,
                height: 8,
                borderRadius: 8,
                background: 'rgba(255, 255, 255, 0.7)',
              }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Sun/Moon Toggle */}
      <motion.div
        animate={{
          x: isDark ? 4 : 36,
          rotate: isDark ? 0 : 360,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
        }}
        style={{
          position: 'absolute',
          top: 4,
          width: 28,
          height: 28,
          borderRadius: '50%',
          background: isDark 
            ? 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)' 
            : 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
          boxShadow: isDark 
            ? 'inset -3px -3px 6px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(255, 255, 255, 0.3)' 
            : '0 0 20px rgba(255, 200, 50, 0.6), 0 2px 8px rgba(255, 165, 0, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Moon craters */}
        <AnimatePresence>
          {isDark && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                exit={{ opacity: 0 }}
                style={{
                  position: 'absolute',
                  top: 6,
                  left: 8,
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#ccc',
                }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                exit={{ opacity: 0 }}
                style={{
                  position: 'absolute',
                  top: 14,
                  left: 14,
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  background: '#bbb',
                }}
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.25 }}
                exit={{ opacity: 0 }}
                style={{
                  position: 'absolute',
                  top: 8,
                  left: 16,
                  width: 3,
                  height: 3,
                  borderRadius: '50%',
                  background: '#ccc',
                }}
              />
            </>
          )}
        </AnimatePresence>

        {/* Sun rays */}
        <AnimatePresence>
          {!isDark && (
            <>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <motion.div
                  key={angle}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    position: 'absolute',
                    width: 3,
                    height: 6,
                    background: 'linear-gradient(to top, #FFD700, transparent)',
                    borderRadius: 2,
                    transform: `rotate(${angle}deg) translateY(-18px)`,
                    transformOrigin: 'center center',
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;


