import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY } from '../config/company';

interface FinalCTAProps {
  onOpenEstimate: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenEstimate }) => {
  return (
    <section className="py-24 lg:py-32 bg-white border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#020304] tracking-tight leading-tight text-balance mb-6">
          Ready to see what solar could do for you?
        </h2>

        <p className="text-base sm:text-lg text-neutral-600 max-w-xl mx-auto mb-10 leading-relaxed">
          Start with a simple estimate or speak directly with our team in Nairobi.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={onOpenEstimate}
            className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#020304] hover:bg-neutral-800 rounded-lg transition-all duration-150 shadow-sm cursor-pointer active:scale-[0.99]"
          >
            Get Your Estimate
          </button>

          <a
            href={COMPANY.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#020304] bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-all flex items-center justify-center gap-2 font-mono"
          >
            <MessageCircle size={16} className="text-[#1FD079]" />
            <span>{COMPANY.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
