const upgradeAmounts = {};

export function incrementAmountUpgrade(upgradeName) {
  upgradeAmounts[upgradeName] = getAmountUpgrade(upgradeName) + 1;
  return upgradeAmounts[upgradeName];
}

export function getAmountUpgrade(upgradeName) {
  return upgradeAmounts[upgradeName] ?? 0;
}
