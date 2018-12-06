(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["presenter"],{

/***/ "./node_modules/css-loader/index.js?url=false!./src/css/footer.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./src/css/footer.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\r\n  height: 80px;\r\n  text-align: center;\r\n}\r\n\r\n.footer__logo {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.footer__link {\r\n  font-family: \"Gentium-Reg\";\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./src/css/header.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./src/css/header.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-news {\r\n  padding-bottom: 20px;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.45);\r\n  display: grid;\r\n  grid-template:\r\n    \"button title\"\r\n    /120px;\r\n}\r\n\r\n.header-channels {\r\n  padding-bottom: 20px;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.45);\r\n  display: grid;\r\n  grid-template:\r\n    \"title\";\r\n  justify-content: center;\r\n}\r\n\r\n.header__title {\r\n  grid-area: title;\r\n  font-size: 60px;\r\n  text-align: center;\r\n  font-family: \"Gentium\";\r\n}\r\n\r\n.header__button {\r\n  grid-area: button;\r\n  font-family: \"Gentium\";\r\n  height: 40px;\r\n  background-color: white;\r\n  border: 2px solid rgba(0, 0, 0, 0.45);\r\n  border-radius: 10px;\r\n  font-size: 18px;\r\n  width: 100px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.header__button:hover {\r\n  box-shadow: 0 0 10px rgba(0,0,0,0.5);\r\n  background-color: #FFE6EB;\r\n}\r\n\r\n.header__button:focus {\r\n  outline: none;\r\n}\r\n\r\n@media screen and (min-width: 100px) and (max-width: 750px) {\r\n  .header-news {\r\n    grid-template:\r\n      \"title\"\r\n      \"button\"\r\n      /100%;\r\n    justify-items: center;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 100px) and (max-width: 630px) {\r\n  .header__title {\r\n    font-size: 50px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 100px) and (max-width: 530px) {\r\n  .header__title {\r\n    font-size: 40px;\r\n  }\r\n}\r\n\r\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){\r\n  .header__button {\r\n    float: left;\r\n  }\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./src/modules/view/channels/channels.css":
/*!************************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./src/modules/view/channels/channels.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".channels {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 352px);\r\n  padding: 32px 0;\r\n  grid-column-gap: 30px;\r\n  grid-row-gap: 30px;\r\n  justify-content: center;\r\n}\r\n\r\n.channel {\r\n  width: 300px;\r\n  margin: 0 25px;\r\n  border: 1px solid rgba(0, 0, 0, 0.45);\r\n  display: grid;\r\n  border-radius: 10px;\r\n  grid-template:\r\n    \"title title\" 38px\r\n    \"image image\" 122px\r\n    \"link button\" 30px;\r\n}\r\n\r\n.channel__title {\r\n  grid-area: title;\r\n  text-align: center;\r\n  font-family: \"Gentium\";\r\n  padding: 5px;\r\n  background-color: #FFE6EB;\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n}\r\n\r\n.channel__logo {\r\n  grid-area: image;\r\n  width: calc(100% - 20px);\r\n  height: 80px;\r\n  padding: 20px 10px;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.45);\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.45);\r\n}\r\n\r\n.channel__controls {\r\n  grid-area: link;\r\n  font-family: \"Gentium-Reg\";\r\n  text-align: center;\r\n  padding: 5.5px;\r\n  border-right: 1px solid rgba(0, 0, 0, 0.45);\r\n}\r\n\r\n.channel__controls_link {\r\n  color: black;\r\n  font-size: 16px;\r\n}\r\n\r\n.channel__controls_button {\r\n  grid-area: button;\r\n  font-family: \"Gentium\";\r\n  border: none;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n  background-color: white;\r\n  border-bottom-right-radius: 10px;\r\n}\r\n\r\n.channel__controls_button:hover {\r\n  box-shadow: 0 0 10px rgba(0,0,0,0.5);\r\n  background-color: #FFE6EB;\r\n}\r\n\r\n.channel__controls_link:hover {\r\n  color: #CC193D;\r\n}\r\n\r\n.channel__controls_button:focus {\r\n  outline: none;\r\n}\r\n\r\n@media screen and (min-width: 741px) and (max-width: 1100px) {\r\n  .channels {\r\n    grid-template-columns: repeat(2, 352px);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 100px) and (max-width: 740px) {\r\n  .channels {\r\n    grid-template-columns: repeat(1, 352px);\r\n  }\r\n}\r\n\r\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){  \r\n  .channels {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-flow: wrap;\r\n  }\r\n\r\n  .channels .channel {\r\n    margin-bottom: 30px;\r\n    height: 192px;\r\n  }\r\n\r\n  .channel__controls {\r\n    float: left;\r\n    margin-top: -4px;\r\n    padding: 7px;\r\n    width: calc(50% - 14px);\r\n  }\r\n\r\n  .channel__controls_button {\r\n    margin-top: -4px;\r\n    padding: 5px 31.8px;\r\n  }\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?url=false!./src/modules/view/news/news.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader?url=false!./src/modules/view/news/news.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".articles {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-row-gap: 40px;\r\n  padding: 40px;\r\n}\r\n\r\n.article {\r\n  display: grid;\r\n  grid-template:\r\n    \"image title\" 70px\r\n    \"image description\" 110px\r\n    \"image info\" 40px\r\n    /30% 65%;\r\n  grid-column-gap: 5%;\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n  border: 1px solid rgba(0, 0, 0, 0.45);\r\n}\r\n\r\n.article__image {\r\n  grid-area: image;\r\n}\r\n\r\n.article__image_img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 20px;\r\n  border: 1px solid rgba(0, 0, 0, 0.45);\r\n}\r\n.article__title {\r\n  grid-area: title;\r\n  font-family: \"Gentium\";\r\n  padding: 5px;\r\n}\r\n\r\n.article__description {\r\n  grid-area: description;\r\n  font-family: \"Gentium-Reg\";\r\n  padding: 5px;\r\n  font-size: 100%;\r\n}\r\n\r\n.article__info {\r\n  grid-area: info;\r\n  display: grid;\r\n  align-content: end;\r\n  grid-column-gap: 15px;\r\n  grid-template:\r\n    \"author button\" 20px\r\n    \"time button\" 20px;\r\n}\r\n\r\n.article__info_author {\r\n  grid-area: author;\r\n  font-family: \"Gentium-Reg\";\r\n  align-self: self-end;\r\n}\r\n\r\n.article__info_time {\r\n  grid-area: time;\r\n  font-family: \"Gentium-Reg\";\r\n  align-self: self-end;\r\n}\r\n\r\n.article__info_form {\r\n  justify-self: right;\r\n}\r\n\r\n.article__info_button {\r\n  grid-area: button;\r\n  font-family: \"Gentium\";\r\n  height: 40px;\r\n  background-color: white;\r\n  border: 2px solid rgba(0, 0, 0, 0.45);\r\n  border-radius: 10px;\r\n  font-size: 18px;\r\n  width: 100px;\r\n}\r\n\r\n.article__info_label {\r\n  font-family: \"Gentium\";\r\n}\r\n\r\n.article__info_button:hover {\r\n  box-shadow: 0 0 10px rgba(0,0,0,0.5);\r\n  background-color: #FFE6EB;\r\n}\r\n\r\n.article__info_button:focus {\r\n  outline: none;\r\n}\r\n\r\n@media screen and (min-width: 100px) and (max-width: 950px) {\r\n  .articles {\r\n    padding: 20px 0;\r\n  }\r\n\r\n  .article {\r\n    display: grid;\r\n    grid-template:\r\n      \"image\" 200px\r\n      \"title\"\r\n      \"description\"\r\n      \"info\"\r\n      /100%;\r\n    border-radius: 20px;\r\n    padding: 20px;\r\n    border: 1px solid rgba(0, 0, 0, 0.45);\r\n    min-width: 310px;\r\n  }\r\n\r\n  .article__title {\r\n    font-size: 120%;\r\n  }\r\n\r\n  .article__image {\r\n    justify-self: center;\r\n    width: 100%;\r\n  }\r\n\r\n  .article__image_img {\r\n    width: auto;\r\n    height: 90%;\r\n    border-radius: 20px;\r\n    border: 1px solid rgba(0, 0, 0, 0.45);\r\n  }\r\n\r\n  .article__info {\r\n    grid-template:\r\n      \"author\"\r\n      \"time\" 20px\r\n      \"button\" 40px;\r\n    grid-row-gap: 10px; \r\n  }\r\n\r\n  .article__info_form {\r\n    width: 100%;\r\n  }\r\n\r\n  .article__info_button {\r\n    width: 100%;\r\n  }\r\n\r\n  .article__description,\r\n  .article__title {\r\n    padding: 10px 0;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 100px) and (max-width: 430px) {\r\n  .article__image_img {\r\n    max-width: 315px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-device-width: 480px) {\r\n  .article__info_author,\r\n  .article__info_time,\r\n  .article__description {\r\n    font-size: 35%;\r\n  }\r\n\r\n  .article__title {\r\n    font-size: 45%;\r\n  }\r\n}\r\n\r\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none){  \r\n  .articles {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    flex-flow: wrap;\r\n  }\r\n\r\n  .article__image_img {\r\n    width: 350px;\r\n    height: auto;\r\n    float: left;\r\n    margin: 0 15px 10px 0;\r\n  }\r\n\r\n  .article__info_button {\r\n    margin-top: 10px;\r\n  }\r\n\r\n  .article {\r\n    margin-bottom: 20px;\r\n    width: 100%;\r\n  }\r\n}", ""]);

// exports


/***/ }),

