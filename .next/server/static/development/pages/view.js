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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/body.js":
/*!****************************!*\
  !*** ./components/body.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Body = function Body(props) {
  return props.children;
};

/* harmony default export */ __webpack_exports__["default"] = (Body);

/***/ }),

/***/ "./components/browse-header.js":
/*!*************************************!*\
  !*** ./components/browse-header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../theme */ "./theme.js");












 // Convert simple links to next style href + as

var Link = function Link(_ref) {
  var to = _ref.to,
      children = _ref.children,
      basepath = _ref.basepath;
  return react__WEBPACK_IMPORTED_MODULE_8__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: {
      pathname: "/view",
      query: {
        viewPath: to
      }
    },
    as: basepath + "/" + to
  }, children);
};

var BrowseHeader =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BrowseHeader, _React$Component);

  function BrowseHeader() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BrowseHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(BrowseHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "props", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleItemClick", function (e, _ref2) {
      var name = _ref2.name;
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push(name);
    });

    return _this;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BrowseHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          path = _this$props.path,
          basepath = _this$props.basepath;
      var paths = Object(lodash__WEBPACK_IMPORTED_MODULE_11__["trim"])(path, "/").split("/"); // Empty path to start off

      if (paths.length === 1 && paths[0] === "") {
        paths = [];
      } // TODO: Ensure this works under an app subpath (which is not implemented yet)


      var filePath = basepath.replace(/view\/?/, "files/") + path; // const serverSide = typeof document === "undefined";

      var viewingNotebook = filePath.endsWith(".ipynb");
      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("nav", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3767621066", [_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active]]])
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("ul", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3767621066", [_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active]]]) + " " + "breadcrumbs"
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3767621066", [_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active]]])
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"](Link, {
        to: "",
        basepath: basepath
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3767621066", [_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active]]])
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("span", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3767621066", [_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active]]])
      }, "home")))), paths.map(function (name, index) {
        var filePath = paths.slice(0, index + 1).join("/");
        return react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("li", {
          key: "".concat(filePath),
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3767621066", [_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active]]])
        }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"](Link, {
          to: "".concat(filePath),
          basepath: basepath
        }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("a", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3767621066", [_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active]]])
        }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("span", {
          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3767621066", [_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active]]])
        }, name))));
      })), this.props.type === "directory" ? null : react__WEBPACK_IMPORTED_MODULE_8__["createElement"](react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, this.props.commuterExecuteLink && viewingNotebook ? react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("a", {
        href: "".concat(this.props.commuterExecuteLink, "/").concat(path),
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3767621066", [_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active]]]) + " " + "ops"
      }, "Run") : null, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("a", {
        href: filePath,
        download: true,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3767621066", [_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active]]]) + " " + "ops"
      }, "Download")), react__WEBPACK_IMPORTED_MODULE_8__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3767621066",
        dynamic: [_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active]
      }, "nav.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border:1px solid ".concat(_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, ";padding:0 1rem;}ul.breadcrumbs.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;margin:0 0 0 0;padding:0;list-style:none;background:#ffffff;font-family:\"Source Sans Pro\";font-size:16px;color:").concat(_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, ";}ul.breadcrumbs.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;list-style-type:none;display:inline;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}ul.breadcrumbs.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{vertical-align:middle;display:table;padding:1em;color:").concat(_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, ";-webkit-text-decoration:none;text-decoration:none;}ul.breadcrumbs.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:underline;text-decoration:underline;}ul.breadcrumbs.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector:last-child a.__jsx-style-dynamic-selector{color:").concat(_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, ";-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}ul.breadcrumbs.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector+li.__jsx-style-dynamic-selector:before{content:\"\u203A\";color:").concat(_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, ";}.ops.__jsx-style-dynamic-selector{display:inline-block;line-height:2em;padding:0 8px;border-radius:2px;background-color:").concat(_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, ";border:1px solid ").concat(_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, ";color:#000;-webkit-text-decoration:none;text-decoration:none;}.ops.__jsx-style-dynamic-selector:hover{background-color:").concat(_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, ";-webkit-transition:background-color 0.25s ease-out;transition:background-color 0.25s ease-out;}.ops.__jsx-style-dynamic-selector:active{background-color:").concat(_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, ";color:").concat(_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, ";-webkit-transition:background-color 0.5s ease-out,color 6s ease-out;transition:background-color 0.5s ease-out,color 6s ease-out;}.ops.__jsx-style-dynamic-selector:not(:last-child){margin-right:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3d1dGFsaS9Xb3Jrc3BhY2Uvd3V0YWxpL2NvbW11dGVyL2NvbXBvbmVudHMvYnJvd3NlLWhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRm9CLEFBRzBCLEFBT0EsQUFjTSxBQVNHLEFBUUksQUFJUyxBQU12QixBQUtTLEFBV3lCLEFBS0EsQUFNNUIsWUExQmlCLE1BMkJyQyxHQXRCa0IsQ0F2QkYsYUFZTyxDQVhULENBdUJFLFNBVTZCLEFBS1IsQ0FwQnJDLENBakJxQyxHQXVCakIsU0FqQnBCLFNBakJ1QixBQW1DeUIsS0F4RDNCLEFBT0QsT0ErRDJDLEVBckN4QyxFQVVOLEtBckJBLEVBYkEsUUFtQ2pCLEtBckJvQixFQWJSLFFBK0NvQyxFQTdDOUIsTUFZSCxVQVhNLEFBcUJyQixPQStCQSxZQW5EZ0MsU0E0Q25CLE1BekRtQixLQTBEVCxVQTVDTixlQUNvQixBQVNoQixZQThDckIsYUFYQSxVQTNDQSxrREFmZ0QsUUF3QmhELHNDQXZCaUIsZUFDakIiLCJmaWxlIjoiL2hvbWUvd3V0YWxpL1dvcmtzcGFjZS93dXRhbGkvY29tbXV0ZXIvY29tcG9uZW50cy9icm93c2UtaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB0cmltIH0gZnJvbSBcImxvZGFzaFwiO1xuXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCIuLi90aGVtZVwiO1xuXG4vLyBDb252ZXJ0IHNpbXBsZSBsaW5rcyB0byBuZXh0IHN0eWxlIGhyZWYgKyBhc1xuY29uc3QgTGluayA9ICh7IHRvLCBjaGlsZHJlbiwgYmFzZXBhdGggfSkgPT4gKFxuICA8TmV4dExpbmtcbiAgICBocmVmPXt7IHBhdGhuYW1lOiBcIi92aWV3XCIsIHF1ZXJ5OiB7IHZpZXdQYXRoOiB0byB9IH19XG4gICAgYXM9e2Jhc2VwYXRoICsgXCIvXCIgKyB0b31cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9OZXh0TGluaz5cbik7XG5cbmNsYXNzIEJyb3dzZUhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDwqPiB7XG4gIHByb3BzOiB7XG4gICAgcGF0aDogc3RyaW5nLFxuICAgIGJhc2VwYXRoOiBzdHJpbmcsXG4gICAgdHlwZTogc3RyaW5nLFxuICAgIGNvbW11dGVyRXhlY3V0ZUxpbms6ID9zdHJpbmdcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFjdGl2ZTogXCJ2aWV3XCJcbiAgfTtcblxuICBoYW5kbGVJdGVtQ2xpY2sgPSAoZTogU3ludGhldGljRXZlbnQ8Kj4sIHsgbmFtZSB9OiB7IG5hbWU6IHN0cmluZyB9KSA9PiB7XG4gICAgUm91dGVyLnB1c2gobmFtZSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGF0aCwgYmFzZXBhdGggfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHBhdGhzID0gdHJpbShwYXRoLCBcIi9cIikuc3BsaXQoXCIvXCIpO1xuICAgIC8vIEVtcHR5IHBhdGggdG8gc3RhcnQgb2ZmXG4gICAgaWYgKHBhdGhzLmxlbmd0aCA9PT0gMSAmJiBwYXRoc1swXSA9PT0gXCJcIikge1xuICAgICAgcGF0aHMgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBFbnN1cmUgdGhpcyB3b3JrcyB1bmRlciBhbiBhcHAgc3VicGF0aCAod2hpY2ggaXMgbm90IGltcGxlbWVudGVkIHlldClcbiAgICBjb25zdCBmaWxlUGF0aCA9IGJhc2VwYXRoLnJlcGxhY2UoL3ZpZXdcXC8/LywgXCJmaWxlcy9cIikgKyBwYXRoO1xuXG4gICAgLy8gY29uc3Qgc2VydmVyU2lkZSA9IHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIjtcbiAgICBjb25zdCB2aWV3aW5nTm90ZWJvb2sgPSBmaWxlUGF0aC5lbmRzV2l0aChcIi5pcHluYlwiKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8bmF2PlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYnNcIj5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8TGluayB0bz17YGB9IGJhc2VwYXRoPXtiYXNlcGF0aH0+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxzcGFuPmhvbWU8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIHtwYXRocy5tYXAoKG5hbWUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGhzLnNsaWNlKDAsIGluZGV4ICsgMSkuam9pbihcIi9cIik7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtgJHtmaWxlUGF0aH1gfT5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17YCR7ZmlsZVBhdGh9YH0gYmFzZXBhdGg9e2Jhc2VwYXRofT5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgICAge3RoaXMucHJvcHMudHlwZSA9PT0gXCJkaXJlY3RvcnlcIiA/IG51bGwgOiAoXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY29tbXV0ZXJFeGVjdXRlTGluayAmJiB2aWV3aW5nTm90ZWJvb2sgPyAoXG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YCR7dGhpcy5wcm9wcy5jb21tdXRlckV4ZWN1dGVMaW5rfS8ke3BhdGh9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvcHNcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUnVuXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPGEgaHJlZj17ZmlsZVBhdGh9IGRvd25sb2FkIGNsYXNzTmFtZT1cIm9wc1wiPlxuICAgICAgICAgICAgICBEb3dubG9hZFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLm91dGxpbmV9O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bC5icmVhZGNydW1icyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwIDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIFByb1wiO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUucHJpbWFyeX07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwuYnJlYWRjcnVtYnMgbGkge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsLmJyZWFkY3J1bWJzIGxpIGEge1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUucHJpbWFyeX07XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwuYnJlYWRjcnVtYnMgbGkgYTpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bC5icmVhZGNydW1icyBsaTpsYXN0LWNoaWxkIGEge1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuYWN0aXZlfTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bC5icmVhZGNydW1icyBsaSArIGxpOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIuKAulwiO1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuYWN0aXZlfTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAub3BzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuYmFja2dyb3VuZH07XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLm91dGxpbmV9O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm9wczpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLm91dGxpbmV9O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlLW91dDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAub3BzOmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lLnByaW1hcnl9O1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuYWN0aXZlfTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLW91dCwgY29sb3IgNnMgZWFzZS1vdXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm9wczpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvbmF2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJvd3NlSGVhZGVyO1xuIl19 */\n/*@ sourceURL=/home/wutali/Workspace/wutali/commuter/components/browse-header.js */")));
    }
  }]);

  return BrowseHeader;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(BrowseHeader, "defaultProps", {
  active: "view"
});

/* harmony default export */ __webpack_exports__["default"] = (BrowseHeader);

/***/ }),

/***/ "./components/contents/csv.js":
/*!************************************!*\
  !*** ./components/contents/csv.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CSVView; });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





 // const d3 = Object.assign({}, require("d3-dsv"));
// import DataTransform from "@nteract/transform-dataresource";

var CSVView =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CSVView, _React$Component);

  function CSVView() {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CSVView);

    return _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CSVView).apply(this, arguments));
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CSVView, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      // const data = d3.csvParse(this.props.entry.content);
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", null, "No support for csv at this time"); // return <DataTransform data={{ data }} metadata={{}} theme="light" />;
    }
  }]);

  return CSVView;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./components/contents/directory-listing.js":
/*!**************************************************!*\
  !*** ./components/contents/directory-listing.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nteract_directory_listing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nteract/directory-listing */ "@nteract/directory-listing");
/* harmony import */ var _nteract_directory_listing__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nteract_directory_listing__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme */ "./theme.js");








