import React, { useState, useEffect } from 'react';
import { LixGloLogo } from './LixGloLogo';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenEstimate: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEstimate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md ${
        isScrolled ? 'border-b border-neutral-200 shadow-xs py-3' : 'py-4 sm:py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand */}
        <a href="#" className="flex items-center group focus:outline-none" aria-label="LixGlo Ventures Home">
          <LixGloLogo theme="light" size="md" />
        </a>

        {/* Center: Clean Primary Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600" aria-label="Main Navigation">
          <a
            href="#solutions"
            className="hover:text-[#020304] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#0B9DD6] rounded-xs"
          >
            Solutions
          </a>
          <a
            href="#how-it-works"
            className="hover:text-[#020304] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#0B9DD6] rounded-xs"
          >
            How It Works
          </a>
          <a
            href="#estimate"
            className="hover:text-[#020304] transition-colors py-1 focus-visible:outline-2 focus-visible:outline-[#0B9DD6] rounded-xs"
          >
            Estimate
          </a>
        </nav>

        {/* Right: Primary Action */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenEstimate}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#020304] hover:bg-neutral-800 rounded-lg transition-all duration-150 cursor-pointer shadow-xs active:scale-[0.99] min-h-[40px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#020304]"
          >
            Get an Estimate
          </button>
        </div>

        {/* Mobile Toggle & Quick Action */}
        <div className="flex items-center sm:hidden gap-2">
          <button
            onClick={onOpenEstimate}
            className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#020304] rounded-md cursor-pointer min-h-[40px] flex items-center justify-center active:scale-[0.99]"
          >
            Estimate
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-700 hover:text-black rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B9DD6] cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-full bg-white border-b border-neutral-200 px-6 py-6 shadow-xl">
          <nav className="flex flex-col gap-2 text-base font-medium" aria-label="Mobile Navigation">
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-700 hover:text-black py-3 border-b border-neutral-100 min-h-[44px] flex items-center"
            >
              Solutions
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-700 hover:text-black py-3 border-b border-neutral-100 min-h-[44px] flex items-center"
            >
              How It Works
            </a>
            <a
              href="#estimate"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-700 hover:text-black py-3 border-b border-neutral-100 min-h-[44px] flex items-center"
            >
              Estimate
            </a>
            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimate();
                }}
                className="w-full py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white bg-[#020304] rounded-lg shadow-xs cursor-pointer min-h-[48px] flex items-center justify-center"
              >
                Get an Estimate
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
