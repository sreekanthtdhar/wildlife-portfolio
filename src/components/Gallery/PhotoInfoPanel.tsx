import React from 'react';
import type { Photo } from '../../data/photos';
import { colors } from '../../theme/colors';

interface Props {
  photo: Photo;
}

// ─── Individual EXIF chip ─────────────────────────────────────────────────────
function ExifChip({ label, value }: { label: string; value: string }) {
  return (
    <div style={styles.chip}>
      <span style={styles.chipLabel}>{label}</span>
      <span style={styles.chipValue}>{value}</span>
    </div>
  );
}

// ─── SVG icons (inline, no extra deps) ───────────────────────────────────────
const PinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const QuoteIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0, opacity: 0.4, marginTop: 2 }}>
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
);

// ─── Main panel ───────────────────────────────────────────────────────────────
export function PhotoInfoPanel({ photo }: Props) {
  const { exif, location, title, tags, story } = photo;
  const hasExif = exif && Object.values(exif).some(v => v !== undefined && v !== '');

  return (
    <div style={styles.panel}>
      {/* Title + location row */}
      <div style={styles.header}>
        <h3 style={styles.title}>{title}</h3>
        <div style={styles.location}>
          <PinIcon />
          <span>{location}</span>
        </div>
      </div>

      {/* EXIF chips */}
      {hasExif && (
        <div style={styles.exifRow}>
          {exif!.camera  && <ExifChip label="Camera"   value={exif!.camera} />}
          {exif!.lens    && <ExifChip label="Lens"     value={exif!.lens} />}
          {exif!.aperture && <ExifChip label="f-stop"  value={exif!.aperture} />}
          {exif!.shutter && <ExifChip label="Shutter"  value={exif!.shutter} />}
          {exif!.iso     && <ExifChip label="ISO"      value={String(exif!.iso)} />}
        </div>
      )}

      {/* Divider */}
      {(hasExif || story) && <div style={styles.divider} />}

      {/* Story */}
      {story && (
        <div style={styles.storyRow}>
          <QuoteIcon />
          <p style={styles.story}>{story}</p>
        </div>
      )}

      {/* Tags */}
      <div style={styles.tagsRow}>
        {tags.map(tag => (
          <span key={tag} style={styles.tag}>#{tag}</span>
        ))}
      </div>
    </div>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles: Record<string, React.CSSProperties> = {
  panel: {
    background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 100%)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderTop: `1px solid rgba(255,255,255,0.07)`,
    padding: '18px 28px 16px',
    width: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 16,
    flexWrap: 'wrap',
  },
  title: {
    margin: 0,
    color: colors.textPrimary,
    fontSize: 15,
    fontWeight: 600,
    fontFamily: 'Playfair Display, Georgia, serif',
    letterSpacing: 0.2,
    lineHeight: 1.35,
    flex: 1,
  },
  location: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 5,
    color: colors.accentWarm,
    fontSize: 11,
    fontWeight: 500,
    letterSpacing: 0.4,
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    paddingTop: 2,
  },
  exifRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
  },
  chip: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5,
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 4,
    padding: '3px 9px',
  },
  chipLabel: {
    color: 'rgba(255,255,255,0.38)',
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
  chipValue: {
    color: colors.textPrimary,
    fontSize: 11,
    fontWeight: 500,
  },
  divider: {
    height: 1,
    background: 'rgba(255,255,255,0.07)',
    margin: '2px 0',
  },
  storyRow: {
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start',
  },
  story: {
    margin: 0,
    color: 'rgba(255,255,255,0.62)',
    fontSize: 13,
    lineHeight: 1.65,
    fontStyle: 'italic',
    fontFamily: 'Playfair Display, Georgia, serif',
  },
  tagsRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 2,
  },
  tag: {
    color: 'rgba(255,255,255,0.28)',
    fontSize: 10,
    letterSpacing: 0.5,
  },
};
