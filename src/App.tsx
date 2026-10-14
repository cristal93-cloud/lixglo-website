/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SolarCalculator } from './components/SolarCalculator';
import { CustomerTypes } from './components/CustomerTypes';
import { ServicesJourney } from './components/ServicesJourney';
import { CredibilityStats } from './components/CredibilityStats';
import { HowItWorks } from './components/HowItWorks';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { AssessmentModal } from './components/AssessmentModal';
import { CustomerType } from './config/solarAssumptions';

export default function App() {
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);
  const [selectedEstimate, setSelectedEstimate] = useState<{
    customerType: CustomerType;
    monthlyBillKes: number;
    recommendedKw: number;
    annualSavingsKes: number;
    paybackYears: number;
  } | null>(null);

  const [calculatorCustomerType, setCalculatorCustomerType] = useState<CustomerType>('home');

  const scrollToCalculator = () => {
    const el = document.getElementById('estimate');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCustomerType = (type: CustomerType) => {
    setCalculatorCustomerType(type);
    scrollToCalculator();
  };

  const handleOpenAssessmentModal = (estimateDetails: {
    customerType: CustomerType;
    monthlyBillKes: number;
    recommendedKw: number;
    annualSavingsKes: number;
    paybackYears: number;
  }) => {
    setSelectedEstimate(estimateDetails);
    setAssessmentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#020304] selection:bg-[#0B9DD6]/20 selection:text-[#020304] flex flex-col font-sans antialiased">
      {/* Clean Light Navigation */}
      <Header onOpenEstimate={scrollToCalculator} />

      {/* Main Stream */}
      <main className="flex-1">
        {/* 1. Hero: Bright, Sunlit, Architecture & Clear Proposition */}
        <Hero onScrollToCalculator={scrollToCalculator} />

        {/* 2. Signature Simplified 3-Step Solar Calculator */}
        <SolarCalculator
          onOpenAssessmentModal={handleOpenAssessmentModal}
          initialCustomerType={calculatorCustomerType}
        />

        {/* 3. Customer Categories: Home & Business */}
        <CustomerTypes onSelectType={handleSelectCustomerType} />

        {/* 4. Full Journey: Consult, Design, Install, Maintain */}
        <ServicesJourney />

        {/* 5. Real Credibility & Plain Facts (2017, 50+, T1–T3, Kenya) */}
        <CredibilityStats />

        {/* 6. Simple 3-Step How It Works */}
        <HowItWorks />

        {/* 7. Clear Final Call To Action */}
        <FinalCTA onOpenEstimate={scrollToCalculator} />
      </main>

      {/* Grounding Footer with Contacts & Social Placeholders */}
      <Footer />

      {/* Direct Assessment Modal */}
      <AssessmentModal
        isOpen={assessmentModalOpen}
        onClose={() => setAssessmentModalOpen(false)}
        estimateData={selectedEstimate}
      />
    </div>
  );
}
