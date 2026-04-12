import React, {useEffect, useState} from 'react';
import {colors} from '../theme/colors';

const links = ['Gallery', 'About', 'Contact'];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{...styles.nav, ...(scrolled ? styles.navScrolled : {})}}>
      <a href="#hero" style={styles.logo}>WILD<span style={styles.logoAccent}>LENS</span></a>

      {/* Desktop links */}
      <ul style={styles.links}>
        {links.map(link => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} style={styles.link}>{link}</a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button style={styles.hamburger} onClick={() => setMenuOpen(v => !v)} aria-label="Menu">
        <span style={{...styles.bar, ...(menuOpen ? styles.barTop : {})}} />
        <span style={{...styles.bar, opacity: menuOpen ? 0 : 1}} />
        <span style={{...styles.bar, ...(menuOpen ? styles.barBottom : {})}} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={styles.mobileMenu}>
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={styles.mobileLink}
              onClick={() => setMenuOpen(false)}>
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

const styles: Record<string, React.CSSProperties> = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 48px',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)',
    transition: 'background 0.3s, padding 0.3s, backdrop-filter 0.3s',
  },
  navScrolled: {
    background: 'rgba(26,26,26,0.92)',
    backdropFilter: 'blur(12px)',
    padding: '14px 48px',
    borderBottom: `1px solid ${colors.border}`,
  },
  logo: {
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: 4,
    color: colors.textPrimary,
    fontFamily: 'Inter, sans-serif',
  },
  logoAccent: {
    color: colors.accentWarm,
  },
  links: {
    display: 'flex',
    listStyle: 'none',
    gap: 40,
  },
  link: {
    color: colors.textPrimary,
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    transition: 'color 0.2s',
    textShadow: '0 1px 4px rgba(0,0,0,0.6)',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    gap: 5,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 4,
  },
  bar: {
    display: 'block',
    width: 24,
    height: 2,
    background: colors.textPrimary,
    borderRadius: 2,
    transition: 'transform 0.2s, opacity 0.2s',
  },
  barTop: { transform: 'translateY(7px) rotate(45deg)' },
  barBottom: { transform: 'translateY(-7px) rotate(-45deg)' },
  mobileMenu: {
    position: 'fixed' as const,
    top: 60,
    left: 0,
    right: 0,
    background: colors.bgSecondary,
    borderBottom: `1px solid ${colors.border}`,
    display: 'flex',
    flexDirection: 'column' as const,
    padding: '16px 0',
  },
  mobileLink: {
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: 500,
    padding: '14px 32px',
    letterSpacing: 1,
  },
};
