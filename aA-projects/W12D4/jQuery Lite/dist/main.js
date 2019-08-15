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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// 'use strict';\n\n// module.exports = class DOMNodeCollection {\n//     constructor(HTMLElements) {\n//         this.HTMLElements = HTMLElements;\n//     }\n// }\n\nconst DOMNodeCollection = function (HTMLElements) {\n    this.HTMLElements = HTMLElements || [];\n\n}\n\nDOMNodeCollection.prototype.html = function(param) {\n    console.log('html function success!');\n    //create HTML element with arg\n    if (!param) {\n        // return inner HTML of first node\n        return this.HTMLElements[0].innerHTML;\n    } else {\n        for(let i = 0; i < this.HTMLElements.length; i++) {\n            this.HTMLElements[i].innerHTML = param;\n        }\n    }\n};\n\nDOMNodeCollection.prototype.empty = function() {\n    for (let i = 0; i < this.HTMLElements.length; i++) {\n        this.HTMLElements[i].innerHTML = \"\";\n    }\n};\n\n\nDOMNodeCollection.prototype.append = function(param) {\n    // if the param is an html ele, turn it to DOMNodeCollection\n    if (typeof param === \"object\"  && !(param instanceof DOMNodeCollection)) {\n        param = new DOMNodeCollection([param]);\n    }\n\n    if (param instanceof DOMNodeCollection) {\n        // jQuerylite object '$l()'\n        for (let i = 0; i < param.HTMLElements.length; i++) {\n            this.HTMLElements.forEach((el) => {\n                el.appendChild(param.HTMLElements[i]);\n            });    \n        }\n    } else {\n        // string / html element\n        const arr_nodes = Array.from(this.HTMLElements);\n        arr_nodes.forEach((el) => {\n            el.innerHTML += param;\n        });\n        // this.HTMLElements.push(param);\n    }\n};\n\nDOMNodeCollection.prototype.attr = function(attribute, value) {\n    // gets the attribute value for only the first element\n    if (!value) {\n        return this.HTMLElements[0].getAttribute();\n    } else {\n        this.HTMLElements.forEach((el) => {\n            el.setAttribute(attribute, value);\n        }); \n    }\n};\n\n\nDOMNodeCollection.prototype.addClass = function(className) {\n    this.HTMLElements.forEach((el) => {\n        el.className = className;\n    });\n};\n\nDOMNodeCollection.prototype.removeClass = function (className) {\n    this.HTMLElements.forEach((el) => {\n        el.className = \"\";\n    });\n};\n\n\nDOMNodeCollection.prototype.children = function () {\n    let children = [];\n    this.HTMLElements.forEach((el) => {\n        children = children.concat(Array.from(el.children)); \n    });\n    return new DOMNodeCollection(children);\n    // return this.HTMLElements;\n};\n\nDOMNodeCollection.prototype.parent = function () {\n    let parents = [];\n    this.HTMLElements.forEach((el) => {\n        parents = parents.concat([el.parentElement]);\n    });\n\n    // get the unique parents\n    parents = parents.filter((value, index, self) => {\n        return self.indexOf(value) === index;\n    });\n\n    return new DOMNodeCollection(parents);\n};\n\n\n\nDOMNodeCollection.prototype.find = function (selector) {\n    let selected = [];\n\n    this.HTMLElements.forEach((el) => {\n        selected = selected.concat(Array.from(el.querySelectorAll(selector)));\n    });\n    \n    return new DOMNodeCollection(selected);\n};\n\n\nDOMNodeCollection.prototype.remove = function () {\n    this.HTMLElements.forEach((el) => {\n        el.parentElement.removeChild(el);\n    });\n};\n\n\nDOMNodeCollection.prototype.on = function (action, callback) {\n    this.HTMLElements.forEach((el) => {\n       el.addEventListener(action, callback);\n    });\n};\n\n\nDOMNodeCollection.prototype.off = function (action, callback) {\n    this.HTMLElements.forEach((el) => {\n        el.removeEventListener(action, callback);\n    });\n};\n\n// const toggleLi = (e) => {\n//     const li = e.target;\n//     if (li.className === \"visited\") {\n//         li.className = \"\";\n//     } else {\n//         li.className = \"visited\";\n//     }\n// };\n\n\n\n// const lis = $l('li');\n// lis.on(\"click\", toggleLi);\n\n\n\n\n\nmodule.exports = DOMNodeCollection;\n\n\n\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// 'use strict';\nconst DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\n// document.addEventListener(\"DOMContentLoaded\", function () {\nwindow.fns = [];    \n// [1, 2, 3]\nwindow.$l = function (element, fn) {\n    if (fn) {\n        window.fns.push(fn);\n    }\n    const items = [];\n    const dnc = new DOMNodeCollection();\n\n    if (element instanceof HTMLElement) {\n        items.push(element);\n        dnc.HTMLElements = items;\n        \n    } else {\n        const selected = document.querySelectorAll(element);\n        const arrayItems = Array.from(selected);\n        dnc.HTMLElements = arrayItems;\n    }  \n    if (window.fns.length === 0) {\n        alert('the document is ready');\n    }\n    return dnc;\n}\n\nwindow.DOMNodeCollection = DOMNodeCollection;\n\n\n\n// $(\".inner\").append(\"<p>Test</p>\");\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });