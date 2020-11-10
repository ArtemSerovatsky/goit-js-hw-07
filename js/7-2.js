"use strict";

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const ul = document.querySelector("#ingredients");

const createIngredients = ingredients.map((e) => {
  const li = document.createElement("li");
  li.textContent = e;
  return li;
});

ul.append(...createIngredients);
