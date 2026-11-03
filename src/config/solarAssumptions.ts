/**
 * LixGlo Solar Calculation Engine & Assumptions
 * 
 * Centralized assumptions object:
 * - EPRA specific electricity tariff benchmarks (Home DC2 vs Business SC3)
 * - Updated system sizing rules (up to 20kW home, 100kW business)
 * - Off-grid specific sizing ratio (80,000 KES = 50 kW)
 * - Lifecycle compound interest savings model
 * - Simple payback formula (T = C/S)
 */

export interface SolarCalculatorConfig {
  homeTariffKes: number;
  businessTariffKes: number;
  dailySunHours: number;
  efficiencyRatio: number;
  billSavingsRateHome: number;
  billSavingsRateBusiness: number;
  capitalCostPerKwKes: number;
  electricityInflationRate: number; // Interest/Inflation rate (d) for compounding
  lifespanYears: number; // Time in years (n)
}

export const CALCULATOR_CONFIG: SolarCalculatorConfig = {
  homeTariffKes: 27.65, // EPRA Ordinary Domestic 2 (DC2) final billed rate
  businessTariffKes: 28.50, // Approximation for Small Commercial (SC2/SC3) final billed rate including levies
  dailySunHours: 5.5, // Corrected Nairobi specific peak sun hours
  efficiencyRatio: 0.88, // Corrected 88% system efficiency
  billSavingsRateHome: 0.75, // 75% savings for residential
  billSavingsRateBusiness: 0.85, // 85% savings for business daytime operation
  capitalCostPerKwKes: 50000, // Maximum capital cost per kW
  electricityInflationRate: 0.05, // 5% assumed annual KPLC tariff inflation
  lifespanYears: 10, // Lifecycle duration for compounding
};

export type CustomerType = 'home' | 'business';
export type CustomerPriority = 'savings' | 'backup' | 'both' | 'offgrid'; // Added offgrid priority

export interface SimpleEstimateInput {
  customerType: CustomerType;
  monthlyBillKes: number;
  priority: CustomerPriority;
}

export interface SimpleEstimateResult {
  recommendedCapacityKw: number;
  estimatedAnnualSavingsKes: number;
  estimatedMonthlySavingsKes: number;
  estimatedPaybackYears: number;
  estimatedTenYearSavingsKes: number; // New Lifecycle ROI metric
}

/**
 * Calculates customer-facing solar estimate using Simple Payback and Lifecycle Costing
 */
export function calculateSimpleEstimate(
  input: SimpleEstimateInput,
  config: SolarCalculatorConfig = CALCULATOR_CONFIG
): SimpleEstimateResult {
  const { customerType, monthlyBillKes, priority } = input;

  let recommendedCapacityKw: number;
  
  // OFF-GRID SIZING LOGIC: Bypasses standard tariffs and uses the 80k = 50kW ratio
  if (priority === 'offgrid') {
    const rawKw = monthlyBillKes / 1600; // 80000 / 50 = 1600 KES per 1 kW
    // Round to nearest 5kW to keep off-grid quotes realistic and clean
    recommendedCapacityKw = Math.max(5.0, Math.ceil(rawKw / 5) * 5); 
  } else {
    // STANDARD HYBRID LOGIC (Grid-tied)
    // Step 1: Calculate Energy Usage based on EPRA specific tariffs
    const tariff = customerType === 'home' ? config.homeTariffKes : config.businessTariffKes;
    const monthlyKwh = Math.max(80, monthlyBillKes / tariff);
    const dailyKwh = monthlyKwh / 30;

    // Step 2: Calculate Raw System Size
    const rawKw = dailyKwh / (config.dailySunHours * config.efficiencyRatio);

    // Step 3: Map to Standard Inverter Sizes
    if (customerType === 'home') {
      if (rawKw <= 3.5) recommendedCapacityKw = 3.0;
      else if (rawKw <= 6.0) recommendedCapacityKw = 5.0;
      else if (rawKw <= 9.0) recommendedCapacityKw = 8.0;
      else if (rawKw <= 12.0) recommendedCapacityKw = 10.0;
      else if (rawKw <= 15.0) recommendedCapacityKw = 12.0;
      else if (rawKw <= 22.0) recommendedCapacityKw = 20.0;
      else recommendedCapacityKw = Math.ceil(rawKw);
    } else {
      if (rawKw <= 7.0) recommendedCapacityKw = 5.0;
      else if (rawKw <= 14.0) recommendedCapacityKw = 10.0;
      else if (rawKw <= 22.0) recommendedCapacityKw = 15.0;
      else if (rawKw <= 35.0) recommendedCapacityKw = 25.0;
      else if (rawKw <= 55.0) recommendedCapacityKw = 50.0;
      else if (rawKw <= 80.0) recommendedCapacityKw = 75.0;
      else if (rawKw <= 110.0) recommendedCapacityKw = 100.0;
      else recommendedCapacityKw = Math.ceil(rawKw / 10) * 10;
    }
  }

  // Step 4: Calculate Financial Savings
  // Off-grid implies 100% savings on the old bill, but we maintain the logic structure for consistency.
  const savingsFactor = priority === 'offgrid' ? 1.0 : (customerType === 'home' ? config.billSavingsRateHome : config.billSavingsRateBusiness);

  const estimatedMonthlySavingsKes = monthlyBillKes * savingsFactor;
  const estimatedAnnualSavingsKes = estimatedMonthlySavingsKes * 12;

  // Step 5: Simple Payback (T = C/S)
  const capitalCost = recommendedCapacityKw * config.capitalCostPerKwKes;
  const rawPayback = capitalCost / estimatedAnnualSavingsKes;
  const estimatedPaybackYears = Number(rawPayback.toFixed(1)); 

  // Step 6: 10-Year Lifecycle Costing (Compound Interest ROI)
  let totalKplcTenYears = 0;
  let currentAnnualBill = monthlyBillKes * 12;
  
  for (let year = 1; year <= config.lifespanYears; year++) {
    totalKplcTenYears += currentAnnualBill;
    currentAnnualBill = currentAnnualBill * (1 + config.electricityInflationRate); 
  }

  const estimatedTenYearSavingsKes = Math.round((totalKplcTenYears * savingsFactor) - capitalCost);

  return {
    recommendedCapacityKw,
    estimatedMonthlySavingsKes,
    estimatedAnnualSavingsKes,
    estimatedPaybackYears,
    estimatedTenYearSavingsKes,
  };
}