var GroupedDirectoryListings = function GroupedDirectoryListings(props) {
  var contents = props.contents.filter(function (row) {
    return !row.name.startsWith(".");
  });

  if (contents.length <= 25) {
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](DirectoryListing, {
      contents: contents,
      basepath: props.basepath
    });
  }

  var groups = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["groupBy"])(contents, function (item) {
    return item.name[0].toUpperCase();
  }); // Filter out dotfiles

  delete groups["."];

  if (_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(groups).length <= 1) {
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](DirectoryListing, {
      contents: contents,
      basepath: props.basepath
    });
  }

  var groupNames = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(groups).sort();

  var listings = groupNames.map(function (key) {
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      key: key,
      className: "jsx-98138671"
    }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
      id: "group-".concat(key),
      className: "jsx-98138671" + " " + "letterHeader"
    }, key), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](DirectoryListing, {
      contents: groups[key],
      basepath: props.basepath
    }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "98138671"
    }, ".letterHeader.jsx-98138671{padding-top:1em;padding-bottom:0.5em;padding-left:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3d1dGFsaS9Xb3Jrc3BhY2Uvd3V0YWxpL2NvbW11dGVyL2NvbXBvbmVudHMvY29udGVudHMvZGlyZWN0b3J5LWxpc3RpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQixBQUcyQixnQkFDSyxxQkFDSixpQkFDbkIiLCJmaWxlIjoiL2hvbWUvd3V0YWxpL1dvcmtzcGFjZS93dXRhbGkvY29tbXV0ZXIvY29tcG9uZW50cy9jb250ZW50cy9kaXJlY3RvcnktbGlzdGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGdyb3VwQnkgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQge1xuICBFbnRyeSxcbiAgTGlzdGluZyxcbiAgSWNvbixcbiAgTmFtZSxcbiAgTGFzdFNhdmVkXG59IGZyb20gXCJAbnRlcmFjdC9kaXJlY3RvcnktbGlzdGluZ1wiO1xuXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gXCIuLi8uLi90aGVtZVwiO1xuXG5leHBvcnQgdHlwZSBEaXJlY3RvcnlMaXN0aW5nUHJvcHMgPSB7XG4gIGNvbnRlbnRzOiBBcnJheTxKdXB5dGVyQXBpJENvbnRlbnQ+LFxuICBiYXNlcGF0aDogc3RyaW5nXG59O1xuXG5jb25zdCBHcm91cGVkRGlyZWN0b3J5TGlzdGluZ3MgPSAocHJvcHM6IERpcmVjdG9yeUxpc3RpbmdQcm9wcykgPT4ge1xuICBjb25zdCBjb250ZW50cyA9IHByb3BzLmNvbnRlbnRzLmZpbHRlcihyb3cgPT4gIXJvdy5uYW1lLnN0YXJ0c1dpdGgoXCIuXCIpKTtcblxuICBpZiAoY29udGVudHMubGVuZ3RoIDw9IDI1KSB7XG4gICAgcmV0dXJuIDxEaXJlY3RvcnlMaXN0aW5nIGNvbnRlbnRzPXtjb250ZW50c30gYmFzZXBhdGg9e3Byb3BzLmJhc2VwYXRofSAvPjtcbiAgfVxuXG4gIGNvbnN0IGdyb3VwcyA9IGdyb3VwQnkoY29udGVudHMsIGl0ZW0gPT4gaXRlbS5uYW1lWzBdLnRvVXBwZXJDYXNlKCkpO1xuICAvLyBGaWx0ZXIgb3V0IGRvdGZpbGVzXG4gIGRlbGV0ZSBncm91cHNbXCIuXCJdO1xuXG4gIGlmIChPYmplY3Qua2V5cyhncm91cHMpLmxlbmd0aCA8PSAxKSB7XG4gICAgcmV0dXJuIDxEaXJlY3RvcnlMaXN0aW5nIGNvbnRlbnRzPXtjb250ZW50c30gYmFzZXBhdGg9e3Byb3BzLmJhc2VwYXRofSAvPjtcbiAgfVxuXG4gIGNvbnN0IGdyb3VwTmFtZXMgPSBPYmplY3Qua2V5cyhncm91cHMpLnNvcnQoKTtcblxuICBjb25zdCBsaXN0aW5ncyA9IGdyb3VwTmFtZXMubWFwKGtleSA9PiAoXG4gICAgPGRpdiBrZXk9e2tleX0+XG4gICAgICA8ZGl2IGlkPXtgZ3JvdXAtJHtrZXl9YH0gY2xhc3NOYW1lPVwibGV0dGVySGVhZGVyXCI+XG4gICAgICAgIHtrZXl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxEaXJlY3RvcnlMaXN0aW5nIGNvbnRlbnRzPXtncm91cHNba2V5XX0gYmFzZXBhdGg9e3Byb3BzLmJhc2VwYXRofSAvPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubGV0dGVySGVhZGVyIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMWVtO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGV0dGVyc1wiPlxuICAgICAgICB7Z3JvdXBOYW1lcy5tYXAoeCA9PiAoXG4gICAgICAgICAgPGEgaHJlZj17YCNncm91cC0ke3h9YH0ga2V5PXt4fT5cbiAgICAgICAgICAgIHt4LnRvVXBwZXJDYXNlKCl9XG4gICAgICAgICAgPC9hPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAge2xpc3RpbmdzfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBhIHtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMWVtO1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxpbmt9O1xuICAgICAgICB9XG4gICAgICAgIC5sZXR0ZXJzIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmNvbnN0IERpcmVjdG9yeUxpc3RpbmcgPSAocHJvcHM6IERpcmVjdG9yeUxpc3RpbmdQcm9wcykgPT4ge1xuICBjb25zdCBiYXNlID0gcHJvcHMuYmFzZXBhdGggfHwgXCIvXCI7XG5cbiAgLy8gZmlsdGVyIG91dCBkb3RmaWxlc1xuICBjb25zdCBjb250ZW50cyA9IHByb3BzLmNvbnRlbnRzLmZpbHRlcihlbnRyeSA9PiAhZW50cnkubmFtZS5zdGFydHNXaXRoKFwiLlwiKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8TGlzdGluZz5cbiAgICAgICAge2NvbnRlbnRzLm1hcCgoZW50cnksIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgbGluayA9IChcbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9e3tcbiAgICAgICAgICAgICAgICBwYXRobmFtZTogXCIvdmlld1wiLFxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IHZpZXdQYXRoOiBlbnRyeS5wYXRoIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYXM9e2Jhc2UgKyBcIi9cIiArIGVudHJ5LnBhdGh9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxhPntlbnRyeS5uYW1lfTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RW50cnkga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxJY29uIGZpbGVUeXBlPXtlbnRyeS50eXBlfSAvPlxuICAgICAgICAgICAgICA8TmFtZT57bGlua308L05hbWU+XG4gICAgICAgICAgICAgIDxMYXN0U2F2ZWQgbGFzdE1vZGlmaWVkPXtlbnRyeS5sYXN0X21vZGlmaWVkfSAvPlxuICAgICAgICAgICAgPC9FbnRyeT5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvTGlzdGluZz5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBlZERpcmVjdG9yeUxpc3RpbmdzO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBEaXJlY3RvcnlMaXN0aW5nO1xuIl19 */\n/*@ sourceURL=/home/wutali/Workspace/wutali/commuter/components/contents/directory-listing.js */"));
  });
  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2760902976", [_theme__WEBPACK_IMPORTED_MODULE_6__["theme"].link]]]) + " " + "letters"
  }, groupNames.map(function (x) {
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("a", {
      href: "#group-".concat(x),
      key: x,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2760902976", [_theme__WEBPACK_IMPORTED_MODULE_6__["theme"].link]]])
    }, x.toUpperCase());
  })), listings, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2760902976",
    dynamic: [_theme__WEBPACK_IMPORTED_MODULE_6__["theme"].link]
  }, "a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;padding-right:1em;color:".concat(_theme__WEBPACK_IMPORTED_MODULE_6__["theme"].link, ";}.letters.__jsx-style-dynamic-selector{padding-bottom:1em;padding-left:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3d1dGFsaS9Xb3Jrc3BhY2Uvd3V0YWxpL2NvbW11dGVyL2NvbXBvbmVudHMvY29udGVudHMvZGlyZWN0b3J5LWxpc3RpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOERrQixBQUdnQyxBQUtGLG1CQUNGLGlCQUNuQixjQU5vQixrQkFDaUIsbUNBQ3JDIiwiZmlsZSI6Ii9ob21lL3d1dGFsaS9Xb3Jrc3BhY2Uvd3V0YWxpL2NvbW11dGVyL2NvbXBvbmVudHMvY29udGVudHMvZGlyZWN0b3J5LWxpc3RpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBncm91cEJ5IH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHtcbiAgRW50cnksXG4gIExpc3RpbmcsXG4gIEljb24sXG4gIE5hbWUsXG4gIExhc3RTYXZlZFxufSBmcm9tIFwiQG50ZXJhY3QvZGlyZWN0b3J5LWxpc3RpbmdcIjtcblxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tIFwiLi4vLi4vdGhlbWVcIjtcblxuZXhwb3J0IHR5cGUgRGlyZWN0b3J5TGlzdGluZ1Byb3BzID0ge1xuICBjb250ZW50czogQXJyYXk8SnVweXRlckFwaSRDb250ZW50PixcbiAgYmFzZXBhdGg6IHN0cmluZ1xufTtcblxuY29uc3QgR3JvdXBlZERpcmVjdG9yeUxpc3RpbmdzID0gKHByb3BzOiBEaXJlY3RvcnlMaXN0aW5nUHJvcHMpID0+IHtcbiAgY29uc3QgY29udGVudHMgPSBwcm9wcy5jb250ZW50cy5maWx0ZXIocm93ID0+ICFyb3cubmFtZS5zdGFydHNXaXRoKFwiLlwiKSk7XG5cbiAgaWYgKGNvbnRlbnRzLmxlbmd0aCA8PSAyNSkge1xuICAgIHJldHVybiA8RGlyZWN0b3J5TGlzdGluZyBjb250ZW50cz17Y29udGVudHN9IGJhc2VwYXRoPXtwcm9wcy5iYXNlcGF0aH0gLz47XG4gIH1cblxuICBjb25zdCBncm91cHMgPSBncm91cEJ5KGNvbnRlbnRzLCBpdGVtID0+IGl0ZW0ubmFtZVswXS50b1VwcGVyQ2FzZSgpKTtcbiAgLy8gRmlsdGVyIG91dCBkb3RmaWxlc1xuICBkZWxldGUgZ3JvdXBzW1wiLlwiXTtcblxuICBpZiAoT2JqZWN0LmtleXMoZ3JvdXBzKS5sZW5ndGggPD0gMSkge1xuICAgIHJldHVybiA8RGlyZWN0b3J5TGlzdGluZyBjb250ZW50cz17Y29udGVudHN9IGJhc2VwYXRoPXtwcm9wcy5iYXNlcGF0aH0gLz47XG4gIH1cblxuICBjb25zdCBncm91cE5hbWVzID0gT2JqZWN0LmtleXMoZ3JvdXBzKS5zb3J0KCk7XG5cbiAgY29uc3QgbGlzdGluZ3MgPSBncm91cE5hbWVzLm1hcChrZXkgPT4gKFxuICAgIDxkaXYga2V5PXtrZXl9PlxuICAgICAgPGRpdiBpZD17YGdyb3VwLSR7a2V5fWB9IGNsYXNzTmFtZT1cImxldHRlckhlYWRlclwiPlxuICAgICAgICB7a2V5fVxuICAgICAgPC9kaXY+XG4gICAgICA8RGlyZWN0b3J5TGlzdGluZyBjb250ZW50cz17Z3JvdXBzW2tleV19IGJhc2VwYXRoPXtwcm9wcy5iYXNlcGF0aH0gLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmxldHRlckhlYWRlciB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA2cHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxldHRlcnNcIj5cbiAgICAgICAge2dyb3VwTmFtZXMubWFwKHggPT4gKFxuICAgICAgICAgIDxhIGhyZWY9e2AjZ3JvdXAtJHt4fWB9IGtleT17eH0+XG4gICAgICAgICAgICB7eC50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsaXN0aW5nc31cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5saW5rfTtcbiAgICAgICAgfVxuICAgICAgICAubGV0dGVycyB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG5jb25zdCBEaXJlY3RvcnlMaXN0aW5nID0gKHByb3BzOiBEaXJlY3RvcnlMaXN0aW5nUHJvcHMpID0+IHtcbiAgY29uc3QgYmFzZSA9IHByb3BzLmJhc2VwYXRoIHx8IFwiL1wiO1xuXG4gIC8vIGZpbHRlciBvdXQgZG90ZmlsZXNcbiAgY29uc3QgY29udGVudHMgPSBwcm9wcy5jb250ZW50cy5maWx0ZXIoZW50cnkgPT4gIWVudHJ5Lm5hbWUuc3RhcnRzV2l0aChcIi5cIikpO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPExpc3Rpbmc+XG4gICAgICAgIHtjb250ZW50cy5tYXAoKGVudHJ5LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxpbmsgPSAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPXt7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWU6IFwiL3ZpZXdcIixcbiAgICAgICAgICAgICAgICBxdWVyeTogeyB2aWV3UGF0aDogZW50cnkucGF0aCB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFzPXtiYXNlICsgXCIvXCIgKyBlbnRyeS5wYXRofVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YT57ZW50cnkubmFtZX08L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEVudHJ5IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8SWNvbiBmaWxlVHlwZT17ZW50cnkudHlwZX0gLz5cbiAgICAgICAgICAgICAgPE5hbWU+e2xpbmt9PC9OYW1lPlxuICAgICAgICAgICAgICA8TGFzdFNhdmVkIGxhc3RNb2RpZmllZD17ZW50cnkubGFzdF9tb2RpZmllZH0gLz5cbiAgICAgICAgICAgIDwvRW50cnk+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L0xpc3Rpbmc+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3VwZWREaXJlY3RvcnlMaXN0aW5ncztcblxuLy8gZXhwb3J0IGRlZmF1bHQgRGlyZWN0b3J5TGlzdGluZztcbiJdfQ== */\n/*@ sourceURL=/home/wutali/Workspace/wutali/commuter/components/contents/directory-listing.js */")));
};

