export async function loadUpgrades() {
  const response = await fetch("./php/index.php");
  if (!response.ok) {
    throw new Error("Failed to load upgrade");
  }
  return response.json();
}
