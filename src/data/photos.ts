export type Category = 'birds' | 'mammals' | 'reptiles' | 'insects' | 'marine';
export type Photo = {
  id: string;
  title: string;
  location: string;
  category: Category;
  tags: string[];
  aspectRatio: number; // width / height
  src: { thumb: string; medium: string; full: string };
  exif?: { camera?: string; lens?: string; shutter?: string; iso?: number; aperture?: string };
};

// ─── Add your own photos here ────────────────────────────────────────────────
// Put image files in: public/images/gallery/thumbs/, medium/, full/
// Then reference them as: '/images/gallery/thumbs/filename.webp'
// Using placeholder images (picsum.photos) until you add your own.
// ─────────────────────────────────────────────────────────────────────────────

export const photos: Photo[] = [
  {
    id: 'eagle-01',
    title: 'Golden Eagle in Flight',
    location: 'Scottish Highlands',
    category: 'birds',
    tags: ['eagle', 'flight', 'golden hour'],
    aspectRatio: 1.5,
    src: {
      thumb:  'https://picsum.photos/seed/eagle01/400/267',
      medium: 'https://picsum.photos/seed/eagle01/800/533',
      full:   'https://picsum.photos/seed/eagle01/2400/1600',
    },
    exif: { camera: 'Canon R5', lens: '500mm f/4', shutter: '1/2000s', iso: 800, aperture: 'f/5.6' },
  },
  {
    id: 'tiger-01',
    title: 'Bengal Tiger at Dawn',
    location: 'Ranthambore, India',
    category: 'mammals',
    tags: ['tiger', 'big cat', 'dawn'],
    aspectRatio: 1.4,
    src: {
      thumb:  'https://picsum.photos/seed/tiger01/400/286',
      medium: 'https://picsum.photos/seed/tiger01/800/571',
      full:   'https://picsum.photos/seed/tiger01/2400/1714',
    },
    exif: { camera: 'Nikon Z9', lens: '400mm f/2.8', shutter: '1/800s', iso: 1600, aperture: 'f/4' },
  },
  {
    id: 'owl-01',
    title: 'Snowy Owl Perched',
    location: 'Finnish Lapland',
    category: 'birds',
    tags: ['owl', 'snow', 'winter'],
    aspectRatio: 0.75,
    src: {
      thumb:  'https://picsum.photos/seed/owl01/400/533',
      medium: 'https://picsum.photos/seed/owl01/800/1067',
      full:   'https://picsum.photos/seed/owl01/1600/2133',
    },
  },
  {
    id: 'elephant-01',
    title: 'Elephant Herd at Sunset',
    location: 'Amboseli, Kenya',
    category: 'mammals',
    tags: ['elephant', 'herd', 'sunset', 'africa'],
    aspectRatio: 1.78,
    src: {
      thumb:  'https://picsum.photos/seed/elephant01/400/225',
      medium: 'https://picsum.photos/seed/elephant01/800/450',
      full:   'https://picsum.photos/seed/elephant01/2400/1350',
    },
    exif: { camera: 'Sony A1', lens: '200-600mm', shutter: '1/1000s', iso: 400, aperture: 'f/6.3' },
  },
  {
    id: 'chameleon-01',
    title: 'Panther Chameleon',
    location: 'Madagascar',
    category: 'reptiles',
    tags: ['chameleon', 'macro', 'colorful'],
    aspectRatio: 0.8,
    src: {
      thumb:  'https://picsum.photos/seed/chameleon01/400/500',
      medium: 'https://picsum.photos/seed/chameleon01/800/1000',
      full:   'https://picsum.photos/seed/chameleon01/1600/2000',
    },
  },
  {
    id: 'hummingbird-01',
    title: 'Ruby-throated Hummingbird',
    location: 'Costa Rica',
    category: 'birds',
    tags: ['hummingbird', 'macro', 'flight', 'tropics'],
    aspectRatio: 1.2,
    src: {
      thumb:  'https://picsum.photos/seed/humming01/400/333',
      medium: 'https://picsum.photos/seed/humming01/800/667',
      full:   'https://picsum.photos/seed/humming01/2400/2000',
    },
    exif: { shutter: '1/4000s', iso: 3200, aperture: 'f/4' },
  },
  {
    id: 'wolf-01',
    title: 'Grey Wolf Howling',
    location: 'Yellowstone, USA',
    category: 'mammals',
    tags: ['wolf', 'howl', 'winter', 'snow'],
    aspectRatio: 1.33,
    src: {
      thumb:  'https://picsum.photos/seed/wolf01/400/300',
      medium: 'https://picsum.photos/seed/wolf01/800/600',
      full:   'https://picsum.photos/seed/wolf01/2400/1800',
    },
  },
  {
    id: 'dragonfly-01',
    title: 'Dragonfly at Rest',
    location: 'Kerala Backwaters, India',
    category: 'insects',
    tags: ['dragonfly', 'macro', 'water'],
    aspectRatio: 1.6,
    src: {
      thumb:  'https://picsum.photos/seed/dragon01/400/250',
      medium: 'https://picsum.photos/seed/dragon01/800/500',
      full:   'https://picsum.photos/seed/dragon01/2400/1500',
    },
    exif: { lens: '100mm macro', shutter: '1/500s', iso: 200, aperture: 'f/8' },
  },
  {
    id: 'seal-01',
    title: 'Leopard Seal Portrait',
    location: 'Antarctica',
    category: 'marine',
    tags: ['seal', 'portrait', 'ice', 'underwater'],
    aspectRatio: 0.9,
    src: {
      thumb:  'https://picsum.photos/seed/seal01/400/444',
      medium: 'https://picsum.photos/seed/seal01/800/889',
      full:   'https://picsum.photos/seed/seal01/1800/2000',
    },
  },
  {
    id: 'flamingo-01',
    title: 'Flamingo Flock',
    location: 'Lake Nakuru, Kenya',
    category: 'birds',
    tags: ['flamingo', 'flock', 'pink', 'africa'],
    aspectRatio: 1.78,
    src: {
      thumb:  'https://picsum.photos/seed/flamingo01/400/225',
      medium: 'https://picsum.photos/seed/flamingo01/800/450',
      full:   'https://picsum.photos/seed/flamingo01/2400/1350',
    },
  },
  {
    id: 'leopard-01',
    title: 'Leopard in Acacia Tree',
    location: 'Serengeti, Tanzania',
    category: 'mammals',
    tags: ['leopard', 'tree', 'africa', 'big cat'],
    aspectRatio: 0.85,
    src: {
      thumb:  'https://picsum.photos/seed/leopard01/400/471',
      medium: 'https://picsum.photos/seed/leopard01/800/941',
      full:   'https://picsum.photos/seed/leopard01/1700/2000',
    },
    exif: { camera: 'Canon R5', lens: '600mm f/4', shutter: '1/1600s', iso: 640, aperture: 'f/4' },
  },
  {
    id: 'turtle-01',
    title: 'Sea Turtle Gliding',
    location: 'Great Barrier Reef',
    category: 'marine',
    tags: ['turtle', 'underwater', 'reef'],
    aspectRatio: 1.5,
    src: {
      thumb:  'https://picsum.photos/seed/turtle01/400/267',
      medium: 'https://picsum.photos/seed/turtle01/800/533',
      full:   'https://picsum.photos/seed/turtle01/2400/1600',
    },
  },
];

export const allCategories: Category[] = ['birds', 'mammals', 'reptiles', 'insects', 'marine'];
export const allLocations = [...new Set(photos.map(p => p.location))].sort();
