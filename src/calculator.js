//https://www.section.io/engineering-education/building-a-calculator-a-javascript-project-for-beginners/

import {
  updateDisplay,
  toggleSelected,
  removeSelectionFilter,
} from "./buttons";

let firstNumber = "";
let secondNumber = "";
let operation = "";

const compute = (number1, number2, operator) => {
  switch (operator) {
    case "divide":
      return Number(number1) / Number(number2);
    case "times":
      return Number(number1) * Number(number2);
    case "minus":
      return Number(number1) - Number(number2);
    case "plus":
      return Number(number1) + Number(number2);
  }
};

let previousOperation = null;
let justPressedEquals = false;

export const appendNumber = (e) => {
  if (justPressedEquals === true) {
    firstNumber = "";
    secondNumber = "";
    operation = "";
    justPressedEquals = false;
  }

  removeSelectionFilter();
  previousOperation = null;

  if (operation === "") {
    if (firstNumber.includes(".") == false) {
      firstNumber += e.target.innerText;
      updateDisplay(firstNumber);
    }
  } else {
    if (secondNumber.includes(".") == false) {
      secondNumber += e.target.innerText;
      updateDisplay(secondNumber);
    }
  }
};

export const chooseOperator = (e) => {
  if (justPressedEquals === true) {
    secondNumber = "";
    justPressedEquals = false;
  }

  if (previousOperation != null) {
    toggleSelected(previousOperation);
  }

  if (secondNumber != "") {
    let result = compute(firstNumber, secondNumber, operation);
    updateDisplay(result);

    firstNumber = result;
    secondNumber = "";
  }

  if (firstNumber != "") {
    let target = e.target;
    operation = target.id;
    toggleSelected(target);

    previousOperation = target;
  }
};

export const equals = () => {
  if (firstNumber != "" && secondNumber != "" && operation != "") {
    let result = compute(firstNumber, secondNumber, operation);
    updateDisplay(result);

    firstNumber = result;
    justPressedEquals = true;
  }
};
