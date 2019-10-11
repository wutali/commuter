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

/***/ "+KcL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "+oT+":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

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

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("HDbY");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__("ksgb"));

var _createClass2 = _interopRequireDefault2(__webpack_require__("Omuq"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__("WgqI"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__("DKIp"));

var _inherits2 = _interopRequireDefault2(__webpack_require__("xEro"));

var _interopRequireDefault = __webpack_require__("HDbY");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("3+Pc"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

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

  if (false) { var name; }

  return WithRouteWrapper;
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("FmEk");


/***/ }),

/***/ "3+Pc":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("+KcL");

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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4oAd":
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__("OzcY");

var setPrototypeOf = __webpack_require__("Wpu+");

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

/***/ "7ntV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "8JIA":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "9/y0":
/***/ (function(module, exports) {

module.exports = require("@nteract/transforms");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "9f0s":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "9fFz":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "Aq08":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Body = function Body(props) {
  return props.children;
};

/* harmony default export */ __webpack_exports__["a"] = (Body);

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "DBpT":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "DKIp":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("DOPR");

var _Object$setPrototypeOf = __webpack_require__("DBpT");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "DOPR":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Dc/8":
/***/ (function(module, exports) {

module.exports = require("@nteract/markdown");

/***/ }),

/***/ "FmEk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("+oT+");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js
var classCallCheck = __webpack_require__("/HRN");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__("ZDA2");
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("/+P4");
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/createClass.js
var createClass = __webpack_require__("WaGi");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/inherits.js
var inherits = __webpack_require__("N9n2");
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./shims/ajax.js
var ajax = __webpack_require__("Ndwz");

// EXTERNAL MODULE: ./components/header.js
var header = __webpack_require__("ZHh6");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("K47E");
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js
var defineProperty = __webpack_require__("xHqa");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: ./theme.js
var theme = __webpack_require__("aXPs");

// CONCATENATED MODULE: ./components/browse-header.js












 // Convert simple links to next style href + as

var browse_header_Link = function Link(_ref) {
  var to = _ref.to,
      children = _ref.children,
      basepath = _ref.basepath;
  return external_react_["createElement"](link_default.a, {
    href: {
      pathname: "/view",
      query: {
        viewPath: to
      }
    },
    as: basepath + "/" + to
  }, children);
};

var browse_header_BrowseHeader =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(BrowseHeader, _React$Component);

  function BrowseHeader() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, BrowseHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(BrowseHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "props", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "handleItemClick", function (e, _ref2) {
      var name = _ref2.name;
      router_default.a.push(name);
    });

    return _this;
  }

  createClass_default()(BrowseHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          path = _this$props.path,
          basepath = _this$props.basepath;
      var paths = Object(external_lodash_["trim"])(path, "/").split("/"); // Empty path to start off

      if (paths.length === 1 && paths[0] === "") {
        paths = [];
      } // TODO: Ensure this works under an app subpath (which is not implemented yet)


      var filePath = basepath.replace(/view\/?/, "files/") + path; // const serverSide = typeof document === "undefined";

      var viewingNotebook = filePath.endsWith(".ipynb");
      return external_react_["createElement"]("nav", {
        className: style_default.a.dynamic([["3767621066", [theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].primary, theme["a" /* theme */].active, theme["a" /* theme */].active, theme["a" /* theme */].background, theme["a" /* theme */].outline, theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].active]]])
      }, external_react_["createElement"]("ul", {
        className: style_default.a.dynamic([["3767621066", [theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].primary, theme["a" /* theme */].active, theme["a" /* theme */].active, theme["a" /* theme */].background, theme["a" /* theme */].outline, theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].active]]]) + " " + "breadcrumbs"
      }, external_react_["createElement"]("li", {
        className: style_default.a.dynamic([["3767621066", [theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].primary, theme["a" /* theme */].active, theme["a" /* theme */].active, theme["a" /* theme */].background, theme["a" /* theme */].outline, theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].active]]])
      }, external_react_["createElement"](browse_header_Link, {
        to: "",
        basepath: basepath
      }, external_react_["createElement"]("a", {
        className: style_default.a.dynamic([["3767621066", [theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].primary, theme["a" /* theme */].active, theme["a" /* theme */].active, theme["a" /* theme */].background, theme["a" /* theme */].outline, theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].active]]])
      }, external_react_["createElement"]("span", {
        className: style_default.a.dynamic([["3767621066", [theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].primary, theme["a" /* theme */].active, theme["a" /* theme */].active, theme["a" /* theme */].background, theme["a" /* theme */].outline, theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].active]]])
      }, "home")))), paths.map(function (name, index) {
        var filePath = paths.slice(0, index + 1).join("/");
        return external_react_["createElement"]("li", {
          key: "".concat(filePath),
          className: style_default.a.dynamic([["3767621066", [theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].primary, theme["a" /* theme */].active, theme["a" /* theme */].active, theme["a" /* theme */].background, theme["a" /* theme */].outline, theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].active]]])
        }, external_react_["createElement"](browse_header_Link, {
          to: "".concat(filePath),
          basepath: basepath
        }, external_react_["createElement"]("a", {
          className: style_default.a.dynamic([["3767621066", [theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].primary, theme["a" /* theme */].active, theme["a" /* theme */].active, theme["a" /* theme */].background, theme["a" /* theme */].outline, theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].active]]])
        }, external_react_["createElement"]("span", {
          className: style_default.a.dynamic([["3767621066", [theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].primary, theme["a" /* theme */].active, theme["a" /* theme */].active, theme["a" /* theme */].background, theme["a" /* theme */].outline, theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].active]]])
        }, name))));
      })), this.props.type === "directory" ? null : external_react_["createElement"](external_react_["Fragment"], null, this.props.commuterExecuteLink && viewingNotebook ? external_react_["createElement"]("a", {
        href: "".concat(this.props.commuterExecuteLink, "/").concat(path),
        className: style_default.a.dynamic([["3767621066", [theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].primary, theme["a" /* theme */].active, theme["a" /* theme */].active, theme["a" /* theme */].background, theme["a" /* theme */].outline, theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].active]]]) + " " + "ops"
      }, "Run") : null, external_react_["createElement"]("a", {
        href: filePath,
        download: true,
        className: style_default.a.dynamic([["3767621066", [theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].primary, theme["a" /* theme */].active, theme["a" /* theme */].active, theme["a" /* theme */].background, theme["a" /* theme */].outline, theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].active]]]) + " " + "ops"
      }, "Download")), external_react_["createElement"](style_default.a, {
        id: "3767621066",
        dynamic: [theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].primary, theme["a" /* theme */].active, theme["a" /* theme */].active, theme["a" /* theme */].background, theme["a" /* theme */].outline, theme["a" /* theme */].outline, theme["a" /* theme */].primary, theme["a" /* theme */].active]
      }, ["nav.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border:1px solid ".concat(theme["a" /* theme */].outline, ";padding:0 1rem;}"), "ul.breadcrumbs.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;margin:0 0 0 0;padding:0;list-style:none;background:#ffffff;font-family:\"Source Sans Pro\";font-size:16px;color:".concat(theme["a" /* theme */].primary, ";}"), "ul.breadcrumbs.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;list-style-type:none;display:inline;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "ul.breadcrumbs.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{vertical-align:middle;display:table;padding:1em;color:".concat(theme["a" /* theme */].primary, ";-webkit-text-decoration:none;text-decoration:none;}"), "ul.breadcrumbs.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:underline;text-decoration:underline;}", "ul.breadcrumbs.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector:last-child a.__jsx-style-dynamic-selector{color:".concat(theme["a" /* theme */].active, ";-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}"), "ul.breadcrumbs.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector+li.__jsx-style-dynamic-selector:before{content:\"\u203A\";color:".concat(theme["a" /* theme */].active, ";}"), ".ops.__jsx-style-dynamic-selector{display:inline-block;line-height:2em;padding:0 8px;border-radius:2px;background-color:".concat(theme["a" /* theme */].background, ";border:1px solid ").concat(theme["a" /* theme */].outline, ";color:#000;-webkit-text-decoration:none;text-decoration:none;}"), ".ops.__jsx-style-dynamic-selector:hover{background-color:".concat(theme["a" /* theme */].outline, ";-webkit-transition:background-color 0.25s ease-out;transition:background-color 0.25s ease-out;}"), ".ops.__jsx-style-dynamic-selector:active{background-color:".concat(theme["a" /* theme */].primary, ";color:").concat(theme["a" /* theme */].active, ";-webkit-transition:background-color 0.5s ease-out,color 6s ease-out;transition:background-color 0.5s ease-out,color 6s ease-out;}"), ".ops.__jsx-style-dynamic-selector:not(:last-child){margin-right:10px;}"]));
    }
  }]);

  return BrowseHeader;
}(external_react_["Component"]);

