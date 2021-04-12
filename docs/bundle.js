/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_calculator_template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/calculator-template.js */ "./src/view/calculator-template.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

 // import {RenderPosition, render} from "./util/render.js";

var _inputData = new WeakMap();

var _inputDataArray = new WeakMap();

var _isOperatorSymbolPressed = new WeakMap();

var _operatorSymbolPressedCount = new WeakMap();

var _calculationRezult = new WeakMap();

var _isSumButton = new WeakMap();

var _isMinusButton = new WeakMap();

var _isMutiplyButton = new WeakMap();

var _isDivideButton = new WeakMap();

var _operationType = new WeakMap();

var _inputDataPow = new WeakMap();

var _containerCalculator = new WeakMap();

var _CalculatorComponent = new WeakMap();

var _display = new WeakMap();

var _calculatorButtons = new WeakMap();

var _clearAll = new WeakSet();

var _clearAfterCalculate = new WeakSet();

var _formatResult = new WeakSet();

var _backspaceOperatorHandler = new WeakSet();

var _dotOperatorHandler = new WeakSet();

var _powerOperatorHandler = new WeakSet();

var _numbersInputHandler = new WeakSet();

var _sumOperatorHandler = new WeakSet();

var _minusOperatorHandler = new WeakSet();

var _multiplyOperatorHandler = new WeakSet();

var _divideOperatorHandler = new WeakSet();

var _sumOperatorsInputHandler = new WeakSet();

var _minusOperatorsInputHandler = new WeakSet();

var _multiplyOperatorsInputHandler = new WeakSet();

var _divideOperatorsInputHandler = new WeakSet();

var _calculate = new WeakSet();

