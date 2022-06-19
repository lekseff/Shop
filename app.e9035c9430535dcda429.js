/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Shop.js":
/*!************************!*\
  !*** ./src/js/Shop.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Shop; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");



/* eslint-disable object-curly-newline */


var Shop = /*#__PURE__*/function () {
  function Shop(container) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Shop);

    this.container = container;
    this.products = [{
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      subTitle: 'Сказочное заморское яство',
      title: 'Нямушка',
      taste: ' с фуа-гра',
      options: ['10 порций', 'мышь в подарок'],
      weight: 0.5,
      prefix: 'кг',
      available: true,
      selected: {
        status: false,
        subTitle: 'Котэ не одобряет?',
        signature: 'Печень утки разварная с артишоками.'
      }
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      subTitle: 'Сказочное заморское яство',
      title: 'Нямушка',
      taste: ' с рыбой',
      options: ['10 порций', '2 мыши в подарок'],
      weight: 2,
      prefix: 'кг',
      available: true,
      selected: {
        status: false,
        subTitle: 'Котэ не одобряет?',
        signature: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
      }
    }, {
      id: (0,uuid__WEBPACK_IMPORTED_MODULE_2__["default"])(),
      subTitle: 'Сказочное заморское яство',
      title: 'Нямушка',
      taste: ' с курой',
      options: ['100 порций', '100 мышей в подарок', 'Заказчик доволен'],
      weight: 5,
      prefix: 'кг',
      available: true,
      selected: {
        status: false,
        subTitle: 'Котэ не одобряет?',
        signature: 'Филе из цыплят с трюфелями в бульоне.'
      }
    }];
  }
  /**
   * Инициализирует страницу
   */


  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Shop, [{
    key: "init",
    value: function init() {
      this.renderCards();
      this.registerListener();
    }
    /**
     * Генерирует карты на странице
     */

  }, {
    key: "renderCards",
    value: function renderCards() {
      var _this = this;

      this.products.forEach(function (item) {
        var cardEl = _this.constructor.createCardElement(item);

        _this.container.append(cardEl);
      });
    }
    /**
     * Устанавливаем обработчики событий
     */

  }, {
    key: "registerListener",
    value: function registerListener() {
      var _this2 = this;

      this.container.querySelectorAll('.card').forEach(function (card) {
        var cardEl = card.querySelector('.card__content_wrapper');
        card.addEventListener('click', function (event) {
          _this2.clickHandler(event);
        });
        cardEl.addEventListener('mouseenter', function (event) {
          _this2.mouseenterHandler(event);
        });
        cardEl.addEventListener('mouseleave', function (event) {
          _this2.mouseleaveHandler(event);
        });
      });
    }
    /**
     * Обработка события клика
     * @param {*} event - объект события по клику
     * @returns -
     */

  }, {
    key: "clickHandler",
    value: function clickHandler(event) {
      var currentEl = event.target;
      if (!currentEl.closest('.card__content_wrapper') && currentEl.tagName !== 'BUTTON') return;
      var element = currentEl.closest('.card');
      var id = element.dataset.id;
      var productData = this.getProduct(id);
      if (!productData.available) return; // Если элемент недоступен выходим

      if (productData.selected.status) {
        var subTitle = element.querySelector('.card__info');
        subTitle.textContent = productData.subTitle;
        subTitle.classList.remove('card__info-pink');
        element.querySelector('.card__footer-message').innerHTML = "\n      \u0427\u0435\u0433\u043E \u0441\u0438\u0434\u0438\u0448\u044C \u043F\u043E\u0440\u0430\u0434\u0443\u0439 \u043A\u043E\u0442\u044D,<button class=\"card__button_buy\">\u043A\u0443\u043F\u0438.</button>";
      } else {
        element.querySelector('.card__footer-message').textContent = productData.selected.signature;
      }

      element.dataset.selected = !productData.selected.status;
      productData.selected.status = !productData.selected.status;
    }
    /**
     * Обработка события наведения на элемент
     * @param {*} event - event
     * @returns -
     */

  }, {
    key: "mouseenterHandler",
    value: function mouseenterHandler(event) {
      var element = event.target.closest('.card');
      var id = element.dataset.id;
      var productData = this.getProduct(id);
      if (!productData.available) return; // Если продукт недоступен выходим

      if (productData.selected.status) {
        var subTitle = element.querySelector('.card__info');
        subTitle.textContent = productData.selected.subTitle;
        subTitle.classList.add('card__info-pink');
      }
    }
    /**
     * Обработка события ухода с элемента
     * @param {*} event - event
     * @returns -
     */

  }, {
    key: "mouseleaveHandler",
    value: function mouseleaveHandler(event) {
      var element = event.target.closest('.card');
      var id = element.dataset.id;
      var productData = this.getProduct(id);
      if (!productData.available) return; // Если продукт недоступен выходим

      if (productData.selected.status) {
        var subTitle = element.querySelector('.card__info');
        subTitle.textContent = productData.subTitle;
        subTitle.classList.remove('card__info-pink');
      }
    }
    /**
     * Получает данные продукта по id
     */

  }, {
    key: "getProduct",
    value: function getProduct(id) {
      return this.products.find(function (item) {
        return item.id === id;
      });
    }
    /**
     * Создает элемент карточки товара
     * @param {*} data - данные карточки
     * @returns - html элемент
     */

  }], [{
    key: "createCardElement",
    value: function createCardElement(data) {
      var _this3 = this;

      var id = data.id,
          subTitle = data.subTitle,
          title = data.title,
          taste = data.taste,
          options = data.options,
          available = data.available,
          weight = data.weight,
          prefix = data.prefix;
      var card = document.createElement('div');
      card.classList.add('card');
      card.dataset.id = id;
      card.dataset.selected = available ? data.selected.status : 'disable'; // card wrapper

      var cardWrapper = document.createElement('div');
      cardWrapper.classList.add('card__content_wrapper');
      var cardContent = document.createElement('div');
      cardContent.classList.add('card__content');
      var cardInfo = document.createElement('div');
      cardInfo.classList.add('card__info');
      cardInfo.textContent = subTitle;
      cardContent.append(cardInfo);
      var cardTitle = document.createElement('h2');
      cardTitle.classList.add('card__title');
      cardTitle.textContent = title;
      cardContent.append(cardTitle);
      var cardTaste = document.createElement('div');
      cardTaste.classList.add('card__taste');
      cardTaste.textContent = taste;
      cardContent.append(cardTaste);
      var cardOptions = document.createElement('ul');
      cardOptions.classList.add('card__options'); // Добавляем элементы списка опций

      options.forEach(function (item) {
        cardOptions.append(_this3.getOptionsEl(item));
      });
      cardContent.append(cardOptions); // Card weight

      var cardWeight = document.createElement('div');
      cardWeight.classList.add('card__weight');
      var cardWeightValue = document.createElement('span');
      cardWeightValue.classList.add('card__weight_value');
      cardWeightValue.textContent = weight;
      cardWeight.append(cardWeightValue);
      var cardWeightPrefix = document.createElement('span');
      cardWeightPrefix.classList.add('card__weight_prefix');
      cardWeightPrefix.textContent = prefix;
      cardWeight.append(cardWeightPrefix);
      cardWrapper.append(cardContent);
      cardWrapper.append(cardWeight); // footer

      var cardFooter = document.createElement('footer');
      cardFooter.classList.add('card__footer');
      var cardFooterMessage = document.createElement('p');
      cardFooterMessage.classList.add('card__footer-message'); // Если не доступен показываем другое сообщение

      if (available) {
        cardFooterMessage.textContent = 'Чего сидишь порадуй котэ,';
        var cardButtonBuy = document.createElement('button');
        cardButtonBuy.classList.add('card__button_buy');
        cardButtonBuy.textContent = 'купи';
        cardFooterMessage.append(cardButtonBuy);
      } else {
        cardFooterMessage.textContent = "\u041F\u0435\u0447\u0430\u043B\u044C\u043A\u0430, ".concat(taste, " \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0441\u044F.");
      }

      cardFooter.append(cardFooterMessage);
      card.append(cardWrapper);
      card.append(cardFooter);
      return card;
    }
    /**
     * СОздает элемент списка опций
     * @param {*} text - текст опции с карточки
     * @returns html элемент
     */

  }, {
    key: "getOptionsEl",
    value: function getOptionsEl(text) {
      var li = document.createElement('li');
      var number = Number.parseInt(text, 10);

      if (number) {
        var strong = document.createElement('strong');
        li.textContent = text.slice(number.toString().length);
        strong.textContent = number;
        li.prepend(strong);
      } else {
        li.innerText = text;
      }

      return li;
    }
  }]);

  return Shop;
}();



/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Shop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shop */ "./src/js/Shop.js");

var container = document.querySelector('.products__cards');
var app = new _Shop__WEBPACK_IMPORTED_MODULE_0__["default"](container);
app.init();

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rng; }
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["default"] = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _classCallCheck; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createClass; }
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");


}();
/******/ })()
;
//# sourceMappingURL=app.e9035c9430535dcda429.js.map