defineProperty_default()(browse_header_BrowseHeader, "defaultProps", {
  active: "view"
});

/* harmony default export */ var browse_header = (browse_header_BrowseHeader);
// EXTERNAL MODULE: ./components/body.js
var body = __webpack_require__("Aq08");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// EXTERNAL MODULE: external "@nteract/notebook-preview"
var notebook_preview_ = __webpack_require__("wUrH");
var notebook_preview_default = /*#__PURE__*/__webpack_require__.n(notebook_preview_);

// EXTERNAL MODULE: external "@nteract/markdown"
var markdown_ = __webpack_require__("Dc/8");
var markdown_default = /*#__PURE__*/__webpack_require__.n(markdown_);

// EXTERNAL MODULE: external "@nteract/presentational-components"
var presentational_components_ = __webpack_require__("UI4c");

// EXTERNAL MODULE: external "@nteract/transforms"
var transforms_ = __webpack_require__("9/y0");

// EXTERNAL MODULE: external "@nteract/transform-vega"
var transform_vega_ = __webpack_require__("Snok");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/is-frozen.js
var is_frozen = __webpack_require__("s4iX");
var is_frozen_default = /*#__PURE__*/__webpack_require__.n(is_frozen);

// CONCATENATED MODULE: ./transforms/PlotlyTransform.js










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

