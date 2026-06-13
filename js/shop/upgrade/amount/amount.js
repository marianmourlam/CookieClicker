let amountUpgrade = 0;
export function incrementAmountUpgrade(upgradeName) {
  amountUpgrade++;
  console.log(`${amountUpgrade} amountUpgrade,${upgradeName}`);
}
export function getAmountUpgrade() {
  return amountUpgrade;
}
export function updateAmountUpgrade(amountUpgrade) {
  amountUpgrade.textContent = Math.floor(getAmountUpgrade()).toString();
}
