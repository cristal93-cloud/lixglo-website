import React, { useState } from 'react';

interface LixGloLogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'horizontal' | 'stacked';
}

export const LixGloLogo: React.FC<LixGloLogoProps> = ({
  className = '',
  theme = 'light',
  size = 'md',
}) => {
  const [imageError, setImageError] = useState(false);

  // Height mappings for consistent proportions
  const heightClass = size === 'sm' ? 'h-6' : size === 'lg' ? 'h-10' : 'h-8';

  // The official uploaded logo image path
  const logoSrc = '/assets/LOGO_LINEDESIGN.png';

  // Container styling: On dark surfaces (like footer), provide a crisp white backing
  // so the black letters (L, G, L) remain 100% visible and true to brand specs
  const containerClasses = theme === 'dark'
    ? `inline-flex items-center bg-white px-2.5 py-1.5 rounded-lg shadow-xs ${className}`
    : `inline-flex items-center ${className}`;

  return (
    <div className={containerClasses} aria-label="LixGlo Ventures">
      {!imageError ? (
        <img
          src={logoSrc}
          alt="LixGlo Ventures"
          className={`${heightClass} w-auto object-contain select-none`}
          onError={() => setImageError(true)}
        />
      ) : (
        /* High-fidelity Vector Representation of official LOGO_LINEDESIGN.png */
        <svg
          viewBox="0 0 460 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${heightClass} w-auto select-none`}
          aria-hidden="true"
        >
          {/* L - Black Letter */}
          <path d="M12 14 H35 V82 H82 V96 H12 Z" fill="#020304" />

          {/* I - Green Battery with Black Border */}
          <g transform="translate(88, 12)">
            {/* Battery Terminal Nub */}
            <path d="M11 2 H19 V7 H11 Z" fill="#020304" />
            {/* Battery Outer Capsule */}
            <rect x="2" y="7" width="26" height="78" rx="13" stroke="#020304" strokeWidth="4.5" fill="none" />
            {/* Green Power Fill */}
            <rect x="7" y="16" width="16" height="62" rx="8" fill="#1FD079" />
          </g>

          {/* X - Blue Photovoltaic Solar Panel Facets */}
          <g transform="translate(126, 14)">
            {/* Diagonal Top-Left to Bottom-Right facets */}
            {/* Row 1 */}
            <polygon points="0,0 24,0 38,18 14,18" fill="#0B9DD6" />
            <polygon points="28,0 52,0 66,18 42,18" fill="#0B9DD6" />
            <polygon points="56,0 80,0 94,18 70,18" fill="#0B9DD6" />

            {/* Row 2 (Middle upper) */}
            <polygon points="17,22 41,22 55,40 31,40" fill="#0B9DD6" />
            <polygon points="45,22 69,22 83,40 59,40" fill="#0B9DD6" />
            <polygon points="73,22 97,22 111,40 87,40" fill="#0B9DD6" />

            {/* Bottom Crossing Facets */}
            {/* Row 3 (Middle lower) */}
            <polygon points="31,44 55,44 41,62 17,62" fill="#0B9DD6" />
            <polygon points="59,44 83,44 69,62 45,62" fill="#0B9DD6" />
            <polygon points="87,44 111,44 97,62 73,62" fill="#0B9DD6" />

            {/* Row 4 (Bottom) */}
            <polygon points="14,66 38,66 24,84 0,84" fill="#0B9DD6" />
            <polygon points="42,66 66,66 52,84 28,84" fill="#0B9DD6" />
            <polygon points="70,66 94,66 80,84 56,84" fill="#0B9DD6" />
          </g>

          {/* G - Black Letter */}
          <path d="M252 55 C252 30 268 14 294 14 C314 14 328 25 334 38 L314 47 C310 37 303 30 294 30 C280 30 270 41 270 55 C270 69 280 80 294 80 C303 80 310 75 314 67 H294 V53 H334 V92 C324 96 310 98 294 98 C268 98 252 80 252 55 Z" fill="#020304" />

          {/* L - Black Letter */}
          <path d="M344 14 H364 V82 H404 V96 H344 Z" fill="#020304" />

          {/* O - Solar Orange Sun with 12 Radiant Rays */}
          <g transform="translate(432, 55)">
            {/* Core Circular Ring */}
            <circle cx="0" cy="0" r="22" stroke="#F37327" strokeWidth="8" fill="none" />

            {/* 12 Radiant Solar Rays */}
            {/* 0 deg (Top) */}
            <line x1="0" y1="-28" x2="0" y2="-42" stroke="#F37327" strokeWidth="3.5" strokeLinecap="round" />
            {/* 30 deg */}
            <line x1="14" y1="-24" x2="21" y2="-36" stroke="#F37327" strokeWidth="3.5" strokeLinecap="round" />
            {/* 60 deg */}
            <line x1="24" y1="-14" x2="36" y2="-21" stroke="#F37327" strokeWidth="3.5" strokeLinecap="round" />
            {/* 90 deg (Right) */}
            <line x1="28" y1="0" x2="42" y2="0" stroke="#F37327" strokeWidth="3.5" strokeLinecap="round" />
            {/* 120 deg */}
            <line x1="24" y1="14" x2="36" y2="21" stroke="#F37327" strokeWidth="3.5" strokeLinecap="round" />
            {/* 150 deg */}
            <line x1="14" y1="24" x2="21" y2="36" stroke="#F37327" strokeWidth="3.5" strokeLinecap="round" />
            {/* 180 deg (Bottom) */}
            <line x1="0" y1="28" x2="0" y2="42" stroke="#F37327" strokeWidth="3.5" strokeLinecap="round" />
            {/* 210 deg */}
            <line x1="-14" y1="24" x2="-21" y2="36" stroke="#F37327" strokeWidth="3.5" strokeLinecap="round" />
            {/* 240 deg */}
            <line x1="-24" y1="14" x2="-36" y2="21" stroke="#F37327" strokeWidth="3.5" strokeLinecap="round" />
            {/* 270 deg (Left) */}
            <line x1="-28" y1="0" x2="-42" y2="0" stroke="#F37327" strokeWidth="3.5" strokeLinecap="round" />
            {/* 300 deg */}
            <line x1="-24" y1="-14" x2="-36" y2="-21" stroke="#F37327" strokeWidth="3.5" strokeLinecap="round" />
            {/* 330 deg */}
            <line x1="-14" y1="-24" x2="-21" y2="-36" stroke="#F37327" strokeWidth="3.5" strokeLinecap="round" />
          </g>
        </svg>
      )}
    </div>
  );
};