var PlotlyTransform_PlotlyTransform =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(PlotlyTransform, _React$Component);

  function PlotlyTransform() {
    var _this;

    classCallCheck_default()(this, PlotlyTransform);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(PlotlyTransform).call(this));

    defineProperty_default()(assertThisInitialized_default()(_this), "props", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "plotDiv", void 0);

    _this.getFigure = _this.getFigure.bind(assertThisInitialized_default()(_this));
    _this.plotDivRef = _this.plotDivRef.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(PlotlyTransform, [{
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


      if (is_frozen_default()(figure)) {
        return Object(external_lodash_["cloneDeep"])(figure);
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


      return external_react_["createElement"]("div", {
        ref: this.plotDivRef,
        style: style
      });
    }
  }]);

  return PlotlyTransform;
}(external_react_["Component"]);

defineProperty_default()(PlotlyTransform_PlotlyTransform, "MIMETYPE", MIMETYPE);


/* harmony default export */ var transforms_PlotlyTransform = (PlotlyTransform_PlotlyTransform);
// CONCATENATED MODULE: ./transforms/index.js


// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: external "@nteract/directory-listing"
var directory_listing_ = __webpack_require__("OIEP");

// CONCATENATED MODULE: ./components/contents/directory-listing.js








var directory_listing_GroupedDirectoryListings = function GroupedDirectoryListings(props) {
  var contents = props.contents.filter(function (row) {
    return !row.name.startsWith(".");
  });

  if (contents.length <= 25) {
    return external_react_["createElement"](directory_listing_DirectoryListing, {
      contents: contents,
      basepath: props.basepath
    });
  }

  var groups = Object(external_lodash_["groupBy"])(contents, function (item) {
    return item.name[0].toUpperCase();
  }); // Filter out dotfiles

  delete groups["."];

  if (keys_default()(groups).length <= 1) {
    return external_react_["createElement"](directory_listing_DirectoryListing, {
      contents: contents,
      basepath: props.basepath
    });
  }

  var groupNames = keys_default()(groups).sort();

  var listings = groupNames.map(function (key) {
    return external_react_["createElement"]("div", {
      key: key,
      className: "jsx-98138671"
    }, external_react_["createElement"]("div", {
      id: "group-".concat(key),
      className: "jsx-98138671" + " " + "letterHeader"
    }, key), external_react_["createElement"](directory_listing_DirectoryListing, {
      contents: groups[key],
      basepath: props.basepath
    }), external_react_["createElement"](style_default.a, {
      id: "98138671"
    }, [".letterHeader.jsx-98138671{padding-top:1em;padding-bottom:0.5em;padding-left:6px;}"]));
  });
  return external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"]("div", {
    className: style_default.a.dynamic([["2760902976", [theme["a" /* theme */].link]]]) + " " + "letters"
  }, groupNames.map(function (x) {
    return external_react_["createElement"]("a", {
      href: "#group-".concat(x),
      key: x,
      className: style_default.a.dynamic([["2760902976", [theme["a" /* theme */].link]]])
    }, x.toUpperCase());
  })), listings, external_react_["createElement"](style_default.a, {
    id: "2760902976",
    dynamic: [theme["a" /* theme */].link]
  }, ["a.__jsx-style-dynamic-selector{-webkit-text-decoration:none;text-decoration:none;padding-right:1em;color:".concat(theme["a" /* theme */].link, ";}"), ".letters.__jsx-style-dynamic-selector{padding-bottom:1em;padding-left:6px;}"]));
};

