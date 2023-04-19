import { addNumsEventListener } from "./buttons";

addNumsEventListener((e) => {
  if (operation === "") {
    firstNumber += e.target.innerText;
    updateDisplay(firstNumber);
  } else {
    secondNumber += e.target.innerText;
    updateDisplay(secondNumber);
  }
});
