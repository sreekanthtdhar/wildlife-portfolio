import React from 'react';
import {allCategories, allLocations} from '../../data/photos';
import type {Category} from '../../data/photos';
import {colors} from '../../theme/colors';

interface Props {
  activeCategory: Category | 'all';
  activeLocation: string;
  onCategory: (c: Category | 'all') => void;
  onLocation: (l: string) => void;
}

const categoryLabels: Record<Category | 'all', string> = {
  all: 'All',
  birds: 'Birds',
  mammals: 'Mammals',
  reptiles: 'Reptiles',
  insects: 'Insects',
  marine: 'Marine',
};

export function FilterBar({activeCategory, activeLocation, onCategory, onLocation}: Props) {
  return (
    <div style={styles.container}>
      {/* Category pills */}
      <div style={styles.group}>
        {(['all', ...allCategories] as (Category | 'all')[]).map(cat => (
          <button
            key={cat}
            style={{
              ...styles.pill,
              ...(activeCategory === cat ? styles.pillActive : {}),
            }}
            onClick={() => onCategory(cat)}>
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Location dropdown */}
      <select
        value={activeLocation}
        onChange={e => onLocation(e.target.value)}
        style={styles.select}>
        <option value="all">All Locations</option>
        {allLocations.map(loc => (
          <option key={loc} value={loc}>{loc}</option>
        ))}
      </select>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 40,
  },
  group: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8,
  },
  pill: {
    background: 'transparent',
    border: `1px solid ${colors.border}`,
    color: colors.textSecondary,
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: 1,
    textTransform: 'uppercase',
    padding: '7px 18px',
    borderRadius: 20,
    cursor: 'pointer',
    transition: 'border-color 0.2s, color 0.2s, background 0.2s',
  },
  pillActive: {
    borderColor: colors.accentWarm,
    color: colors.accentWarm,
    background: 'rgba(201,168,76,0.1)',
  },
  select: {
    background: colors.bgPanel,
    border: `1px solid ${colors.border}`,
    color: colors.textSecondary,
    fontSize: 12,
    padding: '7px 14px',
    borderRadius: 4,
    cursor: 'pointer',
    outline: 'none',
  },
};
