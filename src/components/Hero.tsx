import React from 'react';
import {colors} from '../theme/colors';

export function Hero() {
  return (
    <section id="hero" style={styles.section}>
      {/* Background image — replace with your own hero photo */}
      <div style={styles.bg} />
      <div style={styles.overlay} />

      <div style={styles.content}>
        <p style={styles.eyebrow}>Wildlife Photography</p>
        <h1 style={styles.title}>
          Where Nature<br />
          <span style={styles.titleAccent}>Tells Its Story</span>
        </h1>
        <p style={styles.subtitle}>
          Capturing the raw beauty and untamed spirit of the natural world,
          one frame at a time.
        </p>
        <a href="#gallery" style={styles.cta}>View Gallery</a>
      </div>

      {/* Scroll indicator */}
      <a href="#gallery" style={styles.scrollIndicator} aria-label="Scroll down">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={colors.textSecondary} strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    position: 'relative',
    height: '100vh',
    minHeight: 600,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  bg: {
    position: 'absolute',
    inset: 0,
    // Replace the URL below with your own hero image: url('/images/hero/hero-bg.webp')
    backgroundImage: 'url(https://picsum.photos/seed/herowild/1920/1080)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transform: 'scale(1.05)',
    transition: 'transform 0.1s',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.65) 60%, rgba(26,26,26,1) 100%)',
  },
  content: {
    position: 'relative',
    textAlign: 'center',
    padding: '0 24px',
    maxWidth: 700,
    animation: 'fadeInUp 1s ease both',
  },
  eyebrow: {
    color: colors.accentWarm,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 4,
    textTransform: 'uppercase',
    marginBottom: 20,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 'clamp(42px, 7vw, 80px)',
    fontWeight: 700,
    marginBottom: 24,
    lineHeight: 1.1,
  },
  titleAccent: {
    color: colors.accentWarm,
    fontStyle: 'italic',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 'clamp(15px, 2vw, 18px)',
    lineHeight: 1.7,
    marginBottom: 40,
    maxWidth: 520,
    margin: '0 auto 40px',
  },
  cta: {
    display: 'inline-block',
    border: `1px solid ${colors.accentWarm}`,
    color: colors.accentWarm,
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: 2,
    textTransform: 'uppercase',
    padding: '14px 36px',
    borderRadius: 2,
    transition: 'background 0.2s, color 0.2s',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: 36,
    left: '50%',
    transform: 'translateX(-50%)',
    animation: 'fadeInUp 1.5s ease both',
    opacity: 0.6,
  },
};
