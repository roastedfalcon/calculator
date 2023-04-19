import { appendNumber, chooseOperator, equals } from "./calculator";

const display = document.querySelector("#display");
const nums = document.querySelectorAll(".number");
const clear = document.querySelector("#clear");
const del = document.querySelector("#delete");
const decimal = document.querySelector("#decimal");
const operators = document.querySelectorAll(".operator");
const equalsButton = document.querySelector("#equals");

/*
del.addEventListener("click", () => {
  display.textContent = display.textContent.slice(0, -1);
  if (display.textContent == "") display.textContent = "0";
});
*/

export const updateDisplay = (string) => {
  display.textContent = string;
};

export const toggleSelected = (element) => element.classList.toggle("selected");

export const removeSelectionFilter = () => {
  operators.forEach((operator) => operator.classList.remove("selected"));
};

//event listeners
nums.forEach((num) => num.addEventListener("click", appendNumber));

operators.forEach((operator) => {
  operator.addEventListener("click", chooseOperator);
});

equalsButton.addEventListener("click", equals);

clear.addEventListener("click", () => window.location.reload());
