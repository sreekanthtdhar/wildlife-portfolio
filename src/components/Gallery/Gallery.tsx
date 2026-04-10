import React, {useState} from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import {useFilter} from '../../hooks/useFilter';
import {FilterBar} from './FilterBar';
import {PhotoGrid} from './PhotoGrid';
import {useInView} from 'react-intersection-observer';
import {colors} from '../../theme/colors';

export function Gallery() {
  const {filtered, activeCategory, setActiveCategory, activeLocation, setActiveLocation} = useFilter();
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const {ref, inView} = useInView({triggerOnce: true, rootMargin: '-50px'});

  const slides = filtered.map(p => ({
    src: p.src.full,
    title: p.title,
    description: `${p.location}${p.exif ? ` · ${p.exif.camera ?? ''} ${p.exif.lens ?? ''} ${p.exif.shutter ?? ''} ISO${p.exif.iso ?? ''}`.trim() : ''}`,
  }));

  return (
    <section id="gallery" style={styles.section}>
      <div style={styles.inner}>
        <div ref={ref} className={`fade-in${inView ? ' visible' : ''}`} style={styles.heading}>
          <p style={styles.eyebrow}>Portfolio</p>
          <h2 style={styles.title}>The Gallery</h2>
          <p style={styles.subtitle}>
            A collection of moments from the wild — each image a story of patience, light, and wonder.
          </p>
        </div>

        <FilterBar
          activeCategory={activeCategory}
          activeLocation={activeLocation}
          onCategory={setActiveCategory}
          onLocation={setActiveLocation}
        />

        <PhotoGrid photos={filtered} onPhotoClick={setLightboxIndex} />
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        slides={slides}
        close={() => setLightboxIndex(-1)}
        plugins={[Zoom, Captions, Thumbnails]}
      />
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    background: colors.bg,
    padding: '100px 0',
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '0 32px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: 56,
  },
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
    fontSize: 'clamp(32px, 5vw, 52px)',
    fontWeight: 700,
    marginBottom: 16,
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 1.7,
    maxWidth: 560,
    margin: '0 auto',
  },
};
