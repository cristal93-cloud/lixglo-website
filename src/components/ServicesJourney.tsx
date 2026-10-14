import React from 'react';

const STAGES = [
  {
    title: 'CONSULT',
    description: 'Understand your energy needs.',
  },
  {
    title: 'DESIGN',
    description: 'Size the right system for your space.',
  },
  {
    title: 'INSTALL',
    description: 'Build it properly, from the ground up.',
  },
  {
    title: 'MAINTAIN',
    description: 'Keep your system performing.',
  },
];

export const ServicesJourney: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-[#F8FAFC] border-y border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#020304] tracking-tight">
            The full solar journey, handled start to finish.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAGES.map((stage, idx) => (
            <div
              key={stage.title}
              className="p-6 rounded-xl bg-white border border-neutral-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-neutral-400">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-[#020304] tracking-wider uppercase mt-2">
                  {stage.title}
                </h3>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
