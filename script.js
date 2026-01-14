/* HAMBURGER MENU */
const hamburger = document.querySelector(".hamburger");
const sidebar = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

/* SLIDER */
let current = 0;
const recipes = document.querySelectorAll(".recipe");

document.querySelector(".arrow.right").onclick = () => {
  recipes[current].classList.remove("active");
  current = (current + 1) % recipes.length;
  recipes[current].classList.add("active");
};

document.querySelector(".arrow.left").onclick = () => {
  recipes[current].classList.remove("active");
  current = (current - 1 + recipes.length) % recipes.length;
  recipes[current].classList.add("active");
};

/* MODAL DATA */
const data = {
  adobo: {
    title: "Chicken Adobo",
    ingredients: ["Chicken", "Soy Sauce", "Vinegar", "Garlic", "Bay Leaf"],
    steps: ["Marinate chicken", "Simmer ingredients", "Reduce sauce"]
  },
  sinigang: {
    title: "Sinigang",
    ingredients: ["Pork", "Tamarind", "Vegetables"],
    steps: ["Boil pork", "Add tamarind", "Add vegetables"]
  },
  kare: {
    title: "Kare-Kare",
    ingredients: ["Oxtail", "Peanut Sauce", "Vegetables"],
    steps: ["Cook meat", "Add peanut sauce", "Serve with bagoong"]
  }
};

/* RECIPE LOGIC */

document.querySelectorAll(".recipe-btn").forEach(btn => {
  btn.onclick = () => {
    const recipe = data[btn.dataset.recipe];
    const ingredientsList = recipe.ingredients.join('\n');
    const stepsList = recipe.steps.map((s, i) => `${i + 1}. ${s}`).join('\n');
    alert(`${recipe.title}\n\nIngredients:\n${ingredientsList}\n\nSteps:\n${stepsList}`);
  };
});
