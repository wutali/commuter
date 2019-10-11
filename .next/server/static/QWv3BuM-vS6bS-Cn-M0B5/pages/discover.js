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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("zCPC");


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

/***/ "SD04":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

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

/***/ "YVJH":
/***/ (function(module, exports) {

module.exports = require("react-timeago");

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

/***/ "ksgb":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

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

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p1Ve":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "qCSu":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

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

/***/ "zCPC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+oT+");
/* harmony import */ var _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("htGi");
/* harmony import */ var _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/HRN");
/* harmony import */ var _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("WaGi");
/* harmony import */ var _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ZDA2");
/* harmony import */ var _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("/+P4");
/* harmony import */ var _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("N9n2");
/* harmony import */ var _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_timeago__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("YVJH");
/* harmony import */ var react_timeago__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_timeago__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("ZHh6");
/* harmony import */ var _components_body__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("Aq08");
/* harmony import */ var _shims_ajax__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("Ndwz");
















var Authors = function Authors(props) {
  return react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("span", {
    className: "authors"
  }, props.authors.map(function (author) {
    return author.name;
  }).join(", "));
};

var Tag = function Tag(props) {
  return react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("span", {
    className: "jsx-3711646761"
  }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("span", {
    className: "jsx-3711646761" + " " + "tag"
  }, props.children), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "3711646761"
  }, [".tag.jsx-3711646761{display:inline-block;padding:0.2em 0.9em;margin:0 0.5em 0.5em 0;white-space:nowrap;background-color:#f1f8ff;border-radius:3px;color:#0366d6;-webkit-text-decoration:none;text-decoration:none;}", "tag.jsx-3711646761:hover{background-color:#ddeeff;}"]));
};

var DiscoveryItem = function DiscoveryItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
    className: "jsx-4254359129" + " " + "post"
  }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
    className: "jsx-4254359129" + " " + "post-thumb"
  }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("img", {
    alt: "preview for ".concat(props.path),
    src: props.image ? props.image : "https://icon.now.sh/library_books/ccc/64",
    height: "64",
    className: "jsx-4254359129"
  })), react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
    className: "jsx-4254359129" + " " + "post-summary"
  }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("h3", {
    className: "jsx-4254359129" + " " + "post-title"
  }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: {
      pathname: "/view",
      query: {
        viewPath: props.path
      }
    },
    as: "/view/" + props.path
  }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("a", {
    className: "jsx-4254359129"
  }, props.metadata.title ? props.metadata.title : props.name))), react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
    className: "jsx-4254359129" + " " + "post-metadata"
  }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("span", {
    className: "jsx-4254359129"
  }, "Last modified ", react__WEBPACK_IMPORTED_MODULE_9__["createElement"](react_timeago__WEBPACK_IMPORTED_MODULE_10___default.a, {
    date: props.last_modified
  })), " ", props.metadata.authors ? react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("span", {
    className: "jsx-4254359129"
  }, "by ", react__WEBPACK_IMPORTED_MODULE_9__["createElement"](Authors, {
    authors: props.metadata.authors
  })) : null), react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
    className: "jsx-4254359129" + " " + "post-description"
  }, react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("p", {
    className: "jsx-4254359129"
  }, props.metadata.nteract.description)), react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
    className: "jsx-4254359129" + " " + "post-tags"
  }, props.metadata.nteract.tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_9__["createElement"](Tag, {
      key: tag
    }, tag);
  }))), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "4254359129"
  }, [".post.jsx-4254359129{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;border-bottom:1px #e1e4e8 solid !important;padding-top:24px !important;padding-bottom:24px !important;}", "h3.jsx-4254359129{font-size:20px;font-weight:600;margin-top:0;margin-bottom:4px;}", "a.jsx-4254359129{color:#0366d6;-webkit-text-decoration:none;text-decoration:none;}", ".post-metadata.jsx-4254359129{font-style:italic;}", ".post-metadata.jsx-4254359129,.post-description.jsx-4254359129{color:#586069 !important;}", ".post-summary.jsx-4254359129{margin-left:2rem;}", ".post-tags.jsx-4254359129{margin-top:0.5rem;}"]));
};

var DiscoveryGrid =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_corejs2_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(DiscoveryGrid, _React$Component);

  function DiscoveryGrid() {
    _babel_runtime_corejs2_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, DiscoveryGrid);

    return _babel_runtime_corejs2_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_corejs2_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(DiscoveryGrid).apply(this, arguments));
  }

  _babel_runtime_corejs2_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(DiscoveryGrid, [{
    key: "render",
    value: function render() {
      if (this.props.discovered.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_9__["createElement"](react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_components_header__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_components_body__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("h1", null, "No discoveries...")));
      }

      return react__WEBPACK_IMPORTED_MODULE_9__["createElement"](react__WEBPACK_IMPORTED_MODULE_9__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_components_header__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
        active: "discover"
      }), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](_components_body__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_9__["createElement"]("div", {
        className: "jsx-3819645876" + " " + "discoveries"
      }, this.props.discovered ? this.props.discovered.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_9__["createElement"](DiscoveryItem, _babel_runtime_corejs2_helpers_extends__WEBPACK_IMPORTED_MODULE_2___default()({
          key: item.path
        }, item));
      }) : null), react__WEBPACK_IMPORTED_MODULE_9__["createElement"](styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "3819645876"
      }, [".discoveries.jsx-3819645876{margin-top:1rem;margin-left:1rem;margin-right:1rem;}", ".discoveries.jsx-3819645876>*.jsx-3819645876{display:block;}"])));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_corejs2_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
        var req, BASE_PATH, port, url, xhr;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = context.req;

                if (req) {
                  // Server side, communicate with our local API
                  port = process.env.COMMUTER_PORT || 4000;
                  BASE_PATH = "http://127.0.0.1:".concat(port, "/");
                } else {
                  BASE_PATH = "/";
                }

                url = "".concat(BASE_PATH, "api/v1/discovery");
                _context.next = 5;
                return Object(_shims_ajax__WEBPACK_IMPORTED_MODULE_14__[/* getJSON */ "a"])(url).toPromise();

              case 5:
                xhr = _context.sent;
                return _context.abrupt("return", {
                  discovered: xhr.response.results,
                  statusCode: xhr.status
                });

              case 7:
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

  return DiscoveryGrid;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DiscoveryGrid);

/***/ })

/******/ });