/***/ "./src/content/CNN.svg":
/*!*****************************!*\
  !*** ./src/content/CNN.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/CNN.svg";

/***/ }),

/***/ "./src/content/Fox_News.svg":
/*!**********************************!*\
  !*** ./src/content/Fox_News.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/Fox_News.svg";

/***/ }),

/***/ "./src/content/Google.svg":
/*!********************************!*\
  !*** ./src/content/Google.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/Google.svg";

/***/ }),

/***/ "./src/content/MTV.svg":
/*!*****************************!*\
  !*** ./src/content/MTV.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/MTV.svg";

/***/ }),

/***/ "./src/content/National_Geographiс.svg":
/*!*********************************************!*\
  !*** ./src/content/National_Geographiс.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/National_Geographiс.svg";

/***/ }),

/***/ "./src/content/New_York_Times.svg":
/*!****************************************!*\
  !*** ./src/content/New_York_Times.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/New_York_Times.svg";

/***/ }),

/***/ "./src/content/USA_Today.svg":
/*!***********************************!*\
  !*** ./src/content/USA_Today.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/USA_Today.svg";

/***/ }),

/***/ "./src/content/WSJ.svg":
/*!*****************************!*\
  !*** ./src/content/WSJ.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/WSJ.svg";

/***/ }),