var directory_listing_DirectoryListing = function DirectoryListing(props) {
  var base = props.basepath || "/"; // filter out dotfiles

  var contents = props.contents.filter(function (entry) {
    return !entry.name.startsWith(".");
  });
  return external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"](directory_listing_["Listing"], null, contents.map(function (entry, index) {
    var link = external_react_["createElement"](link_default.a, {
      href: {
        pathname: "/view",
        query: {
          viewPath: entry.path
        }
      },
      as: base + "/" + entry.path
    }, external_react_["createElement"]("a", null, entry.name));
    return external_react_["createElement"](directory_listing_["Entry"], {
      key: index
    }, external_react_["createElement"](directory_listing_["Icon"], {
      fileType: entry.type
    }), external_react_["createElement"](directory_listing_["Name"], null, link), external_react_["createElement"](directory_listing_["LastSaved"], {
      lastModified: entry.last_modified
    }));
  })));
};

/* harmony default export */ var directory_listing = (directory_listing_GroupedDirectoryListings); // export default DirectoryListing;
// CONCATENATED MODULE: ./components/contents/html.js









var html_HTMLView =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(HTMLView, _React$Component);

  function HTMLView() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, HTMLView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(HTMLView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "ifr", void 0);

    return _this;
  }

  createClass_default()(HTMLView, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return external_react_["createElement"]("div", {
        style: {
          position: "fixed",
          width: "100%",
          height: "100%"
        }
      }, external_react_["createElement"]("iframe", {
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
}(external_react_["Component"]);


// EXTERNAL MODULE: external "immutable"
var external_immutable_ = __webpack_require__("nuGg");
var external_immutable_default = /*#__PURE__*/__webpack_require__.n(external_immutable_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/extends.js
var helpers_extends = __webpack_require__("htGi");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./components/contents/zeppelin.js









var d3 = assign_default()({}, __webpack_require__("lipE"));

var zeppelin_Text = function Text(props) {
  return external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"]("code", {
    className: "jsx-2070364236"
  }, props.data), external_react_["createElement"](style_default.a, {
    id: "2070364236"
  }, ["code.jsx-2070364236{white-space:pre;}"]));
};

var zeppelin_HokeyTable = function HokeyTable(props) {
  return external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"](style_default.a, {
    id: "2156236075"
  }, ["table.jsx-2156236075{border-collapse:collapse;border-spacing:0;border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #cbcbcb;max-height:200px;overflow-y:scroll;}", "td.jsx-2156236075,th.jsx-2156236075{padding:0;border-left:1px solid #cbcbcb;border-width:0 0 0 1px;font-size:inherit;margin:0;overflow:visible;padding:0.5em 1em;}", "td.jsx-2156236075:first-child,th.jsx-2156236075:first-child{border-left-width:0;}", "thead.jsx-2156236075{background-color:#e0e0e0;color:#000;text-align:left;vertical-align:bottom;}"]), external_react_["createElement"]("table", {
    className: "jsx-2156236075"
  }, external_react_["createElement"]("thead", {
    className: "jsx-2156236075"
  }, external_react_["createElement"]("tr", {
    className: "jsx-2156236075"
  }, props.columnNames.map(function (column) {
    return external_react_["createElement"]("th", {
      key: column.index,
      className: "jsx-2156236075"
    }, column.name);
  }))), external_react_["createElement"]("tbody", {
    className: "jsx-2156236075"
  }, props.rows.map(function (row, idx) {
    return external_react_["createElement"]("tr", {
      key: idx,
      className: "jsx-2156236075"
    }, row.map(function (item, colIdx) {
      return external_react_["createElement"]("td", {
        key: colIdx,
        className: "jsx-2156236075"
      }, item);
    }));
  }))));
};

