(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["errorHandler"],{

/***/ "./src/modules/server/errorHandler.js":
/*!********************************************!*\
  !*** ./src/modules/server/errorHandler.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorHandler; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ErrorHandler =
/*#__PURE__*/
function () {
  function ErrorHandler() {
    _classCallCheck(this, ErrorHandler);

    if (_typeof(ErrorHandler.instance) === 'object') {
      return ErrorHandler.instance;
    }

    ErrorHandler.instance = this;
    return this;
  }

  _createClass(ErrorHandler, [{
    key: "showError",
    value: function showError(message) {
      alert(message);
    }
  }]);

  return ErrorHandler;
}();



/***/ })

}]);
//# sourceMappingURL=errorHandler.bundle.js.map