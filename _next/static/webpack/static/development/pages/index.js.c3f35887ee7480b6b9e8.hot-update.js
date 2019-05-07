webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _snippets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../snippets */ "./snippets.js");






var _jsxFileName = "/Users/mac/fylo-single-page/components/Header.js";





var Header =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
    _this.state = {
      navOpen: false
    };
    _this.showMobileNav = _this.showMobileNav.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
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
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_snippets__WEBPACK_IMPORTED_MODULE_9__["HeaderBody"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_snippets__WEBPACK_IMPORTED_MODULE_9__["NavLeft"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_snippets__WEBPACK_IMPORTED_MODULE_9__["LogoDiv"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_snippets__WEBPACK_IMPORTED_MODULE_9__["NavRight"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_snippets__WEBPACK_IMPORTED_MODULE_9__["NavLinks"], {
        onClick: this.scrollToFeatures.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Features"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_snippets__WEBPACK_IMPORTED_MODULE_9__["NavLinks"], {
        onClick: this.scrollToTeams.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, "Team"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_snippets__WEBPACK_IMPORTED_MODULE_9__["NavLinks"], {
        onClick: this.scrollToSignIn.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Sign up")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_snippets__WEBPACK_IMPORTED_MODULE_9__["NavbarToggle"], {
        onClick: this.showMobileNav,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "\u2630"), this.state.navOpen ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_snippets__WEBPACK_IMPORTED_MODULE_9__["MobileNavRight"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_snippets__WEBPACK_IMPORTED_MODULE_9__["NavLinks"], {
        onClick: this.scrollToFeatures.bind(this),
        style: {
          justifyContent: 'center',
          fontWeight: '600'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Features"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_snippets__WEBPACK_IMPORTED_MODULE_9__["NavLinks"], {
        onClick: this.scrollToTeams.bind(this),
        style: {
          justifyContent: 'center',
          fontWeight: '600'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Team"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_snippets__WEBPACK_IMPORTED_MODULE_9__["NavLinks"], {
        onClick: this.scrollToSignIn.bind(this),
        style: {
          justifyContent: 'center',
          fontWeight: '600'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Sign in")) : "");
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.c3f35887ee7480b6b9e8.hot-update.js.map