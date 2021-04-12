import {CalculatorView, calculatorTemplate, createElement} from "./view/calculator-template.js";
// import {RenderPosition, render} from "./util/render.js";

class Calculator {
  #inputData;
  #inputDataArray;
  #isOperatorSymbolPressed;
  #operatorSymbolPressedCount;
  #calculationRezult;
  #isSumButton;
  #isMinusButton;
  #isMutiplyButton;
  #isDivideButton;
  #operationType;
  #inputDataPow;
  #containerCalculator;

  #CalculatorComponent;
  #display;
  #calculatorButtons;

  constructor() {
    this.#inputData = '';
    this.#inputDataArray = [];
    this.#isOperatorSymbolPressed = false;
    this.#operatorSymbolPressedCount = 0;
    this.#calculationRezult = 0;
    this.#isSumButton = false;
    this.#isMinusButton = false;
    this.#isMutiplyButton = false;
    this.#isDivideButton = false;
    this.#operationType = '';
    this.#inputDataPow = 0;

    this.#containerCalculator = document.querySelector('.container--calculator');
  }

  init() {
    this.#containerCalculator.append(createElement(calculatorTemplate()));
    this.#display = document.querySelector('.calculator__display');
    this.#calculatorButtons = document.querySelector('.calculator__buttons');
    this.#display.textContent = '0';
  }