var DirectoryListing = function DirectoryListing(props) {
  var base = props.basepath || "/"; // filter out dotfiles

  var contents = props.contents.filter(function (entry) {
    return !entry.name.startsWith(".");
  });
  return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_nteract_directory_listing__WEBPACK_IMPORTED_MODULE_5__["Listing"], null, contents.map(function (entry, index) {
    var link = react__WEBPACK_IMPORTED_MODULE_2__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: {
        pathname: "/view",
        query: {
          viewPath: entry.path
        }
      },
      as: base + "/" + entry.path
    }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("a", null, entry.name));
    return react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_nteract_directory_listing__WEBPACK_IMPORTED_MODULE_5__["Entry"], {
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_nteract_directory_listing__WEBPACK_IMPORTED_MODULE_5__["Icon"], {
      fileType: entry.type
    }), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_nteract_directory_listing__WEBPACK_IMPORTED_MODULE_5__["Name"], null, link), react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_nteract_directory_listing__WEBPACK_IMPORTED_MODULE_5__["LastSaved"], {
      lastModified: entry.last_modified
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (GroupedDirectoryListings); // export default DirectoryListing;

/***/ }),

/***/ "./components/contents/html.js":
/*!*************************************!*\
  !*** ./components/contents/html.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTMLView; });
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);









var HTMLView =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(HTMLView, _React$Component);

  function HTMLView() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, HTMLView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(HTMLView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "ifr", void 0);

    return _this;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(HTMLView, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("div", {
        style: {
          position: "fixed",
          width: "100%",
          height: "100%"
        }
      }, react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("iframe", {
        title: "view of ".concat(this.props.entry.path),
        sandbox: "allow-scripts",
        style: {
          width: "100%",
          height: "100%",
          border: "none",
          margin: "0",
          padding: "0",
          display: "block"
        },
        srcDoc: this.props.entry.content,
        ref: function ref(f) {
          _this2.ifr = f;
        },
        height: "100%",
        width: "100%"
      }));
    }
  }]);

  return HTMLView;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);



/***/ }),

/***/ "./components/contents/index.js":
/*!**************************************!*\
  !*** ./components/contents/index.js ***!
  \**************************************/
/*! exports provided: Entry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entry", function() { return Entry; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _nteract_notebook_preview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nteract/notebook-preview */ "@nteract/notebook-preview");
/* harmony import */ var _nteract_notebook_preview__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_nteract_notebook_preview__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nteract/markdown */ "@nteract/markdown");
/* harmony import */ var _nteract_markdown__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_nteract_markdown__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _nteract_presentational_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nteract/presentational-components */ "@nteract/presentational-components");
/* harmony import */ var _nteract_presentational_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_nteract_presentational_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _nteract_transforms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nteract/transforms */ "@nteract/transforms");
/* harmony import */ var _nteract_transforms__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_nteract_transforms__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _nteract_transform_vega__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @nteract/transform-vega */ "@nteract/transform-vega");
/* harmony import */ var _nteract_transform_vega__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_nteract_transform_vega__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../transforms */ "./transforms/index.js");
/* harmony import */ var _directory_listing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directory-listing */ "./components/contents/directory-listing.js");
/* harmony import */ var _html__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./html */ "./components/contents/html.js");
/* harmony import */ var _json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./json */ "./components/contents/json.js");
/* harmony import */ var _csv__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./csv */ "./components/contents/csv.js");












 // import DataResourceTransform from "@nteract/transform-dataresource";







var jquery = __webpack_require__(/*! jquery */ "jquery"); // HACK: Temporarily provide jquery for others to use...


global.jquery = jquery;
global.$ = jquery; // Order is important here. The last transform in the array will have order `0`.

var _reduce = [// DataResourceTransform,
_transforms__WEBPACK_IMPORTED_MODULE_13__["PlotlyNullTransform"], _transforms__WEBPACK_IMPORTED_MODULE_13__["PlotlyTransform"], _nteract_transform_vega__WEBPACK_IMPORTED_MODULE_12__["VegaLite1"], _nteract_transform_vega__WEBPACK_IMPORTED_MODULE_12__["VegaLite2"], _nteract_transform_vega__WEBPACK_IMPORTED_MODULE_12__["Vega2"], _nteract_transform_vega__WEBPACK_IMPORTED_MODULE_12__["Vega3"]].reduce(_nteract_transforms__WEBPACK_IMPORTED_MODULE_11__["registerTransform"], {
  transforms: _nteract_transforms__WEBPACK_IMPORTED_MODULE_11__["standardTransforms"],
  displayOrder: _nteract_transforms__WEBPACK_IMPORTED_MODULE_11__["standardDisplayOrder"]
}),
    transforms = _reduce.transforms,
    displayOrder = _reduce.displayOrder;

var suffixRegex = /(?:\.([^.]+))?$/;

var File =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(File, _React$Component);

  function File() {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, File);

    return _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(File).apply(this, arguments));
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(File, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var name = this.props.entry.name;
      var presuffix = suffixRegex.exec(name);

      if (!presuffix) {
        return null;
      }

      var suffix = (presuffix[1] || "").toLowerCase();

      switch (suffix) {
        case "html":
          return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_html__WEBPACK_IMPORTED_MODULE_15__["default"], {
            entry: this.props.entry
          });

        case "json":
          return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_json__WEBPACK_IMPORTED_MODULE_16__["default"], {
            entry: this.props.entry
          });

        case "csv":
          return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_csv__WEBPACK_IMPORTED_MODULE_17__["default"], {
            entry: this.props.entry
          });

        case "md":
        case "markdown":
        case "rmd":
          return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_nteract_markdown__WEBPACK_IMPORTED_MODULE_9___default.a, {
            source: this.props.entry.content
          });

        case "js":
          return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_nteract_presentational_components__WEBPACK_IMPORTED_MODULE_10__["Source"], {
            language: "javascript"
          }, this.props.entry.content);

        case "py":
        case "pyx":
          return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_nteract_presentational_components__WEBPACK_IMPORTED_MODULE_10__["Source"], {
            language: "python"
          }, this.props.entry.content);

        case "gif":
        case "jpeg":
        case "jpg":
        case "png":
          return react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("img", {
            src: "/files/".concat(this.props.pathname),
            alt: this.props.pathname
          });

        default:
          if (this.props.entry.format === "text") {
            return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_nteract_presentational_components__WEBPACK_IMPORTED_MODULE_10__["Source"], {
              language: "text/plain"
            }, this.props.entry.content);
          }

          return react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("a", {
            href: "/files/".concat(this.props.pathname)
          }, "Download raw file");
      }
    }
  }]);

  return File;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

var Entry = function Entry(props) {
  if (props.entry.content === null) {
    return null;
  }

  switch (props.entry.type) {
    case "directory":
      // Dynamic type check on content being an Array
      if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(props.entry.content)) {
        return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_directory_listing__WEBPACK_IMPORTED_MODULE_14__["default"], {
          contents: props.entry.content,
          basepath: "/view"
        });
      }

      return null;

    case "file":
      // TODO: Case off various file types (by extension, mimetype)
      return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](File, {
        entry: props.entry,
        pathname: props.pathname
      });

    case "notebook":
      return react__WEBPACK_IMPORTED_MODULE_7__["createElement"](_nteract_notebook_preview__WEBPACK_IMPORTED_MODULE_8___default.a, {
        notebook: props.entry.content,
        displayOrder: displayOrder,
        transforms: transforms
      });

    default:
      return react__WEBPACK_IMPORTED_MODULE_7__["createElement"]("pre", null, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(props.entry.content));
  }
};

/***/ }),

/***/ "./components/contents/json.js":
/*!*************************************!*\
  !*** ./components/contents/json.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nteract_transforms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nteract/transforms */ "@nteract/transforms");
/* harmony import */ var _nteract_transforms__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nteract_transforms__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _zeppelin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zeppelin */ "./components/contents/zeppelin.js");




/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var content = JSON.parse(props.entry.content);

  try {
    // Zeppelin notebooks are called note.json, we'll go ahead and render them
    if (props.entry.name === "note.json") {
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_zeppelin__WEBPACK_IMPORTED_MODULE_3__["default"], {
        notebook: content
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_nteract_transforms__WEBPACK_IMPORTED_MODULE_1__["JSONTransform"], {
      data: content,
      metadata: immutable__WEBPACK_IMPORTED_MODULE_2___default.a.Map({
        expanded: true
      })
    });
  } catch (e) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h1", null, "Failed to parse Zeppelin Notebook"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("pre", null, e.toString()), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("code", null, props.entry.content));
  }
});

/***/ }),

/***/ "./components/contents/zeppelin.js":
/*!*****************************************!*\
  !*** ./components/contents/zeppelin.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _nteract_transforms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nteract/transforms */ "@nteract/transforms");
/* harmony import */ var _nteract_transforms__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nteract_transforms__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nteract_presentational_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nteract/presentational-components */ "@nteract/presentational-components");
/* harmony import */ var _nteract_presentational_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nteract_presentational_components__WEBPACK_IMPORTED_MODULE_7__);









var d3 = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, __webpack_require__(/*! d3-dsv */ "d3-dsv"));