var zeppelin_DSVTable = function DSVTable(props) {
  if (!is_array_default()(props.data) || props.data.length <= 0) {
    return null;
  }

  var columnNames = keys_default()(props.data[0]);

  var rows = props.data;
  return external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"](style_default.a, {
    id: "1212954643"
  }, ["table.jsx-1212954643{border-collapse:collapse;border-spacing:0;border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #cbcbcb;max-height:200px;overflow-y:scroll;}", "td.jsx-1212954643,th.jsx-1212954643{padding:0;border-left:1px solid #cbcbcb;border-width:0 0 0 1px;font-size:inherit;margin:0;overflow:visible;padding:0.5em 1em;}", "td.jsx-1212954643:first-child,th.jsx-1212954643:first-child{border-left-width:0;}", "thead.jsx-1212954643{background-color:#e0e0e0;color:#000;text-align:left;vertical-align:bottom;}"]), external_react_["createElement"]("table", {
    className: "jsx-1212954643"
  }, external_react_["createElement"]("thead", {
    className: "jsx-1212954643"
  }, external_react_["createElement"]("tr", {
    className: "jsx-1212954643"
  }, columnNames.map(function (column, idx) {
    return external_react_["createElement"]("th", {
      key: idx,
      className: "jsx-1212954643"
    }, column);
  }))), external_react_["createElement"]("tbody", {
    className: "jsx-1212954643"
  }, rows.map(function (row, idx) {
    return external_react_["createElement"]("tr", {
      key: idx,
      className: "jsx-1212954643"
    }, columnNames.map(function (k, colIdx) {
      return external_react_["createElement"]("td", {
        key: colIdx,
        className: "jsx-1212954643"
      }, row[k]);
    }));
  }))));
}; // Old style Zeppelin


var zeppelin_Message = function Message(props) {
  switch (props.type) {
    case "HTML":
      return external_react_["createElement"](transforms_["HTMLTransform"], {
        data: props.data
      });

    case "TEXT":
      return external_react_["createElement"](zeppelin_Text, {
        data: props.data
      });

    default:
      return null;
  }
};

