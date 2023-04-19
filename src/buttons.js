const display = document.querySelector("#display");
export const nums = document.querySelectorAll(".number");
const clear = document.querySelector("#clear");
const del = document.querySelector("#delete");
const decimal = document.querySelector("#decimal");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");

clear.addEventListener("click", () => window.location.reload());

/*
del.addEventListener("click", () => {
  display.textContent = display.textContent.slice(0, -1);
  if (display.textContent == "") display.textContent = "0";
});
*/

export const addNumsEventListener = (callback) => {
  nums.forEach((num) => num.addEventListener("click", callback));
};

export const updateDisplay = (string) => {
  display.textContent = string;
};

export const addOperatorsEventListener = (callback) => {
  operators.forEach((operator) => {
    operator.addEventListener("click", callback);
  });
};

export const addEqualsEventListener = (callback) => {
  equals.addEventListener("click", callback);
};

export const toggleSelected = (element) => element.classList.toggle("selected");

export const removeSelectionFilter = () => {
  operators.forEach((operator) => operator.classList.remove("selected"));
};
