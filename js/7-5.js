"use strict";

const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const targetValue = event.target.value;
  span.textContent = targetValue === "" ? "незнакомец" : targetValue;
});
