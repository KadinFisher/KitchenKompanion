import ItemType from './javascript/types.js';
import ingredientsList from './javascript/ingredientsList.js';

const INVENTORY_KEY = 'sharedInventory';

export function getInventory() {
  const inventory = localStorage.getItem(INVENTORY_KEY);
  return inventory ? JSON.parse(inventory) : [];
}

export function saveInventory(inventory) {
  localStorage.setItem(INVENTORY_KEY, JSON.stringify(inventory));
}

// Helper function to get item type by name
function getTypeByName(name) {
  const ingredient = ingredientsList.find(item => item.name.toLowerCase() === name.toLowerCase());
  return ingredient ? ingredient.type : ItemType.OTHER; // Default to "OTHER" if type not found
}

// Add an item to the inventory with automatic type detection
export function addItem(name, quantity) {
  const type = getTypeByName(name); // Detect type based on name
  const inventory = getInventory();
  
  // Check if item already exists; if so, update quantity
  const existingItem = inventory.find(item => item.name.toLowerCase() === name.toLowerCase());
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    inventory.push({ name, quantity, type });
  }
  
  saveInventory(inventory);
}

// Remove an item by name
export function removeItem(name) {
  let inventory = getInventory();
  inventory = inventory.filter(item => item.name.toLowerCase() !== name.toLowerCase());
  saveInventory(inventory);
}

// Update an item's quantity by name
export function updateItemQuantity(name, newQuantity) {
  const inventory = getInventory();
  const item = inventory.find(item => item.name.toLowerCase() === name.toLowerCase());
  if (item) item.quantity = newQuantity;
  saveInventory(inventory);
}