import React, {useState} from 'react';
import {useInView} from 'react-intersection-observer';
import type {Photo} from '../../data/photos';
import {colors} from '../../theme/colors';

interface Props {
  photo: Photo;
  onClick: () => void;
}

export function PhotoCard({photo, onClick}: Props) {
  const [loaded, setLoaded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const {ref, inView} = useInView({triggerOnce: true, rootMargin: '200px'});

  return (
    <div
      ref={ref}
      className={`fade-in${inView ? ' visible' : ''}`}
      style={{
        ...styles.card,
        ...(hovered ? styles.cardHovered : {}),
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>

      {!loaded && <div style={styles.placeholder} />}

      {inView && (
        <img
          src={photo.src.thumb}
          alt={photo.title}
          style={{
            ...styles.image,
            opacity: loaded ? 1 : 0,
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
          }}
          onLoad={() => setLoaded(true)}
          loading="lazy"
        />
      )}

      <div style={{...styles.overlay, opacity: hovered ? 1 : 0}}>
        <p style={styles.overlayTitle}>{photo.title}</p>
        <p style={styles.overlayLocation}>{photo.location}</p>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  card: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 4,
    cursor: 'pointer',
    background: colors.bgCard,
    marginBottom: 12,
    transition: 'box-shadow 0.25s ease',
  },
  cardHovered: {
    boxShadow: '0 8px 32px rgba(0,0,0,0.55)',
  },
  placeholder: {
    width: '100%',
    paddingBottom: '66%',
    background: colors.bgPanel,
  },
  image: {
    width: '100%',
    display: 'block',
    transition: 'opacity 0.4s ease, transform 0.4s ease',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 55%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 16,
    transition: 'opacity 0.25s ease',
  },
  overlayTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 600,
    fontFamily: 'Playfair Display, Georgia, serif',
  },
  overlayLocation: {
    color: 'rgba(255,255,255,0.65)',
    fontSize: 11,
    marginTop: 3,
    letterSpacing: 0.5,
  },
};