var Text = function Text(props) {
  return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("code", {
    className: "jsx-2070364236"
  }, props.data), react__WEBPACK_IMPORTED_MODULE_5__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2070364236"
  }, "code.jsx-2070364236{white-space:pre;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3d1dGFsaS9Xb3Jrc3BhY2Uvd3V0YWxpL2NvbW11dGVyL2NvbXBvbmVudHMvY29udGVudHMvemVwcGVsaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVWdCLEFBR3lCLGdCQUNsQiIsImZpbGUiOiIvaG9tZS93dXRhbGkvV29ya3NwYWNlL3d1dGFsaS9jb21tdXRlci9jb21wb25lbnRzL2NvbnRlbnRzL3plcHBlbGluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSFRNTFRyYW5zZm9ybSB9IGZyb20gXCJAbnRlcmFjdC90cmFuc2Zvcm1zXCI7XG5pbXBvcnQgeyBTb3VyY2UgfSBmcm9tIFwiQG50ZXJhY3QvcHJlc2VudGF0aW9uYWwtY29tcG9uZW50c1wiO1xuXG5jb25zdCBkMyA9IE9iamVjdC5hc3NpZ24oe30sIHJlcXVpcmUoXCJkMy1kc3ZcIikpO1xuXG5jb25zdCBUZXh0ID0gKHByb3BzOiB7IGRhdGE6IHN0cmluZyB9KSA9PiAoXG4gIDxSZWFjdC5GcmFnbWVudD5cbiAgICA8Y29kZT57cHJvcHMuZGF0YX08L2NvZGU+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgY29kZSB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuY29uc3QgSG9rZXlUYWJsZSA9IHByb3BzID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIHRhYmxlIHtcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgICAgICBlbXB0eS1jZWxsczogc2hvdztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NiY2JjYjtcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgIH1cblxuICAgICAgdGQsXG4gICAgICB0aCB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NiY2JjYjsgLyogIGlubmVyIGNvbHVtbiBib3JkZXIgKi9cbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDAgMCAxcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyp0byBtYWtlIHRocyB3aGVyZSB0aGUgdGl0bGUgaXMgcmVhbGx5IGxvbmcgd29yayovXG4gICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTsgLyogY2VsbCBwYWRkaW5nICovXG4gICAgICB9XG5cbiAgICAgIHRkOmZpcnN0LWNoaWxkLFxuICAgICAgdGg6Zmlyc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMDtcbiAgICAgIH1cblxuICAgICAgdGhlYWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPHRhYmxlPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAge3Byb3BzLmNvbHVtbk5hbWVzLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICAgICAgPHRoIGtleT17Y29sdW1uLmluZGV4fT57Y29sdW1uLm5hbWV9PC90aD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHtwcm9wcy5yb3dzLm1hcCgocm93LCBpZHgpID0+IChcbiAgICAgICAgICA8dHIga2V5PXtpZHh9PlxuICAgICAgICAgICAge3Jvdy5tYXAoKGl0ZW0sIGNvbElkeCkgPT4gKFxuICAgICAgICAgICAgICA8dGQga2V5PXtjb2xJZHh9PntpdGVtfTwvdGQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICApKX1cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgPC9SZWFjdC5GcmFnbWVudD5cbik7XG5cbmNvbnN0IERTVlRhYmxlID0gKHByb3BzOiB7IGRhdGE6IEFycmF5PE9iamVjdD4gfSkgPT4ge1xuICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcHMuZGF0YSkgfHwgcHJvcHMuZGF0YS5sZW5ndGggPD0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgY29sdW1uTmFtZXMgPSBPYmplY3Qua2V5cyhwcm9wcy5kYXRhWzBdKTtcbiAgY29uc3Qgcm93cyA9IHByb3BzLmRhdGE7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIHRhYmxlIHtcbiAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgZW1wdHktY2VsbHM6IHNob3c7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NiY2JjYjtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIH1cblxuICAgICAgICB0ZCxcbiAgICAgICAgdGgge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2JjYmNiOyAvKiAgaW5uZXIgY29sdW1uIGJvcmRlciAqL1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMCAwIDAgMXB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7IC8qdG8gbWFrZSB0aHMgd2hlcmUgdGhlIHRpdGxlIGlzIHJlYWxseSBsb25nIHdvcmsqL1xuICAgICAgICAgIHBhZGRpbmc6IDAuNWVtIDFlbTsgLyogY2VsbCBwYWRkaW5nICovXG4gICAgICAgIH1cblxuICAgICAgICB0ZDpmaXJzdC1jaGlsZCxcbiAgICAgICAgdGg6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhlYWQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICB7Y29sdW1uTmFtZXMubWFwKChjb2x1bW4sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICA8dGgga2V5PXtpZHh9Pntjb2x1bW59PC90aD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICB7cm93cy5tYXAoKHJvdywgaWR4KSA9PiAoXG4gICAgICAgICAgICA8dHIga2V5PXtpZHh9PlxuICAgICAgICAgICAgICB7Y29sdW1uTmFtZXMubWFwKChrLCBjb2xJZHgpID0+IChcbiAgICAgICAgICAgICAgICA8dGQga2V5PXtjb2xJZHh9Pntyb3dba119PC90ZD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuLy8gT2xkIHN0eWxlIFplcHBlbGluXG5jb25zdCBNZXNzYWdlID0gcHJvcHMgPT4ge1xuICBzd2l0Y2ggKHByb3BzLnR5cGUpIHtcbiAgICBjYXNlIFwiSFRNTFwiOlxuICAgICAgcmV0dXJuIDxIVE1MVHJhbnNmb3JtIGRhdGE9e3Byb3BzLmRhdGF9IC8+O1xuICAgIGNhc2UgXCJURVhUXCI6XG4gICAgICByZXR1cm4gPFRleHQgZGF0YT17cHJvcHMuZGF0YX0gLz47XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5jb25zdCBSZXN1bHQgPSBwcm9wcyA9PiB7XG4gIGlmICghcHJvcHMucmVzdWx0IHx8IHByb3BzLnJlc3VsdC5tc2cgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN3aXRjaCAocHJvcHMucmVzdWx0LnR5cGUpIHtcbiAgICBjYXNlIFwiSFRNTFwiOlxuICAgICAgcmV0dXJuIDxIVE1MVHJhbnNmb3JtIGRhdGE9e3Byb3BzLnJlc3VsdC5tc2d9IC8+O1xuICAgIGNhc2UgXCJURVhUXCI6XG4gICAgICByZXR1cm4gPFRleHQgZGF0YT17cHJvcHMucmVzdWx0Lm1zZ30gLz47XG4gICAgY2FzZSBcIlRBQkxFXCI6XG4gICAgICBpZiAoIXByb3BzLnJlc3VsdC5jb2x1bW5OYW1lcyB8fCAhcHJvcHMucmVzdWx0LnJvd3MpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGQzLnRzdlBhcnNlKHByb3BzLnJlc3VsdC5tc2cpO1xuXG4gICAgICAgIHJldHVybiA8RFNWVGFibGUgZGF0YT17ZGF0YX0gLz47XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8SG9rZXlUYWJsZVxuICAgICAgICAgIGNvbHVtbk5hbWVzPXtwcm9wcy5yZXN1bHQuY29sdW1uTmFtZXN9XG4gICAgICAgICAgcm93cz17cHJvcHMucmVzdWx0LnJvd3N9XG4gICAgICAgIC8+XG4gICAgICApO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuY29uc3Qgd2hpY2hMYW5ndWFnZSA9IHNvdXJjZSA9PiB7XG4gIGlmICgvXiVtZC8udGVzdChzb3VyY2UpKSB7XG4gICAgcmV0dXJuIFwibWFya2Rvd25cIjtcbiAgfVxuXG4gIGlmICgvXiVzcWwvLnRlc3Qoc291cmNlKSkge1xuICAgIHJldHVybiBcInRleHQveC1oaXZlXCI7XG4gIH1cblxuICBpZiAoL14lcGlnLy50ZXN0KHNvdXJjZSkpIHtcbiAgICByZXR1cm4gXCJwaWdcIjtcbiAgfVxuXG4gIGlmIChcbiAgICAvXiVzcGFya1xcLnB5c3BhcmsvLnRlc3Qoc291cmNlKSB8fFxuICAgIC9eJXB5c3BhcmsvLnRlc3Qoc291cmNlKSB8fFxuICAgIC9eJXB5dGhvbi8udGVzdChzb3VyY2UpXG4gICkge1xuICAgIHJldHVybiBcInB5dGhvblwiO1xuICB9XG5cbiAgaWYgKC9eJXNoLy50ZXN0KHNvdXJjZSkpIHtcbiAgICByZXR1cm4gXCJzaGVsbFwiO1xuICB9XG5cbiAgaWYgKC9eJXNwYXJrLy50ZXN0KHNvdXJjZSkpIHtcbiAgICByZXR1cm4gXCJ0ZXh0L3gtc2NhbGFcIjtcbiAgfVxuXG4gIGlmICgvXiVyLy50ZXN0KHNvdXJjZSkpIHtcbiAgICByZXR1cm4gXCJyXCI7XG4gIH1cblxuICBpZiAoL14laHRtbC8udGVzdChzb3VyY2UpKSB7XG4gICAgcmV0dXJuIFwiaHRtbFwiO1xuICB9XG5cbiAgcmV0dXJuIFwidGV4dC94LXNjYWxhXCI7XG59O1xuXG5jb25zdCBQYXJhZ3JhcGggPSBwcm9wcyA9PiB7XG4gIGNvbnN0IGxhbmcgPSB3aGljaExhbmd1YWdlKHByb3BzLnRleHQpO1xuXG4gIGxldCByZXN1bHRWaWV3ID0gbnVsbDtcbiAgaWYgKHByb3BzLnJlc3VsdCkge1xuICAgIHJlc3VsdFZpZXcgPSA8UmVzdWx0IHJlc3VsdD17cHJvcHMucmVzdWx0fSAvPjtcbiAgfSBlbHNlIGlmIChwcm9wcy5yZXN1bHRzICYmIEFycmF5LmlzQXJyYXkocHJvcHMucmVzdWx0cy5tc2cpKSB7XG4gICAgcmVzdWx0VmlldyA9IHByb3BzLnJlc3VsdHMubXNnLm1hcCgoaXRlbSwgaWR4KSA9PiAoXG4gICAgICA8TWVzc2FnZSB7Li4uaXRlbX0ga2V5PXtpZHh9IC8+XG4gICAgKSk7XG4gIH1cblxuICBpZiAobGFuZyA9PT0gXCJtYXJrZG93blwiKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjEwcHhcIixcbiAgICAgICAgICBwYWRkaW5nVG9wOiBcIjEwcHhcIlxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7cmVzdWx0Vmlld31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxTb3VyY2UgbGFuZ3VhZ2U9e2xhbmd9Pntwcm9wcy50ZXh0fTwvU291cmNlPlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMTBweFwiLFxuICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtyZXN1bHRWaWV3fVxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKTtcbn07XG5cbnR5cGUgWmVwcGVsaW5WaWV3UHJvcHMgPSB7XG4gIG5vdGVib29rOiB7XG4gICAgbmFtZTogc3RyaW5nLFxuICAgIHBhcmFncmFwaHM6IEFycmF5PFpQYXJhZ3JhcGg+XG4gIH1cbn07XG5cbnR5cGUgWlBhcmFncmFwaCA9IGFueTtcblxuY29uc3QgWmVwcGVsaW5WaWV3ID0gKHByb3BzOiBaZXBwZWxpblZpZXdQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiMTBweFwiIH19PlxuICAgICAgPGgxPntwcm9wcy5ub3RlYm9vay5uYW1lfTwvaDE+XG4gICAgICB7cHJvcHMubm90ZWJvb2sucGFyYWdyYXBocy5tYXAocCA9PiAoXG4gICAgICAgIDxQYXJhZ3JhcGgga2V5PXtwLmlkfSB7Li4ucH0gLz5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgWmVwcGVsaW5WaWV3O1xuIl19 */\n/*@ sourceURL=/home/wutali/Workspace/wutali/commuter/components/contents/zeppelin.js */"));
};

