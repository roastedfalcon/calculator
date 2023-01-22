//https://www.section.io/engineering-education/building-a-calculator-a-javascript-project-for-beginners/

const display = document.querySelector("#display");
const nums = document.querySelectorAll(".number");
const clear = document.querySelector("#clear");
const del = document.querySelector("#delete");
const decimal = document.querySelector("#decimal");
const operators = document.querySelectorAll(".operator");
const eval = document.querySelector("#equals");

clear.addEventListener("click", () => window.location.reload());

del.addEventListener("click", () => {
  display.textContent = display.textContent.slice(0, -1);
  if (display.textContent == "") display.textContent = "0";
});

const operation = {
  firstNum: 0,
  secondNum: 0,
  operator: "",
};

const op = {
  divide: "\u00F7",
  times: "\u00D7",
  minus: "\u2212",
  plus: "\u002B",
};

function operate(a, b, operator) {
  switch (operator) {
    case "\u00F7":
      return a / b;
    case "\u00D7":
      return a * b;
    case "\u2212":
      return a - b;
    case "\u002B":
      return a + b;
  }
}
