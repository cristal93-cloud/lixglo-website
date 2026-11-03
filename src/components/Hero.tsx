import React, { useState, useEffect } from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { COMPANY } from '../config/company';
import { MEDIA_ASSETS } from '../config/mediaAssets';
import { MediaPlaceholder } from './MediaPlaceholder';

interface HeroProps {
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToCalculator }) => {
  const words = [
    { text: 'sunlight.', color: '#F37327' },
    { text: 'savings.', color: '#1FD079' },
    { text: 'confidence.', color: '#0B9DD6' }
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const currentWord = words[wordIndex].text;

    if (isDeleting) {
      timeoutId = setTimeout(() => {
        setText(prev => prev.slice(0, -1));
        if (text.length <= 1) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, 50);
    } else {
      if (text === currentWord) {
        timeoutId = setTimeout(() => setIsDeleting(true), 2500);
      } else {
        timeoutId = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, 100);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-[#FAFAFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Container: Text Block + Absolute Character */}
        <div className="relative mb-12 lg:mb-16">
          
          {/* Core Message Block (z-10 ensures text and buttons stay above the image) */}
          <div className="max-w-2xl lg:max-w-3xl relative z-10">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#020304] leading-[1.08] text-balance mb-6">
              Power your life with <span style={{ color: words[wordIndex].color }}>{text}</span><span className="font-light text-neutral-300 animate-pulse">|</span>
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
                className="px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-[#020304] bg-[#1FD079] hover:opacity-90 rounded-lg transition-all duration-150 shadow-sm flex items-center gap-2 cursor-pointer active:scale-[0.99]"
              >
                <MessageCircle size={18} className="text-[#020304]" />
                <span>Talk to LixGlo</span>
              </a>
            </div>
          </div>

          {/* Floating Desktop Character (Hidden on Mobile) */}
          <div className="hidden md:block absolute right-0 bottom-0 z-0 pointer-events-none w-[320px] lg:w-[420px] translate-y-4">
            <img
              src="/assets/Animation.png"
              alt="LixGlo Solar Expert"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
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