var HokeyTable = function HokeyTable(props) {
  return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2156236075"
  }, "table.jsx-2156236075{border-collapse:collapse;border-spacing:0;border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #cbcbcb;max-height:200px;overflow-y:scroll;}td.jsx-2156236075,th.jsx-2156236075{padding:0;border-left:1px solid #cbcbcb;border-width:0 0 0 1px;font-size:inherit;margin:0;overflow:visible;padding:0.5em 1em;}td.jsx-2156236075:first-child,th.jsx-2156236075:first-child{border-left-width:0;}thead.jsx-2156236075{background-color:#e0e0e0;color:#000;text-align:left;vertical-align:bottom;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3d1dGFsaS9Xb3Jrc3BhY2Uvd3V0YWxpL2NvbW11dGVyL2NvbXBvbmVudHMvY29udGVudHMvemVwcGVsaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JnQixBQUdrQyxBQVlmLEFBV1UsQUFJSyxVQWRLLFVBV2hDLEtBdkJtQixBQTJCTixXQUNLLElBZk8sRUFaRSxVQTRCSCxXQWZKLElBWkQsT0E0Qm5CLE9BZlcsR0FaUSxNQWFBLFdBWlEsTUFhUCxrQkFDcEIsQ0FibUIsaUJBQ0Msa0JBQ3BCIiwiZmlsZSI6Ii9ob21lL3d1dGFsaS9Xb3Jrc3BhY2Uvd3V0YWxpL2NvbW11dGVyL2NvbXBvbmVudHMvY29udGVudHMvemVwcGVsaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBIVE1MVHJhbnNmb3JtIH0gZnJvbSBcIkBudGVyYWN0L3RyYW5zZm9ybXNcIjtcbmltcG9ydCB7IFNvdXJjZSB9IGZyb20gXCJAbnRlcmFjdC9wcmVzZW50YXRpb25hbC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IGQzID0gT2JqZWN0LmFzc2lnbih7fSwgcmVxdWlyZShcImQzLWRzdlwiKSk7XG5cbmNvbnN0IFRleHQgPSAocHJvcHM6IHsgZGF0YTogc3RyaW5nIH0pID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxjb2RlPntwcm9wcy5kYXRhfTwvY29kZT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBjb2RlIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5jb25zdCBIb2tleVRhYmxlID0gcHJvcHMgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgdGFibGUge1xuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIGVtcHR5LWNlbGxzOiBzaG93O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JjYmNiO1xuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgfVxuXG4gICAgICB0ZCxcbiAgICAgIHRoIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2JjYmNiOyAvKiAgaW5uZXIgY29sdW1uIGJvcmRlciAqL1xuICAgICAgICBib3JkZXItd2lkdGg6IDAgMCAwIDFweDtcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKnRvIG1ha2UgdGhzIHdoZXJlIHRoZSB0aXRsZSBpcyByZWFsbHkgbG9uZyB3b3JrKi9cbiAgICAgICAgcGFkZGluZzogMC41ZW0gMWVtOyAvKiBjZWxsIHBhZGRpbmcgKi9cbiAgICAgIH1cblxuICAgICAgdGQ6Zmlyc3QtY2hpbGQsXG4gICAgICB0aDpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgICAgfVxuXG4gICAgICB0aGVhZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8dGFibGU+XG4gICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICB7cHJvcHMuY29sdW1uTmFtZXMubWFwKGNvbHVtbiA9PiAoXG4gICAgICAgICAgICA8dGgga2V5PXtjb2x1bW4uaW5kZXh9Pntjb2x1bW4ubmFtZX08L3RoPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge3Byb3BzLnJvd3MubWFwKChyb3csIGlkeCkgPT4gKFxuICAgICAgICAgIDx0ciBrZXk9e2lkeH0+XG4gICAgICAgICAgICB7cm93Lm1hcCgoaXRlbSwgY29sSWR4KSA9PiAoXG4gICAgICAgICAgICAgIDx0ZCBrZXk9e2NvbElkeH0+e2l0ZW19PC90ZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICkpfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuY29uc3QgRFNWVGFibGUgPSAocHJvcHM6IHsgZGF0YTogQXJyYXk8T2JqZWN0PiB9KSA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheShwcm9wcy5kYXRhKSB8fCBwcm9wcy5kYXRhLmxlbmd0aCA8PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBjb2x1bW5OYW1lcyA9IE9iamVjdC5rZXlzKHByb3BzLmRhdGFbMF0pO1xuICBjb25zdCByb3dzID0gcHJvcHMuZGF0YTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgdGFibGUge1xuICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgICAgICBlbXB0eS1jZWxsczogc2hvdztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JjYmNiO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRkLFxuICAgICAgICB0aCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjYmNiY2I7IC8qICBpbm5lciBjb2x1bW4gYm9yZGVyICovXG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDAgMCAxcHg7XG4gICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyp0byBtYWtlIHRocyB3aGVyZSB0aGUgdGl0bGUgaXMgcmVhbGx5IGxvbmcgd29yayovXG4gICAgICAgICAgcGFkZGluZzogMC41ZW0gMWVtOyAvKiBjZWxsIHBhZGRpbmcgKi9cbiAgICAgICAgfVxuXG4gICAgICAgIHRkOmZpcnN0LWNoaWxkLFxuICAgICAgICB0aDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHtjb2x1bW5OYW1lcy5tYXAoKGNvbHVtbiwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgIDx0aCBrZXk9e2lkeH0+e2NvbHVtbn08L3RoPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtyb3dzLm1hcCgocm93LCBpZHgpID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgIHtjb2x1bW5OYW1lcy5tYXAoKGssIGNvbElkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2NvbElkeH0+e3Jvd1trXX08L3RkPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG4vLyBPbGQgc3R5bGUgWmVwcGVsaW5cbmNvbnN0IE1lc3NhZ2UgPSBwcm9wcyA9PiB7XG4gIHN3aXRjaCAocHJvcHMudHlwZSkge1xuICAgIGNhc2UgXCJIVE1MXCI6XG4gICAgICByZXR1cm4gPEhUTUxUcmFuc2Zvcm0gZGF0YT17cHJvcHMuZGF0YX0gLz47XG4gICAgY2FzZSBcIlRFWFRcIjpcbiAgICAgIHJldHVybiA8VGV4dCBkYXRhPXtwcm9wcy5kYXRhfSAvPjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmNvbnN0IFJlc3VsdCA9IHByb3BzID0+IHtcbiAgaWYgKCFwcm9wcy5yZXN1bHQgfHwgcHJvcHMucmVzdWx0Lm1zZyA9PT0gXCJcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc3dpdGNoIChwcm9wcy5yZXN1bHQudHlwZSkge1xuICAgIGNhc2UgXCJIVE1MXCI6XG4gICAgICByZXR1cm4gPEhUTUxUcmFuc2Zvcm0gZGF0YT17cHJvcHMucmVzdWx0Lm1zZ30gLz47XG4gICAgY2FzZSBcIlRFWFRcIjpcbiAgICAgIHJldHVybiA8VGV4dCBkYXRhPXtwcm9wcy5yZXN1bHQubXNnfSAvPjtcbiAgICBjYXNlIFwiVEFCTEVcIjpcbiAgICAgIGlmICghcHJvcHMucmVzdWx0LmNvbHVtbk5hbWVzIHx8ICFwcm9wcy5yZXN1bHQucm93cykge1xuICAgICAgICBjb25zdCBkYXRhID0gZDMudHN2UGFyc2UocHJvcHMucmVzdWx0Lm1zZyk7XG5cbiAgICAgICAgcmV0dXJuIDxEU1ZUYWJsZSBkYXRhPXtkYXRhfSAvPjtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxIb2tleVRhYmxlXG4gICAgICAgICAgY29sdW1uTmFtZXM9e3Byb3BzLnJlc3VsdC5jb2x1bW5OYW1lc31cbiAgICAgICAgICByb3dzPXtwcm9wcy5yZXN1bHQucm93c31cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5jb25zdCB3aGljaExhbmd1YWdlID0gc291cmNlID0+IHtcbiAgaWYgKC9eJW1kLy50ZXN0KHNvdXJjZSkpIHtcbiAgICByZXR1cm4gXCJtYXJrZG93blwiO1xuICB9XG5cbiAgaWYgKC9eJXNxbC8udGVzdChzb3VyY2UpKSB7XG4gICAgcmV0dXJuIFwidGV4dC94LWhpdmVcIjtcbiAgfVxuXG4gIGlmICgvXiVwaWcvLnRlc3Qoc291cmNlKSkge1xuICAgIHJldHVybiBcInBpZ1wiO1xuICB9XG5cbiAgaWYgKFxuICAgIC9eJXNwYXJrXFwucHlzcGFyay8udGVzdChzb3VyY2UpIHx8XG4gICAgL14lcHlzcGFyay8udGVzdChzb3VyY2UpIHx8XG4gICAgL14lcHl0aG9uLy50ZXN0KHNvdXJjZSlcbiAgKSB7XG4gICAgcmV0dXJuIFwicHl0aG9uXCI7XG4gIH1cblxuICBpZiAoL14lc2gvLnRlc3Qoc291cmNlKSkge1xuICAgIHJldHVybiBcInNoZWxsXCI7XG4gIH1cblxuICBpZiAoL14lc3BhcmsvLnRlc3Qoc291cmNlKSkge1xuICAgIHJldHVybiBcInRleHQveC1zY2FsYVwiO1xuICB9XG5cbiAgaWYgKC9eJXIvLnRlc3Qoc291cmNlKSkge1xuICAgIHJldHVybiBcInJcIjtcbiAgfVxuXG4gIGlmICgvXiVodG1sLy50ZXN0KHNvdXJjZSkpIHtcbiAgICByZXR1cm4gXCJodG1sXCI7XG4gIH1cblxuICByZXR1cm4gXCJ0ZXh0L3gtc2NhbGFcIjtcbn07XG5cbmNvbnN0IFBhcmFncmFwaCA9IHByb3BzID0+IHtcbiAgY29uc3QgbGFuZyA9IHdoaWNoTGFuZ3VhZ2UocHJvcHMudGV4dCk7XG5cbiAgbGV0IHJlc3VsdFZpZXcgPSBudWxsO1xuICBpZiAocHJvcHMucmVzdWx0KSB7XG4gICAgcmVzdWx0VmlldyA9IDxSZXN1bHQgcmVzdWx0PXtwcm9wcy5yZXN1bHR9IC8+O1xuICB9IGVsc2UgaWYgKHByb3BzLnJlc3VsdHMgJiYgQXJyYXkuaXNBcnJheShwcm9wcy5yZXN1bHRzLm1zZykpIHtcbiAgICByZXN1bHRWaWV3ID0gcHJvcHMucmVzdWx0cy5tc2cubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgIDxNZXNzYWdlIHsuLi5pdGVtfSBrZXk9e2lkeH0gLz5cbiAgICApKTtcbiAgfVxuXG4gIGlmIChsYW5nID09PSBcIm1hcmtkb3duXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMTBweFwiLFxuICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtyZXN1bHRWaWV3fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNvdXJjZSBsYW5ndWFnZT17bGFuZ30+e3Byb3BzLnRleHR9PC9Tb3VyY2U+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxMHB4XCIsXG4gICAgICAgICAgcGFkZGluZ1RvcDogXCIxMHB4XCJcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3Jlc3VsdFZpZXd9XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxudHlwZSBaZXBwZWxpblZpZXdQcm9wcyA9IHtcbiAgbm90ZWJvb2s6IHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgcGFyYWdyYXBoczogQXJyYXk8WlBhcmFncmFwaD5cbiAgfVxufTtcblxudHlwZSBaUGFyYWdyYXBoID0gYW55O1xuXG5jb25zdCBaZXBwZWxpblZpZXcgPSAocHJvcHM6IFplcHBlbGluVmlld1Byb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCIxMHB4XCIgfX0+XG4gICAgICA8aDE+e3Byb3BzLm5vdGVib29rLm5hbWV9PC9oMT5cbiAgICAgIHtwcm9wcy5ub3RlYm9vay5wYXJhZ3JhcGhzLm1hcChwID0+IChcbiAgICAgICAgPFBhcmFncmFwaCBrZXk9e3AuaWR9IHsuLi5wfSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBaZXBwZWxpblZpZXc7XG4iXX0= */\n/*@ sourceURL=/home/wutali/Workspace/wutali/commuter/components/contents/zeppelin.js */"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("table", {
    className: "jsx-2156236075"
  }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("thead", {
    className: "jsx-2156236075"
  }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("tr", {
    className: "jsx-2156236075"
  }, props.columnNames.map(function (column) {
    return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("th", {
      key: column.index,
      className: "jsx-2156236075"
    }, column.name);
  }))), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("tbody", {
    className: "jsx-2156236075"
  }, props.rows.map(function (row, idx) {
    return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("tr", {
      key: idx,
      className: "jsx-2156236075"
    }, row.map(function (item, colIdx) {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("td", {
        key: colIdx,
        className: "jsx-2156236075"
      }, item);
    }));
  }))));
};

