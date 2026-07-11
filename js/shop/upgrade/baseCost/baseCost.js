const MULTIPLICATOR = 1.1;

export function increasePriceByPercentage(upgradeBaseCost) {
  let newPrice = upgradeBaseCost * MULTIPLICATOR;
  return Math.round(newPrice);
}
