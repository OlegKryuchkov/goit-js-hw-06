const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListRef = document.querySelector("#ingredients");

ingredients.forEach((el) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = el;
  ingredient.classList.add("item");
  ingredientsListRef.append(ingredient);
});