var DSVTable = function DSVTable(props) {
  if (!_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(props.data) || props.data.length <= 0) {
    return null;
  }

  var columnNames = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(props.data[0]);

  var rows = props.data;
  return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "1212954643"
  }, "table.jsx-1212954643{border-collapse:collapse;border-spacing:0;border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #cbcbcb;max-height:200px;overflow-y:scroll;}td.jsx-1212954643,th.jsx-1212954643{padding:0;border-left:1px solid #cbcbcb;border-width:0 0 0 1px;font-size:inherit;margin:0;overflow:visible;padding:0.5em 1em;}td.jsx-1212954643:first-child,th.jsx-1212954643:first-child{border-left-width:0;}thead.jsx-1212954643{background-color:#e0e0e0;color:#000;text-align:left;vertical-align:bottom;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3d1dGFsaS9Xb3Jrc3BhY2Uvd3V0YWxpL2NvbW11dGVyL2NvbXBvbmVudHMvY29udGVudHMvemVwcGVsaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0ZrQixBQUdvQyxBQVlmLEFBV1UsQUFJSyxVQWRLLFVBV2hDLEtBdkJtQixBQTJCTixXQUNLLElBZk8sRUFaRSxVQTRCSCxXQWZKLElBWkQsT0E0Qm5CLE9BZlcsR0FaUSxNQWFBLFdBWlEsTUFhUCxrQkFDcEIsQ0FibUIsaUJBQ0Msa0JBQ3BCIiwiZmlsZSI6Ii9ob21lL3d1dGFsaS9Xb3Jrc3BhY2Uvd3V0YWxpL2NvbW11dGVyL2NvbXBvbmVudHMvY29udGVudHMvemVwcGVsaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBIVE1MVHJhbnNmb3JtIH0gZnJvbSBcIkBudGVyYWN0L3RyYW5zZm9ybXNcIjtcbmltcG9ydCB7IFNvdXJjZSB9IGZyb20gXCJAbnRlcmFjdC9wcmVzZW50YXRpb25hbC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IGQzID0gT2JqZWN0LmFzc2lnbih7fSwgcmVxdWlyZShcImQzLWRzdlwiKSk7XG5cbmNvbnN0IFRleHQgPSAocHJvcHM6IHsgZGF0YTogc3RyaW5nIH0pID0+IChcbiAgPFJlYWN0LkZyYWdtZW50PlxuICAgIDxjb2RlPntwcm9wcy5kYXRhfTwvY29kZT5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBjb2RlIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuXG5jb25zdCBIb2tleVRhYmxlID0gcHJvcHMgPT4gKFxuICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgdGFibGUge1xuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIGVtcHR5LWNlbGxzOiBzaG93O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JjYmNiO1xuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgfVxuXG4gICAgICB0ZCxcbiAgICAgIHRoIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2JjYmNiOyAvKiAgaW5uZXIgY29sdW1uIGJvcmRlciAqL1xuICAgICAgICBib3JkZXItd2lkdGg6IDAgMCAwIDFweDtcbiAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG92ZXJmbG93OiB2aXNpYmxlOyAvKnRvIG1ha2UgdGhzIHdoZXJlIHRoZSB0aXRsZSBpcyByZWFsbHkgbG9uZyB3b3JrKi9cbiAgICAgICAgcGFkZGluZzogMC41ZW0gMWVtOyAvKiBjZWxsIHBhZGRpbmcgKi9cbiAgICAgIH1cblxuICAgICAgdGQ6Zmlyc3QtY2hpbGQsXG4gICAgICB0aDpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgICAgfVxuXG4gICAgICB0aGVhZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8dGFibGU+XG4gICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICB7cHJvcHMuY29sdW1uTmFtZXMubWFwKGNvbHVtbiA9PiAoXG4gICAgICAgICAgICA8dGgga2V5PXtjb2x1bW4uaW5kZXh9Pntjb2x1bW4ubmFtZX08L3RoPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge3Byb3BzLnJvd3MubWFwKChyb3csIGlkeCkgPT4gKFxuICAgICAgICAgIDx0ciBrZXk9e2lkeH0+XG4gICAgICAgICAgICB7cm93Lm1hcCgoaXRlbSwgY29sSWR4KSA9PiAoXG4gICAgICAgICAgICAgIDx0ZCBrZXk9e2NvbElkeH0+e2l0ZW19PC90ZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICkpfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICA8L1JlYWN0LkZyYWdtZW50PlxuKTtcblxuY29uc3QgRFNWVGFibGUgPSAocHJvcHM6IHsgZGF0YTogQXJyYXk8T2JqZWN0PiB9KSA9PiB7XG4gIGlmICghQXJyYXkuaXNBcnJheShwcm9wcy5kYXRhKSB8fCBwcm9wcy5kYXRhLmxlbmd0aCA8PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBjb2x1bW5OYW1lcyA9IE9iamVjdC5rZXlzKHByb3BzLmRhdGFbMF0pO1xuICBjb25zdCByb3dzID0gcHJvcHMuZGF0YTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgdGFibGUge1xuICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgICAgICBlbXB0eS1jZWxsczogc2hvdztcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JjYmNiO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRkLFxuICAgICAgICB0aCB7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjYmNiY2I7IC8qICBpbm5lciBjb2x1bW4gYm9yZGVyICovXG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDAgMCAxcHg7XG4gICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyp0byBtYWtlIHRocyB3aGVyZSB0aGUgdGl0bGUgaXMgcmVhbGx5IGxvbmcgd29yayovXG4gICAgICAgICAgcGFkZGluZzogMC41ZW0gMWVtOyAvKiBjZWxsIHBhZGRpbmcgKi9cbiAgICAgICAgfVxuXG4gICAgICAgIHRkOmZpcnN0LWNoaWxkLFxuICAgICAgICB0aDpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgICAgIH1cblxuICAgICAgICB0aGVhZCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHtjb2x1bW5OYW1lcy5tYXAoKGNvbHVtbiwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgIDx0aCBrZXk9e2lkeH0+e2NvbHVtbn08L3RoPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtyb3dzLm1hcCgocm93LCBpZHgpID0+IChcbiAgICAgICAgICAgIDx0ciBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgIHtjb2x1bW5OYW1lcy5tYXAoKGssIGNvbElkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2NvbElkeH0+e3Jvd1trXX08L3RkPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICk7XG59O1xuXG4vLyBPbGQgc3R5bGUgWmVwcGVsaW5cbmNvbnN0IE1lc3NhZ2UgPSBwcm9wcyA9PiB7XG4gIHN3aXRjaCAocHJvcHMudHlwZSkge1xuICAgIGNhc2UgXCJIVE1MXCI6XG4gICAgICByZXR1cm4gPEhUTUxUcmFuc2Zvcm0gZGF0YT17cHJvcHMuZGF0YX0gLz47XG4gICAgY2FzZSBcIlRFWFRcIjpcbiAgICAgIHJldHVybiA8VGV4dCBkYXRhPXtwcm9wcy5kYXRhfSAvPjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbmNvbnN0IFJlc3VsdCA9IHByb3BzID0+IHtcbiAgaWYgKCFwcm9wcy5yZXN1bHQgfHwgcHJvcHMucmVzdWx0Lm1zZyA9PT0gXCJcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc3dpdGNoIChwcm9wcy5yZXN1bHQudHlwZSkge1xuICAgIGNhc2UgXCJIVE1MXCI6XG4gICAgICByZXR1cm4gPEhUTUxUcmFuc2Zvcm0gZGF0YT17cHJvcHMucmVzdWx0Lm1zZ30gLz47XG4gICAgY2FzZSBcIlRFWFRcIjpcbiAgICAgIHJldHVybiA8VGV4dCBkYXRhPXtwcm9wcy5yZXN1bHQubXNnfSAvPjtcbiAgICBjYXNlIFwiVEFCTEVcIjpcbiAgICAgIGlmICghcHJvcHMucmVzdWx0LmNvbHVtbk5hbWVzIHx8ICFwcm9wcy5yZXN1bHQucm93cykge1xuICAgICAgICBjb25zdCBkYXRhID0gZDMudHN2UGFyc2UocHJvcHMucmVzdWx0Lm1zZyk7XG5cbiAgICAgICAgcmV0dXJuIDxEU1ZUYWJsZSBkYXRhPXtkYXRhfSAvPjtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxIb2tleVRhYmxlXG4gICAgICAgICAgY29sdW1uTmFtZXM9e3Byb3BzLnJlc3VsdC5jb2x1bW5OYW1lc31cbiAgICAgICAgICByb3dzPXtwcm9wcy5yZXN1bHQucm93c31cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5jb25zdCB3aGljaExhbmd1YWdlID0gc291cmNlID0+IHtcbiAgaWYgKC9eJW1kLy50ZXN0KHNvdXJjZSkpIHtcbiAgICByZXR1cm4gXCJtYXJrZG93blwiO1xuICB9XG5cbiAgaWYgKC9eJXNxbC8udGVzdChzb3VyY2UpKSB7XG4gICAgcmV0dXJuIFwidGV4dC94LWhpdmVcIjtcbiAgfVxuXG4gIGlmICgvXiVwaWcvLnRlc3Qoc291cmNlKSkge1xuICAgIHJldHVybiBcInBpZ1wiO1xuICB9XG5cbiAgaWYgKFxuICAgIC9eJXNwYXJrXFwucHlzcGFyay8udGVzdChzb3VyY2UpIHx8XG4gICAgL14lcHlzcGFyay8udGVzdChzb3VyY2UpIHx8XG4gICAgL14lcHl0aG9uLy50ZXN0KHNvdXJjZSlcbiAgKSB7XG4gICAgcmV0dXJuIFwicHl0aG9uXCI7XG4gIH1cblxuICBpZiAoL14lc2gvLnRlc3Qoc291cmNlKSkge1xuICAgIHJldHVybiBcInNoZWxsXCI7XG4gIH1cblxuICBpZiAoL14lc3BhcmsvLnRlc3Qoc291cmNlKSkge1xuICAgIHJldHVybiBcInRleHQveC1zY2FsYVwiO1xuICB9XG5cbiAgaWYgKC9eJXIvLnRlc3Qoc291cmNlKSkge1xuICAgIHJldHVybiBcInJcIjtcbiAgfVxuXG4gIGlmICgvXiVodG1sLy50ZXN0KHNvdXJjZSkpIHtcbiAgICByZXR1cm4gXCJodG1sXCI7XG4gIH1cblxuICByZXR1cm4gXCJ0ZXh0L3gtc2NhbGFcIjtcbn07XG5cbmNvbnN0IFBhcmFncmFwaCA9IHByb3BzID0+IHtcbiAgY29uc3QgbGFuZyA9IHdoaWNoTGFuZ3VhZ2UocHJvcHMudGV4dCk7XG5cbiAgbGV0IHJlc3VsdFZpZXcgPSBudWxsO1xuICBpZiAocHJvcHMucmVzdWx0KSB7XG4gICAgcmVzdWx0VmlldyA9IDxSZXN1bHQgcmVzdWx0PXtwcm9wcy5yZXN1bHR9IC8+O1xuICB9IGVsc2UgaWYgKHByb3BzLnJlc3VsdHMgJiYgQXJyYXkuaXNBcnJheShwcm9wcy5yZXN1bHRzLm1zZykpIHtcbiAgICByZXN1bHRWaWV3ID0gcHJvcHMucmVzdWx0cy5tc2cubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgIDxNZXNzYWdlIHsuLi5pdGVtfSBrZXk9e2lkeH0gLz5cbiAgICApKTtcbiAgfVxuXG4gIGlmIChsYW5nID09PSBcIm1hcmtkb3duXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHBhZGRpbmdCb3R0b206IFwiMTBweFwiLFxuICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIHtyZXN1bHRWaWV3fVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFNvdXJjZSBsYW5ndWFnZT17bGFuZ30+e3Byb3BzLnRleHR9PC9Tb3VyY2U+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIxMHB4XCIsXG4gICAgICAgICAgcGFkZGluZ1RvcDogXCIxMHB4XCJcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge3Jlc3VsdFZpZXd9XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxudHlwZSBaZXBwZWxpblZpZXdQcm9wcyA9IHtcbiAgbm90ZWJvb2s6IHtcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgcGFyYWdyYXBoczogQXJyYXk8WlBhcmFncmFwaD5cbiAgfVxufTtcblxudHlwZSBaUGFyYWdyYXBoID0gYW55O1xuXG5jb25zdCBaZXBwZWxpblZpZXcgPSAocHJvcHM6IFplcHBlbGluVmlld1Byb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCIxMHB4XCIgfX0+XG4gICAgICA8aDE+e3Byb3BzLm5vdGVib29rLm5hbWV9PC9oMT5cbiAgICAgIHtwcm9wcy5ub3RlYm9vay5wYXJhZ3JhcGhzLm1hcChwID0+IChcbiAgICAgICAgPFBhcmFncmFwaCBrZXk9e3AuaWR9IHsuLi5wfSAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBaZXBwZWxpblZpZXc7XG4iXX0= */\n/*@ sourceURL=/home/wutali/Workspace/wutali/commuter/components/contents/zeppelin.js */"), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("table", {
    className: "jsx-1212954643"
  }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("thead", {
    className: "jsx-1212954643"
  }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("tr", {
    className: "jsx-1212954643"
  }, columnNames.map(function (column, idx) {
    return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("th", {
      key: idx,
      className: "jsx-1212954643"
    }, column);
  }))), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("tbody", {
    className: "jsx-1212954643"
  }, rows.map(function (row, idx) {
    return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("tr", {
      key: idx,
      className: "jsx-1212954643"
    }, columnNames.map(function (k, colIdx) {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("td", {
        key: colIdx,
        className: "jsx-1212954643"
      }, row[k]);
    }));
  }))));
}; // Old style Zeppelin


var Message = function Message(props) {
  switch (props.type) {
    case "HTML":
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_nteract_transforms__WEBPACK_IMPORTED_MODULE_6__["HTMLTransform"], {
        data: props.data
      });

    case "TEXT":
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](Text, {
        data: props.data
      });

    default:
      return null;
  }
};

var Result = function Result(props) {
  if (!props.result || props.result.msg === "") {
    return null;
  }

  switch (props.result.type) {
    case "HTML":
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_nteract_transforms__WEBPACK_IMPORTED_MODULE_6__["HTMLTransform"], {
        data: props.result.msg
      });

    case "TEXT":
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](Text, {
        data: props.result.msg
      });

    case "TABLE":
      if (!props.result.columnNames || !props.result.rows) {
        var data = d3.tsvParse(props.result.msg);
        return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](DSVTable, {
          data: data
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](HokeyTable, {
        columnNames: props.result.columnNames,
        rows: props.result.rows
      });

    default:
      return null;
  }
};

var whichLanguage = function whichLanguage(source) {
  if (/^%md/.test(source)) {
    return "markdown";
  }

  if (/^%sql/.test(source)) {
    return "text/x-hive";
  }

  if (/^%pig/.test(source)) {
    return "pig";
  }

  if (/^%spark\.pyspark/.test(source) || /^%pyspark/.test(source) || /^%python/.test(source)) {
    return "python";
  }

  if (/^%sh/.test(source)) {
    return "shell";
  }

  if (/^%spark/.test(source)) {
    return "text/x-scala";
  }

  if (/^%r/.test(source)) {
    return "r";
  }

  if (/^%html/.test(source)) {
    return "html";
  }

  return "text/x-scala";
};

