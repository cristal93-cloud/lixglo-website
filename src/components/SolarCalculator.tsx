import React, { useState } from 'react';
import {
  CustomerType,
  CustomerPriority,
  calculateSimpleEstimate,
} from '../config/solarAssumptions';
import { ArrowRight, RotateCcw } from 'lucide-react';

interface SolarCalculatorProps {
  onOpenAssessmentModal: (estimateDetails: {
    customerType: CustomerType;
    monthlyBillKes: number;
    recommendedKw: number;
    annualSavingsKes: number;
    paybackYears: number;
  }) => void;
  initialCustomerType?: CustomerType;
}

export const SolarCalculator: React.FC<SolarCalculatorProps> = ({
  onOpenAssessmentModal,
  initialCustomerType = 'home',
}) => {
  const [customerType, setCustomerType] = useState<CustomerType>(initialCustomerType);
  const [monthlyBillKes, setMonthlyBillKes] = useState<number>(15000);
  const [priority, setPriority] = useState<CustomerPriority>('both');

  const minBill = customerType === 'home' ? 3000 : 10000;
  const maxBill = customerType === 'home' ? 100000 : 500000;
  const stepBill = customerType === 'home' ? 1000 : 5000;

  const presets = customerType === 'home'
    ? [8000, 15000, 25000, 45000]
    : [30000, 75000, 150000, 300000];

  const result = calculateSimpleEstimate({
    customerType,
    monthlyBillKes,
    priority,
  });

  const formatKes = (val: number) => {
    return `KES ${val.toLocaleString('en-KE')}`;
  };

  const handleTypeSelect = (type: CustomerType) => {
    setCustomerType(type);
    if (type === 'home' && monthlyBillKes > 100000) {
      setMonthlyBillKes(25000);
    } else if (type === 'business' && monthlyBillKes < 10000) {
      setMonthlyBillKes(50000);
    }
  };

  const handleGetRealEstimate = () => {
    onOpenAssessmentModal({
      customerType,
      monthlyBillKes,
      recommendedKw: result.recommendedCapacityKw,
      annualSavingsKes: result.estimatedAnnualSavingsKes,
      paybackYears: result.estimatedPaybackYears,
    });
  };

  return (
    <section id="estimate" className="py-16 sm:py-24 lg:py-28 bg-[#F8FAFC] border-y border-neutral-200 scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#020304] tracking-tight">
            See what solar could do for you.
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            Tell us about your energy. We’ll show you what could work.
          </p>
        </div>

        {/* Simplified White Card Container */}
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-5 sm:p-8 lg:p-10 space-y-8 sm:space-y-10">
          {/* STEP 1 */}
          <div>
            <span className="block text-xs uppercase font-semibold tracking-wider text-neutral-400 mb-3">
              Step 1 · What are you powering?
            </span>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => handleTypeSelect('home')}
                className={`py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl border-2 text-center font-bold text-sm sm:text-base transition-all cursor-pointer min-h-[48px] flex items-center justify-center ${
                  customerType === 'home'
                    ? 'border-[#020304] bg-[#020304] text-white'
                    : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                }`}
              >
                HOME
              </button>
              <button
                type="button"
                onClick={() => handleTypeSelect('business')}
                className={`py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl border-2 text-center font-bold text-sm sm:text-base transition-all cursor-pointer min-h-[48px] flex items-center justify-center ${
                  customerType === 'business'
                    ? 'border-[#020304] bg-[#020304] text-white'
                    : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                }`}
              >
                BUSINESS
              </button>
            </div>
          </div>

          {/* STEP 2 */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
              <span className="text-xs uppercase font-semibold tracking-wider text-neutral-400">
                Step 2 · Average monthly electricity bill
              </span>
              <span className="text-xl sm:text-2xl font-extrabold text-[#020304] font-mono">
                {formatKes(monthlyBillKes)}
              </span>
            </div>

            <input
              type="range"
              min={minBill}
              max={maxBill}
              step={stepBill}
              value={monthlyBillKes}
              onChange={(e) => setMonthlyBillKes(Number(e.target.value))}
              className="w-full h-2.5 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#0B9DD6] focus:outline-none"
              aria-label="Average monthly electricity bill in KES"
            />

            <div className="flex flex-wrap gap-2 mt-4 items-center">
              <span className="text-xs text-neutral-400 mr-1 hidden sm:inline">Presets:</span>
              {presets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => setMonthlyBillKes(preset)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer min-h-[36px] flex items-center justify-center ${
                    monthlyBillKes === preset
                      ? 'bg-[#0B9DD6] border-[#0B9DD6] text-white font-semibold'
                      : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-neutral-300'
                  }`}
                >
                  {formatKes(preset)}
                </button>
              ))}
            </div>
          </div>

          {/* STEP 3 */}
          <div>
            <span className="block text-xs uppercase font-semibold tracking-wider text-neutral-400 mb-3">
              Step 3 · What matters most?
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
              {[
                { id: 'savings' as CustomerPriority, label: 'LOWER MY BILL' },
                { id: 'backup' as CustomerPriority, label: 'BACKUP POWER' },
                { id: 'both' as CustomerPriority, label: 'BOTH' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setPriority(item.id)}
                  className={`py-3 sm:py-3.5 px-3 rounded-xl border-2 text-center text-xs sm:text-sm font-bold transition-all cursor-pointer min-h-[46px] flex items-center justify-center ${
                    priority === item.id
                      ? 'border-[#020304] bg-[#020304] text-white'
                      : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* RESULTS CARD */}
          <div className="pt-8 border-t border-neutral-200">
            <div className="text-center mb-6">
              <span className="text-xs uppercase font-semibold tracking-wider text-neutral-400">
                Your estimated solar solution
              </span>
              <div className="text-4xl sm:text-5xl font-extrabold text-[#020304] tracking-tight mt-1">
                {result.recommendedCapacityKw.toFixed(1)} kW
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto">
              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-center">
                <span className="text-xs text-neutral-500">Estimated Annual Savings</span>
                <p className="text-xl sm:text-2xl font-bold text-[#1FD079] font-mono mt-1">
                  {formatKes(result.estimatedAnnualSavingsKes)}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-center">
                <span className="text-xs text-neutral-500">Estimated Payback</span>
                <p className="text-xl sm:text-2xl font-bold text-[#020304] font-mono mt-1">
                  ~{result.estimatedPaybackYears} years
                </p>
              </div>
            </div>

            <p className="text-center text-xs text-neutral-500 mt-6 max-w-md mx-auto">
              Actual systems depend on a physical roof assessment and your specific electrical usage.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleGetRealEstimate}
                className="w-full sm:w-auto px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white bg-[#020304] hover:bg-neutral-800 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm active:scale-[0.99] min-h-[48px]"
              >
                <span>Get a Real Estimate</span>
                <ArrowRight size={15} />
              </button>

              <button
                type="button"
                onClick={() => {
                  setMonthlyBillKes(15000);
                  setPriority('both');
                }}
                className="text-xs text-neutral-500 hover:text-black flex items-center gap-1.5 transition-colors cursor-pointer py-2 min-h-[36px]"
              >
                <RotateCcw size={13} />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
