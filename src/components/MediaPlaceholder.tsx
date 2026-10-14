import React from 'react';
import { MediaItem } from '../config/mediaAssets';

interface MediaPlaceholderProps {
  media: MediaItem;
  className?: string;
  variant?: 'hero' | 'residential' | 'commercial' | 'installation';
}

export const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({
  media,
  className = '',
  variant = 'hero',
}) => {
  // If user provided a real video URL, render high-definition video player
  if (media.videoUrl) {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-neutral-100 ${className}`}>
        <video
          src={media.videoUrl}
          className="w-full h-full object-cover"
          controls
          playsInline
          poster={media.imageUrl}
        />
      </div>
    );
  }

  // If user provided a real image file, render clean resilient image
  if (media.imageUrl) {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-neutral-100 ${className}`}>
        <img
          src={media.imageUrl}
          alt={media.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  // High-fidelity, bright, sunlit architectural fallback
  // Strictly adhering to LixGlo brand colors: White (#FFFFFF), Blue (#0B9DD6), Orange (#F37327), Green (#1FD079), Black (#020304)
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#F0F8FF] via-[#F8FBFC] to-white border border-neutral-200/80 shadow-sm ${className}`}
      aria-label={media.title}
    >
      {/* Sunlight glow & clear equatorial sky atmosphere */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F37327]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-[#0B9DD6]/10 rounded-full blur-3xl pointer-events-none" />

      {variant === 'hero' ? (
        <svg
          viewBox="0 0 1200 640"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Daylight sky gradient */}
            <linearGradient id="brightSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E2F1F8" />
              <stop offset="45%" stopColor="#F0F7FB" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>

            {/* Sun flare gradient */}
            <radialGradient id="sunFlare" cx="78%" cy="22%" r="45%">
              <stop offset="0%" stopColor="#F37327" stopOpacity="0.45" />
              <stop offset="40%" stopColor="#F37327" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>

            {/* High-efficiency black solar panel gradient */}
            <linearGradient id="solarGlass" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0B1E2D" />
              <stop offset="60%" stopColor="#020304" />
              <stop offset="100%" stopColor="#081520" />
            </linearGradient>

            {/* Panel cell grid */}
            <pattern id="panelCellPattern" width="36" height="22" patternUnits="userSpaceOnUse">
              <rect width="34" height="20" fill="#020304" rx="1.5" />
              <line x1="17" y1="0" x2="17" y2="20" stroke="#0B9DD6" strokeWidth="0.6" strokeOpacity="0.5" />
              <line x1="0" y1="10" x2="34" y2="10" stroke="#0B9DD6" strokeWidth="0.6" strokeOpacity="0.5" />
            </pattern>
          </defs>

          {/* Clean Bright Sky Canvas */}
          <rect width="1200" height="640" fill="url(#brightSky)" />
          <rect width="1200" height="640" fill="url(#sunFlare)" />

          {/* Radiant Equatorial Sun */}
          <circle cx="940" cy="140" r="130" fill="#F37327" fillOpacity="0.12" />
          <circle cx="940" cy="140" r="42" fill="#F37327" fillOpacity="0.85" />
          <circle cx="940" cy="140" r="6" fill="#FFFFFF" />

          {/* Subtle Nairobi Tree Line Horizon */}
          <path d="M0 460 C 240 455, 480 465, 720 458 C 960 452, 1100 462, 1200 458 L 1200 640 L 0 640 Z" fill="#EBF2F7" />

          {/* Modern Architectural Residence (White Crisp Concrete & Glass) */}
          {/* Main Residence Body */}
          <polygon points="260,460 760,460 720,290 300,290" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />

          {/* Large Slanted Solar Roof Array */}
          <polygon points="270,290 730,290 830,190 370,190" fill="url(#solarGlass)" stroke="#020304" strokeWidth="2" />
          <polygon points="290,282 710,282 805,198 385,198" fill="url(#panelCellPattern)" opacity="0.95" />

          {/* Sunlight Reflection Gleam on Solar Panels */}
          <line x1="430" y1="198" x2="600" y2="282" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.65" strokeLinecap="round" />
          <line x1="640" y1="198" x2="740" y2="282" stroke="#0B9DD6" strokeWidth="1.5" strokeOpacity="0.7" strokeLinecap="round" />

          {/* Clean Architectural Glass Floor-to-Ceiling Windows */}
          <rect x="340" y="325" width="180" height="110" fill="#EDF7FC" stroke="#CBD5E1" strokeWidth="1.5" />
          <line x1="430" y1="325" x2="430" y2="435" stroke="#CBD5E1" strokeWidth="1.5" />
          <rect x="550" y="325" width="120" height="110" fill="#020304" rx="2" />
          <circle cx="570" cy="380" r="3" fill="#1FD079" />

          {/* Ground Garden Line */}
          <rect x="0" y="460" width="1200" height="180" fill="#F8FAFC" />
          <line x1="0" y1="460" x2="1200" y2="460" stroke="#E2E8F0" strokeWidth="1" />
        </svg>
      ) : variant === 'commercial' ? (
        <svg
          viewBox="0 0 800 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
        >
          <rect width="800" height="500" fill="#F0F7FB" />
          <circle cx="680" cy="100" r="70" fill="#F37327" fillOpacity="0.2" />
          <circle cx="680" cy="100" r="28" fill="#F37327" />

          {/* Modern Flat-Roof Commercial Building */}
          <polygon points="120,380 680,380 620,220 180,220" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />

          {/* Commercial Solar Rows */}
          <polygon points="210,250 590,250 580,230 220,230" fill="#020304" stroke="#0B9DD6" strokeWidth="1" />
          <polygon points="195,290 605,290 595,270 205,270" fill="#020304" stroke="#0B9DD6" strokeWidth="1" />
          <polygon points="180,330 620,330 610,310 190,310" fill="#020304" stroke="#0B9DD6" strokeWidth="1" />
          <polygon points="165,370 635,370 625,350 175,350" fill="#020304" stroke="#0B9DD6" strokeWidth="1" />

          {/* Sun glint on commercial array */}
          <line x1="300" y1="230" x2="450" y2="370" stroke="#FFFFFF" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 800 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover"
        >
          <rect width="800" height="500" fill="#F4F9FC" />
          <circle cx="160" cy="110" r="60" fill="#0B9DD6" fillOpacity="0.15" />
          <circle cx="640" cy="90" r="40" fill="#F37327" fillOpacity="0.25" />

          {/* Modern Residential Home Volume */}
          <polygon points="160,390 640,390 590,240 210,240" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
          {/* Angled High-yield Solar Panels */}
          <polygon points="190,240 610,240 660,150 240,150" fill="#020304" stroke="#0B9DD6" strokeWidth="1.5" />
          <line x1="320" y1="150" x2="280" y2="240" stroke="#0B9DD6" strokeWidth="1" strokeOpacity="0.6" />
          <line x1="430" y1="150" x2="400" y2="240" stroke="#0B9DD6" strokeWidth="1" strokeOpacity="0.6" />
          <line x1="540" y1="150" x2="520" y2="240" stroke="#0B9DD6" strokeWidth="1" strokeOpacity="0.6" />
          <line x1="280" y1="195" x2="630" y2="195" stroke="#1FD079" strokeWidth="1" strokeOpacity="0.5" />

          {/* Clean Glass Window */}
          <rect x="280" y="280" width="240" height="90" fill="#EDF7FC" stroke="#CBD5E1" strokeWidth="1" />
        </svg>
      )}

      {/* Clean Replaceable Asset Tag (Internal convenience for developer) */}
      <div className="absolute bottom-3 right-4 text-[11px] text-neutral-400 font-normal">
        Placeholder · Configurable in mediaAssets.ts
      </div>
    </div>
  );
};
