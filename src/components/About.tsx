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
            I'm a wildlife photographer with a passion for capturing the untamed beauty of
            nature. With over a decade behind the lens, I've tracked snow leopards in the
            Himalayas, documented bird migrations across continents, and spent countless
            golden hours waiting for the perfect moment.
          </p>
          <p style={styles.body}>
            My work has been featured in National Geographic, BBC Wildlife, and exhibited
            in galleries across Europe and Asia. Every photograph is a testament to the
            extraordinary diversity of life on our planet — and a reminder of what we
            must protect.
          </p>
          <div style={styles.stats}>
            {[['12+', 'Years Shooting'], ['40+', 'Countries Visited'], ['200+', 'Species Documented']].map(
              ([num, label]) => (
                <div key={label} style={styles.stat}>
                  <span style={styles.statNum}>{num}</span>
                  <span style={styles.statLabel}>{label}</span>
                </div>
              ),
            )}
          </div>
        </div>

        <div className={`fade-in${inView ? ' visible' : ''}`} style={{...styles.imageWrap, transitionDelay: '0.2s'}}>
          {/* Replace with your portrait: /images/about/portrait.webp */}
          <img
            src="https://picsum.photos/seed/portrait01/600/750"
            alt="Wildlife photographer in the field"
            style={styles.portrait}
          />
          <div style={styles.imageCaption}>In the field, Serengeti 2024</div>
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
