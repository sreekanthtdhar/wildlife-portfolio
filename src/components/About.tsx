import React from 'react';
import {useInView} from 'react-intersection-observer';
import {colors} from '../theme/colors';

export function About() {
  const {ref, inView} = useInView({triggerOnce: true, rootMargin: '-80px'});

  return (
    <section id="about" style={styles.section}>
      <div ref={ref} style={styles.inner}>
        <div className={`fade-in${inView ? ' visible' : ''}`} style={styles.text}>
          <p style={styles.eyebrow}>The Photographer</p>
          <h2 style={styles.title}>About Me</h2>
          <p style={styles.body}>
            Hi, I'm Sreekanth — a hobbyist wildlife photographer with a love for capturing
            birds in action. Armed with a camera and a lot of patience, I spend my weekends
            exploring local wetlands, parks, and open spaces in search of that perfect moment.
          </p>
          <p style={styles.body}>
            From hummingbirds hovering mid-air to stilts splashing off a marsh at golden hour,
            I'm drawn to the energy and beauty of birds in their natural element. This portfolio
            is a collection of moments that made me stop, wait, and press the shutter.
          </p>
        </div>

        <div className={`fade-in${inView ? ' visible' : ''}`} style={{...styles.imageWrap, transitionDelay: '0.2s'}}>
          {/* Replace with your portrait: /images/about/portrait.webp */}
          <img
            src="https://picsum.photos/seed/portrait01/600/750"
            alt="Wildlife photographer in the field"
            style={styles.portrait}
          />
          <div style={styles.imageCaption}>Sreekanth — wildlife photographer</div>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    background: colors.bgSecondary,
    padding: '100px 0',
  },
  inner: {
    maxWidth: 1100,
    margin: '0 auto',
    padding: '0 32px',
    display: 'grid',
    gridTemplateColumns: '1fr 420px',
    gap: 80,
    alignItems: 'center',
  },
  text: {},
  eyebrow: {
    color: colors.accentWarm,
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 4,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 'clamp(28px, 4vw, 46px)',
    fontWeight: 700,
    marginBottom: 24,
  },
  body: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 1.8,
    marginBottom: 20,
  },
  stats: {
    display: 'flex',
    gap: 40,
    marginTop: 40,
    paddingTop: 40,
    borderTop: `1px solid ${colors.border}`,
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  statNum: {
    color: colors.accentWarm,
    fontSize: 32,
    fontWeight: 700,
    fontFamily: 'Playfair Display, serif',
  },
  statLabel: {
    color: colors.textMuted,
    fontSize: 12,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  imageWrap: {
    position: 'relative',
  },
  portrait: {
    width: '100%',
    borderRadius: 4,
    display: 'block',
    filter: 'grayscale(20%)',
  },
  imageCaption: {
    color: colors.textMuted,
    fontSize: 11,
    marginTop: 10,
    textAlign: 'center',
    letterSpacing: 0.5,
    fontStyle: 'italic',
  },
};