var zeppelin_Result = function Result(props) {
  if (!props.result || props.result.msg === "") {
    return null;
  }

  switch (props.result.type) {
    case "HTML":
      return external_react_["createElement"](transforms_["HTMLTransform"], {
        data: props.result.msg
      });

    case "TEXT":
      return external_react_["createElement"](zeppelin_Text, {
        data: props.result.msg
      });

    case "TABLE":
      if (!props.result.columnNames || !props.result.rows) {
        var data = d3.tsvParse(props.result.msg);
        return external_react_["createElement"](zeppelin_DSVTable, {
          data: data
        });
      }

      return external_react_["createElement"](zeppelin_HokeyTable, {
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

var zeppelin_Paragraph = function Paragraph(props) {
  var lang = whichLanguage(props.text);
  var resultView = null;

  if (props.result) {
    resultView = external_react_["createElement"](zeppelin_Result, {
      result: props.result
    });
  } else if (props.results && is_array_default()(props.results.msg)) {
    resultView = props.results.msg.map(function (item, idx) {
      return external_react_["createElement"](zeppelin_Message, extends_default()({}, item, {
        key: idx
      }));
    });
  }

  if (lang === "markdown") {
    return external_react_["createElement"]("div", {
      style: {
        paddingBottom: "10px",
        paddingTop: "10px"
      }
    }, resultView);
  }

  return external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"](presentational_components_["Source"], {
    language: lang
  }, props.text), external_react_["createElement"]("div", {
    style: {
      paddingBottom: "10px",
      paddingTop: "10px"
    }
  }, resultView));
};

var zeppelin_ZeppelinView = function ZeppelinView(props) {
  return external_react_["createElement"]("div", {
    style: {
      paddingLeft: "10px"
    }
  }, external_react_["createElement"]("h1", null, props.notebook.name), props.notebook.paragraphs.map(function (p) {
    return external_react_["createElement"](zeppelin_Paragraph, extends_default()({
      key: p.id
    }, p));
  }));
};

/* harmony default export */ var zeppelin = (zeppelin_ZeppelinView);
// CONCATENATED MODULE: ./components/contents/json.js




/* harmony default export */ var json = (function (props) {
  var content = JSON.parse(props.entry.content);

  try {
    // Zeppelin notebooks are called note.json, we'll go ahead and render them
    if (props.entry.name === "note.json") {
      return external_react_["createElement"](zeppelin, {
        notebook: content
      });
    }

    return external_react_["createElement"](transforms_["JSONTransform"], {
      data: content,
      metadata: external_immutable_default.a.Map({
        expanded: true
      })
    });
  } catch (e) {
    return external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"]("h1", null, "Failed to parse Zeppelin Notebook"), external_react_["createElement"]("pre", null, e.toString()), external_react_["createElement"]("code", null, props.entry.content));
  }
});
// CONCATENATED MODULE: ./components/contents/csv.js





 // const d3 = Object.assign({}, require("d3-dsv"));
// import DataTransform from "@nteract/transform-dataresource";

var csv_CSVView =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(CSVView, _React$Component);

  function CSVView() {
    classCallCheck_default()(this, CSVView);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(CSVView).apply(this, arguments));
  }

  createClass_default()(CSVView, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      // const data = d3.csvParse(this.props.entry.content);
      return external_react_["createElement"]("div", null, "No support for csv at this time"); // return <DataTransform data={{ data }} metadata={{}} theme="light" />;
    }
  }]);

  return CSVView;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./components/contents/index.js












 // import DataResourceTransform from "@nteract/transform-dataresource";







var jquery = __webpack_require__("xeH2"); // HACK: Temporarily provide jquery for others to use...


global.jquery = jquery;
global.$ = jquery; // Order is important here. The last transform in the array will have order `0`.

var _reduce = [// DataResourceTransform,
PlotlyNullTransform, transforms_PlotlyTransform, transform_vega_["VegaLite1"], transform_vega_["VegaLite2"], transform_vega_["Vega2"], transform_vega_["Vega3"]].reduce(transforms_["registerTransform"], {
  transforms: transforms_["standardTransforms"],
  displayOrder: transforms_["standardDisplayOrder"]
}),
    transforms = _reduce.transforms,
    displayOrder = _reduce.displayOrder;

var suffixRegex = /(?:\.([^.]+))?$/;

var contents_File =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(File, _React$Component);

  function File() {
    classCallCheck_default()(this, File);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(File).apply(this, arguments));
  }

  createClass_default()(File, [{
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
          return external_react_["createElement"](html_HTMLView, {
            entry: this.props.entry
          });

        case "json":
          return external_react_["createElement"](json, {
            entry: this.props.entry
          });

        case "csv":
          return external_react_["createElement"](csv_CSVView, {
            entry: this.props.entry
          });

        case "md":
        case "markdown":
        case "rmd":
          return external_react_["createElement"](markdown_default.a, {
            source: this.props.entry.content
          });

        case "js":
          return external_react_["createElement"](presentational_components_["Source"], {
            language: "javascript"
          }, this.props.entry.content);

        case "py":
        case "pyx":
          return external_react_["createElement"](presentational_components_["Source"], {
            language: "python"
          }, this.props.entry.content);

        case "gif":
        case "jpeg":
        case "jpg":
        case "png":
          return external_react_["createElement"]("img", {
            src: "/files/".concat(this.props.pathname),
            alt: this.props.pathname
          });

        default:
          if (this.props.entry.format === "text") {
            return external_react_["createElement"](presentational_components_["Source"], {
              language: "text/plain"
            }, this.props.entry.content);
          }

          return external_react_["createElement"]("a", {
            href: "/files/".concat(this.props.pathname)
          }, "Download raw file");
      }
    }
  }]);

  return File;
}(external_react_["Component"]);

