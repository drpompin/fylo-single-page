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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "FbiP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    define_property_default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js
var get_prototype_of = __webpack_require__("Bhuq");
var get_prototype_of_default = /*#__PURE__*/__webpack_require__.n(get_prototype_of);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js


function getPrototypeOf_getPrototypeOf(o) {
  getPrototypeOf_getPrototypeOf = set_prototype_of_default.a ? get_prototype_of_default.a : function _getPrototypeOf(o) {
    return o.__proto__ || get_prototype_of_default()(o);
  };
  return getPrototypeOf_getPrototypeOf(o);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js
var freeze = __webpack_require__("FbiP");
var freeze_default = /*#__PURE__*/__webpack_require__.n(freeze);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return freeze_default()(define_properties_default()(strings, {
    raw: {
      value: freeze_default()(raw)
    }
  }));
}
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./snippets.js

var size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};
var device = {
  mobileS: "(max-width: ".concat(size.mobileS, ")"),
  mobileM: "(max-width: ".concat(size.mobileM, ")"),
  mobileL: "(max-width: ".concat(size.mobileL, ")"),
  tablet: "(max-width: ".concat(size.tablet, ")"),
  laptop: "(max-width: ".concat(size.laptop, ")"),
  laptopL: "(max-width: ".concat(size.laptopL, ")"),
  desktop: "(max-width: ".concat(size.desktop, ")"),
  desktopL: "(max-width: ".concat(size.desktop, ")")
};
var HeaderBody = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__HeaderBody",
  componentId: "yd2kfv-0"
})(["background-color:#1B2330;width:100%;position:fixed;min-height:80px;padding:10px 0;display:flex;flex-direction:row;z-index:10000;top:0;@media ", "{flex-direction:column;}"], device.tablet);
var NavLeft = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__NavLeft",
  componentId: "yd2kfv-1"
})(["width:30%;padding:0 40px;@media ", "{padding:0 0 0 20px;height:60px;}"], device.tablet);
var LogoDiv = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__LogoDiv",
  componentId: "yd2kfv-2"
})(["width:152px;height:100%;background-image:url(\"static/images/logo.svg\");background-size:100%;background-repeat:no-repeat;background-position:center;cursor:pointer;@media ", "{width:100px;}"], device.mobileS);
var NavRight = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__NavRight",
  componentId: "yd2kfv-3"
})(["width:70%;display:flex;justify-content:flex-end;padding:0 40px;@media ", "{display:none;}"], device.tablet);
var NavbarToggle = external_styled_components_default.a.span.withConfig({
  displayName: "snippets__NavbarToggle",
  componentId: "yd2kfv-4"
})(["position:absolute;top:10px;right:20px;cursor:pointer;color:#FFF;font-size:40px;display:none;@media ", "{display:block;}@media ", "{font-size:35px;}"], device.tablet, device.mobileS);
var MobileNavRight = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__MobileNavRight",
  componentId: "yd2kfv-5"
})(["width:100%;height:200px;padding:0 10px;background-color:#171e2b;display:flex;flex-direction:column;justify-content:center;"]);
var NavLinks = external_styled_components_default.a.a.withConfig({
  displayName: "snippets__NavLinks",
  componentId: "yd2kfv-6"
})(["width:82px;height:100%;cursor:pointer;color:#FFF;display:flex;align-items:center;justify-content:flex-end;&:hover{color:#4CC1D4;font-weight:900;}@media ", "{height:60px;width:100%;}"], device.tablet);
var BaseDiv = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__BaseDiv",
  componentId: "yd2kfv-7"
})(["position:absolute;margin-top:80px;width:100%;background-image:url(\"static/images/bg-curvy-desktop.svg\");background-size:cover;background-repeat:no-repeat;background-position:left 62% bottom;"]);
var StartDiv = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__StartDiv",
  componentId: "yd2kfv-8"
})(["display:flex;flex-direction:column;padding:0 10% 20px;align-items:center;"]);
var StartImage = external_styled_components_default.a.img.withConfig({
  displayName: "snippets__StartImage",
  componentId: "yd2kfv-9"
})(["width:60%;height:450px;@media ", "{width:100%;height:auto;}"], device.tablet);
var StartHeading = external_styled_components_default.a.p.withConfig({
  displayName: "snippets__StartHeading",
  componentId: "yd2kfv-10"
})(["color:#FFF;font-weight:500;text-align:center;font-size:40px;width:62%;margin-top:20px;@media ", "{width:100%;}"], device.tablet);
var StartText = external_styled_components_default.a.p.withConfig({
  displayName: "snippets__StartText",
  componentId: "yd2kfv-11"
})(["color:#FFF;text-align:center;width:50%;font-size:18px;margin:30px 0;@media ", "{width:100%;}"], device.tablet);
var StartButton = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__StartButton",
  componentId: "yd2kfv-12"
})(["width:20%;color:#FFF;border-radius:20px;text-align:center;background-color:#4CC1D4;padding:10px 0;cursor:pointer;box-shadow:0px 0px 5px 0.5px #5a5f69;&:hover{font-weight:600;color:#181E2A;box-shadow:0px 0px 3px 0px #e5f4f7;}@media ", "{width:200px !important;padding:10px 30px;}"], device.tablet);
var ServicesDiv = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__ServicesDiv",
  componentId: "yd2kfv-13"
})(["display:flex;flex-direction:column;padding:100px 10%;align-items:center;@media ", "{padding:50px 10%;}"], device.tablet);
var ServicesSegment = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__ServicesSegment",
  componentId: "yd2kfv-14"
})(["display:flex;justify-content:space-evenly;margin-bottom:50px;@media ", "{flex-direction:column;align-items:center;}"], device.mobileL);
var ServicesItem = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__ServicesItem",
  componentId: "yd2kfv-15"
})(["display:flex;flex-direction:column;width:30%;align-items:center;@media ", "{width:40%;}@media ", "{width:80%;&:first-child{margin-bottom:50px;}}"], device.tablet, device.mobileL);
var ItemImageContainer = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__ItemImageContainer",
  componentId: "yd2kfv-16"
})(["width:100%;height:90px;display:flex;justify-content:center;align-items:center;"]);
var ItemImage = external_styled_components_default.a.img.withConfig({
  displayName: "snippets__ItemImage",
  componentId: "yd2kfv-17"
})(["width:25%;"]);
var ItemHeading = external_styled_components_default.a.p.withConfig({
  displayName: "snippets__ItemHeading",
  componentId: "yd2kfv-18"
})(["font-size:20px;color:#FFF;text-align:center;font-weight:500;margin:15px 0;"]);
var ItemText = external_styled_components_default.a.p.withConfig({
  displayName: "snippets__ItemText",
  componentId: "yd2kfv-19"
})(["color:#FFF;text-align:center;font-weight:100 !important;font-size:14px;@media ", "{text-align:center !important;}"], device.tablet);
var WorksDiv = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__WorksDiv",
  componentId: "yd2kfv-20"
})(["display:flex;padding:0 10% 20px;align-items:center;justify-content:space-between;@media ", "{flex-direction:column;}"], device.tablet);
var WorksDivLeft = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__WorksDivLeft",
  componentId: "yd2kfv-21"
})(["width:48%;@media ", "{width:100%;}"], device.tablet);
var mover = Object(external_styled_components_["keyframes"])(["0%{transform:translate(0,0);}100%{transform:translate(0px,15px);}"]);
var WorksImage = external_styled_components_default.a.img.withConfig({
  displayName: "snippets__WorksImage",
  componentId: "yd2kfv-22"
})(["width:100%;&:hover{animation:", " 1s infinite;animation-direction:alternate;}"], mover);
var WorksDivRight = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__WorksDivRight",
  componentId: "yd2kfv-23"
})(["width:48%;display:flex;flex-direction:column;align-items:flex-start;@media ", "{width:100%;margin-top:50px;align-items:center;}"], device.tablet);
var WorksHeading = external_styled_components_default.a.p.withConfig({
  displayName: "snippets__WorksHeading",
  componentId: "yd2kfv-24"
})(["font-size:30px;text-align:left;color:#FFF;font-weight:600;width:60%;margin-bottom:0;@media ", "{width:100%;margin-top:30px;text-align:center;}"], device.tablet);
var WorksTextLink = external_styled_components_default.a.p.withConfig({
  displayName: "snippets__WorksTextLink",
  componentId: "yd2kfv-25"
})(["text-align:left;display:flex;color:#4CC1D4;border-bottom:2px solid #4CC1D4;font-size:14px;cursor:pointer;margin:0;font-weight:500;"]);
var ReviewDiv = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__ReviewDiv",
  componentId: "yd2kfv-26"
})(["display:flex;justify-content:space-between;padding:100px 10% 200px;@media ", "{flex-direction:column;padding:50px 10%;}"], device.tablet);
var ReviewIcon = external_styled_components_default.a.img.withConfig({
  displayName: "snippets__ReviewIcon",
  componentId: "yd2kfv-27"
})(["width:40px;height:40px;position:absolute;"]);
var ReviewCards = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__ReviewCards",
  componentId: "yd2kfv-28"
})(["width:25%;display:flex;flex-direction:column;padding:20px;margin:30px 10px;background-color:#21293E;border-radius:3px;z-index:10;box-shadow:1px 1px 4px #444c5d;transition:box-shadow .3s ease,transform .3s ease,border .3s ease;&:hover{border-color:#c6ccd2;box-shadow:0 10px 25px -8px rgba(68,76,93,.3);transform:translateY(-4px);}@media ", "{width:100%;}"], device.tablet);
var ReviewText = external_styled_components_default.a.p.withConfig({
  displayName: "snippets__ReviewText",
  componentId: "yd2kfv-29"
})(["font-size:12px;color:#FFF;font-weight:500;cursor:pointer;margin-bottom:10px;&:hover{color:#4CC1D4;}"]);
var ReviewProfile = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__ReviewProfile",
  componentId: "yd2kfv-30"
})(["display:flex;"]);
var ReviewImageContainer = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__ReviewImageContainer",
  componentId: "yd2kfv-31"
})(["width:40px;height:40px;border-radius:50%;overflow:hidden;"]);
var ReviewImage = external_styled_components_default.a.img.withConfig({
  displayName: "snippets__ReviewImage",
  componentId: "yd2kfv-32"
})(["width:100%;"]);
var ReviewDetail = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__ReviewDetail",
  componentId: "yd2kfv-33"
})(["margin:0 0 0 10px;display:flex;flex-direction:column;justify-content:center;"]);
var ReviewName = external_styled_components_default.a.i.withConfig({
  displayName: "snippets__ReviewName",
  componentId: "yd2kfv-34"
})(["font-size:10px;color:#FFF;margin:0;font-weight:600;"]);
var ReviewTitle = external_styled_components_default.a.i.withConfig({
  displayName: "snippets__ReviewTitle",
  componentId: "yd2kfv-35"
})(["font-size:10px;color:#FFF;"]);
var FooterDiv = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__FooterDiv",
  componentId: "yd2kfv-36"
})(["width:100%;display:flex;justify-content:center;background-color:#0C1524;padding:100px 0;flex-direction:column;@media ", "{margin-top:150px;}"], device.tablet);
var FooterTop = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__FooterTop",
  componentId: "yd2kfv-37"
})(["padding:0px 10%;display:flex;justify-content:center;"]);
var ContactDiv = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__ContactDiv",
  componentId: "yd2kfv-38"
})(["width:60%;padding:20px 30px;display:flex;flex-direction:column;background-color:#1C2230;margin-top:-218px;border-radius:5px;box-shadow:0px 0px 5px 0.5px #e5f4f7;@media ", "{width:100%;}"], device.tablet);
var ContactHeading = external_styled_components_default.a.p.withConfig({
  displayName: "snippets__ContactHeading",
  componentId: "yd2kfv-39"
})(["color:#FFF;font-size:30px;text-align:center;font-weight:600;margin:10px 0;"]);
var ContactText = external_styled_components_default.a.p.withConfig({
  displayName: "snippets__ContactText",
  componentId: "yd2kfv-40"
})(["color:#FFF;text-align:center;font-size:14px;"]);
var ContactForm = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__ContactForm",
  componentId: "yd2kfv-41"
})(["display:flex;justify-content:space-between;flex-direction:row;padding:20px 0;@media ", "{flex-direction:column;align-items:center;}"], device.tablet);
var ContactInput = external_styled_components_default.a.input.withConfig({
  displayName: "snippets__ContactInput",
  componentId: "yd2kfv-42"
})(["width:60%;border-radius:5px;font-size:20px;&:focus{outline:none;}@media ", "{height:38px;margin:0 0 15px;width:auto;}"], device.tablet);
var FooterBottom = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__FooterBottom",
  componentId: "yd2kfv-43"
})(["padding:0 10%;display:flex;justify-content:space-between;@media ", "{flex-direction:column;}"], device.tablet);
var FooterBottomColumn = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__FooterBottomColumn",
  componentId: "yd2kfv-44"
})(["width:20%;display:flex;@media ", "{width:100%;margin:15px 0;justify-content:flex-start !important;}"], device.tablet);
var FooterMid = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__FooterMid",
  componentId: "yd2kfv-45"
})(["padding:100px 10% 20px;@media ", "{padding-top:50px;}"], device.tablet);
var FooterLogoDiv = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__FooterLogoDiv",
  componentId: "yd2kfv-46"
})(["width:15%;@media ", "{width:100%;}"], device.tablet);
var FooterLogo = external_styled_components_default.a.img.withConfig({
  displayName: "snippets__FooterLogo",
  componentId: "yd2kfv-47"
})(["width:100%;@media ", "{width:100px;}"], device.tablet);
var AddressDiv = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__AddressDiv",
  componentId: "yd2kfv-48"
})(["display:flex;margin-bottom:20px;"]);
var FooterItemDiv = external_styled_components_default.a.div.withConfig({
  displayName: "snippets__FooterItemDiv",
  componentId: "yd2kfv-49"
})(["display:flex;flex-direction:column;@media ", "{justify-content:flex-start !important;&:first-child{margin:0 50px 0 0;}}"], device.tablet);
var SocialMediaImg = external_styled_components_default.a.img.withConfig({
  displayName: "snippets__SocialMediaImg",
  componentId: "yd2kfv-50"
})(["width:25px;margin-right:10px;padding:5px;border:2px solid #FFF;border-radius:50%;&:last-child{margin-right:0px;}"]);
// CONCATENATED MODULE: ./components/Header.js











