/**
 * Centralized LixGlo Media Asset Registry
 * 
 * Replace any placeholder URL or empty string with your real image or video file paths
 * (e.g., place images in /public/assets/ and point to '/assets/hero.jpg').
 * When an image or video URL is provided, the MediaPlaceholder component renders it directly.
 * If empty or loading fails, an intentional, bright, sunlit architectural visual is displayed.
 */

export interface MediaItem {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  aspectRatio?: '16/9' | '4/3' | '16/10' | '1/1';
}

export const MEDIA_ASSETS = {
  hero: {
    id: 'hero-media',
    title: 'Modern Kenyan Solar Rooftop',
    description: 'Daylight architectural photography of contemporary home with clean rooftop solar array under Nairobi sun.',
    // Set to your real image file path, e.g. '/assets/lixglo-hero.jpg'
    imageUrl: '',
    // Or set to your brand video path, e.g. '/assets/lixglo-reel.mp4'
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