/***/ "./src/content/Washington_Times.jpg":
/*!******************************************!*\
  !*** ./src/content/Washington_Times.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/images/Washington_Times.jpg";

/***/ }),

/***/ "./src/css/footer.css":
/*!****************************!*\
  !*** ./src/css/footer.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader?url=false!./footer.css */ "./node_modules/css-loader/index.js?url=false!./src/css/footer.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/header.css":
/*!****************************!*\
  !*** ./src/css/header.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader?url=false!./header.css */ "./node_modules/css-loader/index.js?url=false!./src/css/header.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/modules/constants.js":
/*!**********************************!*\
  !*** ./src/modules/constants.js ***!
  \**********************************/
/*! exports provided: NEWS_CHANNELS, CHANNELS_LOGO, BODY, GET, POST, DELETE, PUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NEWS_CHANNELS", function() { return NEWS_CHANNELS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANNELS_LOGO", function() { return CHANNELS_LOGO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BODY", function() { return BODY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET", function() { return GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POST", function() { return POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PUT", function() { return PUT; });
/* harmony import */ var _content_CNN_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../content/CNN.svg */ "./src/content/CNN.svg");
/* harmony import */ var _content_CNN_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_content_CNN_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_Fox_News_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../content/Fox_News.svg */ "./src/content/Fox_News.svg");
/* harmony import */ var _content_Fox_News_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_content_Fox_News_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _content_Google_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/Google.svg */ "./src/content/Google.svg");
/* harmony import */ var _content_Google_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_content_Google_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _content_MTV_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../content/MTV.svg */ "./src/content/MTV.svg");
/* harmony import */ var _content_MTV_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_content_MTV_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _content_National_Geographi_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../content/National_Geographiс.svg */ "./src/content/National_Geographiс.svg");
/* harmony import */ var _content_National_Geographi_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_content_National_Geographi_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _content_New_York_Times_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content/New_York_Times.svg */ "./src/content/New_York_Times.svg");
/* harmony import */ var _content_New_York_Times_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_content_New_York_Times_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _content_WSJ_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../content/WSJ.svg */ "./src/content/WSJ.svg");
/* harmony import */ var _content_WSJ_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_content_WSJ_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _content_Washington_Times_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../content/Washington_Times.jpg */ "./src/content/Washington_Times.jpg");
/* harmony import */ var _content_Washington_Times_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_content_Washington_Times_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _content_USA_Today_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../content/USA_Today.svg */ "./src/content/USA_Today.svg");
/* harmony import */ var _content_USA_Today_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_content_USA_Today_svg__WEBPACK_IMPORTED_MODULE_8__);









