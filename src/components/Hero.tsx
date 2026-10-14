import React from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { COMPANY } from '../config/company';
import { MEDIA_ASSETS } from '../config/mediaAssets';
import { MediaPlaceholder } from './MediaPlaceholder';

interface HeroProps {
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToCalculator }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Message Block */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#020304] leading-[1.08] text-balance mb-6">
            Power your life with sunlight.
          </h1>

          <p className="text-lg sm:text-xl text-neutral-600 font-normal leading-relaxed max-w-2xl mb-8 text-pretty">
            Solar systems designed, installed and maintained for Kenyan homes and businesses.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={onScrollToCalculator}
              className="px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white bg-[#020304] hover:bg-neutral-800 rounded-lg transition-all duration-150 shadow-sm flex items-center gap-2 cursor-pointer active:scale-[0.99]"
            >
              <span>Get Your Estimate</span>
              <ArrowDown size={15} />
            </button>

            <a
              href={COMPANY.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-700 hover:text-[#020304] transition-colors flex items-center gap-2 py-2 px-3 rounded-md hover:bg-neutral-50"
            >
              <MessageCircle size={16} className="text-[#1FD079]" />
              <span>Talk to LixGlo</span>
            </a>
          </div>
        </div>

        {/* Hero Media Asset Location (Ready for photo or video) */}
        <div className="relative">
          <MediaPlaceholder
            media={MEDIA_ASSETS.hero}
            variant="hero"
            className="w-full aspect-[16/9] min-h-[320px] max-h-[580px]"
          />
        </div>
      </div>
    </section>
  );
};
