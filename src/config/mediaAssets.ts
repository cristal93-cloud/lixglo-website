/**
 * Centralized LixGlo Media Asset Registry
 */

export interface MediaItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageUrls?: string[];
  videoUrl?: string;
  aspectRatio?: '16/9' | '4/3' | '16/10' | '1/1';
}

export const MEDIA_ASSETS = {
  hero: {
    id: 'hero-media',
    title: 'Modern Kenyan Solar Rooftop',
    description: 'Daylight architectural photography of contemporary home with clean rooftop solar array under Nairobi sun.',
    imageUrl: '',
    // Marquee array containing all 25 images
    imageUrls: [
      '/assets-converted/1.webp', '/assets-converted/2.webp', '/assets-converted/3.webp', '/assets-converted/4.webp', '/assets-converted/5.webp',
      '/assets-converted/6.webp', '/assets-converted/7.webp', '/assets-converted/8.webp', '/assets-converted/9.webp', '/assets-converted/10.webp',
      '/assets-converted/11.webp', '/assets-converted/12.webp', '/assets-converted/13.webp', '/assets-converted/14.webp', '/assets-converted/15.webp',
      '/assets-converted/16.webp', '/assets-converted/17.webp', '/assets-converted/18.webp', '/assets-converted/19.webp', '/assets-converted/20.webp',
      '/assets-converted/21.webp', '/assets-converted/22.webp', '/assets-converted/23.webp', '/assets-converted/24.webp', '/assets-converted/25.webp'
    ],
    videoUrl: '',
    aspectRatio: '16/9',
  },
  residential: {
    id: 'residential-media',
    title: 'Residential Solar Solution',
    description: 'High-efficiency home solar system powering daytime appliances and evening lithium storage.',
    imageUrl: '/assets-converted/5.webp',
    aspectRatio: '16/10',
  },
  commercial: {
    id: 'commercial-media',
    title: 'Commercial Solar',
    description: 'Solar installation for Kenyan business offices, factories, and retail facilities.',
    imageUrl: '/assets-converted/25.webp',
    aspectRatio: '16/10',
  },
  installation: {
    id: 'installation-media',
    title: 'Certified Engineering Standards',
    description: 'Clean electrical cabling, high-efficiency inverter mounting, and T1–T3 compliant installation.',
    imageUrl: '',
    aspectRatio: '4/3',
  },
} as const;