var Header_Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Header).call(this, props));
    _this.state = {
      navOpen: false
    };
    _this.showMobileNav = _this.showMobileNav.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Header, [{
    key: "showMobileNav",
    value: function showMobileNav() {
      var _this2 = this;

      this.setState(function (state) {
        return {
          navOpen: !_this2.state.navOpen
        };
      });
    }
  }, {
    key: "scrollToTeams",
    value: function scrollToTeams() {
      document.getElementById("teamsId").scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, {
    key: "scrollToFeatures",
    value: function scrollToFeatures() {
      document.getElementById("featuresId").scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, {
    key: "scrollToSignIn",
    value: function scrollToSignIn() {
      document.getElementById("signInId").scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(HeaderBody, null, external_react_default.a.createElement(NavLeft, null, external_react_default.a.createElement(link_default.a, {
        href: "/"
      }, external_react_default.a.createElement(LogoDiv, null))), external_react_default.a.createElement(NavRight, null, external_react_default.a.createElement(NavLinks, {
        onClick: this.scrollToFeatures.bind(this)
      }, "Features"), external_react_default.a.createElement(NavLinks, {
        onClick: this.scrollToTeams.bind(this)
      }, "Team"), external_react_default.a.createElement(NavLinks, {
        onClick: this.scrollToSignIn.bind(this)
      }, "Sign up")), external_react_default.a.createElement(NavbarToggle, {
        onClick: this.showMobileNav
      }, "\u2630"), this.state.navOpen ? external_react_default.a.createElement(MobileNavRight, null, external_react_default.a.createElement(NavLinks, {
        onClick: this.scrollToFeatures.bind(this),
        style: {
          justifyContent: 'center',
          fontWeight: '600'
        }
      }, "Features"), external_react_default.a.createElement(NavLinks, {
        onClick: this.scrollToTeams.bind(this),
        style: {
          justifyContent: 'center',
          fontWeight: '600'
        }
      }, "Team"), external_react_default.a.createElement(NavLinks, {
        onClick: this.scrollToSignIn.bind(this),
        style: {
          justifyContent: 'center',
          fontWeight: '600'
        }
      }, "Sign in")) : "");
    }
  }]);

  return Header;
}(external_react_["Component"]);

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/Layout.js


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  body {\n    margin: ", ";\n    font-family: ", ";\n    font-weight: ", "\n    background-color: ", "\n  }\n\n  * {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




 // // import Footer from './Footer';

var LayoutBody = external_styled_components_default.a.div.withConfig({
  displayName: "Layout__LayoutBody",
  componentId: "lnn1na-0"
})(["width:100%;height:100%;"]);
var GlobalStyle = Object(external_styled_components_["createGlobalStyle"])(_templateObject(), function (props) {
  return props.noMargin ? '0px' : '8px';
}, function (props) {
  return props.openSans ? ' sans' : 'cursive';
}, function (props) {
  return props.normalWeight ? '300' : '600';
}, function (props) {
  return props.darkBlue ? '#1B2330' : '#FFF';
});

var Layout_Layout = function Layout(props) {
  return external_react_default.a.createElement(LayoutBody, null, external_react_default.a.createElement(GlobalStyle, {
    noMargin: true,
    openSans: true,
    normalWeight: true,
    darkBlue: true
  }), external_react_default.a.createElement(components_Header, null), props.children);
};

/* harmony default export */ var components_Layout = (Layout_Layout);
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./components/Footer.js









var Footer_Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var _ref;

      return external_react_default.a.createElement(FooterDiv, null, external_react_default.a.createElement(FooterTop, {
        id: "signInId"
      }, external_react_default.a.createElement(ContactDiv, null, external_react_default.a.createElement(ContactHeading, null, "Get early access today"), external_react_default.a.createElement(ContactText, null, "It only takes a minute to signup and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you."), external_react_default.a.createElement(ContactForm, null, external_react_default.a.createElement(ContactInput, null), external_react_default.a.createElement(StartButton, {
        style: {
          width: '35%'
        }
      }, "Get Started for free")))), external_react_default.a.createElement(FooterMid, null, external_react_default.a.createElement(FooterLogoDiv, null, external_react_default.a.createElement(FooterLogo, {
        src: "static/images/logo.svg"
      }))), external_react_default.a.createElement(FooterBottom, null, external_react_default.a.createElement(FooterBottomColumn, {
        style: {
          color: '#FFF'
        }
      }, external_react_default.a.createElement("img", {
        src: "static/images/icon-location.svg",
        style: {
          marginRight: '20px',
          height: '15px'
        }
      }), external_react_default.a.createElement(ReviewText, {
        style: {
          margin: '0'
        }
      }, "Nigerian Defence Academy, Postgraduate School, Nigeria, Africa.")), external_react_default.a.createElement(FooterBottomColumn, {
        style: {
          flexDirection: 'column'
        }
      }, external_react_default.a.createElement(AddressDiv, null, external_react_default.a.createElement("img", {
        src: "static/images/icon-phone.svg",
        style: {
          height: '15px',
          marginRight: '20px'
        }
      }), external_react_default.a.createElement(ReviewText, {
        style: {
          margin: '0'
        }
      }, "+234 70-649-903-34")), external_react_default.a.createElement(AddressDiv, null, external_react_default.a.createElement("img", {
        src: "static/images/icon-email.svg",
        style: {
          height: '15px',
          marginRight: '20px'
        }
      }), external_react_default.a.createElement(ReviewText, {
        style: {
          margin: '0'
        }
      }, "ayo4oyo@gmail.com"))), external_react_default.a.createElement(FooterBottomColumn, {
        style: {
          justifyContent: 'space-between'
        }
      }, external_react_default.a.createElement(FooterItemDiv, null, external_react_default.a.createElement(ReviewText, {
        style: {
          marginTop: '0'
        }
      }, "About us"), external_react_default.a.createElement(ReviewText, {
        style: {
          marginTop: '0'
        }
      }, "jobs"), external_react_default.a.createElement(ReviewText, {
        style: {
          marginTop: '0'
        }
      }, "Press"), external_react_default.a.createElement(ReviewText, {
        style: {
          marginTop: '0'
        }
      }, "Blog")), external_react_default.a.createElement(FooterItemDiv, null, external_react_default.a.createElement(ReviewText, {
        style: {
          marginTop: '0'
        }
      }, "Contact Us"), external_react_default.a.createElement(ReviewText, {
        style: {
          marginTop: '0'
        }
      }, "Terms"), external_react_default.a.createElement(ReviewText, {
        style: {
          marginTop: '0'
        }
      }, "Privacy"))), external_react_default.a.createElement(FooterBottomColumn, null, external_react_default.a.createElement(FooterItemDiv, {
        style: (_ref = {
          alignItems: 'center'
        }, _defineProperty(_ref, "alignItems", 'flex-start'), _defineProperty(_ref, "justifyContent", 'flex-end'), _defineProperty(_ref, "width", '100%'), _defineProperty(_ref, "flexDirection", 'row'), _ref)
      }, external_react_default.a.createElement(SocialMediaImg, {
        src: "static/images/facebook-white.png"
      }), external_react_default.a.createElement(SocialMediaImg, {
        src: "static/images/twitter-white.png"
      }), external_react_default.a.createElement(SocialMediaImg, {
        src: "static/images/instagram-white.png"
      }), external_react_default.a.createElement(SocialMediaImg, {
        src: "static/images/linkedin-white.png"
      })))));
    }
  }]);

  return Footer;
}(external_react_["Component"]);

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./components/home.js









