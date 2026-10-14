import React from 'react';
import { LixGloLogo } from './LixGloLogo';
import { COMPANY } from '../config/company';
import { Mail, Phone, MessageCircle } from 'lucide-react';

// Social media registry: add real URLs when active to automatically activate them
const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: '' },
  { name: 'Instagram', url: '' },
  { name: 'Facebook', url: '' },
  { name: 'YouTube', url: '' },
  { name: 'TikTok', url: '' },
];

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#020304] text-neutral-300 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-4">
            <LixGloLogo variant="horizontal" theme="dark" />
            <p className="text-sm text-neutral-300 max-w-sm leading-relaxed mt-3">
              Solar energy for a smarter tomorrow.
            </p>
            <p className="text-xs text-neutral-400 max-w-sm leading-relaxed">
              T1, T2 and T3 qualified solar energy systems designed, installed, and maintained across Kenya.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#estimate" className="hover:text-white transition-colors">
                  Estimate
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Social */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider text-white">
              Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:${COMPANY.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-[#0B9DD6] shrink-0" />
                <span className="font-mono">{COMPANY.phoneDisplay}</span>
              </a>

              <a
                href={COMPANY.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <MessageCircle size={14} className="text-[#1FD079] shrink-0" />
                <span>WhatsApp: {COMPANY.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-[#F37327] shrink-0" />
                <span>{COMPANY.email}</span>
              </a>

              <p className="text-neutral-400 pt-1">
                {COMPANY.headquarters} · Postal {COMPANY.postalAddress} · {COMPANY.serviceArea}
              </p>
            </div>

            {/* Social Media Placeholders (Coming Soon) */}
            <div className="pt-2">
              <div className="flex items-center gap-2 text-[11px] text-neutral-400">
                <span>Social:</span>
                <div className="flex items-center gap-2">
                  {SOCIAL_LINKS.map((item) => (
                    item.url ? (
                      <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <span key={item.name} className="text-neutral-500">
                        {item.name}
                      </span>
                    )
                  ))}
                  <span className="text-[10px] text-neutral-500 italic">(Coming soon)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© {COMPANY.founded}–{new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <p>Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
};
