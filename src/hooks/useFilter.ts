import {useState, useMemo} from 'react';
import {photos} from '../data/photos';
import type {Category, Photo} from '../data/photos';

export function useFilter() {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [activeLocation, setActiveLocation] = useState<string>('all');

  const filtered = useMemo<Photo[]>(() => {
    return photos.filter(p => {
      const catMatch = activeCategory === 'all' || p.category === activeCategory;
      const locMatch = activeLocation === 'all' || p.location === activeLocation;
      return catMatch && locMatch;
    });
  }, [activeCategory, activeLocation]);

  function resetFilters() {
    setActiveCategory('all');
    setActiveLocation('all');
  }

  return {filtered, activeCategory, setActiveCategory, activeLocation, setActiveLocation, resetFilters};
}