var Paragraph = function Paragraph(props) {
  var lang = whichLanguage(props.text);
  var resultView = null;

  if (props.result) {
    resultView = react__WEBPACK_IMPORTED_MODULE_5__["createElement"](Result, {
      result: props.result
    });
  } else if (props.results && _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_2___default()(props.results.msg)) {
    resultView = props.results.msg.map(function (item, idx) {
      return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](Message, _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, item, {
        key: idx
      }));
    });
  }

  if (lang === "markdown") {
    return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
      style: {
        paddingBottom: "10px",
        paddingTop: "10px"
      }
    }, resultView);
  }

  return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](react__WEBPACK_IMPORTED_MODULE_5__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_nteract_presentational_components__WEBPACK_IMPORTED_MODULE_7__["Source"], {
    language: lang
  }, props.text), react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    style: {
      paddingBottom: "10px",
      paddingTop: "10px"
    }
  }, resultView));
};

var ZeppelinView = function ZeppelinView(props) {
  return react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", {
    style: {
      paddingLeft: "10px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("h1", null, props.notebook.name), props.notebook.paragraphs.map(function (p) {
    return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](Paragraph, _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: p.id
    }, p));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ZeppelinView);

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../theme */ "./theme.js");













next_router__WEBPACK_IMPORTED_MODULE_11___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_10___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_11___default.a.onRouteChangeComplete = function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_10___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_11___default.a.onRouteChangeError = function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_10___default.a.done();
};



var CommuterMenu =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CommuterMenu, _React$Component);

  function CommuterMenu() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CommuterMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(CommuterMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "props", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "handleItemClick", function (e, _ref) {
      var name = _ref.name;
      next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push(name);
    });

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "isActiveClass", function (current) {
      return _this.props.active === current ? "active" : "";
    });

    return _this;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CommuterMenu, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("nav", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2822350633", [_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active]]]) + " " + "main-header"
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("ul", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2822350633", [_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active]]]) + " " + "items"
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2822350633", [_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active]]])
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/view"
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("img", {
        src: "/static/logo.png",
        alt: "nteract logo",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2822350633", [_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active]]])
      }))), react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2822350633", [_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active]]]) + " " + (this.isActiveClass("view") || "")
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/view"
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2822350633", [_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active]]])
      }, "Browse"))), this.props.discoveryEnabled ? react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2822350633", [_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active]]]) + " " + (this.isActiveClass("discover") || "")
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/discover"
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2822350633", [_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active]]])
      }, "Discover"))) : null), react__WEBPACK_IMPORTED_MODULE_8__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2822350633",
        dynamic: [_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active]
      }, "nav.__jsx-style-dynamic-selector{background:".concat(_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].background, ";border:1px solid ").concat(_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].outline, ";font-family:\"Source Sans Pro\";font-size:16px;color:").concat(_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, ";padding-left:1.5em;}img.__jsx-style-dynamic-selector{padding-right:1em;}ul.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;position:relative;margin:0;padding:0;text-align:center;list-style:none;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;list-style-type:none;display:inline;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{vertical-align:middle;display:table;padding:1em;color:").concat(_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].primary, ";-webkit-text-decoration:none;text-decoration:none;}ul.__jsx-style-dynamic-selector li.active.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:").concat(_theme__WEBPACK_IMPORTED_MODULE_12__["theme"].active, ";font-weight:500;-webkit-text-decoration:none;text-decoration:none;cursor:default;}a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:underline;text-decoration:underline;}img.__jsx-style-dynamic-selector{height:2.5rem;vertical-align:middle;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3d1dGFsaS9Xb3Jrc3BhY2Uvd3V0YWxpL2NvbW11dGVyL2NvbXBvbmVudHMvaGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEb0IsQUFHcUQsQUFTdEIsQUFJTCxBQVlNLEFBU0csQUFRYSxBQU9ULEFBSVosY0FDUSxJQTVDeEIsSUF5QmdCLGFBUUUsQ0FQSixBQW1CZCxJQXREZ0QsUUFvQ1gsR0FPZCxTQU12QixTQXhCdUIsS0FaVixTQXdCVSxFQXZCSCxDQWJZLElBeUJmLFdBa0JBLEVBNUJOLEVBV1MsT0FWUixJQWZLLEFBMkNqQixNQTNCb0IsQ0FVTCxRQXpCc0IsRUFtQ3JDLE9BbEJrQixnQkFDbEIsVUFqQnFCLG1CQUNyQixZQXdCcUIsNkZBQ3JCIiwiZmlsZSI6Ii9ob21lL3d1dGFsaS9Xb3Jrc3BhY2Uvd3V0YWxpL2NvbW11dGVyL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4ge1xuICBOUHJvZ3Jlc3Muc3RhcnQoKTtcbn07XG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcblJvdXRlci5vblJvdXRlQ2hhbmdlRXJyb3IgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xuXG50eXBlIEFjdGl2ZVR5cGUgPSBcInZpZXdcIiB8IFwiZGlzY292ZXJcIjtcblxuaW1wb3J0IHsgdGhlbWUgfSBmcm9tIFwiLi4vdGhlbWVcIjtcblxuY2xhc3MgQ29tbXV0ZXJNZW51IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PCo+IHtcbiAgcHJvcHM6IHtcbiAgICBhY3RpdmU6IEFjdGl2ZVR5cGUsXG4gICAgZGlzY292ZXJ5RW5hYmxlZDogYm9vbGVhblxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgYWN0aXZlOiBcInZpZXdcIixcbiAgICBkaXNjb3ZlcnlFbmFibGVkOiB0cnVlXG4gIH07XG5cbiAgaGFuZGxlSXRlbUNsaWNrID0gKGU6IFN5bnRoZXRpY0V2ZW50PCo+LCB7IG5hbWUgfTogeyBuYW1lOiBzdHJpbmcgfSkgPT4ge1xuICAgIFJvdXRlci5wdXNoKG5hbWUpO1xuICB9O1xuXG4gIGlzQWN0aXZlQ2xhc3MgPSAoY3VycmVudDogQWN0aXZlVHlwZSk6IHN0cmluZyA9PlxuICAgIHRoaXMucHJvcHMuYWN0aXZlID09PSBjdXJyZW50ID8gXCJhY3RpdmVcIiA6IFwiXCI7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm1haW4taGVhZGVyXCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJpdGVtc1wiPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3ZpZXdcIn0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9sb2dvLnBuZ1wiIGFsdD1cIm50ZXJhY3QgbG9nb1wiIC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLmlzQWN0aXZlQ2xhc3MoXCJ2aWV3XCIpfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL3ZpZXdcIn0+XG4gICAgICAgICAgICAgIDxhPkJyb3dzZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmRpc2NvdmVyeUVuYWJsZWQgPyAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXt0aGlzLmlzQWN0aXZlQ2xhc3MoXCJkaXNjb3ZlclwiKX0+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiL2Rpc2NvdmVyXCJ9PlxuICAgICAgICAgICAgICAgIDxhPkRpc2NvdmVyPC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgbmF2IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuYmFja2dyb3VuZH07XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3RoZW1lLm91dGxpbmV9O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiU291cmNlIFNhbnMgUHJvXCI7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5wcmltYXJ5fTtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMS41ZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwgbGkge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHVsIGxpIGEge1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUucHJpbWFyeX07XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdWwgbGkuYWN0aXZlIGEge1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuYWN0aXZlfTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9uYXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tdXRlck1lbnU7XG4iXX0= */\n/*@ sourceURL=/home/wutali/Workspace/wutali/commuter/components/header.js */")));
    }
  }]);

  return CommuterMenu;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(CommuterMenu, "defaultProps", {
  active: "view",
  discoveryEnabled: true
});

