import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck, FiX } from 'react-icons/fi';
import { IconType } from 'react-icons';
import emailjs from '@emailjs/browser';

// EmailJS Configuration - You need to set these up at https://www.emailjs.com/
const EMAILJS_SERVICE_ID = 'service_portfolio'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'template_contact'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

const Contact: React.FC = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactInfo: { icon: IconType; label: string; value: string; href?: string }[] = [
    { icon: FiMail, label: "Email", value: "shifahim22@gmail.com", href: "mailto:shifahim22@gmail.com" },
    { icon: FiMapPin, label: "Location", value: "Toronto, CA" },
    { icon: FiPhone, label: "Phone", value: "+1 (226) 503-0774", href: "tel:+12265030774" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
          to_email: 'shifahim22@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormState({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        Get In Touch
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: 60,
      }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            marginBottom: 40,
          }}>
            I'm always open to discussing new projects, creative ideas, or 
            opportunities to be part of your vision. Let's create something amazing together!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 25 }}>
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.label}
                href={info.href}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className="hoverable"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                  textDecoration: 'none',
                  cursor: info.href ? 'pointer' : 'default',
                }}
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 15,
                    background: 'linear-gradient(135deg, var(--accent-cyan)22, var(--accent-purple)22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {React.createElement(info.icon, { size: 22, color: "var(--accent-cyan)" })}
                </motion.div>
                <div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 3 }}>
                    {info.label}
                  </p>
                  <p style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="glass-card"
          style={{ padding: 40 }}
          onSubmit={handleSubmit}
        >
          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                padding: '16px 20px',
                background: 'rgba(0, 212, 170, 0.1)',
                border: '1px solid var(--accent-cyan)',
                borderRadius: 12,
                marginBottom: 25,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                color: 'var(--accent-cyan)',
              }}
            >
              <FiCheck size={20} />
              <span>Message sent successfully! I'll get back to you soon.</span>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                padding: '16px 20px',
                background: 'rgba(255, 107, 107, 0.1)',
                border: '1px solid var(--accent-coral)',
                borderRadius: 12,
                marginBottom: 25,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                color: 'var(--accent-coral)',
              }}
            >
              <FiX size={20} />
              <span>Failed to send message. Please email me directly at shifahim22@gmail.com</span>
            </motion.div>
          )}

          <div style={{ marginBottom: 25 }}>
            <label style={{
              display: 'block',
              color: 'var(--text-secondary)',
              marginBottom: 10,
              fontSize: '0.9rem',
            }}>
              Your Name
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              name="from_name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="hoverable"
              required
              placeholder="John Doe"
              style={{
                width: '100%',
                padding: '16px 20px',
                background: 'var(--input-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: 12,
                color: 'var(--text-primary)',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--accent-cyan)';
                e.target.style.boxShadow = '0 0 20px var(--shadow-color)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--border-color)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div style={{ marginBottom: 25 }}>
            <label style={{
              display: 'block',
              color: 'var(--text-secondary)',
              marginBottom: 10,
              fontSize: '0.9rem',
            }}>
              Email Address
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="email"
              name="from_email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="hoverable"
              required
              placeholder="john@example.com"
              style={{
                width: '100%',
                padding: '16px 20px',
                background: 'var(--input-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: 12,
                color: 'var(--text-primary)',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--accent-cyan)';
                e.target.style.boxShadow = '0 0 20px var(--shadow-color)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--border-color)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div style={{ marginBottom: 30 }}>
            <label style={{
              display: 'block',
              color: 'var(--text-secondary)',
              marginBottom: 10,
              fontSize: '0.9rem',
            }}>
              Message
            </label>
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              name="message"
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              rows={5}
              className="hoverable"
              required
              placeholder="Hi Shifa, I'd like to discuss a project..."
              style={{
                width: '100%',
                padding: '16px 20px',
                background: 'var(--input-bg)',
                border: '1px solid var(--border-color)',
                borderRadius: 12,
                color: 'var(--text-primary)',
                fontSize: '1rem',
                outline: 'none',
                resize: 'vertical',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                fontFamily: "'DM Sans', sans-serif",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--accent-cyan)';
                e.target.style.boxShadow = '0 0 20px var(--shadow-color)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--border-color)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hoverable"
            style={{
              width: '100%',
              padding: '18px',
              background: isSubmitting 
                ? 'linear-gradient(135deg, var(--accent-cyan)88, #00b4d888)' 
                : 'linear-gradient(135deg, var(--accent-cyan), #00b4d8)',
              border: 'none',
              borderRadius: 12,
              color: '#ffffff',
              fontSize: '1rem',
              fontWeight: 600,
              fontFamily: "'Sora', sans-serif",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              textShadow: '0 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                style={{
                  width: 20,
                  height: 20,
                  border: '2px solid #ffffff',
                  borderTopColor: 'transparent',
                  borderRadius: '50%',
                }}
              />
            ) : (
              <>
                Send Message <FiSend style={{ marginLeft: 8 }} />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        style={{
          marginTop: 100,
          paddingTop: 40,
          borderTop: '1px solid var(--border-color)',
          textAlign: 'center',
        }}
      >
        <p className="code" style={{ color: 'var(--text-secondary)' }}>
          {'</>'} Designed & Built with <span style={{ color: 'var(--accent-coral)' }}>♥</span> by Shifa Afreen Fahim
        </p>
        <p style={{ color: 'var(--text-muted)', marginTop: 10, fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} All rights reserved
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
