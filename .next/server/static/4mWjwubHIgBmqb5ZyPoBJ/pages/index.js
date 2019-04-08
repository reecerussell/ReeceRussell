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
/******/ 	return __webpack_require__(__webpack_require__.s = "66ca");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/1vX":
/***/ (function(module, exports) {



/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: ./static/css/index.css
var css = __webpack_require__("aTiY");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: external "next-server/head"
var head_ = __webpack_require__("U7sd");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./static/css/navbar.css
var navbar = __webpack_require__("nbBp");

// CONCATENATED MODULE: ./components/Navbar.js








var Navbar_Navbar =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Navbar, _React$Component);

  function Navbar(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Navbar);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Navbar).call(this, props));
    _this.state = {
      path: null
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var path = location.pathname;
      if (path[0] !== '/') path = "/" + path.toLowerCase();
      this.setState({
        path: path
      });
    }
  }, {
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("nav", {
        className: "nav"
      }, external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", {
        className: this.state.path === "/" ? "active" : ""
      }, external_react_default.a.createElement("a", {
        href: "/"
      }, "Home")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
        href: "https://github.com/reecerussell"
      }, "Github")), external_react_default.a.createElement("li", {
        className: this.state.path === "/projects" ? "active" : ""
      }, external_react_default.a.createElement("a", {
        href: "/"
      }, "Almost"))));
    }
  }]);

  return Navbar;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./static/css/footer.css
var footer = __webpack_require__("gBr/");

// CONCATENATED MODULE: ./components/Footer.js









var Footer_Footer =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Footer, _React$Component);

  function Footer() {
    Object(classCallCheck["a" /* default */])(this, Footer);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Footer).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Footer, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("footer", {
        className: "container",
        style: {
          backgroundColor: "black",
          color: "white"
        }
      }, external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], {
        md: "6"
      }, external_react_default.a.createElement("p", null, "Copyright \xA9 ", new Date().getFullYear(), ", Reece\xA0Russell")), external_react_default.a.createElement(external_reactstrap_["Col"], {
        md: "6"
      }, external_react_default.a.createElement("p", {
        className: "email"
      }, external_react_default.a.createElement("a", {
        href: "mailto:me@reece-russell.co.uk?Subject=Talk%20to%20me"
      }, "me@reece-russell.co.uk")))));
    }
  }]);

  return Footer;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./components/Layout.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout_Layout; });














var Layout_Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Layout, _React$Component);

  function Layout(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Layout);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Layout).call(this, props));
    _this.getTitle = _this.getTitle.bind(Object(assertThisInitialized["a" /* default */])(_this));
    return _this;
  }

  Object(createClass["a" /* default */])(Layout, [{
    key: "getTitle",
    value: function getTitle() {
      var title = this.props.title;

      switch (title) {
        case "":
        case null:
        case undefined:
          return "Reece Russell / Software Developer";

        default:
          return title + " / Reece Russell / Software Developer";
      }
    }
  }, {
    key: "render",
    value: function render() {
      var title = this.getTitle();
      return external_react_default.a.createElement("div", {
        className: "background"
      }, external_react_default.a.createElement(external_reactstrap_["Container"], null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, title)), external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], null, external_react_default.a.createElement(Navbar_Navbar, null))), this.props.children), external_react_default.a.createElement(Footer_Footer, null));
    }
  }]);

  return Layout;
}(external_react_default.a.Component);



/***/ }),

/***/ "66ca":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "DLZN":
/***/ (function(module, exports) {



/***/ }),

/***/ "KQ42":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Projects; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Tit0");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_css_projects_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("/1vX");
/* harmony import */ var _static_css_projects_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_css_projects_css__WEBPACK_IMPORTED_MODULE_7__);









