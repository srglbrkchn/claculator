const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-number]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const preOperandTextElement = document.querySelector("[data-previous-operand]");
const currOperandTextElement = document.querySelector("[data-current-operant]");

class Calculator {
  constructor(preOperandTextElement, currOperandTextElement) {
    this.preOperandTextElement = preOperandTextElement;
    this.currOperandTextElement = currOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) {
      return;
    }
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {}

  compute() {}

  updateDisplay() {
    this.currOperandTextElement.innerText = this.currentOperand;
  }
}

numberButtons.forEach((numButton) => {
  numButton.addEventListener("click", () => {
    calculator.appendNumber(numButton.innerText);
    calculator.updateDisplay();
  });
});

const calculator = new Calculator(
  preOperandTextElement,
  currOperandTextElement
);