var Calculator = /*#__PURE__*/function () {
  function Calculator() {
    _classCallCheck(this, Calculator);

    _calculate.add(this);

    _divideOperatorsInputHandler.add(this);

    _multiplyOperatorsInputHandler.add(this);

    _minusOperatorsInputHandler.add(this);

    _sumOperatorsInputHandler.add(this);

    _divideOperatorHandler.add(this);

    _multiplyOperatorHandler.add(this);

    _minusOperatorHandler.add(this);

    _sumOperatorHandler.add(this);

    _numbersInputHandler.add(this);

    _powerOperatorHandler.add(this);

    _dotOperatorHandler.add(this);

    _backspaceOperatorHandler.add(this);

    _formatResult.add(this);

    _clearAfterCalculate.add(this);

    _clearAll.add(this);

    _inputData.set(this, {
      writable: true,
      value: void 0
    });

    _inputDataArray.set(this, {
      writable: true,
      value: void 0
    });

    _isOperatorSymbolPressed.set(this, {
      writable: true,
      value: void 0
    });

    _operatorSymbolPressedCount.set(this, {
      writable: true,
      value: void 0
    });

    _calculationRezult.set(this, {
      writable: true,
      value: void 0
    });

    _isSumButton.set(this, {
      writable: true,
      value: void 0
    });

    _isMinusButton.set(this, {
      writable: true,
      value: void 0
    });

    _isMutiplyButton.set(this, {
      writable: true,
      value: void 0
    });

    _isDivideButton.set(this, {
      writable: true,
      value: void 0
    });

    _operationType.set(this, {
      writable: true,
      value: void 0
    });

    _inputDataPow.set(this, {
      writable: true,
      value: void 0
    });

    _containerCalculator.set(this, {
      writable: true,
      value: void 0
    });

    _CalculatorComponent.set(this, {
      writable: true,
      value: void 0
    });

    _display.set(this, {
      writable: true,
      value: void 0
    });

    _calculatorButtons.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _inputData, '');

    _classPrivateFieldSet(this, _inputDataArray, []);

    _classPrivateFieldSet(this, _isOperatorSymbolPressed, false);

    _classPrivateFieldSet(this, _operatorSymbolPressedCount, 0);

    _classPrivateFieldSet(this, _calculationRezult, 0);

    _classPrivateFieldSet(this, _isSumButton, false);

    _classPrivateFieldSet(this, _isMinusButton, false);

    _classPrivateFieldSet(this, _isMutiplyButton, false);

    _classPrivateFieldSet(this, _isDivideButton, false);

    _classPrivateFieldSet(this, _operationType, '');

    _classPrivateFieldSet(this, _inputDataPow, 0);

    _classPrivateFieldSet(this, _containerCalculator, document.querySelector('.container--calculator'));
  }

  _createClass(Calculator, [{
    key: "init",
    value: function init() {
      _classPrivateFieldGet(this, _containerCalculator).append(Object(_view_calculator_template_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Object(_view_calculator_template_js__WEBPACK_IMPORTED_MODULE_0__["calculatorTemplate"])()));

      _classPrivateFieldSet(this, _display, document.querySelector('.calculator__display'));

      _classPrivateFieldSet(this, _calculatorButtons, document.querySelector('.calculator__buttons'));

      _classPrivateFieldGet(this, _display).textContent = '0';
    }
  }, {
    key: "start",
    value: function start() {
      var _this = this;

      _classPrivateFieldGet(this, _calculatorButtons).addEventListener('click', function (evt) {
        evt.preventDefault();

        if (evt.target.classList.contains('calculator__button--number')) {
          _classPrivateMethodGet(_this, _numbersInputHandler, _numbersInputHandler2).call(_this, evt);
        } else if (evt.target.classList.contains('calculator__button--sum')) {
          _classPrivateMethodGet(_this, _sumOperatorsInputHandler, _sumOperatorsInputHandler2).call(_this);
        } else if (evt.target.classList.contains('calculator__button--minus')) {
          _classPrivateMethodGet(_this, _minusOperatorsInputHandler, _minusOperatorsInputHandler2).call(_this);
        } else if (evt.target.classList.contains('calculator__button--multiply')) {
          _classPrivateMethodGet(_this, _multiplyOperatorsInputHandler, _multiplyOperatorsInputHandler2).call(_this);
        } else if (evt.target.classList.contains('calculator__button--divide')) {
          _classPrivateMethodGet(_this, _divideOperatorsInputHandler, _divideOperatorsInputHandler2).call(_this);
        } else if (evt.target.classList.contains('calculator__button--clear')) {
          _classPrivateMethodGet(_this, _clearAll, _clearAll2).call(_this);
        } else if (evt.target.classList.contains('calculator__button--dot')) {
          _classPrivateMethodGet(_this, _dotOperatorHandler, _dotOperatorHandler2).call(_this, evt);
        } else if (evt.target.classList.contains('calculator__button--backspace')) {
          _classPrivateMethodGet(_this, _backspaceOperatorHandler, _backspaceOperatorHandler2).call(_this, evt);
        } else if (evt.target.classList.contains('calculator__button--power2')) {
          _classPrivateMethodGet(_this, _powerOperatorHandler, _powerOperatorHandler2).call(_this);
        } else if (evt.target.classList.contains('calculator__button--calculate')) {
          _classPrivateMethodGet(_this, _calculate, _calculate2).call(_this);
        }
      });
    }
  }]);

  return Calculator;
}();

function _clearAll2() {
  _classPrivateMethodGet(this, _clearAfterCalculate, _clearAfterCalculate2).call(this);

  _classPrivateFieldSet(this, _inputDataArray, []);

  _classPrivateFieldSet(this, _isOperatorSymbolPressed, false);

  _classPrivateFieldSet(this, _calculationRezult, 0);

  _classPrivateFieldGet(this, _display).textContent = '0';
}

