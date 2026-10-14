import React from 'react';

export const CredibilityStats: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Real Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-16 border-b border-neutral-200">
          <div>
            <div className="text-4xl sm:text-5xl font-extrabold text-[#020304] font-mono tracking-tight">
              2017
            </div>
            <p className="text-sm text-neutral-600 mt-2 font-medium">
              Founded in Nairobi
            </p>
          </div>

          <div>
            <div className="text-4xl sm:text-5xl font-extrabold text-[#1FD079] font-mono tracking-tight">
              50+
            </div>
            <p className="text-sm text-neutral-600 mt-2 font-medium">
              Projects completed
            </p>
          </div>

          <div>
            <div className="text-4xl sm:text-5xl font-extrabold text-[#0B9DD6] font-mono tracking-tight">
              T1–T3
            </div>
            <p className="text-sm text-neutral-600 mt-2 font-medium">
              Qualified solar expertise
            </p>
          </div>

          <div>
            <div className="text-4xl sm:text-5xl font-extrabold text-[#F37327] font-mono tracking-tight">
              KENYA
            </div>
            <p className="text-sm text-neutral-600 mt-2 font-medium">
              Nationwide service
            </p>
          </div>
        </div>

        {/* Short About Section */}
        <div className="pt-16 max-w-3xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#020304] tracking-tight">
            Reliable solar engineering for Kenyan conditions.
          </h3>
          <div className="mt-5 space-y-4 text-base sm:text-lg text-neutral-600 leading-relaxed">
            <p>
              Since 2017, LixGlo has helped homes and businesses across Kenya make better use of solar energy.
            </p>
            <p>
              From assessment and system design to installation and ongoing maintenance, we handle the journey from start to finish. Our team holds T1, T2, and T3 qualifications in solar design, sizing, installation, and maintenance of PV solar systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