var NEWS_CHANNELS = ['cnn', 'google-news', 'the-washington-times', 'the-new-york-times', 'national-geographic', 'fox-news', 'usa-today', 'the-wall-street-journal', 'mtv-news'];
var CHANNELS_LOGO = {
  'cnn': _content_CNN_svg__WEBPACK_IMPORTED_MODULE_0___default.a,
  'fox-news': _content_Fox_News_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
  'google-news': _content_Google_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
  'mtv-news': _content_MTV_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
  'national-geographic': _content_National_Geographi_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
  'the-new-york-times': _content_New_York_Times_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
  'the-wall-street-journal': _content_WSJ_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
  'the-washington-times': _content_Washington_Times_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
  'usa-today': _content_USA_Today_svg__WEBPACK_IMPORTED_MODULE_8___default.a
};
var BODY = document.querySelector('body');
var GET = 'GET';
var POST = 'POST';
var DELETE = 'DELETE';
var PUT = 'PUT';


/***/ }),

/***/ "./src/modules/model/helpers.js":
/*!**************************************!*\
  !*** ./src/modules/model/helpers.js ***!
  \**************************************/
/*! exports provided: getAllSources, makeSourcesList, getNews */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSources", function() { return getAllSources; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeSourcesList", function() { return makeSourcesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNews", function() { return getNews; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/modules/constants.js");
/* harmony import */ var _server_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server/server */ "./src/modules/model/server/server.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var getAllSources =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var filter, request, responseSources, _sources;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            filter = 'sources?';
            request = new _server_server__WEBPACK_IMPORTED_MODULE_1__["default"](_constants__WEBPACK_IMPORTED_MODULE_0__["GET"], filter);
            _context.next = 5;
            return request.send();

          case 5:
            responseSources = _context.sent;
            _context.next = 8;
            return responseSources.json();

          case 8:
            _sources = _context.sent;

            if (!(_sources.status === 'error')) {
              _context.next = 11;
              break;
            }

            throw new Error(_sources.message);

          case 11:
            return _context.abrupt("return", _sources);

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            showError(_context.t0.message);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 14]]);
  }));

  return function getAllSources() {
    return _ref.apply(this, arguments);
  };
}();

var makeSourcesList = function makeSourcesList(sources) {
  var sourcesList = new Map();
  var i = 0;

  while (i < sources.length) {
    if (_constants__WEBPACK_IMPORTED_MODULE_0__["NEWS_CHANNELS"].indexOf(sources[i].id) >= 0) {
      sourcesList.set(sources[i].id, sources[i]);
    }

    i++;
  }

  return sourcesList;
};