function _clearAfterCalculate2() {
  _classPrivateFieldSet(this, _inputData, '');

  _classPrivateFieldSet(this, _operatorSymbolPressedCount, 0);

  _classPrivateFieldSet(this, _isSumButton, false);

  _classPrivateFieldSet(this, _isMinusButton, false);

  _classPrivateFieldSet(this, _isMutiplyButton, false);

  _classPrivateFieldSet(this, _isDivideButton, false);

  _classPrivateFieldSet(this, _operationType, '');

  _classPrivateFieldSet(this, _inputDataPow, 0);
}

function _formatResult2(result) {
  if (result > 1e12) {
    _classPrivateFieldGet(this, _display).textContent = 'Too match!';

    _classPrivateMethodGet(this, _clearAfterCalculate, _clearAfterCalculate2).call(this);
  } else if (Number.isInteger(result)) {
    _classPrivateFieldGet(this, _display).textContent = result;
  } else {
    _classPrivateFieldGet(this, _display).textContent = result.toFixed(8);
  }
}

function _backspaceOperatorHandler2() {
  _classPrivateFieldSet(this, _inputData, _classPrivateFieldGet(this, _inputData).split(''));

  _classPrivateFieldGet(this, _inputData).pop();

  _classPrivateFieldSet(this, _inputData, _classPrivateFieldGet(this, _inputData).join(''));

  if (_classPrivateFieldGet(this, _inputData).length === 0) {
    _classPrivateFieldGet(this, _display).textContent = '0';
  } else {
    _classPrivateFieldGet(this, _display).textContent = _classPrivateFieldGet(this, _inputData);
  }

  console.log(_classPrivateFieldGet(this, _inputData));
}

function _dotOperatorHandler2(input) {
  _classPrivateFieldSet(this, _inputData, _classPrivateFieldGet(this, _inputData) + input.target.textContent);

  _classPrivateFieldGet(this, _display).textContent = _classPrivateFieldGet(this, _inputData);
  console.log(_classPrivateFieldGet(this, _inputData));
}

function _powerOperatorHandler2() {
  console.log(_classPrivateFieldGet(this, _inputDataPow));

  if (_classPrivateFieldGet(this, _inputDataPow)) {
    _classPrivateFieldSet(this, _inputDataPow, Math.pow(Number(_classPrivateFieldGet(this, _inputDataPow)), 2));

    _classPrivateFieldGet(this, _inputDataArray).pop();

    _classPrivateFieldGet(this, _inputDataArray).push(_classPrivateFieldGet(this, _inputDataPow));

    console.log(1);
  } else {
    _classPrivateFieldSet(this, _inputDataPow, Math.pow(Number(_classPrivateFieldGet(this, _inputData)), 2));

    _classPrivateFieldGet(this, _inputDataArray).push(_classPrivateFieldGet(this, _inputDataPow));

    console.log(2);
  }

  _classPrivateFieldGet(this, _display).textContent = _classPrivateFieldGet(this, _inputDataPow);
  console.log(_classPrivateFieldGet(this, _inputDataPow));
  console.log(_classPrivateFieldGet(this, _inputDataArray));

  _classPrivateFieldSet(this, _inputData, []);
}

function _numbersInputHandler2(input) {
  if (!_classPrivateFieldGet(this, _operatorSymbolPressedCount)) {
    _classPrivateFieldSet(this, _inputDataArray, []);
  }

  _classPrivateFieldSet(this, _inputData, _classPrivateFieldGet(this, _inputData) + input.target.textContent);

  _classPrivateFieldGet(this, _display).textContent = _classPrivateFieldGet(this, _inputData);
  console.log(_classPrivateFieldGet(this, _inputData));
}

function _sumOperatorHandler2() {
  console.log(_classPrivateFieldGet(this, _inputDataArray));

  var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(this, _inputDataArray)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var number = _step.value;
      console.log(number);

      _classPrivateFieldSet(this, _calculationRezult, _classPrivateFieldGet(this, _calculationRezult) + number);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  _classPrivateFieldSet(this, _inputDataArray, []);

  _classPrivateFieldGet(this, _inputDataArray).push(_classPrivateFieldGet(this, _calculationRezult));

  _classPrivateMethodGet(this, _formatResult, _formatResult2).call(this, _classPrivateFieldGet(this, _calculationRezult));

  _classPrivateFieldSet(this, _calculationRezult, 0);
}