var contents_Entry = function Entry(props) {
  if (props.entry.content === null) {
    return null;
  }

  switch (props.entry.type) {
    case "directory":
      // Dynamic type check on content being an Array
      if (is_array_default()(props.entry.content)) {
        return external_react_["createElement"](directory_listing, {
          contents: props.entry.content,
          basepath: "/view"
        });
      }

      return null;

    case "file":
      // TODO: Case off various file types (by extension, mimetype)
      return external_react_["createElement"](contents_File, {
        entry: props.entry,
        pathname: props.pathname
      });

    case "notebook":
      return external_react_["createElement"](notebook_preview_default.a, {
        notebook: props.entry.content,
        displayOrder: displayOrder,
        transforms: transforms
      });

    default:
      return external_react_["createElement"]("pre", null, stringify_default()(props.entry.content));
  }
};
// CONCATENATED MODULE: ./pages/view.js















var view_ViewPage =
/*#__PURE__*/
function (_React$Component) {
  inherits_default()(ViewPage, _React$Component);

  createClass_default()(ViewPage, null, [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(context) {
        var req, query, config, viewPath, BASE_PATH, port, url, xhr;
        return regenerator_default.a.wrap(function _callee$(_context) {
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
                return Object(ajax["a" /* getJSON */])(url).toPromise();

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

    classCallCheck_default()(this, ViewPage);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(ViewPage).call(this, props));
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

  createClass_default()(ViewPage, [{
    key: "render",
    value: function render() {
      if (this.props.statusCode !== 200) {
        return "Nothing found for ".concat(this.props.viewPath);
      }

      return external_react_["createElement"](external_react_["Fragment"], null, external_react_["createElement"](header["a" /* default */], null), external_react_["createElement"](browse_header, {
        basepath: "/view",
        path: this.props.viewPath,
        type: this.props.contents.type,
        commuterExecuteLink: this.state.config.commuterExecuteLink
      }), external_react_["createElement"](body["a" /* default */], null, external_react_["createElement"]("div", {
        className: "jsx-3508813217" + " " + "entry"
      }, external_react_["createElement"](contents_Entry, {
        entry: this.props.contents,
        pathname: this.props.viewPath,
        basepath: "/view"
      }), external_react_["createElement"](style_default.a, {
        id: "3508813217"
      }, [".jsx-3508813217{margin-top:2rem;padding-left:2rem;padding-right:2rem;}"]))));
    }
  }]);

  return ViewPage;
}(external_react_["Component"]);

/* harmony default export */ var view = __webpack_exports__["default"] = (view_ViewPage);

/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "HDbY":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

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

/***/ "Ndwz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(XMLHttpRequest) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getJSON; });
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fo7P");
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8mx")["XMLHttpRequest"]))

/***/ }),

/***/ "OIEP":
/***/ (function(module, exports) {

module.exports = require("@nteract/directory-listing");

/***/ }),

/***/ "Omuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("9f0s");

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

/***/ "OzcY":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aAV7");

/***/ }),

