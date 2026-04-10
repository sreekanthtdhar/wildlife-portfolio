import React from 'react';
import {colors} from '../theme/colors';

const socials = [
  {label: 'Instagram', href: '#', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  {label: '500px',    href: '#', icon: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.5a7.5 7.5 0 110 15 7.5 7.5 0 010-15zm0 3a4.5 4.5 0 100 9 4.5 4.5 0 000-9z' },
  {label: 'Twitter',  href: '#', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
];

export function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.brand}>
          <span style={styles.logo}>WILD<span style={styles.logoAccent}>LENS</span></span>
          <p style={styles.tagline}>Photography that speaks for those without a voice.</p>
        </div>

        <div style={styles.socials}>
          {socials.map(s => (
            <a key={s.label} href={s.href} style={styles.socialLink} aria-label={s.label} target="_blank" rel="noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d={s.icon} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div style={styles.bottom}>
        <p style={styles.copy}>© {new Date().getFullYear()} WildLens Photography. All rights reserved.</p>
        <p style={styles.copy}>All images are protected by copyright. No reproduction without permission.</p>
      </div>
    </footer>
  );
}

const styles: Record<string, React.CSSProperties> = {
  footer: {
    background: colors.bgSecondary,
    borderTop: `1px solid ${colors.border}`,
    padding: '60px 0 32px',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 32,
    marginBottom: 48,
  },
  brand: {},
  logo: {
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: 4,
    color: colors.textPrimary,
    fontFamily: 'Inter, sans-serif',
    display: 'block',
    marginBottom: 10,
  },
  logoAccent: {
    color: colors.accentWarm,
  },
  tagline: {
    color: colors.textMuted,
    fontSize: 13,
    fontStyle: 'italic',
  },
  socials: {
    display: 'flex',
    gap: 20,
  },
  socialLink: {
    color: colors.textMuted,
    transition: 'color 0.2s',
    display: 'flex',
    alignItems: 'center',
  },
  bottom: {
    borderTop: `1px solid ${colors.border}`,
    padding: '24px 32px 0',
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 8,
  },
  copy: {
    color: colors.textMuted,
    fontSize: 12,
  },
};