var getNews =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(source) {
    var filter, request, responseSources, news;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            filter = "top-headlines?sources=".concat(source, "&");
            request = new _server_server__WEBPACK_IMPORTED_MODULE_1__["default"](_constants__WEBPACK_IMPORTED_MODULE_0__["GET"], filter);
            _context2.next = 5;
            return request.send();

          case 5:
            responseSources = _context2.sent;
            _context2.next = 8;
            return responseSources.json();

          case 8:
            news = _context2.sent;

            if (!(news.status === 'error')) {
              _context2.next = 11;
              break;
            }

            throw new Error(sources.message);

          case 11:
            return _context2.abrupt("return", news);

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2["catch"](0);
            showError(_context2.t0.message);

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 14]]);
  }));

  return function getNews(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var showError = function showError(message) {
  __webpack_require__.e(/*! import() | errorHandler */ "errorHandler").then(__webpack_require__.bind(null, /*! ./server/errorHandler */ "./src/modules/model/server/errorHandler.js")).then(function (module) {
    var ErrorHandler = module.default;
    new ErrorHandler().showError(message);
  });
};



/***/ }),

/***/ "./src/modules/model/server/requests.js":
/*!**********************************************!*\
  !*** ./src/modules/model/server/requests.js ***!
  \**********************************************/
/*! exports provided: GetRequest, PostRequest, DeleteRequest, PutRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetRequest", function() { return GetRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostRequest", function() { return PostRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteRequest", function() { return DeleteRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PutRequest", function() { return PutRequest; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var getUrl = function getUrl(filter) {
  return "https://newsapi.org/v2/".concat(filter, "apiKey=e3215bd34807454996b9c3b1444aa82a");
};

var GetRequest =
/*#__PURE__*/
function () {
  function GetRequest(filter) {
    _classCallCheck(this, GetRequest);

    this.filter = filter;
  }

  _createClass(GetRequest, [{
    key: "send",
    value: function () {
      var _send = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(getUrl(this.filter));

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function send() {
        return _send.apply(this, arguments);
      };
    }()
  }]);

  return GetRequest;
}();

var PostRequest =
/*#__PURE__*/
function () {
  function PostRequest(article) {
    _classCallCheck(this, PostRequest);

    this.article = article;
  }

  _createClass(PostRequest, [{
    key: "send",
    value: function () {
      var _send2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch('url to post new article', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(this.article)
                });

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function send() {
        return _send2.apply(this, arguments);
      };
    }()
  }]);

  return PostRequest;
}();

var DeleteRequest =
/*#__PURE__*/
function () {
  function DeleteRequest(articleId) {
    _classCallCheck(this, DeleteRequest);

    this.articleId = articleId;
  }

  _createClass(DeleteRequest, [{
    key: "send",
    value: function () {
      var _send3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return fetch('url to delete article by Id', {
                  method: 'DELETE',
                  body: JSON.stringify(this.articleId)
                });

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function send() {
        return _send3.apply(this, arguments);
      };
    }()
  }]);

  return DeleteRequest;
}();

var PutRequest =
/*#__PURE__*/
function () {
  function PutRequest(articleId, field, value) {
    _classCallCheck(this, PutRequest);

    this.newValue = {
      id: articleId,
      field: value
    };
  }

  _createClass(PutRequest, [{
    key: "send",
    value: function () {
      var _send4 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return fetch('url to update article by Id with new data', {
                  method: 'PUT',
                  body: JSON.stringify(this.newValue)
                });

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function send() {
        return _send4.apply(this, arguments);
      };
    }()
  }]);

  return PutRequest;
}();



/***/ }),

/***/ "./src/modules/model/server/server.js":
/*!********************************************!*\
  !*** ./src/modules/model/server/server.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./requests */ "./src/modules/model/server/requests.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/modules/constants.js");
