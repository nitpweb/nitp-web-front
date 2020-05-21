module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\github\\nitp-web-front\\components\\footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => {
  return __jsx("div", {
    className: "foot-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "foot-col-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "Contact Us"), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, "National Institute of Technology Patna"), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, " Patna, Bihar (800005), India"), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, " Phone: +91-0612-237 1715 / 237 2715"), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "FAX : +91-0612-2670631 , 0612-2660480")), __jsx("div", {
    className: "foot-col-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/home.js":
/*!****************************!*\
  !*** ./components/home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_newscard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/newscard */ "./components/home/newscard.js");
/* harmony import */ var _home_importantlink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/importantlink */ "./components/home/importantlink.js");
var _jsxFileName = "D:\\github\\nitp-web-front\\components\\home.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Home = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "bgimgwrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "nitpbackimg",
    src: "/home/img/nitp.png",
    alt: "NATIONAL INSTITUTE OF TECHNOLOGY PATNA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 44
    }
  }))), __jsx(_home_importantlink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "news-head",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "News", __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, "view all")), __jsx("div", {
    className: "news-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "news-viewbox",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx(_home_newscard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    head: "Workshop organised",
    detail: "IEEE organised a Workshop for the students of 1st and 2nd year on the grand..",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }), __jsx(_home_newscard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    head: "Workshop organised",
    detail: "IEEE organised a Workshop for the students of 1st and 2nd year on the grand..",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }), __jsx(_home_newscard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    head: "Workshop organised",
    detail: "IEEE organised a Workshop for the students of 1st and 2nd year on the grand..",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }), __jsx(_home_newscard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    head: "Workshop organised",
    detail: "IEEE organised a Workshop for the students of 1st and 2nd year on the grand..",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }), __jsx(_home_newscard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    head: "Workshop organised",
    detail: "IEEE organised a Workshop for the students of 1st and 2nd year on the grand..",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }), __jsx(_home_newscard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    head: "Workshop organised",
    detail: "IEEE organised a Workshop for the students of 1st and 2nd year on the grand..",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }), __jsx(_home_newscard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    head: "Workshop organised",
    detail: "IEEE organised a Workshop for the students of 1st and 2nd year on the grand..",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }), __jsx(_home_newscard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    head: "Workshop organised",
    detail: "IEEE organised a Workshop for the students of 1st and 2nd year on the grand..",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./components/home/importantlink.js":
/*!******************************************!*\
  !*** ./components/home/importantlink.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\github\\nitp-web-front\\components\\home\\importantlink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Importantlink = () => {
  return __jsx("div", {
    className: "link-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "link-col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "http://exam.nitp.ac.in/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "implink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 21
    }
  }, __jsx("img", {
    className: "linkimg",
    src: "/home/img/chanakya.svg",
    alt: "chanakya",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 25
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 25
    }
  }, "CHANAKYA"))), __jsx("div", {
    className: "implink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "linkimg",
    src: "/home/img/corona.svg",
    alt: "corona",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "CORONA")), __jsx("div", {
    className: "implink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx("img", {
    className: "linkimg",
    src: "/home/img/nss.svg",
    alt: "nss",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, "NSS")), __jsx("div", {
    className: "implink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("img", {
    className: "linkimg",
    src: "/home/img/josaa.svg",
    alt: "josaa",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, "JOSAA"))), __jsx("div", {
    className: "link-col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "implink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, __jsx("img", {
    className: "linkimg",
    src: "/home/img/asme.svg",
    alt: "asme",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, "ASME")), __jsx("div", {
    className: "implink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx("img", {
    className: "linkimg",
    src: "/home/img/teqip.svg",
    alt: "teqip",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, "TEQIP")), __jsx("div", {
    className: "implink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx("img", {
    className: "linkimg",
    src: "/home/img/ieee.svg",
    alt: "ieee",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "IEEE")), __jsx("div", {
    className: "implink",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx("img", {
    className: "linkimg",
    src: "/home/img/chanakya.svg",
    alt: "chanakya",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }), __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, "CHANAKYA"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Importantlink);

/***/ }),

/***/ "./components/home/newscard.js":
/*!*************************************!*\
  !*** ./components/home/newscard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\github\\nitp-web-front\\components\\home\\newscard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Newscard = inf => {
  return __jsx("div", {
    className: "newscard-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/home/img/image 2.png",
    alt: "Hello",
    className: "card-img",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "news-read",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "2 days ago.."), __jsx("div", {
    className: "newscard-head",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 44
    }
  }, inf.head), __jsx("h6", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 14
    }
  }, inf.detail), __jsx("div", {
    className: "newscard-readmore",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "Read more..")));
};

/* harmony default export */ __webpack_exports__["default"] = (Newscard);