/* harmony default export */ __webpack_exports__["default"] = (CommuterMenu);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/is-frozen.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/is-frozen.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/is-frozen */ "core-js/library/fn/object/is-frozen");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

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
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
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

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
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

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

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

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _typeof2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
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
  return url && (0, _typeof2["default"])(url) === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    observer.unobserve(el);
    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  (0, _inherits2["default"])(Link, _react$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2["default"])(this, Link);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Link).apply(this, arguments));

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
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
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      })["catch"](function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.cleanUpListeners = function () {};
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          return _this3.handleRef(el);
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) {}

      return _react["default"].cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
    as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
    prefetch: _propTypes["default"].bool,
    replace: _propTypes["default"].bool,
    shallow: _propTypes["default"].bool,
    passHref: _propTypes["default"].bool,
    scroll: _propTypes["default"].bool,
    children: _propTypes["default"].oneOfType([_propTypes["default"].element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _typeof2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2["default"];

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _requestContext = __webpack_require__(/*! next-server/dist/lib/request-context */ "next-server/dist/lib/request-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty["default"])(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty["default"])(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
}

function useRequest() {
  return _react["default"].useContext(_requestContext.RequestContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = (0, _construct2["default"])(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var _i = 0, _urlPropertyFields = urlPropertyFields; _i < _urlPropertyFields.length; _i++) {
    var property = _urlPropertyFields[_i];

    if ((0, _typeof2["default"])(_router[property]) === 'object') {
      instance[property] = (0, _extends2["default"])({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2["default"].events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty["default"])(instance, field, {
      get: function get() {
        return _router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react$default$Compon) {
    (0, _inherits2["default"])(WithRouteWrapper, _react$default$Compon);

    function WithRouteWrapper() {
      var _this;

      (0, _classCallCheck2["default"])(this, WithRouteWrapper);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WithRouteWrapper).apply(this, arguments));
      _this.context = void 0;
      return _this;
    }

    (0, _createClass2["default"])(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(_react["default"].Component);

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes["default"].object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

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

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

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

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/symbol.js");

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

/***/ "./pages/view.js":
/*!***********************!*\
  !*** ./pages/view.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shims_ajax__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shims/ajax */ "./shims/ajax.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_browse_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/browse-header */ "./components/browse-header.js");
/* harmony import */ var _components_body__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/body */ "./components/body.js");
/* harmony import */ var _components_contents__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/contents */ "./components/contents/index.js");















var ViewPage =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(ViewPage, _React$Component);

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(ViewPage, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var req, query, config, viewPath, BASE_PATH, port, url, xhr;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = context.req;
                query = context.query; // Later, we'll use this to fill in the notebook
                // file data from the server side (or fallback to /api/contents)
                // For now, leaving "server": boolean to assist in debugging
                // during the refactor
                // The best choice will be to rely only on client side for now
                // I'm sure

                config = {};
                config.commuterExecuteLink = process.env.COMMUTER_EXECUTE_LINK;
                viewPath = query.viewPath || "/";

                if (req) {
                  // Server side, communicate with our local API
                  port = process.env.COMMUTER_PORT || 4000;
                  BASE_PATH = "http://127.0.0.1:".concat(port, "/");
                } else {
                  BASE_PATH = "/";
                }

                url = "".concat(BASE_PATH, "api/contents/").concat(viewPath);
                _context.next = 9;
                return Object(_shims_ajax__WEBPACK_IMPORTED_MODULE_9__["getJSON"])(url).toPromise();

              case 9:
                xhr = _context.sent;
                return _context.abrupt("return", {
                  contents: xhr.response,
                  statusCode: xhr.status,
                  viewPath: viewPath,
                  serverConfig: config
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function ViewPage(props) {
    var _this;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, ViewPage);

    _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(ViewPage).call(this, props));
    var config = {};

    if (props.serverConfig) {
      _this.state = {
        config: props.serverConfig
      };
    } else {
      var configScriptElement = document.getElementById("serverConfig");

      if (configScriptElement !== null) {
        config = JSON.parse(configScriptElement.textContent);
      }

      _this.state = {
        config: config
      };
    }

    return _this;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(ViewPage, [{
    key: "render",
    value: function render() {
      if (this.props.statusCode !== 200) {
        return "Nothing found for ".concat(this.props.viewPath);
      }

      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"](react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_components_header__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_components_browse_header__WEBPACK_IMPORTED_MODULE_11__["default"], {
        basepath: "/view",
        path: this.props.viewPath,
        type: this.props.contents.type,
        commuterExecuteLink: this.state.config.commuterExecuteLink
      }), react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_components_body__WEBPACK_IMPORTED_MODULE_12__["default"], null, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
        className: "jsx-3508813217" + " " + "entry"
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"](_components_contents__WEBPACK_IMPORTED_MODULE_13__["Entry"], {
        entry: this.props.contents,
        pathname: this.props.viewPath,
        basepath: "/view"
      }), react__WEBPACK_IMPORTED_MODULE_8__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3508813217"
      }, ".jsx-3508813217{margin-top:2rem;padding-left:2rem;padding-right:2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3d1dGFsaS9Xb3Jrc3BhY2Uvd3V0YWxpL2NvbW11dGVyL3BhZ2VzL3ZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0d3QixBQUUrQixnQkFDRSxrQkFDQyxtQkFDckIiLCJmaWxlIjoiL2hvbWUvd3V0YWxpL1dvcmtzcGFjZS93dXRhbGkvY29tbXV0ZXIvcGFnZXMvdmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgZ2V0SlNPTiB9IGZyb20gXCIuLi9zaGltcy9hamF4XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IEJyb3dzZUhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9icm93c2UtaGVhZGVyXCI7XG5pbXBvcnQgQm9keSBmcm9tIFwiLi4vY29tcG9uZW50cy9ib2R5XCI7XG5pbXBvcnQgeyBFbnRyeSB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbnRlbnRzXCI7XG5cbnR5cGUgU2VydmVyQ29uZmlnID0ge1xuICBjb21tdXRlckV4ZWN1dGVMaW5rPzogc3RyaW5nXG59O1xuXG50eXBlIFZpZXdQYWdlUHJvcHMgPSB7XG4gIGNvbnRlbnRzOiBhbnksXG4gIHN0YXR1c0NvZGU6IGFueSxcbiAgdmlld1BhdGg6IGFueSxcbiAgc2VydmVyQ29uZmlnOiBTZXJ2ZXJDb25maWdcbn07XG5cbnR5cGUgVmlld1BhZ2VTdGF0ZSA9IHtcbiAgY29uZmlnOiBTZXJ2ZXJDb25maWdcbn07XG5cbmNsYXNzIFZpZXdQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFZpZXdQYWdlUHJvcHMsIFZpZXdQYWdlU3RhdGU+IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjb250ZXh0OiBPYmplY3QpIHtcbiAgICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcbiAgICBjb25zdCBxdWVyeSA9IGNvbnRleHQucXVlcnk7XG4gICAgLy8gTGF0ZXIsIHdlJ2xsIHVzZSB0aGlzIHRvIGZpbGwgaW4gdGhlIG5vdGVib29rXG4gICAgLy8gZmlsZSBkYXRhIGZyb20gdGhlIHNlcnZlciBzaWRlIChvciBmYWxsYmFjayB0byAvYXBpL2NvbnRlbnRzKVxuICAgIC8vIEZvciBub3csIGxlYXZpbmcgXCJzZXJ2ZXJcIjogYm9vbGVhbiB0byBhc3Npc3QgaW4gZGVidWdnaW5nXG4gICAgLy8gZHVyaW5nIHRoZSByZWZhY3RvclxuICAgIC8vIFRoZSBiZXN0IGNob2ljZSB3aWxsIGJlIHRvIHJlbHkgb25seSBvbiBjbGllbnQgc2lkZSBmb3Igbm93XG4gICAgLy8gSSdtIHN1cmVcblxuICAgIGNvbnN0IGNvbmZpZyA9IHt9O1xuICAgIGNvbmZpZy5jb21tdXRlckV4ZWN1dGVMaW5rID0gcHJvY2Vzcy5lbnYuQ09NTVVURVJfRVhFQ1VURV9MSU5LO1xuXG4gICAgY29uc3Qgdmlld1BhdGggPSBxdWVyeS52aWV3UGF0aCB8fCBcIi9cIjtcblxuICAgIGxldCBCQVNFX1BBVEg7XG5cbiAgICBpZiAocmVxKSB7XG4gICAgICAvLyBTZXJ2ZXIgc2lkZSwgY29tbXVuaWNhdGUgd2l0aCBvdXIgbG9jYWwgQVBJXG4gICAgICBjb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuQ09NTVVURVJfUE9SVCB8fCA0MDAwO1xuICAgICAgQkFTRV9QQVRIID0gYGh0dHA6Ly8xMjcuMC4wLjE6JHtwb3J0fS9gO1xuICAgIH0gZWxzZSB7XG4gICAgICBCQVNFX1BBVEggPSBcIi9cIjtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSBgJHtCQVNFX1BBVEh9YXBpL2NvbnRlbnRzLyR7dmlld1BhdGh9YDtcblxuICAgIGNvbnN0IHhociA9IGF3YWl0IGdldEpTT04odXJsKS50b1Byb21pc2UoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBjb250ZW50czogeGhyLnJlc3BvbnNlLFxuICAgICAgc3RhdHVzQ29kZTogeGhyLnN0YXR1cyxcbiAgICAgIHZpZXdQYXRoLFxuICAgICAgc2VydmVyQ29uZmlnOiBjb25maWdcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IFZpZXdQYWdlUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgbGV0IGNvbmZpZyA9IHt9O1xuICAgIGlmIChwcm9wcy5zZXJ2ZXJDb25maWcpIHtcbiAgICAgIHRoaXMuc3RhdGUgPSB7IGNvbmZpZzogcHJvcHMuc2VydmVyQ29uZmlnIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbmZpZ1NjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlcnZlckNvbmZpZ1wiKTtcbiAgICAgIGlmIChjb25maWdTY3JpcHRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbmZpZyA9IEpTT04ucGFyc2UoY29uZmlnU2NyaXB0RWxlbWVudC50ZXh0Q29udGVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLnN0YXRlID0geyBjb25maWcgfTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuc3RhdHVzQ29kZSAhPT0gMjAwKSB7XG4gICAgICByZXR1cm4gYE5vdGhpbmcgZm91bmQgZm9yICR7dGhpcy5wcm9wcy52aWV3UGF0aH1gO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPEJyb3dzZUhlYWRlclxuICAgICAgICAgIGJhc2VwYXRoPXtcIi92aWV3XCJ9XG4gICAgICAgICAgcGF0aD17dGhpcy5wcm9wcy52aWV3UGF0aH1cbiAgICAgICAgICB0eXBlPXt0aGlzLnByb3BzLmNvbnRlbnRzLnR5cGV9XG4gICAgICAgICAgY29tbXV0ZXJFeGVjdXRlTGluaz17dGhpcy5zdGF0ZS5jb25maWcuY29tbXV0ZXJFeGVjdXRlTGlua31cbiAgICAgICAgLz5cbiAgICAgICAgPEJvZHk+XG4gICAgICAgICAgey8qIEVudHJ5ICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZW50cnlcIj5cbiAgICAgICAgICAgIDxFbnRyeVxuICAgICAgICAgICAgICBlbnRyeT17dGhpcy5wcm9wcy5jb250ZW50c31cbiAgICAgICAgICAgICAgcGF0aG5hbWU9e3RoaXMucHJvcHMudmlld1BhdGh9XG4gICAgICAgICAgICAgIGJhc2VwYXRoPXtcIi92aWV3XCJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQm9keT5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3UGFnZTtcbiJdfQ== */\n/*@ sourceURL=/home/wutali/Workspace/wutali/commuter/pages/view.js */"))));
    }
  }]);

  return ViewPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ViewPage);

/***/ }),

/***/ "./shims/ajax.js":
/*!***********************!*\
  !*** ./shims/ajax.js ***!
  \***********************/
/*! exports provided: getJSON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(XMLHttpRequest) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getJSON", function() { return getJSON; });
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/ajax */ "rxjs/ajax");
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_ajax__WEBPACK_IMPORTED_MODULE_0__);

function getJSON(url) {
  return Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_0__["ajax"])({
    url: url,
    responseType: "json",
    createXHR: function createXHR() {
      return new XMLHttpRequest();
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! xmlhttprequest */ "xmlhttprequest")["XMLHttpRequest"]))

/***/ }),

/***/ "./theme.js":
/*!******************!*\
  !*** ./theme.js ***!
  \******************/
/*! exports provided: blueTheme, grayTheme, theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blueTheme", function() { return blueTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayTheme", function() { return grayTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return theme; });
// styled-jsx can only take constants inside of template literals

/*
 * Blue theme
 */
var blueTheme = {
  active: "#324767",
  background: "#edf1f7",
  primary: "#a2b6d7",
  outline: "#c8d4e7",
  link: "#0366d6",
  bright: "#039be5"
};
/*
 * Gray theme
 */

var grayTheme = {
  active: "#111",
  background: "#eee",
  primary: "#ccc",
  outline: "#ddd"
};
var theme = blueTheme; // export const theme = grayTheme;

/***/ }),

/***/ "./transforms/PlotlyTransform.js":
/*!***************************************!*\
  !*** ./transforms/PlotlyTransform.js ***!
  \***************************************/
/*! exports provided: PlotlyNullTransform, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlotlyNullTransform", function() { return PlotlyNullTransform; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_is_frozen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/is-frozen */ "./node_modules/@babel/runtime-corejs2/core-js/object/is-frozen.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_is_frozen__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_is_frozen__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);










var NULL_MIMETYPE = "text/vnd.plotly.v1+html";
var MIMETYPE = "application/vnd.plotly.v1+json";
/*
 * As part of the init notebook mode, Plotly sneaks a <script> tag in to load
 * the plotlyjs lib. We have already loaded this though, so we "handle" the
 * transform by doing nothing and returning null.
 */

var PlotlyNullTransform = function PlotlyNullTransform() {
  return null;
};

PlotlyNullTransform.MIMETYPE = NULL_MIMETYPE;

var PlotlyTransform =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(PlotlyTransform, _React$Component);

  function PlotlyTransform() {
    var _this;

    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, PlotlyTransform);

    _this = _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(PlotlyTransform).call(this));

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "props", void 0);

    _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "plotDiv", void 0);

    _this.getFigure = _this.getFigure.bind(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    _this.plotDivRef = _this.plotDivRef.bind(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));
    return _this;
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(PlotlyTransform, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Handle case of either string to be `JSON.parse`d or pure object
      var figure = this.getFigure();
      Plotly.newPlot(this.plotDiv, figure.data, figure.layout);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.data !== nextProps.data;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var figure = this.getFigure();
      this.plotDiv.data = figure.data;
      this.plotDiv.layout = figure.layout;
      Plotly.redraw(this.plotDiv);
    }
  }, {
    key: "plotDivRef",
    value: function plotDivRef(plotDiv) {
      if (plotDiv) {
        this.plotDiv = plotDiv;
      }
    }
  }, {
    key: "getFigure",
    value: function getFigure() {
      var figure = this.props.data;

      if (typeof figure === "string") {
        return JSON.parse(figure);
      } // The Plotly API *mutates* the figure to include a UID, which means
      // they won't take our frozen objects


      if (_babel_runtime_corejs2_core_js_object_is_frozen__WEBPACK_IMPORTED_MODULE_0___default()(figure)) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_9__["cloneDeep"])(figure);
      }

      return figure;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$getFigure = this.getFigure(),
          layout = _this$getFigure.layout;

      var style = {};

      if (layout && layout.height && !layout.autosize) {
        style.height = layout.height;
      } // $FlowFixMe: Add typings to ref.


      return react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("div", {
        ref: this.plotDivRef,
        style: style
      });
    }
  }]);

  return PlotlyTransform;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(PlotlyTransform, "MIMETYPE", MIMETYPE);


/* harmony default export */ __webpack_exports__["default"] = (PlotlyTransform);

/***/ }),

/***/ "./transforms/index.js":
/*!*****************************!*\
  !*** ./transforms/index.js ***!
  \*****************************/
/*! exports provided: PlotlyNullTransform, PlotlyTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlotlyTransform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlotlyTransform */ "./transforms/PlotlyTransform.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotlyNullTransform", function() { return _PlotlyTransform__WEBPACK_IMPORTED_MODULE_0__["PlotlyNullTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlotlyTransform", function() { return _PlotlyTransform__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/view.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/wutali/Workspace/wutali/commuter/pages/view.js */"./pages/view.js");


/***/ }),

/***/ "@nteract/directory-listing":
/*!*********************************************!*\
  !*** external "@nteract/directory-listing" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nteract/directory-listing");

/***/ }),

/***/ "@nteract/markdown":
/*!************************************!*\
  !*** external "@nteract/markdown" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nteract/markdown");

/***/ }),

/***/ "@nteract/notebook-preview":
/*!********************************************!*\
  !*** external "@nteract/notebook-preview" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nteract/notebook-preview");

/***/ }),

/***/ "@nteract/presentational-components":
/*!*****************************************************!*\
  !*** external "@nteract/presentational-components" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nteract/presentational-components");

/***/ }),

/***/ "@nteract/transform-vega":
/*!******************************************!*\
  !*** external "@nteract/transform-vega" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nteract/transform-vega");

/***/ }),

/***/ "@nteract/transforms":
/*!**************************************!*\
  !*** external "@nteract/transforms" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nteract/transforms");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/is-frozen":
/*!******************************************************!*\
  !*** external "core-js/library/fn/object/is-frozen" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/is-frozen");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "d3-dsv":
/*!*************************!*\
  !*** external "d3-dsv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("d3-dsv");

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-server/dist/lib/request-context":
/*!*******************************************************!*\
  !*** external "next-server/dist/lib/request-context" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "rxjs/ajax":
/*!****************************!*\
  !*** external "rxjs/ajax" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/ajax");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "xmlhttprequest":
/*!*********************************!*\
  !*** external "xmlhttprequest" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("xmlhttprequest");

/***/ })

/******/ });
//# sourceMappingURL=view.js.map