function _minusOperatorHandler2() {
  _classPrivateFieldSet(this, _calculationRezult, _classPrivateFieldGet(this, _inputDataArray)[0] - _classPrivateFieldGet(this, _inputDataArray)[1]);

  _classPrivateFieldSet(this, _inputDataArray, []);

  _classPrivateFieldGet(this, _inputDataArray).push(_classPrivateFieldGet(this, _calculationRezult));

  _classPrivateMethodGet(this, _formatResult, _formatResult2).call(this, _classPrivateFieldGet(this, _calculationRezult));

  _classPrivateFieldSet(this, _calculationRezult, 0);
}

function _multiplyOperatorHandler2() {
  _classPrivateFieldSet(this, _calculationRezult, 1);

  console.log(_classPrivateFieldGet(this, _inputDataArray));

  var _iterator2 = _createForOfIteratorHelper(_classPrivateFieldGet(this, _inputDataArray)),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var number = _step2.value;
      console.log(number);

      _classPrivateFieldSet(this, _calculationRezult, _classPrivateFieldGet(this, _calculationRezult) * number);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  console.log(_classPrivateFieldGet(this, _calculationRezult));

  _classPrivateFieldSet(this, _inputDataArray, []);

  _classPrivateFieldGet(this, _inputDataArray).push(_classPrivateFieldGet(this, _calculationRezult));

  _classPrivateMethodGet(this, _formatResult, _formatResult2).call(this, _classPrivateFieldGet(this, _calculationRezult));

  _classPrivateFieldSet(this, _calculationRezult, 0);
}

function _divideOperatorHandler2() {
  if (_classPrivateFieldGet(this, _inputDataArray)[1] === 0) {
    _classPrivateFieldGet(this, _display).textContent = 'Divide by zero!';

    _classPrivateMethodGet(this, _clearAfterCalculate, _clearAfterCalculate2).call(this);
  } else {
    _classPrivateFieldSet(this, _calculationRezult, _classPrivateFieldGet(this, _inputDataArray)[0] / _classPrivateFieldGet(this, _inputDataArray)[1]);

    _classPrivateFieldSet(this, _inputDataArray, []);

    _classPrivateFieldGet(this, _inputDataArray).push(_classPrivateFieldGet(this, _calculationRezult));

    _classPrivateMethodGet(this, _formatResult, _formatResult2).call(this, _classPrivateFieldGet(this, _calculationRezult));

    _classPrivateFieldSet(this, _calculationRezult, 0);
  }
}

function _sumOperatorsInputHandler2() {
  var _this$operatorSymbolP;

  _classPrivateFieldSet(this, _isOperatorSymbolPressed, true);

  _classPrivateFieldSet(this, _isSumButton, true);

  _classPrivateFieldSet(this, _operationType, 'sum');

  _classPrivateFieldSet(this, _operatorSymbolPressedCount, (_this$operatorSymbolP = +_classPrivateFieldGet(this, _operatorSymbolPressedCount)) + 1), _this$operatorSymbolP;

  _classPrivateFieldGet(this, _inputDataArray).push(Number(_classPrivateFieldGet(this, _inputData)));

  console.log(_classPrivateFieldGet(this, _inputDataArray));

  _classPrivateFieldSet(this, _inputData, []);

  if (_classPrivateFieldGet(this, _operatorSymbolPressedCount) > 1) {
    if (!_classPrivateFieldGet(this, _isMinusButton) && !_classPrivateFieldGet(this, _isMutiplyButton) && !_classPrivateFieldGet(this, _isDivideButton)) {
      _classPrivateMethodGet(this, _sumOperatorHandler, _sumOperatorHandler2).call(this);
    } else if (_classPrivateFieldGet(this, _isMinusButton)) {
      _classPrivateMethodGet(this, _minusOperatorHandler, _minusOperatorHandler2).call(this);

      _classPrivateFieldSet(this, _isMinusButton, false);
    } else if (_classPrivateFieldGet(this, _isMutiplyButton)) {
      _classPrivateMethodGet(this, _multiplyOperatorHandler, _multiplyOperatorHandler2).call(this);

      _classPrivateFieldSet(this, _isMutiplyButton, false);
    } else if (_classPrivateFieldGet(this, _isDivideButton)) {
      _classPrivateMethodGet(this, _divideOperatorHandler, _divideOperatorHandler2).call(this);

      _classPrivateFieldSet(this, _isDivideButton, false);
    }
  }
}

