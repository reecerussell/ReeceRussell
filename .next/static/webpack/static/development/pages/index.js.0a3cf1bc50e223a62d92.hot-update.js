webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Skills.js":
/*!******************************!*\
  !*** ./components/Skills.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");



var Skills = function Skills(props) {
  var content = props.skills !== null ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    tag: "section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Technical skills"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tab"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, props.skills.map(function (skillSet, key1) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: "4",
      key: key1
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, skillSet.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, skillSet.skills.map(function (skill, key2) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: key2
      }, skill.skill);
    })));
  })))) : "";
  return content;
};

/* harmony default export */ __webpack_exports__["default"] = (Skills);

/***/ })

})
//# sourceMappingURL=index.js.0a3cf1bc50e223a62d92.hot-update.js.map