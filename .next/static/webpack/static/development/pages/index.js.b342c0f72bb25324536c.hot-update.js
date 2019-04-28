webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Experience.js":
/*!**********************************!*\
  !*** ./components/Experience.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _static_css_experience_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/css/experience.css */ "./static/css/experience.css");
/* harmony import */ var _static_css_experience_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_css_experience_css__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined;





var Experience = function Experience(props) {
  var experience = props.experience !== null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Work"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab"
  }), _this.state.experience.map(function (exp, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, exp.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, exp.organisation, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "small text-muted"
    }, exp.from, " - ", exp.to))));
  })) : "";
  var education = props.experience !== null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "6"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "School"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab"
  }), _this.state.education.map(function (edu, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      key: key
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, edu.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, edu.organisation, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "small text-muted"
    }, edu.from, " - ", edu.to))));
  })) : "";
  var hasContent = props.experience !== null && props.education !== null;
  return hasContent ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    id: "experience",
    tag: "section"
  }, experience, education) : "";
};

/* harmony default export */ __webpack_exports__["default"] = (Experience);

/***/ })

})
//# sourceMappingURL=index.js.b342c0f72bb25324536c.hot-update.js.map