const MULTIPLICATOR = 1.1;

export function increasePriceByPercentage(upgradeBaseCost) {
  return upgradeBaseCost * MULTIPLICATOR;
}