  start() {
    this.#calculatorButtons.addEventListener('click', (evt) => {
      evt.preventDefault();
      if (evt.target.classList.contains('calculator__button--number')) {
        this.#numbersInputHandler(evt);
      } else if (evt.target.classList.contains('calculator__button--sum')) {
        this.#sumOperatorsInputHandler();
      } else if (evt.target.classList.contains('calculator__button--minus')) {
        this.#minusOperatorsInputHandler();
      } else if (evt.target.classList.contains('calculator__button--multiply')) {
        this.#multiplyOperatorsInputHandler();
      } else if (evt.target.classList.contains('calculator__button--divide')) {
        this.#divideOperatorsInputHandler();
      } else if (evt.target.classList.contains('calculator__button--clear')) {
        this.#clearAll();
      } else if (evt.target.classList.contains('calculator__button--dot')) {
        this.#dotOperatorHandler(evt);
      } else if (evt.target.classList.contains('calculator__button--backspace')) {
        this.#backspaceOperatorHandler(evt);
      } else if (evt.target.classList.contains('calculator__button--power2')) {
        this.#powerOperatorHandler();
      } else if (evt.target.classList.contains('calculator__button--calculate')) {
        this.#calculate();
      }
    })
  }

  #clearAll() {
    this.#clearAfterCalculate();
    this.#inputDataArray = [];
    this.#isOperatorSymbolPressed = false;
    this.#calculationRezult = 0;
    this.#display.textContent = '0';
  }

  #clearAfterCalculate() {
    this.#inputData = '';
    this.#operatorSymbolPressedCount = 0;
    this.#isSumButton = false;
    this.#isMinusButton = false;
    this.#isMutiplyButton = false;
    this.#isDivideButton = false;
    this.#operationType = '';
    this.#inputDataPow = 0;
  }

  #formatResult(result) {
    if (result > 1e12) {
      this.#display.textContent = 'Too match!';
      this.#clearAfterCalculate();
    } else if (Number.isInteger(result)) {
      this.#display.textContent = result;
    } else {
      this.#display.textContent = result.toFixed(8);
    }
  }

  #backspaceOperatorHandler() {
    this.#inputData = this.#inputData.split('');
    this.#inputData.pop();
    this.#inputData = this.#inputData.join('');
    if (this.#inputData.length === 0) {
      this.#display.textContent = '0';
    } else {
      this.#display.textContent = this.#inputData;
    }
    console.log(this.#inputData);
  }

  #dotOperatorHandler(input) {
    this.#inputData += input.target.textContent;
    this.#display.textContent = this.#inputData;
    console.log(this.#inputData);
  }

  #powerOperatorHandler() {
    console.log(this.#inputDataPow);
    if (this.#inputDataPow) {
      this.#inputDataPow = Math.pow(Number(this.#inputDataPow), 2);
      this.#inputDataArray.pop();
      this.#inputDataArray.push(this.#inputDataPow);
      console.log(1);
    } else {
      this.#inputDataPow = Math.pow(Number(this.#inputData), 2);
      this.#inputDataArray.push(this.#inputDataPow);
      console.log(2);
    }
    this.#display.textContent = this.#inputDataPow;

    console.log(this.#inputDataPow);
    console.log(this.#inputDataArray);
    this.#inputData = [];
  }

  #numbersInputHandler(input) {
    if (!this.#operatorSymbolPressedCount) {
      this.#inputDataArray = [];
    }
    this.#inputData += input.target.textContent;
    this.#display.textContent = this.#inputData;
    console.log(this.#inputData);
  }

  #sumOperatorHandler() {
    console.log(this.#inputDataArray);
    for (const number of this.#inputDataArray) {
      console.log(number);
      this.#calculationRezult += number;
    }
    this.#inputDataArray = [];
    this.#inputDataArray.push(this.#calculationRezult);
    this.#formatResult(this.#calculationRezult);
    this.#calculationRezult = 0;
  }

  #minusOperatorHandler() {
    this.#calculationRezult = this.#inputDataArray[0] - this.#inputDataArray[1];
    this.#inputDataArray = [];
    this.#inputDataArray.push(this.#calculationRezult);
    this.#formatResult(this.#calculationRezult);
    this.#calculationRezult = 0;
  }

  #multiplyOperatorHandler() {
    this.#calculationRezult = 1;
    console.log(this.#inputDataArray);
    for (const number of this.#inputDataArray) {
      console.log(number);
      this.#calculationRezult *= number;
    }
    console.log(this.#calculationRezult);
    this.#inputDataArray = [];
    this.#inputDataArray.push(this.#calculationRezult);
    this.#formatResult(this.#calculationRezult);
    this.#calculationRezult = 0;
  }

  #divideOperatorHandler() {
    if (this.#inputDataArray[1] === 0) {
      this.#display.textContent = 'Divide by zero!'
      this.#clearAfterCalculate();
    } else {
      this.#calculationRezult = this.#inputDataArray[0] / this.#inputDataArray[1];
      this.#inputDataArray = [];
      this.#inputDataArray.push(this.#calculationRezult);
      this.#formatResult(this.#calculationRezult);
      this.#calculationRezult = 0;
    }
  }

  #sumOperatorsInputHandler() {
    this.#isOperatorSymbolPressed = true;
    this.#isSumButton = true;
    this.#operationType = 'sum';
    this.#operatorSymbolPressedCount++;

    this.#inputDataArray.push(Number(this.#inputData));
    console.log(this.#inputDataArray);
    this.#inputData = [];


    if (this.#operatorSymbolPressedCount > 1) {
      if (!this.#isMinusButton && !this.#isMutiplyButton && !this.#isDivideButton) {
        this.#sumOperatorHandler();
      } else if (this.#isMinusButton) {
        this.#minusOperatorHandler();
        this.#isMinusButton = false;
      } else if (this.#isMutiplyButton) {
        this.#multiplyOperatorHandler();
        this.#isMutiplyButton = false;
      } else if (this.#isDivideButton) {
        this.#divideOperatorHandler();
        this.#isDivideButton = false;
      }
    }
  }

  #minusOperatorsInputHandler() {
    this.#isOperatorSymbolPressed = true;
    this.#isMinusButton = true;
    this.#operationType = 'minus';
    this.#operatorSymbolPressedCount++;

    this.#inputDataArray.push(Number(this.#inputData));
    console.log(this.#inputDataArray);
    this.#inputData = [];

    if (this.#operatorSymbolPressedCount > 1) {
      if (!this.#isSumButton && !this.#isMutiplyButton && !this.#isDivideButton) {
        this.#minusOperatorHandler();
      } else if (this.#isSumButton) {
        this.#sumOperatorHandler();
        this.#isSumButton = false;
      } else if (this.#isMutiplyButton) {
        this.#multiplyOperatorHandler();
        this.#isMutiplyButton = false;
      } else if (this.#isDivideButton) {
        this.#divideOperatorHandler();
        this.#isDivideButton = false;
      }
    } else {
      this.#sumOperatorHandler();
      this.#isSumButton = false;
    }
  }

  #multiplyOperatorsInputHandler() {
    this.#isOperatorSymbolPressed = true;
    this.#isMutiplyButton = true;
    this.#operationType = 'multiply';
    this.#operatorSymbolPressedCount++;

    this.#inputDataArray.push(Number(this.#inputData));
    this.#inputData = [];
    console.log(this.#inputDataArray);

    if (this.#operatorSymbolPressedCount > 1) {
      if (!this.#isSumButton && !this.#isMinusButton && !this.#isDivideButton) {
        this.#multiplyOperatorHandler();
      } else if (this.#isSumButton) {
        this.#sumOperatorHandler();
        this.#isSumButton = false;
      } else if (this.#isMinusButton) {
        this.#minusOperatorHandler();
        this.#isMinusButton = false;
      } else if (this.#isDivideButton) {
        this.#divideOperatorHandler();
        this.#isDivideButton = false;
      }
    } else {
      this.#sumOperatorHandler();
      this.#isSumButton = false;
    }
  }

  #divideOperatorsInputHandler() {
    this.#isOperatorSymbolPressed = true;
    this.#isDivideButton = true;
    this.#operationType = 'divide';
    this.#operatorSymbolPressedCount++;

    this.#inputDataArray.push(Number(this.#inputData));
    this.#inputData = [];
    // console.log(this.#isMinusButton);

    if (this.#operatorSymbolPressedCount > 1) {
      if (!this.#isSumButton && !this.#isMinusButton && !this.#isMutiplyButton) {
        this.#divideOperatorHandler();
      } else if (this.#isSumButton) {
        this.#sumOperatorHandler();
        this.#isSumButton = false;
      } else if (this.#isMinusButton) {
        this.#minusOperatorHandler();
        this.#isMinusButton = false;
      } else if (this.#isMutiplyButton) {
        this.#multiplyOperatorHandler();
        this.#isMutiplyButton = false;
      }
    } else {
      this.#sumOperatorHandler();
      this.#isSumButton = false;
    }
  }

  #calculate() {
    if (this.#operationType) {
      this.#operatorSymbolPressedCount++;
    }

    if (this.#operatorSymbolPressedCount > 1) {
      this.#inputDataArray.push(Number(this.#inputData));
    }

    switch (this.#operationType) {
      case 'sum':
        this.#sumOperatorHandler();
        this.#clearAfterCalculate();
        break;
      case 'minus':
        this.#minusOperatorHandler();
        this.#clearAfterCalculate();
        break;
      case 'multiply':
        this.#multiplyOperatorHandler();
        this.#clearAfterCalculate();
        break;
      case 'divide':
        this.#divideOperatorHandler();
        this.#clearAfterCalculate();
        break;
    }
  }
}

let myCalculator = new Calculator();

myCalculator.init();
myCalculator.start();