function _minusOperatorsInputHandler2() {
  var _this$operatorSymbolP2;

  _classPrivateFieldSet(this, _isOperatorSymbolPressed, true);

  _classPrivateFieldSet(this, _isMinusButton, true);

  _classPrivateFieldSet(this, _operationType, 'minus');

  _classPrivateFieldSet(this, _operatorSymbolPressedCount, (_this$operatorSymbolP2 = +_classPrivateFieldGet(this, _operatorSymbolPressedCount)) + 1), _this$operatorSymbolP2;

  _classPrivateFieldGet(this, _inputDataArray).push(Number(_classPrivateFieldGet(this, _inputData)));

  console.log(_classPrivateFieldGet(this, _inputDataArray));

  _classPrivateFieldSet(this, _inputData, []);

  if (_classPrivateFieldGet(this, _operatorSymbolPressedCount) > 1) {
    if (!_classPrivateFieldGet(this, _isSumButton) && !_classPrivateFieldGet(this, _isMutiplyButton) && !_classPrivateFieldGet(this, _isDivideButton)) {
      _classPrivateMethodGet(this, _minusOperatorHandler, _minusOperatorHandler2).call(this);
    } else if (_classPrivateFieldGet(this, _isSumButton)) {
      _classPrivateMethodGet(this, _sumOperatorHandler, _sumOperatorHandler2).call(this);

      _classPrivateFieldSet(this, _isSumButton, false);
    } else if (_classPrivateFieldGet(this, _isMutiplyButton)) {
      _classPrivateMethodGet(this, _multiplyOperatorHandler, _multiplyOperatorHandler2).call(this);

      _classPrivateFieldSet(this, _isMutiplyButton, false);
    } else if (_classPrivateFieldGet(this, _isDivideButton)) {
      _classPrivateMethodGet(this, _divideOperatorHandler, _divideOperatorHandler2).call(this);

      _classPrivateFieldSet(this, _isDivideButton, false);
    }
  } else {
    _classPrivateMethodGet(this, _sumOperatorHandler, _sumOperatorHandler2).call(this);

    _classPrivateFieldSet(this, _isSumButton, false);
  }
}