/***/ "Q+3P":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "SD04":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "Snok":
/***/ (function(module, exports) {

module.exports = require("@nteract/transform-vega");

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

/***/ "UI4c":
/***/ (function(module, exports) {

module.exports = require("@nteract/presentational-components");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "UZn3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("p1Ve");

var _Symbol = __webpack_require__("Q+3P");

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

/***/ "WgqI":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("UZn3");

var assertThisInitialized = __webpack_require__("9fFz");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "Wpu+":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("DBpT");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

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

/***/ "ZHh6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/HRN");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("WaGi");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ZDA2");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/+P4");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("K47E");
/* harmony import */ var _babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("N9n2");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("xHqa");
/* harmony import */ var _babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("GvLQ");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("aXPs");













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
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2822350633", [_theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].background, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].active]]]) + " " + "main-header"
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("ul", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2822350633", [_theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].background, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].active]]]) + " " + "items"
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2822350633", [_theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].background, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].active]]])
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/view"
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("img", {
        src: "/static/logo.png",
        alt: "nteract logo",
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2822350633", [_theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].background, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].active]]])
      }))), react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2822350633", [_theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].background, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].active]]]) + " " + (this.isActiveClass("view") || "")
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/view"
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2822350633", [_theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].background, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].active]]])
      }, "Browse"))), this.props.discoveryEnabled ? react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("li", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2822350633", [_theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].background, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].active]]]) + " " + (this.isActiveClass("discover") || "")
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/discover"
      }, react__WEBPACK_IMPORTED_MODULE_8__["createElement"]("a", {
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["2822350633", [_theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].background, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].active]]])
      }, "Discover"))) : null), react__WEBPACK_IMPORTED_MODULE_8__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2822350633",
        dynamic: [_theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].background, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].outline, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].primary, _theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].active]
      }, ["nav.__jsx-style-dynamic-selector{background:".concat(_theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].background, ";border:1px solid ").concat(_theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].outline, ";font-family:\"Source Sans Pro\";font-size:16px;color:").concat(_theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].primary, ";padding-left:1.5em;}"), "img.__jsx-style-dynamic-selector{padding-right:1em;}", "ul.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;position:relative;margin:0;padding:0;text-align:center;list-style:none;}", "ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;list-style-type:none;display:inline;text-align:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "ul.__jsx-style-dynamic-selector li.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{vertical-align:middle;display:table;padding:1em;color:".concat(_theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].primary, ";-webkit-text-decoration:none;text-decoration:none;}"), "ul.__jsx-style-dynamic-selector li.active.__jsx-style-dynamic-selector a.__jsx-style-dynamic-selector{color:".concat(_theme__WEBPACK_IMPORTED_MODULE_12__[/* theme */ "a"].active, ";font-weight:500;-webkit-text-decoration:none;text-decoration:none;cursor:default;}"), "a.__jsx-style-dynamic-selector:hover{-webkit-text-decoration:underline;text-decoration:underline;}", "img.__jsx-style-dynamic-selector{height:2.5rem;vertical-align:middle;}"]));
    }
  }]);

  return CommuterMenu;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

_babel_runtime_corejs2_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(CommuterMenu, "defaultProps", {
  active: "view",
  discoveryEnabled: true
});

/* harmony default export */ __webpack_exports__["a"] = (CommuterMenu);

/***/ }),

/***/ "aAV7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "aXPs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export blueTheme */
/* unused harmony export grayTheme */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return theme; });
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

/***/ "bIOf":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("7ntV");

var _Object$defineProperty = __webpack_require__("9f0s");

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

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "c8mx":
/***/ (function(module, exports) {

module.exports = require("xmlhttprequest");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("HDbY");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__("ksgb"));

var _createClass2 = _interopRequireDefault2(__webpack_require__("Omuq"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__("WgqI"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__("DKIp"));

var _inherits2 = _interopRequireDefault2(__webpack_require__("xEro"));

var _typeof2 = _interopRequireDefault2(__webpack_require__("UZn3"));

var _interopRequireWildcard = __webpack_require__("bIOf");

var _interopRequireDefault = __webpack_require__("HDbY");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__("SD04"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
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

if (false) { var exact, warn; }

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fo7P":
/***/ (function(module, exports) {

module.exports = require("rxjs/ajax");

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

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

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

/***/ "ihRk":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/is-frozen");

/***/ }),

/***/ "ksgb":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "lipE":
/***/ (function(module, exports) {

module.exports = require("d3-dsv");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__("HDbY");

var _typeof2 = _interopRequireDefault2(__webpack_require__("UZn3"));

var _construct2 = _interopRequireDefault2(__webpack_require__("4oAd"));

var _interopRequireDefault = __webpack_require__("HDbY");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("3+Pc"));

var _defineProperty = _interopRequireDefault(__webpack_require__("9f0s"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireDefault(__webpack_require__("qxCs"));

exports.Router = _router2["default"];

var _routerContext = __webpack_require__("mJK4");

var _requestContext = __webpack_require__("qCSu");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "nuGg":
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "p1Ve":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qCSu":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "s4iX":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ihRk");

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

/***/ }),

/***/ "wUrH":
/***/ (function(module, exports) {

module.exports = require("@nteract/notebook-preview");

/***/ }),

/***/ "xEro":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("8JIA");

var setPrototypeOf = __webpack_require__("Wpu+");

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

/***/ "xHqa":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "xeH2":
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ })

/******/ });