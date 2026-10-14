import React from 'react';
import { ArrowRight } from 'lucide-react';
import { MEDIA_ASSETS } from '../config/mediaAssets';
import { MediaPlaceholder } from './MediaPlaceholder';

interface CustomerTypesProps {
  onSelectType: (type: 'home' | 'business') => void;
}

export const CustomerTypes: React.FC<CustomerTypesProps> = ({ onSelectType }) => {
  return (
    <section id="solutions" className="py-20 lg:py-28 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#020304] tracking-tight">
            Solar designed around how you live and work.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* HOME PANEL */}
          <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden flex flex-col justify-between shadow-xs">
            <div className="aspect-[16/10] overflow-hidden">
              <MediaPlaceholder media={MEDIA_ASSETS.residential} variant="residential" className="w-full h-full" />
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#F37327]">
                  HOME
                </span>
                <h3 className="text-2xl font-bold text-[#020304] tracking-tight mt-1">
                  Solar for your home.
                </h3>
                <p className="mt-3 text-neutral-600 text-base leading-relaxed">
                  Lower your energy costs. Stay powered when the grid doesn’t.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => onSelectType('home')}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#020304] hover:bg-neutral-800 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Explore home solar</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* BUSINESS PANEL */}
          <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden flex flex-col justify-between shadow-xs">
            <div className="aspect-[16/10] overflow-hidden">
              <MediaPlaceholder media={MEDIA_ASSETS.commercial} variant="commercial" className="w-full h-full" />
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-[#0B9DD6]">
                  BUSINESS
                </span>
                <h3 className="text-2xl font-bold text-[#020304] tracking-tight mt-1">
                  Solar for your business.
                </h3>
                <p className="mt-3 text-neutral-600 text-base leading-relaxed">
                  Reduce operating costs. Build more predictable energy.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-neutral-100">
                <button
                  type="button"
                  onClick={() => onSelectType('business')}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#020304] hover:bg-neutral-800 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <span>Explore business solar</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