function _multiplyOperatorsInputHandler2() {
  var _this$operatorSymbolP3;

  _classPrivateFieldSet(this, _isOperatorSymbolPressed, true);

  _classPrivateFieldSet(this, _isMutiplyButton, true);

  _classPrivateFieldSet(this, _operationType, 'multiply');

  _classPrivateFieldSet(this, _operatorSymbolPressedCount, (_this$operatorSymbolP3 = +_classPrivateFieldGet(this, _operatorSymbolPressedCount)) + 1), _this$operatorSymbolP3;

  _classPrivateFieldGet(this, _inputDataArray).push(Number(_classPrivateFieldGet(this, _inputData)));

  _classPrivateFieldSet(this, _inputData, []);

  console.log(_classPrivateFieldGet(this, _inputDataArray));

  if (_classPrivateFieldGet(this, _operatorSymbolPressedCount) > 1) {
    if (!_classPrivateFieldGet(this, _isSumButton) && !_classPrivateFieldGet(this, _isMinusButton) && !_classPrivateFieldGet(this, _isDivideButton)) {
      _classPrivateMethodGet(this, _multiplyOperatorHandler, _multiplyOperatorHandler2).call(this);
    } else if (_classPrivateFieldGet(this, _isSumButton)) {
      _classPrivateMethodGet(this, _sumOperatorHandler, _sumOperatorHandler2).call(this);

      _classPrivateFieldSet(this, _isSumButton, false);
    } else if (_classPrivateFieldGet(this, _isMinusButton)) {
      _classPrivateMethodGet(this, _minusOperatorHandler, _minusOperatorHandler2).call(this);

      _classPrivateFieldSet(this, _isMinusButton, false);
    } else if (_classPrivateFieldGet(this, _isDivideButton)) {
      _classPrivateMethodGet(this, _divideOperatorHandler, _divideOperatorHandler2).call(this);

      _classPrivateFieldSet(this, _isDivideButton, false);
    }
  } else {
    _classPrivateMethodGet(this, _sumOperatorHandler, _sumOperatorHandler2).call(this);

    _classPrivateFieldSet(this, _isSumButton, false);
  }
}

function _divideOperatorsInputHandler2() {
  var _this$operatorSymbolP4;

  _classPrivateFieldSet(this, _isOperatorSymbolPressed, true);

  _classPrivateFieldSet(this, _isDivideButton, true);

  _classPrivateFieldSet(this, _operationType, 'divide');

  _classPrivateFieldSet(this, _operatorSymbolPressedCount, (_this$operatorSymbolP4 = +_classPrivateFieldGet(this, _operatorSymbolPressedCount)) + 1), _this$operatorSymbolP4;

  _classPrivateFieldGet(this, _inputDataArray).push(Number(_classPrivateFieldGet(this, _inputData)));

  _classPrivateFieldSet(this, _inputData, []); // console.log(this.#isMinusButton);


  if (_classPrivateFieldGet(this, _operatorSymbolPressedCount) > 1) {
    if (!_classPrivateFieldGet(this, _isSumButton) && !_classPrivateFieldGet(this, _isMinusButton) && !_classPrivateFieldGet(this, _isMutiplyButton)) {
      _classPrivateMethodGet(this, _divideOperatorHandler, _divideOperatorHandler2).call(this);
    } else if (_classPrivateFieldGet(this, _isSumButton)) {
      _classPrivateMethodGet(this, _sumOperatorHandler, _sumOperatorHandler2).call(this);

      _classPrivateFieldSet(this, _isSumButton, false);
    } else if (_classPrivateFieldGet(this, _isMinusButton)) {
      _classPrivateMethodGet(this, _minusOperatorHandler, _minusOperatorHandler2).call(this);

      _classPrivateFieldSet(this, _isMinusButton, false);
    } else if (_classPrivateFieldGet(this, _isMutiplyButton)) {
      _classPrivateMethodGet(this, _multiplyOperatorHandler, _multiplyOperatorHandler2).call(this);

      _classPrivateFieldSet(this, _isMutiplyButton, false);
    }
  } else {
    _classPrivateMethodGet(this, _sumOperatorHandler, _sumOperatorHandler2).call(this);

    _classPrivateFieldSet(this, _isSumButton, false);
  }
}

