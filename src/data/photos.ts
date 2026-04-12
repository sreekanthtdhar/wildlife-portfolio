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

// ─── R2 Bucket Base URL ───────────────────────────────────────────────────────
const R2 = 'https://pub-0b4c30aaced341699062a2824e67c766.r2.dev';

// ─── Helper to build src object when using a single image for all sizes ───────
const r2src = (filename: string) => ({
  thumb:  `${R2}/${filename}`,
  medium: `${R2}/${filename}`,
  full:   `${R2}/${filename}`,
});

// ─── Your photos ──────────────────────────────────────────────────────────────
// Update title, location, category, tags, and aspectRatio for each photo.
// aspectRatio = image width ÷ height  (e.g. 3:2 landscape = 1.5, portrait = 0.75)
// ─────────────────────────────────────────────────────────────────────────────

export const photos: Photo[] = [
  // 1 — Ethereal golden opener, widest shot, immediately arresting
  {
    id: 'stilts-02',
    title: 'Stilts Taking Off at Golden Hour',
    location: 'California Wetlands',
    category: 'birds',
    tags: ['stilt', 'shorebird', 'golden hour', 'wetlands', 'flight'],
    aspectRatio: 1.777,
    src: r2src('CD8DC2B3-80F8-4605-8AE0-001E03DC263E_1_105_c.jpeg'),
  },
  // 2 — Warm intimate portrait, strong contrast after the wide opener
  {
    id: 'elk-02',
    title: 'Tule Elk Portrait Among Wildflowers',
    location: 'Northern California',
    category: 'mammals',
    tags: ['elk', 'tule elk', 'velvet', 'portrait', 'wildflowers'],
    aspectRatio: 0.75,
    src: r2src('C9E1BF4F-992F-4BC0-9C39-1E5C3B33085A_1_105_c.jpeg'),
  },
  // 3 — High-contrast dramatic action, black & white birds
  {
    id: 'crow-gull-01',
    title: 'Crow and Gulls at the Waterfront',
    location: 'California Coast',
    category: 'birds',
    tags: ['crow', 'seagull', 'gull', 'flight', 'urban'],
    aspectRatio: 1.82,
    src: r2src('27062EBA-3AFE-4750-992B-BE01B82C8433_1_105_c.jpeg'),
  },
  // 4 — Vibrant warm portrait, rich reds and greens
  {
    id: 'hummingbird-02',
    title: 'Rufous Hummingbird on Grevillea',
    location: 'California',
    category: 'birds',
    tags: ['hummingbird', 'rufous', 'flower', 'grevillea', 'portrait'],
    aspectRatio: 0.75,
    src: r2src('8478A6C3-7DCD-44E7-8846-838AEC62EF8A_1_105_c.jpeg'),
  },
  // 5 — Dynamic water action, dramatic splash and flight
  {
    id: 'stilts-01',
    title: 'Black-necked Stilts Taking Flight',
    location: 'California Wetlands',
    category: 'birds',
    tags: ['stilt', 'shorebird', 'water', 'flight', 'splash'],
    aspectRatio: 1.777,
    src: r2src('19DA5519-349B-4E16-B4C5-548C890B7372_1_105_c.jpeg'),
  },
  // 6 — Airy and clean, blue sky backdrop brings breathing room
  {
    id: 'hummingbird-03',
    title: 'Rufous Hummingbird Against the Sky',
    location: 'California',
    category: 'birds',
    tags: ['hummingbird', 'rufous', 'sky', 'portrait', 'perched'],
    aspectRatio: 0.8,
    src: r2src('AAA4D698-9F34-4F3B-820B-49BC4C932FC4_1_201_a.jpeg'),
  },
  // 7 — Moody dusk silhouette, atmospheric wide shot
  {
    id: 'cormorant-01',
    title: 'Cormorants in Flight at Dusk',
    location: 'California Coast',
    category: 'birds',
    tags: ['cormorant', 'flight', 'dusk', 'silhouette', 'flock'],
    aspectRatio: 1.5,
    src: r2src('B9FE4854-73DB-4C76-A46A-17C6691FFA67_1_105_c.jpeg'),
  },
  // 8 — Striking dark portrait, bold and minimal
  {
    id: 'woodpecker-01',
    title: 'Acorn Woodpecker Pair on Oak',
    location: 'California',
    category: 'birds',
    tags: ['woodpecker', 'acorn woodpecker', 'oak', 'pair', 'low light'],
    aspectRatio: 0.563,
    src: r2src('9B55CC71-B2BE-43D1-8BAE-B0DEA629273B_1_105_c.jpeg'),
  },
  // 9 — Moody elk profile in lush greens
  {
    id: 'elk-01',
    title: 'Tule Elk in Velvet',
    location: 'Northern California',
    category: 'mammals',
    tags: ['elk', 'tule elk', 'velvet', 'antlers', 'portrait'],
    aspectRatio: 1.5,
    src: r2src('C18C7031-805B-4A58-9789-86DBCD3EAB31_1_105_c.jpeg'),
  },
  // 10 — Warm detailed portrait with soft bokeh
  {
    id: 'hummingbird-01',
    title: 'Rufous Hummingbird Perched',
    location: 'California',
    category: 'birds',
    tags: ['hummingbird', 'rufous', 'portrait', 'perched'],
    aspectRatio: 0.75,
    src: r2src('4B6B520C-A94D-4D0D-A5DB-F10C5658960B_1_105_c.jpeg'),
  },
  // 11 — Classic clear blue sky, heron on nest
  {
    id: 'heron-01',
    title: 'Great Blue Heron on Nest',
    location: 'California',
    category: 'birds',
    tags: ['heron', 'great blue heron', 'nest', 'rookery', 'tree'],
    aspectRatio: 1.5,
    src: r2src('AFF3FC0C-2B7D-4387-8FF0-26F5D6132893_1_105_c.jpeg'),
  },
  // 12 — Bright cheerful green meadow, behavioural moment
  {
    id: 'coyote-01',
    title: 'Coyote Pair on a Hillside',
    location: 'Northern California',
    category: 'mammals',
    tags: ['coyote', 'pair', 'meadow', 'grassland'],
    aspectRatio: 1.333,
    src: r2src('1EB24110-6527-4432-AECF-4D7406362F4C_1_105_c.jpeg'),
  },
  // 13 — Quiet forest closer, calm and contemplative
  {
    id: 'squirrel-01',
    title: 'Ground Squirrel on a Log',
    location: 'California',
    category: 'mammals',
    tags: ['squirrel', 'ground squirrel', 'log', 'forest'],
    aspectRatio: 1.777,
    src: r2src('5C77A578-764C-4FD8-A660-2C72BD04522A_1_105_c.jpeg'),
  },
  // 14 — Backlit squirrel portrait, standing alert on wooden post
  {
    id: 'squirrel-02',
    title: 'California Ground Squirrel Standing Alert',
    location: 'California',
    category: 'mammals',
    tags: ['squirrel', 'ground squirrel', 'backlit', 'portrait', 'alert'],
    aspectRatio: 0.75,
    src: r2src('3E0F4F6D-A00C-472F-8135-9B6A4D2F68E4_1_201_a.jpeg'),
  },
];

export const allCategories: Category[] = ['birds', 'mammals', 'reptiles', 'insects', 'marine'];
export const allLocations = [...new Set(photos.map(p => p.location))].sort();
