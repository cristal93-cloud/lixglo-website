/**
 * Simplified LixGlo Solar Calculation Engine & Assumptions
 * 
 * Centralized assumptions object for future LixGlo updates:
 * - Electricity tariff benchmarks
 * - System sizing rules
 * - Savings estimations
 * - Payback multipliers
 */

export interface SolarCalculatorConfig {
  /** Average Kenyan retail electricity tariff in KES per kWh */
  tariffPerKWhKes: number;
  /** Estimated average peak sunlight hours in Kenya */
  dailySunHours: number;
  /** System derate / efficiency factor */
  efficiencyRatio: number;
  /** Average portion of electricity bill replaced by solar */
  billSavingsRateHome: number;
  billSavingsRateBusiness: number;
  /** Capex base benchmark in KES per kW installed */
  capitalCostPerKwKes: number;
}

export const CALCULATOR_CONFIG: SolarCalculatorConfig = {
  tariffPerKWhKes: 31.5,
  dailySunHours: 5.2,
  efficiencyRatio: 0.82,
  billSavingsRateHome: 0.75, // 75% savings for residential
  billSavingsRateBusiness: 0.85, // 85% savings for business operating during daylight
  capitalCostPerKwKes: 185000,
};

export type CustomerType = 'home' | 'business';
export type CustomerPriority = 'savings' | 'backup' | 'both';

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
}

/**
 * Calculates simplified customer-facing solar estimate
 */
export function calculateSimpleEstimate(
  input: SimpleEstimateInput,
  config: SolarCalculatorConfig = CALCULATOR_CONFIG
): SimpleEstimateResult {
  const { customerType, monthlyBillKes } = input;

  // Monthly kWh usage
  const monthlyKwh = Math.max(80, monthlyBillKes / config.tariffPerKWhKes);
  const dailyKwh = monthlyKwh / 30;

  // Sizing in kW
  const rawKw = dailyKwh / (config.dailySunHours * config.efficiencyRatio);

  let recommendedCapacityKw: number;
  if (customerType === 'home') {
    if (rawKw <= 3.5) recommendedCapacityKw = 3.0;
    else if (rawKw <= 6.0) recommendedCapacityKw = 5.0;
    else if (rawKw <= 9.0) recommendedCapacityKw = 8.0;
    else if (rawKw <= 12.0) recommendedCapacityKw = 10.0;
    else recommendedCapacityKw = Math.round(rawKw);
  } else {
    if (rawKw <= 7) recommendedCapacityKw = 5.0;
    else if (rawKw <= 14) recommendedCapacityKw = 10.0;
    else if (rawKw <= 22) recommendedCapacityKw = 15.0;
    else if (rawKw <= 35) recommendedCapacityKw = 25.0;
    else recommendedCapacityKw = Math.round(rawKw / 5) * 5;
  }

  // Savings
  const savingsFactor = customerType === 'home'
    ? config.billSavingsRateHome
    : config.billSavingsRateBusiness;

  const estimatedMonthlySavingsKes = Math.round(monthlyBillKes * savingsFactor);
  const estimatedAnnualSavingsKes = estimatedMonthlySavingsKes * 12;

  // Approximate payback in years
  const approxCapitalOutlay = recommendedCapacityKw * config.capitalCostPerKwKes;
  const rawPayback = approxCapitalOutlay / estimatedAnnualSavingsKes;
  const estimatedPaybackYears = Math.min(7.5, Math.max(3.2, Number(rawPayback.toFixed(1))));

  return {
    recommendedCapacityKw,
    estimatedMonthlySavingsKes,
    estimatedAnnualSavingsKes,
    estimatedPaybackYears,
  };
}
