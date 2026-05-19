export type CreatorProfile = {
  id: string
  handle: string
  displayName: string
  avatarUrl: string
  bio: string
  region: string
  followers: number
}

export type PerformanceSummary = {
  views: number
  likes: number
  ctr: number
  sales: number
}

export type VideoPerformance = {
  id: string
  title: string
  /** Short caption-style copy shown in Recent Videos */
  description: string
  /** Commercial / trending sound label (demo) */
  audioTrack: string
  thumbnailUrl: string
  views: number
  likes: number
  ctr: number
  sales: number
}

export const sampleProfile: CreatorProfile = {
  id: 'creator-demo-01',
  handle: '@shop_demo',
  displayName: 'Demo Shop',
  avatarUrl: 'https://picsum.photos/seed/bsa-avatar/96/96',
  bio: 'Demo creator · bestseller analytics and live-commerce reviews',
  region: 'CN',
  followers: 128_400,
}

export const sampleSummary: PerformanceSummary = {
  views: 2_847_300,
  likes: 184_920,
  ctr: 4.28,
  sales: 12_640,
}

const thumb = (seed: string) =>
  `https://picsum.photos/seed/${seed}/128/160`

export const sampleVideos: VideoPerformance[] = [
  {
    id: 'v1',
    title: 'Spring drop · grab attention in 3 seconds',
    description:
      'Hook viewers in the first frame, then transition to product close-ups.',
    audioTrack: 'Original sound · Demo Shop',
    thumbnailUrl: thumb('bsa-v1'),
    views: 412_000,
    likes: 28_400,
    ctr: 5.1,
    sales: 1_840,
  },
  {
    id: 'v2',
    title: 'Side-by-side review: why this SKU converts',
    description:
      'Split-screen comparison with on-screen price anchors and CTA.',
    audioTrack: 'Trending beat — Neon Run (demo library)',
    thumbnailUrl: thumb('bsa-v2'),
    views: 356_200,
    likes: 19_200,
    ctr: 3.9,
    sales: 1_260,
  },
  {
    id: 'v3',
    title: 'Live-room script template (copy-paste)',
    description:
      'Three-part script: problem, proof, limited offer with countdown.',
    audioTrack: 'Original sound · LiveRoom Kit',
    thumbnailUrl: thumb('bsa-v3'),
    views: 298_800,
    likes: 15_600,
    ctr: 4.4,
    sales: 980,
  },
  {
    id: 'v4',
    title: 'Weekly growth recap + screenshot walkthrough',
    description:
      'Screen recording of analytics with voiceover and chapter markers.',
    audioTrack: 'Chill lo-fi ads — Paper Sky (demo)',
    thumbnailUrl: thumb('bsa-v4'),
    views: 521_000,
    likes: 41_000,
    ctr: 6.2,
    sales: 2_410,
  },
  {
    id: 'v5',
    title: 'Loss-leader SKUs without killing margin',
    description:
      'Explain bundle strategy and upsell path in under 45 seconds.',
    audioTrack: 'Original sound · Demo Shop',
    thumbnailUrl: thumb('bsa-v5'),
    views: 187_400,
    likes: 9_800,
    ctr: 2.8,
    sales: 620,
  },
  {
    id: 'v6',
    title: 'Viral hook structure teardown',
    description:
      'Frame-by-frame breakdown of retention spikes in the first 5 seconds.',
    audioTrack: 'Hype build — Stadium Clap (demo)',
    thumbnailUrl: thumb('bsa-v6'),
    views: 640_500,
    likes: 52_300,
    ctr: 5.7,
    sales: 3_020,
  },
  {
    id: 'v7',
    title: 'Pinned comment CTA copy that clicks',
    description:
      'Walk through comment pin placement and link phrasing A/B tests.',
    audioTrack: 'Soft piano — Morning Cart (demo)',
    thumbnailUrl: thumb('bsa-v7'),
    views: 134_200,
    likes: 7_100,
    ctr: 3.1,
    sales: 410,
  },
  {
    id: 'v8',
    title: 'Five metrics to check before you spend',
    description:
      'Checklist overlay on dashboard mock with bold callouts.',
    audioTrack: 'Original sound · Metrics Lab',
    thumbnailUrl: thumb('bsa-v8'),
    views: 296_200,
    likes: 11_520,
    ctr: 3.6,
    sales: 1_100,
  },
]
