import React from 'react';

const partners = [
  { name: 'LOFTY-CORBAN',      logo: '/assets/partner1.png' },
  { name: 'UON SOLAR ACADEMY', logo: '/assets/partner2.png' },
  { name: 'CHLORIDE EXIDE',    logo: '/assets/partner3.png' },
  { name: 'The Tala Hospital', logo: '/assets/partner4.png' },
];

export const Partners = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest text-center mb-8">
          Trusted by forward-thinking organizations
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center justify-center p-6 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-300 hover:shadow-sm transition-all group"
            >
              <div className="relative w-full h-16 sm:h-20 mb-4 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-neutral-400 group-hover:text-[#020304] transition-colors text-center uppercase tracking-wider">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};