/***/ }),

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ssr-window */ "ssr-window");
/* harmony import */ var ssr_window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ssr_window__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-images */ "next-images");
/* harmony import */ var next_images__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_images__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\github\\nitp-web-front\\components\\navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Navbar = () => {
  ssr_window__WEBPACK_IMPORTED_MODULE_1__["window"].onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].body.scrollTop > 80 || ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].documentElement.scrollTop > 80) {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".nav-col>h2").style.lineHeight = "0.3rem";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".nav-col>h4").style.lineHeight = "0.3rem";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".nav-col").style.paddingTop = "0.5vh";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".nav-row").style.height = "8vh";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".logobadge>h4").style.display = "none";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".logobadge>img").style.maxHeight = "8vh";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".logobadge>img").style.borderWidth = "0px";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".logobadge>img").style.marginTop = "4vh";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".logobadge").style.backgroundColor = "transparent";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".logobadge").style.paddingLeft = "4vh";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".mobilelogo>img").style.maxHeight = "6vh";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".logobadge").style.transition = "1s";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".logobadge>h4").style.transition = "1s";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".logobadge>img").style.transition = "1s";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".mobilelogo>img").style.transition = "1s";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".nav-link-row").style.height = "4vh";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".nav-link-row").style.marginTop = "8vh";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".nav-link-row").style.backgroundColor = "#F7DDB5";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".nav-link-row").style.opacity = "1";
    } else {
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".nav-col>h2").style.lineHeight = "0.6rem";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".nav-col>h4").style.lineHeight = "0.6rem";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".nav-row").style.height = "10vh";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".nav-link-row").style.height = "7vh";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".nav-link-row").style.backgroundColor = "black";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".nav-link-row").style.marginTop = "10vh";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".logobadge>h4").style.display = "block";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".logobadge>img").style.maxHeight = "15vh";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".logobadge>img").style.maxHeight = "15vh";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".logobadge>img").style.borderWidth = "1.5vh";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".logobadge").style.backgroundColor = "#E47F40";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".logobadge>img").style.marginTop = "0px";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".logobadge").style.paddingLeft = "0";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".mobilelogo>img").style.maxHeight = "8vh";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".logobadge").style.transition = "1s";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".logobadge>h4").style.transition = "1s";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".logobadge>img").style.transition = "1s";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".mobilelogo>img").style.transition = "1s";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".nav-link-row").style.opacity = "0.5";
      ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".nav-col").style.paddingTop = "1vh";
    }
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "nav-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "mobilelogo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/logo512.png",
    alt: "NIT PATNA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "nav-col",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, "NATIONAL INSTITUTE OF TECHNOLOGY PATNA"), __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, "\u0930\u093E\u0937\u094D\u091F\u094D\u0930\u0940\u092F \u092A\u094D\u0930\u094C\u0926\u094D\u092F\u094B\u0917\u093F\u0915\u0940 \u0938\u0902\u0938\u094D\u0925\u093E\u0928, \u092A\u091F\u0928\u093E")), __jsx("div", {
    className: "nav-link-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "logobadge",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, "\u0936\u094D\u0930\u092E\u094B\u093D\u0928\u0935\u0930\u0924 \u091A\u0947\u0937\u094D\u091F\u093E\u092F"), __jsx("img", {
    src: "/logo512.png",
    alt: "NIT PATNA",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  })), __jsx("span", {
    className: "nav-toggle",
    onClick: function () {
      var x = ssr_window__WEBPACK_IMPORTED_MODULE_1__["document"].querySelector(".nav-sidebar");

      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/toggle.svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 14
    }
  })), __jsx("div", {
    className: "nav-sidebar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: Index, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar */ "./components/navbar.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/home */ "./components/home.js");
var _jsxFileName = "D:\\github\\nitp-web-front\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Index = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return __jsx("div", {
    className: "app",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "National Institute of Technology Patna"), __jsx("link", {
    rel: "/favicon.ico",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  })), __jsx(_components_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_components_home__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\github\nitp-web-front\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next-images":
/*!******************************!*\
  !*** external "next-images" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-images");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ssr-window":
/*!*****************************!*\
  !*** external "ssr-window" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ssr-window");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map