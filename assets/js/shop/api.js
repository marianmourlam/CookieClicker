export async function loadUpgrades() {
    const response = await fetch("../../../shop.json");

    if (!response.ok) {
        throw new Error("Failed to load upgrade");
    }

    return response.json();
}