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
      '/assets/1.jpg', '/assets/2.jpg', '/assets/3.jpg', '/assets/4.jpg', '/assets/5.jpg',
      '/assets/6.jpg', '/assets/7.jpg', '/assets/8.jpg', '/assets/9.jpg', '/assets/10.jpg',
      '/assets/11.jpg', '/assets/12.jpg', '/assets/13.jpg', '/assets/14.jpg', '/assets/15.jpg',
      '/assets/16.jpg', '/assets/17.jpg', '/assets/18.jpg', '/assets/19.jpg', '/assets/20.jpg',
      '/assets/21.jpg', '/assets/22.jpg', '/assets/23.jpg', '/assets/24.jpg', '/assets/25.jpg'
    ],
    videoUrl: '',
    aspectRatio: '16/9',
  },
  residential: {
    id: 'residential-media',
    title: 'Residential Solar Solution',
    description: 'High-efficiency home solar system powering daytime appliances and evening lithium storage.',
    imageUrl: '',
    aspectRatio: '16/10',
  },
  commercial: {
    id: 'commercial-media',
    title: 'Commercial Rooftop Solar',
    description: 'Rooftop solar installation for Kenyan business offices, factories, and retail facilities.',
    imageUrl: '',
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