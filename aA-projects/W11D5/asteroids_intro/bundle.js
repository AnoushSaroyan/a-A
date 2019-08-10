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
/******/ 	return __webpack_require__(__webpack_require__.s = "./root.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./asteroid.js":
/*!*********************!*\
  !*** ./asteroid.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MovingObject = __webpack_require__(/*! ./movingObject.js */ \"./movingObject.js\");\nvar inherit = __webpack_require__(/*! ./inherit.js */ \"./inherit.js\");\n\n\nclass Asteroid {\n    constructor(name, composition, axis) {\n        this.name = name;\n        this.composition = composition;\n        this.axis = axis;\n    }\n}\n\nAsteroid.prototype.hurdle = () => {\n    console.log(`HURDLING AT ${axis} axis...`)\n}\n\ninherit(MovingObject, Asteroid);\n\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./asteroid.js?");

/***/ }),

/***/ "./inherit.js":
/*!********************!*\
  !*** ./inherit.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var inherit = function(parent, child) {\n    var Surrogate = function() {};\n    Surrogate.prototype = parent.prototype;\n    child.prototype = new Surrogate();\n    child.prototype.constructor = child;\n}\n\nmodule.exports = inherit;\n\n//# sourceURL=webpack:///./inherit.js?");

/***/ }),

/***/ "./movingObject.js":
/*!*************************!*\
  !*** ./movingObject.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class MovingObject {\n    constructor(name, speed, size) {\n        this.name = name;\n        this.speed = speed;\n        this.size = size;\n    }\n\n    move() {\n        console.log(\"WOW, I CAN MOVE IT\");\n    }\n}\n\nMovingObject.prototype.spin = function () {\n    console.log(\"LOOK, I CAN SPIN\");\n}\n\n\nmodule.exports = MovingObject;\n\n\n//# sourceURL=webpack:///./movingObject.js?");

/***/ }),

/***/ "./root.js":
/*!*****************!*\
  !*** ./root.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Ship = __webpack_require__(/*! ./ship.js */ \"./ship.js\");\nvar Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./asteroid.js\");\nvar MovingObject = __webpack_require__(/*! ./movingObject.js */ \"./movingObject.js\");\n\n// const lola = new Dog(\"Lola\", \"sqweaky frog\");\n// const charlie = new Cat(\"Charlie\");\n\nwindow.Ship = Ship;\nwindow.Asteroid = Asteroid;\nwindow.MovingObject = MovingObject;\n\n// webpack./ root.js bundle.js\n// webpack entry.js -o bundle.js\n// webpack app.js -o bundle.js--mode = development\n\n\n//# sourceURL=webpack:///./root.js?");

/***/ }),

/***/ "./ship.js":
/*!*****************!*\
  !*** ./ship.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var MovingObject = __webpack_require__(/*! ./movingObject.js */ \"./movingObject.js\");\nvar inherit = __webpack_require__(/*! ./inherit.js */ \"./inherit.js\");\n\nclass Ship {\n    constructor(name, pilot) {\n        this.name = name;\n        this.pilot = pilot;\n    }\n}\n\nShip.prototype.thrusters = function () {\n    console.log(\"INITIATE THRUSTERSSSS\")\n}\n\nShip.prototype.ejectPilot = () => {\n    console.log(`ALERT: PREPARE FOR EJECTION. GOODBYE ${this.pilot}!!`)\n}\n\ninherit(MovingObject, Ship);\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./ship.js?");

/***/ })

/******/ });