function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var CreateRequest = function CreateRequest(type, filter) {
  _classCallCheck(this, CreateRequest);

  switch (type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["GET"]:
      return new _requests__WEBPACK_IMPORTED_MODULE_0__["GetRequest"](filter);
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__["POST"]:
      return new _requests__WEBPACK_IMPORTED_MODULE_0__["PostRequest"](article);
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__["DELETE"]:
      return new _requests__WEBPACK_IMPORTED_MODULE_0__["DeleteRequest"](articleId);
      break;

    case _constants__WEBPACK_IMPORTED_MODULE_1__["PUT"]:
      return new _requests__WEBPACK_IMPORTED_MODULE_0__["PutRequest"](articleId, field, value);
      break;

    default:
      alert('Unknown request type.');
      return new Error();
      break;
  }
};

var server = new Proxy(CreateRequest, {
  construct: function construct(target, argumentsList) {
    console.log("New '".concat(argumentsList[0], "' request"));
    return _construct(target, _toConsumableArray(argumentsList));
  }
});
/* harmony default export */ __webpack_exports__["default"] = (server);

/***/ }),

/***/ "./src/modules/presenter/presenter.js":
/*!********************************************!*\
  !*** ./src/modules/presenter/presenter.js ***!
  \********************************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _model_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/helpers */ "./src/modules/model/helpers.js");
/* harmony import */ var _view_news_news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/news/news */ "./src/modules/view/news/news.js");
/* harmony import */ var _view_channels_channels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/channels/channels */ "./src/modules/view/channels/channels.js");
/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../css/header.css */ "./src/css/header.css");
/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_header_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../css/footer.css */ "./src/css/footer.css");
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_footer_css__WEBPACK_IMPORTED_MODULE_4__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var init =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var allSources, sources, checkNews;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return Object(_model_helpers__WEBPACK_IMPORTED_MODULE_0__["getAllSources"])();

          case 3:
            allSources = _context2.sent;
            sources = Object(_model_helpers__WEBPACK_IMPORTED_MODULE_0__["makeSourcesList"])(allSources.sources);
            Object(_view_channels_channels__WEBPACK_IMPORTED_MODULE_2__["default"])(sources);
            checkNews = document.querySelectorAll('.channel__controls_button');
            Array.from(checkNews).forEach(function (button) {
              button.addEventListener('click',
              /*#__PURE__*/
              function () {
                var _ref2 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee(e) {
                  var news;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return Object(_model_helpers__WEBPACK_IMPORTED_MODULE_0__["getNews"])(e.target.dataset.channel);

                        case 2:
                          news = _context.sent;
                          Object(_view_news_news__WEBPACK_IMPORTED_MODULE_1__["default"])(_objectSpread({}, news, {
                            source: {
                              id: e.target.dataset.channel,
                              name: e.target.dataset.name
                            }
                          }));

                        case 4:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this);
                }));

                return function (_x) {
                  return _ref2.apply(this, arguments);
                };
              }());
            });
            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0.message);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[0, 10]]);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/modules/view/channels/channels.css":
/*!************************************************!*\
  !*** ./src/modules/view/channels/channels.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader?url=false!./channels.css */ "./node_modules/css-loader/index.js?url=false!./src/modules/view/channels/channels.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/modules/view/channels/channels.js":
/*!***********************************************!*\
  !*** ./src/modules/view/channels/channels.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/modules/constants.js");
/* harmony import */ var _channels_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./channels.css */ "./src/modules/view/channels/channels.css");
/* harmony import */ var _channels_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_channels_css__WEBPACK_IMPORTED_MODULE_1__);



var createChannelsPage = function createChannelsPage(sources) {
  createPage();
  var channelsHTML = addChannels(sources);
  document.getElementById('wrapper').innerHTML = channelsHTML;
};

