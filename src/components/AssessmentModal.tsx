import React, { useState } from 'react';
import { X, MessageCircle, Phone, CheckCircle2 } from 'lucide-react';
import { COMPANY } from '../config/company';
import { CustomerType } from '../config/solarAssumptions';

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  estimateData?: {
    customerType: CustomerType;
    monthlyBillKes: number;
    recommendedKw: number;
    annualSavingsKes: number;
    paybackYears: number;
  } | null;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  isOpen,
  onClose,
  estimateData,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const kw = estimateData?.recommendedKw ?? 5.0;
  const type = estimateData?.customerType === 'business' ? 'Business' : 'Home';
  const bill = estimateData?.monthlyBillKes ?? 15000;

  // Direct WhatsApp message with estimate details
  const whatsappText = encodeURIComponent(
    `Hello LixGlo Ventures, I'd like to request a solar assessment for my ${type}.\n\n` +
    `• Average monthly bill: KES ${bill.toLocaleString()}\n` +
    `• Estimated system: ${kw.toFixed(1)} kW\n` +
    (location ? `• Location: ${location}\n` : '') +
    (name ? `• Name: ${name}\n` : '') +
    (phone ? `• Phone: ${phone}\n` : '') +
    `Please let me know the next steps.`
  );

  const directWhatsappUrl = `https://wa.me/${COMPANY.whatsappNumber}?text=${whatsappText}`;

  const handleSubmitCallback = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden border border-neutral-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-black rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#1FD079]/15 text-[#1FD079] flex items-center justify-center mx-auto">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#020304] tracking-tight">
              Request Received
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed max-w-sm mx-auto">
              A LixGlo solar specialist will call you at <strong className="text-black font-mono">{phone}</strong> to discuss your site and energy needs.
            </p>
            <div className="pt-4 flex flex-col gap-2">
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#1FD079] hover:bg-[#1bb86b] rounded-lg flex items-center justify-center gap-2"
              >
                <MessageCircle size={16} />
                <span>Chat Now on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 text-xs text-neutral-500 hover:text-black transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#020304] tracking-tight">
                Get a Real Solar Estimate
              </h3>
              <p className="text-sm text-neutral-600 mt-1">
                Connect directly with LixGlo’s engineering team in Nairobi.
              </p>
            </div>

            {/* Quick Sizing Recap */}
            <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 mb-6 flex items-center justify-between text-xs">
              <div>
                <span className="text-neutral-500">System:</span>
                <p className="font-bold text-[#020304] text-sm">{kw.toFixed(1)} kW · {type}</p>
              </div>
              <div className="text-right">
                <span className="text-neutral-500">Monthly spend:</span>
                <p className="font-bold text-[#020304] font-mono text-sm">KES {bill.toLocaleString()}</p>
              </div>
            </div>

            {/* WhatsApp Direct Action */}
            <a
              href={directWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 mb-5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#1FD079] hover:bg-[#1bb86b] rounded-lg transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
            >
              <MessageCircle size={17} />
              <span>Send to WhatsApp (+254 797 334169)</span>
            </a>

            <div className="relative flex items-center justify-center mb-5">
              <div className="w-full border-t border-neutral-200" />
              <span className="bg-white px-3 text-xs text-neutral-400 uppercase tracking-wider absolute">
                or request a callback
              </span>
            </div>

            <form onSubmit={handleSubmitCallback} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. David Mwangi"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-[#020304] placeholder-neutral-400 text-sm focus:border-[#020304] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Phone Number (Required)
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+254 7..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-[#020304] placeholder-neutral-400 text-sm font-mono focus:border-[#020304] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Karen, Nairobi / Nakuru / Kiambu"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-[#020304] placeholder-neutral-400 text-sm focus:border-[#020304] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-[#020304] hover:bg-neutral-800 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Phone size={14} />
                <span>Request Call</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
