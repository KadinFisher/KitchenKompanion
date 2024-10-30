// ingredientsList.js
import ItemType from './javascript/types.js';

const ingredientsList = [
  // Proteins
  { name: "Chicken Breast", type: ItemType.PROTEIN },
  { name: "Ground Beef", type: ItemType.PROTEIN },
  { name: "Tofu", type: ItemType.PROTEIN },
  { name: "Eggs", type: ItemType.PROTEIN },
  { name: "Salmon", type: ItemType.PROTEIN },
  { name: "Turkey", type: ItemType.PROTEIN },
  { name: "Tempeh", type: ItemType.PROTEIN },

  // Vegetables
  { name: "Broccoli", type: ItemType.VEGETABLE },
  { name: "Carrots", type: ItemType.VEGETABLE },
  { name: "Spinach", type: ItemType.VEGETABLE },
  { name: "Bell Peppers", type: ItemType.VEGETABLE },
  { name: "Cauliflower", type: ItemType.VEGETABLE },
  { name: "Kale", type: ItemType.VEGETABLE },
  { name: "Zucchini", type: ItemType.VEGETABLE },

  // Carbs
  { name: "Rice", type: ItemType.CARB },
  { name: "Pasta", type: ItemType.CARB },
  { name: "Bread", type: ItemType.CARB },
  { name: "Quinoa", type: ItemType.CARB },
  { name: "Potatoes", type: ItemType.CARB },
  { name: "Oats", type: ItemType.CARB },
  { name: "Sweet Potatoes", type: ItemType.CARB },

  // Snacks
  { name: "Chips", type: ItemType.SNACK },
  { name: "Popcorn", type: ItemType.SNACK },
  { name: "Pretzels", type: ItemType.SNACK },
  { name: "Nuts", type: ItemType.SNACK },
  { name: "Granola Bars", type: ItemType.SNACK },
  { name: "Crackers", type: ItemType.SNACK },

  // Desserts
  { name: "Ice Cream", type: ItemType.DESSERT },
  { name: "Chocolate", type: ItemType.DESSERT },
  { name: "Cookies", type: ItemType.DESSERT },
  { name: "Brownies", type: ItemType.DESSERT },
  { name: "Cupcakes", type: ItemType.DESSERT },

  // Fruits
  { name: "Apples", type: ItemType.FRUIT },
  { name: "Bananas", type: ItemType.FRUIT },
  { name: "Strawberries", type: ItemType.FRUIT },
  { name: "Blueberries", type: ItemType.FRUIT },
  { name: "Oranges", type: ItemType.FRUIT },
  { name: "Grapes", type: ItemType.FRUIT },

  // Dairy
  { name: "Milk", type: ItemType.DAIRY },
  { name: "Cheese", type: ItemType.DAIRY },
  { name: "Yogurt", type: ItemType.DAIRY },
  { name: "Butter", type: ItemType.DAIRY },
  { name: "Cream Cheese", type: ItemType.DAIRY },

  // Beverages
  { name: "Coffee", type: ItemType.BEVERAGE },
  { name: "Tea", type: ItemType.BEVERAGE },
  { name: "Orange Juice", type: ItemType.BEVERAGE },
  { name: "Soda", type: ItemType.BEVERAGE },
  { name: "Milkshake", type: ItemType.BEVERAGE },

  // Spices
  { name: "Salt", type: ItemType.SPICE },
  { name: "Pepper", type: ItemType.SPICE },
  { name: "Garlic Powder", type: ItemType.SPICE },
  { name: "Cinnamon", type: ItemType.SPICE },
  { name: "Paprika", type: ItemType.SPICE },

  // Sauces
  { name: "Ketchup", type: ItemType.SAUCE },
  { name: "Mayonnaise", type: ItemType.SAUCE },
  { name: "Soy Sauce", type: ItemType.SAUCE },
  { name: "BBQ Sauce", type: ItemType.SAUCE },
  { name: "Mustard", type: ItemType.SAUCE },
];

export default ingredientsList;