var createPage = function createPage() {
  _constants__WEBPACK_IMPORTED_MODULE_0__["BODY"].innerHTML = "\n    <header class='header-channels'>\n      <h1 class='header__title'>Breaking news</h1>\n    </header>\n    <main>\n      <div id='wrapper' class='channels'></div>\n    </main>\n    <footer class='footer'>\n      <span class='footer__link'>Powered by <a href='https://newsapi.org/'>NewsAPI.org</a></span>\n    </footer>\n  ";
};

var addChannels = function addChannels(sources) {
  var channels = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = sources.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var channel = _step.value;
      var name = channel.name,
          id = channel.id,
          url = channel.url;
      var logo = _constants__WEBPACK_IMPORTED_MODULE_0__["CHANNELS_LOGO"][id];
      channels += "\n    <section class='channel'>\n      <h2 class='channel__title'>".concat(name, "</h2>\n      <img src=").concat(logo, " alt=").concat(name, " class='channel__logo'>\n      <div class='channel__controls'><a href=").concat(url, " class='channel__controls_link'>Go to the website</a></div>\n      <button class='channel__controls_button' data-channel=").concat(id, " data-name='").concat(name, "'>Check news</button>\n    </section>\n  ");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return channels;
};

/* harmony default export */ __webpack_exports__["default"] = (createChannelsPage);

/***/ }),

/***/ "./src/modules/view/news/news.css":
/*!****************************************!*\
  !*** ./src/modules/view/news/news.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader?url=false!./news.css */ "./node_modules/css-loader/index.js?url=false!./src/modules/view/news/news.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/modules/view/news/news.js":
/*!***************************************!*\
  !*** ./src/modules/view/news/news.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/modules/constants.js");
/* harmony import */ var _presenter_presenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../presenter/presenter */ "./src/modules/presenter/presenter.js");
/* harmony import */ var _news_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news.css */ "./src/modules/view/news/news.css");
/* harmony import */ var _news_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_news_css__WEBPACK_IMPORTED_MODULE_2__);




var createNewsPage = function createNewsPage(news) {
  createPage(news);
  var articles;

  if (news.totalResults > 0) {
    articles = news.articles.map(function (article) {
      return addArticle(article);
    }).join('');
  }

  document.getElementById('wrapper').innerHTML += articles;
};

var createPage = function createPage(news) {
  var _news$source = news.source,
      id = _news$source.id,
      name = _news$source.name;
  _constants__WEBPACK_IMPORTED_MODULE_0__["BODY"].innerHTML = "\n    <header class='header-news'>\n      <button class='header__button'>Go Back</button>\n      <h1 class='header__title'>".concat(name, "</h1>\n    </header>\n    <main>\n      <div id='wrapper' class='articles'></div>\n    </main>\n    <footer class='footer'>\n      <img alt='Channel Logo' src=").concat(_constants__WEBPACK_IMPORTED_MODULE_0__["CHANNELS_LOGO"][id], " class='footer__logo'>\n    </footer>\n  ");
  document.querySelector('.header__button').addEventListener('click', function () {
    Object(_presenter_presenter__WEBPACK_IMPORTED_MODULE_1__["init"])();
  });
};

var addArticle = function addArticle(article) {
  return "\n    <article class='article'>\n      <div class='article__image'>\n        <img alt='Article intro picture' src=".concat(article.urlToImage, " class='article__image_img'>\n      </div>\n      <h2 class='article__title'>").concat(article.title, "</h2>\n      <p class='article__description'>").concat(article.description || '', "</p>\n      <div class='article__info'>\n        <p class='article__info_author'><span class='article__info_label'>Author: </span>").concat(article.author || 'Unknown', "</p>\n        <time class='article__info_time'><span class='article__info_label'>Published at: </span>").concat(article.publishedAt ? new Date(article.publishedAt).toLocaleString() : 'Unknown', "</time>\n        <form action=\"").concat(article.url, "\" class='article__info_form'>\n            <button type=\"submit\" class='article__info_button'>Read</button>\n        </form>\n      </div>\n    </article>\n  ");
};

/* harmony default export */ __webpack_exports__["default"] = (createNewsPage);

/***/ })

}]);
//# sourceMappingURL=presenter.bundle.js.map