var home_HomePage =
/*#__PURE__*/
function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(HomePage).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(BaseDiv, null, external_react_default.a.createElement(StartDiv, null, external_react_default.a.createElement(StartImage, {
        src: "static/images/illustration-intro.png"
      }), external_react_default.a.createElement(StartHeading, null, "All your files in one secure location, accessible anywhere."), external_react_default.a.createElement(StartText, null, "Fylo stores all your most important files in one secure location. Access them whenever you need; share and collaborate with friends, family and co-workers."), external_react_default.a.createElement(StartButton, null, "Get Started")), external_react_default.a.createElement(ServicesDiv, {
        id: "featuresId"
      }, external_react_default.a.createElement(ServicesSegment, null, external_react_default.a.createElement(ServicesItem, null, external_react_default.a.createElement(ItemImageContainer, null, external_react_default.a.createElement(ItemImage, {
        src: "static/images/icon-access-anywhere.svg"
      })), external_react_default.a.createElement(ItemHeading, null, "Access your files anywhere"), external_react_default.a.createElement(ItemText, null, "The ability to use a smartphone, tablet or a computer to access your account means your files follow you everywhere.")), external_react_default.a.createElement(ServicesItem, null, external_react_default.a.createElement(ItemImageContainer, null, external_react_default.a.createElement(ItemImage, {
        src: "static/images/icon-security.svg"
      })), external_react_default.a.createElement(ItemHeading, null, "Security you can trust"), external_react_default.a.createElement(ItemText, null, "2-factor authentication and user controlled encryption are just a couple of the security features we allow to help secure your files."))), external_react_default.a.createElement(ServicesSegment, null, external_react_default.a.createElement(ServicesItem, null, external_react_default.a.createElement(ItemImageContainer, null, external_react_default.a.createElement(ItemImage, {
        src: "static/images/icon-collaboration.svg"
      })), external_react_default.a.createElement(ItemHeading, null, "Real time collaboration"), external_react_default.a.createElement(ItemText, null, "Securely share files and folders with friends, family and colleagues for life collaboration. No email attachments required.")), external_react_default.a.createElement(ServicesItem, null, external_react_default.a.createElement(ItemImageContainer, null, external_react_default.a.createElement(ItemImage, {
        src: "static/images/icon-any-file.svg"
      })), external_react_default.a.createElement(ItemHeading, null, "Store any type of file"), external_react_default.a.createElement(ItemText, null, "Whether you are sharing holiday photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.")))), external_react_default.a.createElement(WorksDiv, null, external_react_default.a.createElement(WorksDivLeft, null, external_react_default.a.createElement(WorksImage, {
        src: "static/images/illustration-stay-productive.png"
      })), external_react_default.a.createElement(WorksDivRight, null, external_react_default.a.createElement(WorksHeading, null, "Stay productive, wherever you are."), external_react_default.a.createElement(ItemText, {
        style: {
          textAlign: 'left',
          margin: '20px 0'
        }
      }, "Never let location be an issue when accessing your files. Fylo has you covered for all of your storage needs.", external_react_default.a.createElement("br", null), external_react_default.a.createElement("br", null), "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."), external_react_default.a.createElement(WorksTextLink, null, "See how Fylo works  ", external_react_default.a.createElement("img", {
        src: "static/images/icon-arrow.svg",
        style: {
          marginLeft: '10px'
        }
      })))), external_react_default.a.createElement(ReviewDiv, {
        id: "teamsId"
      }, external_react_default.a.createElement(ReviewIcon, {
        src: "static/images/bg-quotes.png"
      }), external_react_default.a.createElement(ReviewCards, null, external_react_default.a.createElement(ReviewText, null, external_react_default.a.createElement("i", null, "Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has become a well oiled collaboration machine")), external_react_default.a.createElement(ReviewProfile, null, external_react_default.a.createElement(ReviewImageContainer, null, external_react_default.a.createElement(ReviewImage, {
        src: "static/images/image2.png"
      })), external_react_default.a.createElement(ReviewDetail, null, external_react_default.a.createElement(ReviewName, null, "Ayodele Gbenga"), external_react_default.a.createElement(ReviewTitle, null, "Founder & CEO; Teka")))), external_react_default.a.createElement(ReviewCards, null, external_react_default.a.createElement(ReviewText, null, external_react_default.a.createElement("i", null, "Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has become a well oiled collaboration machine")), external_react_default.a.createElement(ReviewProfile, null, external_react_default.a.createElement(ReviewImageContainer, null, external_react_default.a.createElement(ReviewImage, {
        src: "static/images/image2.png"
      })), external_react_default.a.createElement(ReviewDetail, null, external_react_default.a.createElement(ReviewName, null, "Ayodele Gbenga"), external_react_default.a.createElement(ReviewTitle, null, "Founder & CEO; Addas")))), external_react_default.a.createElement(ReviewCards, null, external_react_default.a.createElement(ReviewText, null, external_react_default.a.createElement("i", null, "Fylo has improved our team productivity by an order of magnitude. Since making the switch, our team has become a well oiled collaboration machine")), external_react_default.a.createElement(ReviewProfile, null, external_react_default.a.createElement(ReviewImageContainer, null, external_react_default.a.createElement(ReviewImage, {
        src: "static/images/image2.png"
      })), external_react_default.a.createElement(ReviewDetail, null, external_react_default.a.createElement(ReviewName, null, "Ayodele Gbenga"), external_react_default.a.createElement(ReviewTitle, null, "Founder & CEO; Addas"))))), external_react_default.a.createElement(components_Footer, null));
    }
  }]);

  return HomePage;
}(external_react_["Component"]);

/* harmony default export */ var home = (home_HomePage);
// CONCATENATED MODULE: ./pages/index.js









var pages_Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, getPrototypeOf_getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(components_Layout, null, external_react_default.a.createElement(home, null)));
    }
  }]);

  return Index;
}(external_react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ })

/******/ });