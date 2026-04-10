import React from 'react';
import Masonry from 'react-masonry-css';
import type {Photo} from '../../data/photos';
import {PhotoCard} from './PhotoCard';
import {colors} from '../../theme/colors';

interface Props {
  photos: Photo[];
  onPhotoClick: (index: number) => void;
}

const breakpoints = {default: 3, 1100: 2, 650: 1};

export function PhotoGrid({photos, onPhotoClick}: Props) {
  if (photos.length === 0) {
    return (
      <div style={styles.empty}>
        <p style={styles.emptyText}>No photos match the selected filters.</p>
      </div>
    );
  }

  return (
    <>
      <style>{`
        .masonry-grid { display: flex; gap: 12px; width: 100%; }
        .masonry-col { background-clip: padding-box; }
      `}</style>
      <Masonry
        breakpointCols={breakpoints}
        className="masonry-grid"
        columnClassName="masonry-col">
        {photos.map((photo, index) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            onClick={() => onPhotoClick(index)}
          />
        ))}
      </Masonry>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  empty: {
    textAlign: 'center',
    padding: '80px 0',
  },
  emptyText: {
    color: colors.textMuted,
    fontSize: 16,
  },
};
