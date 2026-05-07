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
  // 1 — Cinematic wide opener: golden backlit wetlands, mass takeoff sets the tone
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
  // 2 — Warm intimate portrait: tule elk face-on, immediate mammal contrast to the sweeping opener
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
  // 3 — Dramatic white flight: great egret launches from wetland bank, wings at full span
  {
    id: 'egret-01',
    title: 'Great Egret Taking Flight',
    location: 'San Francisco Bay, CA',
    category: 'birds',
    tags: ['egret', 'great egret', 'flight', 'wetlands', 'wings'],
    aspectRatio: 1.333,
    src: r2src('DSC09122.jpeg'),
  },
  // 4 — Vibrant warm close-up: rufous on grevillea snaps the palette back to rich color after cool egret
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
  // 5 — High-key grey action: crow vs. gulls shifts palette to cool urban air
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
  // 6 — Bright green breath: coyote pair on sun-drenched meadow, mammal variety after birds
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
  // 7 — Bold dark portrait: woodpecker pair nearly dissolves into shadow — stark contrast after bright meadow
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
  // 8 — Explosive energy: Anna's hummingbird displaying with wings fully spread, vibrant magenta gorget on soft green
  {
    id: 'hummingbird-05',
    title: "Anna's Hummingbird Displaying",
    location: 'California',
    category: 'birds',
    tags: ['hummingbird', "anna's hummingbird", 'gorget', 'display', 'wings'],
    aspectRatio: 1.333,
    src: r2src('DSC05778.jpeg'),
  },
  // 9 — Moody elk profile: rich green background carries the darkness forward into mammals
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
  // 10 — Marine interlude: harbor seal mother and pup nuzzling on mudflat, warm and tender
  {
    id: 'harbor-seal-01',
    title: 'Harbor Seal Mother and Pup',
    location: 'Elkhorn Slough, CA',
    category: 'marine',
    tags: ['harbor seal', 'seal', 'pup', 'mother', 'mudflat'],
    aspectRatio: 1.328,
    src: r2src('DSC04888.jpeg'),
  },
  // 11 — Airy relief: rufous against open sky lifts the mood after earthbound mammals
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
  // 12 — Water action callback: stilts splashing mid-quarrel, wetland energy returns
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
  // 13 — Yellow burst: western kingbird landing with wings at full span, bold against blue sky
  {
    id: 'kingbird-01',
    title: 'Western Kingbird Landing',
    location: 'California',
    category: 'birds',
    tags: ['kingbird', 'western kingbird', 'flight', 'landing', 'flycatcher'],
    aspectRatio: 1.333,
    src: r2src('DSC07084.jpeg'),
  },
  // 14 — Dark intimate portrait: backlit squirrel pauses the action, brings quiet after consecutive landscapes
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
  // 15 — Muted soft calm: Anna's hummingbird on buckeye, subdued palette tones things down
  {
    id: 'hummingbird-04',
    title: "Anna's Hummingbird on California Buckeye",
    location: 'California',
    category: 'birds',
    tags: ['hummingbird', "anna's hummingbird", 'buckeye', 'flower', 'hovering'],
    aspectRatio: 1.581,
    src: r2src('B489E57E-9FC3-4CDA-89F9-70E850FE12F2_1_201_a.jpeg'),
  },
  // 16 — Cool blue drift: sea otter resting on water, quiet and reflective after the hummingbird
  {
    id: 'sea-otter-01',
    title: 'Sea Otter Resting on the Water',
    location: 'Elkhorn Slough, CA',
    category: 'marine',
    tags: ['sea otter', 'otter', 'floating', 'portrait', 'kelp'],
    aspectRatio: 1.334,
    src: r2src('DSC05325.jpeg'),
  },
  // 17 — Forest quiet: squirrel on sunlit log, warm dappled light slows the tempo
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
  // 18 — Contemplative perch: rufous in soft bokeh, intimate closing energy builds before final pair
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
  // 19 — Structural lift: great blue heron on nest against vivid blue sky, bright penultimate
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
  // 20 — Atmospheric finale: cormorant silhouettes at dusk, the gallery goes quiet
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
];

export const allCategories: Category[] = ['birds', 'mammals', 'reptiles', 'insects', 'marine'];
export const allLocations = [...new Set(photos.map(p => p.location))].sort();