var Projects =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Projects, _React$Component);

  function Projects(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Projects);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Projects).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Projects, [{
    key: "render",
    value: function render() {
      var hasProjects = this.props.projects != null && this.props.projects.length > 0 && this.props.projects != undefined;
      var content = hasProjects ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
        id: "projects",
        style: {
          borderTop: "1px black dotted",
          borderBottom: "1px black dotted",
          padding: "50px 0"
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, "Projects"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "tab"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, this.props.projects.map(function (proj, key) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          md: "6",
          key: key
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          sm: "6"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          src: proj.imageUrl,
          style: {
            width: "100%",
            maxHeight: "300px"
          }
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
          sm: "6"
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h4", null, proj.name), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, proj.description.replace("\n", "<br />")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
          href: proj.githubLink,
          className: "btn-source"
        }, "View Source"))));
      })))) : "";
      return content;
    }
  }]);

  return Projects;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("eVuF");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    promise_default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new promise_default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Projects.js
var Projects = __webpack_require__("KQ42");

// EXTERNAL MODULE: ./components/Layout.js + 2 modules
var Layout = __webpack_require__("5Yp1");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./static/css/about.css
var about = __webpack_require__("DLZN");

// CONCATENATED MODULE: ./components/About.js









var About_About =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(About, _React$Component);

  function About() {
    Object(classCallCheck["a" /* default */])(this, About);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(About).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(About, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_reactstrap_["Row"], {
        id: "about"
      }, external_react_default.a.createElement(external_reactstrap_["Col"], null, external_react_default.a.createElement("h3", null, "About me"), external_react_default.a.createElement("div", {
        className: "tab"
      }), external_react_default.a.createElement("p", {
        className: "text-justify"
      }, "I am an apprentice software developer at a small company called Prominent Media while studying software development. My primary focus is on ASP.NET web applications, working with C# and SQL. From time to time, I explore the realms of Xamarin and working with web sockets and restful APIs. However, ASP.NET Core is my current obsession.")));
    }
  }]);

  return About;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./components/Skills.js








var Skills_Skills =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Skills, _React$Component);

  function Skills() {
    Object(classCallCheck["a" /* default */])(this, Skills);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Skills).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Skills, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], null, external_react_default.a.createElement("h3", null, "Skills"), external_react_default.a.createElement("div", {
        className: "tab"
      }), external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], {
        md: "4"
      }, external_react_default.a.createElement("h4", null, "Frontend"), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, "HTML5"), external_react_default.a.createElement("li", null, "CSS/SCSS"), external_react_default.a.createElement("li", null, "JavaScript"))), external_react_default.a.createElement(external_reactstrap_["Col"], {
        md: "4"
      }, external_react_default.a.createElement("h4", null, "Backend"), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, "C#.NET"), external_react_default.a.createElement("li", null, "MySQL/MSSQL"), external_react_default.a.createElement("li", null, "RESTFUL"))), external_react_default.a.createElement(external_reactstrap_["Col"], {
        md: "4"
      }, external_react_default.a.createElement("h4", null, "Other"), external_react_default.a.createElement("ul", null, external_react_default.a.createElement("li", null, "Git"), external_react_default.a.createElement("li", null, "Xamarin <3"))))));
    }
  }]);

  return Skills;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./static/images/logo.png
var logo = __webpack_require__("cbpf");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// CONCATENATED MODULE: ./components/Experience.js








var Experience_Experience =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Experience, _React$Component);

  function Experience() {
    Object(classCallCheck["a" /* default */])(this, Experience);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Experience).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(Experience, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(external_reactstrap_["Row"], {
        style: {
          padding: "50px 0"
        }
      }, external_react_default.a.createElement(external_reactstrap_["Col"], {
        md: "6"
      }, external_react_default.a.createElement("h3", null, "Work"), external_react_default.a.createElement("div", {
        className: "tab"
      }), external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], null, external_react_default.a.createElement("h4", null, "Apprentice Software Developer"), external_react_default.a.createElement("p", null, "Prominent Media", external_react_default.a.createElement("br", null), external_react_default.a.createElement("span", {
        className: "small text-muted"
      }, "2018 - DateTime.Now"))))), external_react_default.a.createElement(external_reactstrap_["Col"], {
        md: "6"
      }, external_react_default.a.createElement("h3", null, "School"), external_react_default.a.createElement("div", {
        className: "tab"
      }), external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], null, external_react_default.a.createElement("h4", null, "Software Language"), external_react_default.a.createElement("p", null, "Level 4 Diploma", external_react_default.a.createElement("br", null), external_react_default.a.createElement("span", {
        className: "small text-muted"
      }, "2018 - DateTime.Now")))), external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], null, external_react_default.a.createElement("h4", null, "Software Development Methodologies"), external_react_default.a.createElement("p", null, "Level 4 Diploma", external_react_default.a.createElement("br", null), external_react_default.a.createElement("span", {
        className: "small text-muted"
      }, "2018 - DateTime.Now"))))));
    }
  }]);

  return Experience;
}(external_react_default.a.Component);


// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./pages/index.js

















var pages_Index =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(classCallCheck["a" /* default */])(this, Index);

    _this = Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(Index).call(this, props));
    _this.state = {
      projects: []
    };
    return _this;
  }

  Object(createClass["a" /* default */])(Index, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(Layout["a" /* default */], null, external_react_default.a.createElement(external_reactstrap_["Row"], {
        style: {
          padding: "75px 0",
          borderBottom: "dotted 1px #000"
        }
      }, external_react_default.a.createElement(external_reactstrap_["Col"], {
        md: "4"
      }, external_react_default.a.createElement("img", {
        src: logo_default.a,
        style: {
          width: "100%"
        },
        title: "'Narcissism' by Nathan Shaw"
      })), external_react_default.a.createElement(external_reactstrap_["Col"], {
        md: "8"
      }, external_react_default.a.createElement("h1", {
        className: "display-4"
      }, "Hi,"), external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], {
        md: "7"
      }, external_react_default.a.createElement("p", null, "Welcome to my portfolio! I am a software developer, based in Milton Keynes."))), external_react_default.a.createElement(external_reactstrap_["Row"], null, external_react_default.a.createElement(external_reactstrap_["Col"], {
        sm: "7"
      }, external_react_default.a.createElement("div", {
        className: "tab"
      }), external_react_default.a.createElement("p", null, "At the moment I am engaged to ASP.NET Core microservices and exploring GO.", external_react_default.a.createElement("br", null), "This is my first online portfolio. Feel feel to look around and let me know what you think!")), external_react_default.a.createElement(external_reactstrap_["Col"], {
        sm: "5"
      }, external_react_default.a.createElement("div", {
        className: "tab"
      }), external_react_default.a.createElement("p", null, "Just a side note, I am an apprentice software developer, working at ", external_react_default.a.createElement("a", {
        href: "http://prominentmedia.com"
      }, "Prominent Media"), "."))))), external_react_default.a.createElement(About_About, null), external_react_default.a.createElement(Skills_Skills, null), external_react_default.a.createElement(Projects["a" /* default */], {
        limit: "2",
        projects: this.props.projects
      }), external_react_default.a.createElement(Experience_Experience, null));
    }
  }]);

  return Index;
}(external_react_default.a.Component);

pages_Index.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regenerator_default.a.mark(function _callee() {
  var res, data, projects;
  return regenerator_default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return external_isomorphic_unfetch_default()("https://go.reecerussell.com", {
            headers: {
              "Requested-By": "reecerussell.com"
            }
          });

        case 2:
          res = _context.sent;

          if (!(res.status != 200)) {
            _context.next = 5;
            break;
          }

          throw new Error("Failed to get content");

        case 5:
          _context.next = 7;
          return res.json();

        case 7:
          data = _context.sent;
          projects = data.projects;
          return _context.abrupt("return", {
            projects: projects
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
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

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


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

/***/ }),

/***/ "U7sd":
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "aTiY":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cbpf":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-f96112308176badeef782cf3e0a318dc.png";

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "gBr/":
/***/ (function(module, exports) {



/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "nbBp":
/***/ (function(module, exports) {



/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ })

/******/ });