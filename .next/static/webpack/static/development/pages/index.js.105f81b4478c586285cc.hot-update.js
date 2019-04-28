webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Projects.js":
/*!********************************!*\
  !*** ./components/Projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _static_css_projects_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/css/projects.css */ "./static/css/projects.css");
/* harmony import */ var _static_css_projects_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_css_projects_css__WEBPACK_IMPORTED_MODULE_8__);










var Projects =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Projects, _React$Component);

  function Projects(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Projects);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Projects).call(this, props));
    var projects = [];
    var projectCount = props.projects === null ? 0 : props.projects.length;

    for (var i = 0; i < Math.min(props.limit, projectCount); i++) {
      projects.push(props.projects[i]);
    }

    _this.state = {
      hasProjects: projects != [] && projects.length > 0,
      projects: projects
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Projects, [{
    key: "render",
    value: function render() {
      var content = this.state.hasProjects ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], {
        id: "projects",
        tag: "section"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Projects"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tab"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], null, this.state.projects.map(function (proj, key) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
          md: "6",
          key: key
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Row"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
          sm: "6"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: proj.imageUrl,
          style: {
            width: "100%",
            maxHeight: "300px"
          }
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Col"], {
          sm: "6",
          className: "project-details"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", null, proj.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, proj.teaser.replace("\n", "<br />")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: proj.githubLink,
          className: "btn-source"
        }, "View Source"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: "/project/" + proj.id + "/" + proj.name.replace(" ", "-"),
          className: "more"
        }, "more"))))));
      })))) : "";
      return content;
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

Projects.defaultProps = {
  limit: 10,
  projects: []
};
Projects.propTypes = {
  limit: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  projects: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

})
//# sourceMappingURL=index.js.105f81b4478c586285cc.hot-update.js.map