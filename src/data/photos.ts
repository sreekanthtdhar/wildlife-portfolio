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
  story?: string; // optional short narrative about the moment
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
  // 1 — Cinematic wide opener: golden backlit wetlands, misty horizon, motion throughout
  {
    id: 'stilts-02',
    title: 'Stilts Taking Off at Golden Hour',
    location: 'Don Edwards San Francisco Bay NWR, CA',
    category: 'birds',
    tags: ['stilt', 'shorebird', 'golden hour', 'wetlands', 'flight'],
    aspectRatio: 1.777,
    src: r2src('CD8DC2B3-80F8-4605-8AE0-001E03DC263E_1_105_c.jpeg'),
    exif: { camera: 'Sony α6000', lens: 'FE 200–600mm f/5.6–6.3 G OSS @ 200mm', aperture: 'f/5.6', shutter: '1/4000s', iso: 640 },
    story: 'The flock had been wading calmly for twenty minutes when something spooked them all at once. I had maybe a second to react — this was the frame.',
  },
  // 2 — Warm face-on portrait: intimate mammal contrast to the sweeping opener
  {
    id: 'elk-02',
    title: 'Tule Elk Portrait Among Wildflowers',
    location: 'Point Reyes National Seashore, CA',
    category: 'mammals',
    tags: ['elk', 'tule elk', 'velvet', 'portrait', 'wildflowers'],
    aspectRatio: 0.75,
    src: r2src('C9E1BF4F-992F-4BC0-9C39-1E5C3B33085A_1_105_c.jpeg'),
    exif: { camera: 'Sony α6700', lens: 'FE 200–600mm f/5.6–6.3 G OSS @ 600mm', aperture: 'f/6.3', shutter: '1/1250s', iso: 320 },
    story: 'He looked up from the wildflowers and held my gaze for a full three seconds. The velvet antlers were still soft to the touch of the afternoon light.',
  },
  // 3 — Cool graphic action: crow vs. gulls shifts palette to high-key grey
  {
    id: 'crow-gull-01',
    title: 'Crow and Gulls at the Waterfront',
    location: 'San Jose, CA',
    category: 'birds',
    tags: ['crow', 'seagull', 'gull', 'flight', 'urban'],
    aspectRatio: 1.82,
    src: r2src('27062EBA-3AFE-4750-992B-BE01B82C8433_1_105_c.jpeg'),
    exif: { camera: 'Sony α6000', lens: 'E 70–300mm f/4.5–6.3 G OSS @ 232mm', aperture: 'f/5.6', shutter: '1/2500s', iso: 2500 },
  },
  // 4 — First hummingbird: vibrant warm close-up snaps the palette back to rich colour
  {
    id: 'hummingbird-02',
    title: 'Rufous Hummingbird on Grevillea',
    location: 'UCSC Arboretum, Santa Cruz, CA',
    category: 'birds',
    tags: ['hummingbird', 'rufous', 'flower', 'grevillea', 'portrait'],
    aspectRatio: 0.75,
    src: r2src('8478A6C3-7DCD-44E7-8846-838AEC62EF8A_1_105_c.jpeg'),
    exif: { camera: 'Sony α6000', lens: 'FE 200–600mm f/5.6–6.3 G OSS @ 600mm', aperture: 'f/6.3', shutter: '1/1600s', iso: 640 },
    story: 'Rufous hummingbirds are fiercely territorial. This male had been chasing every other bird from the grevillea for an hour before finally settling long enough for a clean shot.',
  },
  // 5 — Open lush landscape: coyote pair howling, bright green meadow, mammal variety
  {
    id: 'coyote-01',
    title: 'Coyote Pair on a Hillside',
    location: 'Point Reyes National Seashore, CA',
    category: 'mammals',
    tags: ['coyote', 'pair', 'meadow', 'grassland'],
    aspectRatio: 1.333,
    src: r2src('1EB24110-6527-4432-AECF-4D7406362F4C_1_105_c.jpeg'),
    exif: { camera: 'Sony α6700', lens: 'FE 200–600mm f/5.6–6.3 G OSS @ 600mm', aperture: 'f/8', shutter: '1/1250s', iso: 6400 },
    story: 'They started howling together completely unprompted, noses raised to the sky. I counted seven distinct calls before they went quiet and trotted off into the lupine.',
  },
  // 6 — Bold dark portrait: woodpecker pair nearly dissolves into shadow — striking contrast
  {
    id: 'woodpecker-01',
    title: 'Acorn Woodpecker Pair on Oak',
    location: 'Coyote Hills Regional Park, CA',
    category: 'birds',
    tags: ['woodpecker', 'acorn woodpecker', 'oak', 'pair', 'low light'],
    aspectRatio: 0.563,
    src: r2src('9B55CC71-B2BE-43D1-8BAE-B0DEA629273B_1_105_c.jpeg'),
    exif: { camera: 'Sony α6700', lens: 'FE 200–600mm f/5.6–6.3 G OSS @ 407mm', aperture: 'f/6.3', shutter: '1/3200s', iso: 500 },
    story: 'The pair were nearly invisible against the dark oak bark until one tilted its head and caught a sliver of late light on that brilliant red cap.',
  },
  // 7 — Moody elk profile: rich green bg carries the darkness forward into mammals
  {
    id: 'elk-01',
    title: 'Tule Elk in Velvet',
    location: 'Point Reyes National Seashore, CA',
    category: 'mammals',
    tags: ['elk', 'tule elk', 'velvet', 'antlers', 'portrait'],
    aspectRatio: 1.5,
    src: r2src('C18C7031-805B-4A58-9789-86DBCD3EAB31_1_105_c.jpeg'),
    exif: { camera: 'Sony α6700', lens: 'FE 200–600mm f/5.6–6.3 G OSS @ 600mm', aperture: 'f/8', shutter: '1/1250s', iso: 1000 },
  },
  // 8 — Second hummingbird: airy blue-sky relief after two consecutive dark shots
  {
    id: 'hummingbird-03',
    title: 'Rufous Hummingbird Against the Sky',
    location: 'UCSC Arboretum, Santa Cruz, CA',
    category: 'birds',
    tags: ['hummingbird', 'rufous', 'sky', 'portrait', 'perched'],
    aspectRatio: 0.8,
    src: r2src('AAA4D698-9F34-4F3B-820B-49BC4C932FC4_1_201_a.jpeg'),
    exif: { camera: 'Sony α6000', lens: 'FE 200–600mm f/5.6–6.3 G OSS @ 600mm', aperture: 'f/6.3', shutter: '1/2500s', iso: 1000 },
  },
  // 9 — Dynamic water action: stilts splashing — returns to wetlands, separated 8 from opener
  {
    id: 'stilts-01',
    title: 'Black-necked Stilts Mid-Quarrel',
    location: 'Don Edwards San Francisco Bay NWR, CA',
    category: 'birds',
    tags: ['stilt', 'shorebird', 'water', 'flight', 'splash'],
    aspectRatio: 1.777,
    src: r2src('19DA5519-349B-4E16-B4C5-548C890B7372_1_105_c.jpeg'),
    exif: { camera: 'Sony α6000', lens: 'FE 200–600mm f/5.6–6.3 G OSS @ 600mm', aperture: 'f/6.3', shutter: '1/4000s', iso: 640 },
    story: 'I heard the commotion before I saw it — a sharp, insistent squabble cutting through the marsh. Turned to find these two going at it, water flying in every direction.',
  },
  // 10 — Backlit squirrel portrait: dark and intimate after the action shot
  {
    id: 'squirrel-02',
    title: 'California Ground Squirrel Standing Alert',
    location: 'Coyote Hills Regional Park, CA',
    category: 'mammals',
    tags: ['squirrel', 'ground squirrel', 'backlit', 'portrait', 'alert'],
    aspectRatio: 0.75,
    src: r2src('3E0F4F6D-A00C-472F-8135-9B6A4D2F68E4_1_201_a.jpeg'),
    exif: { camera: 'Sony α6700', lens: 'FE 200–600mm f/5.6–6.3 G OSS @ 600mm', aperture: 'f/6.3', shutter: '1/3200s', iso: 320 },
    story: 'Standing upright on a fence post with the sun behind him, he held this pose for nearly 30 seconds — scanning the open field for hawks. The rim-lit fur against the dark background made it feel almost like a studio portrait.',
  },
  // 11 — Bright structural moment: heron on nest against vivid blue sky lifts the mood
  {
    id: 'heron-01',
    title: 'Great Blue Heron on Nest',
    location: 'Ed Levin County Park, CA',
    category: 'birds',
    tags: ['heron', 'great blue heron', 'nest', 'rookery', 'tree'],
    aspectRatio: 1.5,
    src: r2src('AFF3FC0C-2B7D-4387-8FF0-26F5D6132893_1_105_c.jpeg'),
    exif: { camera: 'Sony α6700', lens: 'FE 200–600mm f/5.6–6.3 G OSS @ 600mm', aperture: 'f/8', shutter: '1/2000s', iso: 1600 },
  },
  // 12 — New: Anna's hummingbird hovering on buckeye; muted soft-green palette after the bright heron
  {
    id: 'hummingbird-04',
    title: "Anna's Hummingbird on California Buckeye",
    location: 'California',
    category: 'birds',
    tags: ['hummingbird', "anna's hummingbird", 'buckeye', 'flower', 'hovering'],
    aspectRatio: 1.581,
    src: r2src('B489E57E-9FC3-4CDA-89F9-70E850FE12F2_1_201_a.jpeg'),
  },
  // 13 — Quiet forest interlude: squirrel on sunlit log eases the tempo before the finale
  {
    id: 'squirrel-01',
    title: 'Ground Squirrel on a Log',
    location: 'Rancho San Antonio Open Space, CA',
    category: 'mammals',
    tags: ['squirrel', 'ground squirrel', 'log', 'forest'],
    aspectRatio: 1.777,
    src: r2src('5C77A578-764C-4FD8-A660-2C72BD04522A_1_105_c.jpeg'),
    exif: { camera: 'Sony α6000', lens: 'FE 200–600mm f/5.6–6.3 G OSS @ 600mm', aperture: 'f/6.3', shutter: '1/800s', iso: 640 },
  },
  // 14 — Atmospheric penultimate: cormorant silhouettes at dusk, foreboding send-off
  {
    id: 'cormorant-01',
    title: 'Cormorants in Flight at Dusk',
    location: 'San Francisco Bay, CA',
    category: 'birds',
    tags: ['cormorant', 'flight', 'dusk', 'silhouette', 'flock'],
    aspectRatio: 1.5,
    src: r2src('B9FE4854-73DB-4C76-A46A-17C6691FFA67_1_105_c.jpeg'),
    exif: { camera: 'Sony α6700', lens: 'FE 200–600mm f/5.6–6.3 G OSS @ 600mm', aperture: 'f/6.3', shutter: '1/2000s', iso: 500 },
    story: 'Four cormorants in formation, heading south just above the treeline as the last light drained from the sky. No color, no texture — just shape and motion.',
  },
  // 15 — Calm portrait closer: fourth hummingbird perched in soft bokeh, contemplative ending
  {
    id: 'hummingbird-01',
    title: 'Rufous Hummingbird Perched',
    location: 'UCSC Arboretum, Santa Cruz, CA',
    category: 'birds',
    tags: ['hummingbird', 'rufous', 'portrait', 'perched'],
    aspectRatio: 0.75,
    src: r2src('4B6B520C-A94D-4D0D-A5DB-F10C5658960B_1_105_c.jpeg'),
    exif: { camera: 'Sony α6000', lens: 'FE 200–600mm f/5.6–6.3 G OSS @ 600mm', aperture: 'f/6.3', shutter: '1/2000s', iso: 640 },
  },
];

export const allCategories: Category[] = ['birds', 'mammals', 'reptiles', 'insects', 'marine'];
export const allLocations = [...new Set(photos.map(p => p.location))].sort();