function _calculate2() {
  if (_classPrivateFieldGet(this, _operationType)) {
    var _this$operatorSymbolP5;

    _classPrivateFieldSet(this, _operatorSymbolPressedCount, (_this$operatorSymbolP5 = +_classPrivateFieldGet(this, _operatorSymbolPressedCount)) + 1), _this$operatorSymbolP5;
  }

  if (_classPrivateFieldGet(this, _operatorSymbolPressedCount) > 1) {
    _classPrivateFieldGet(this, _inputDataArray).push(Number(_classPrivateFieldGet(this, _inputData)));
  }

  switch (_classPrivateFieldGet(this, _operationType)) {
    case 'sum':
      _classPrivateMethodGet(this, _sumOperatorHandler, _sumOperatorHandler2).call(this);

      _classPrivateMethodGet(this, _clearAfterCalculate, _clearAfterCalculate2).call(this);

      break;

    case 'minus':
      _classPrivateMethodGet(this, _minusOperatorHandler, _minusOperatorHandler2).call(this);

      _classPrivateMethodGet(this, _clearAfterCalculate, _clearAfterCalculate2).call(this);

      break;

    case 'multiply':
      _classPrivateMethodGet(this, _multiplyOperatorHandler, _multiplyOperatorHandler2).call(this);

      _classPrivateMethodGet(this, _clearAfterCalculate, _clearAfterCalculate2).call(this);

      break;

    case 'divide':
      _classPrivateMethodGet(this, _divideOperatorHandler, _divideOperatorHandler2).call(this);

      _classPrivateMethodGet(this, _clearAfterCalculate, _clearAfterCalculate2).call(this);

      break;
  }
}

var myCalculator = new Calculator();
myCalculator.init();
myCalculator.start();

/***/ }),

/***/ "./src/view/calculator-template.js":
/*!*****************************************!*\
  !*** ./src/view/calculator-template.js ***!
  \*****************************************/
/*! exports provided: calculatorTemplate, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculatorTemplate", function() { return calculatorTemplate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
var calculatorTemplate = function calculatorTemplate() {
  return "\n    <section class=\"calculator\">\n      <div class=\"calculator__subdisplay\" aria-label=\"\u0434\u0438\u0441\u043F\u043B\u0435\u0439\"></div>\n      <div class=\"calculator__display\" aria-label=\"\u0434\u0438\u0441\u043F\u043B\u0435\u0439\"></div>\n      <div class=\"calculator__buttons\">\n        <button class=\"calculator__button calculator__button--giper\" type=\"button\">1/x</button>\n        <button class=\"calculator__button calculator__button--power2\" type=\"button\">x<sup>2</sup></button>\n        <button class=\"calculator__button calculator__button--clear\" type=\"button\">\u0421</button>\n        <button class=\"calculator__button calculator__button--backspace\" type=\"button\">&larr;</button>\n        <button class=\"calculator__button calculator__button--number calculator__button--7\" type=\"button\">7</button>\n        <button class=\"calculator__button calculator__button--number calculator__button--8\" type=\"button\">8</button>\n        <button class=\"calculator__button calculator__button--number calculator__button--9\" type=\"button\">9</button>\n        <button class=\"calculator__button calculator__button--divide\" type=\"button\">/</button>\n        <button class=\"calculator__button calculator__button--number calculator__button--4\" type=\"button\">4</button>\n        <button class=\"calculator__button calculator__button--number calculator__button--5\" type=\"button\">5</button>\n        <button class=\"calculator__button calculator__button--number calculator__button--6\" type=\"button\">6</button>\n        <button class=\"calculator__button calculator__button--multiply\" type=\"button\">&times;</button>\n        <button class=\"calculator__button calculator__button--number calculator__button--1\" type=\"button\">1</button>\n        <button class=\"calculator__button calculator__button--number calculator__button--2\" type=\"button\">2</button>\n        <button class=\"calculator__button calculator__button--number calculator__button--3\" type=\"button\">3</button>\n        <button class=\"calculator__button calculator__button--minus\" type=\"button\">&minus;</button>\n        <button class=\"calculator__button calculator__button--dot\" type=\"button\">.</button>\n        <button class=\"calculator__button calculator__button--number calculator__button--0\" type=\"button\">0</button>\n        <button class=\"calculator__button calculator__button--calculate\" type=\"button\">=</button>\n        <button class=\"calculator__button calculator__button--sum\" type=\"button\">+</button>\n      </div>\n    </section>\n  ";
};

var createElement = function createElement(template) {
  var newElement = document.createElement("div");
  newElement.innerHTML = template;
  return newElement.firstElementChild;
};



/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map