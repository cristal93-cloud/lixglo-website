import React from 'react';

const STEPS = [
  {
    num: '01',
    title: 'Tell us what you need.',
  },
  {
    num: '02',
    title: 'We design the right solar solution.',
  },
  {
    num: '03',
    title: 'We install and support it.',
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-24 bg-[#F8FAFC] border-t border-neutral-200 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#020304] tracking-tight">
            How it works.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {STEPS.map((step) => (
            <div key={step.num} className="pt-6 border-t-2 border-[#020304]">
              <div className="text-2xl font-bold font-mono text-[#0B9DD6] mb-3">
                {step.num}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#020304] tracking-tight leading-snug">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
