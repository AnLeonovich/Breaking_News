"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

(function () {
  var NEWS_CHANNELS = ['cnn', 'google-news', 'the-washington-times', 'the-new-york-times', 'national-geographic', 'fox-news', 'usa-today', 'the-wall-street-journal', 'mtv-news'];
  var CHANNELS_LOGO = {
    'cnn': './content/CNN.svg',
    'fox-news': './content/Fox_News.svg',
    'google-news': './content/Google.svg',
    'mtv-news': './content/MTV.svg',
    'national-geographic': './content/National_Geographiс.svg',
    'the-new-york-times': './content/New_York_Times.svg',
    'the-wall-street-journal': './content/WSJ.svg',
    'the-washington-times': './content/Washington_Times.jpg',
    'usa-today': './content/USA_Today.svg'
  };
  var BODY = document.querySelector('body');

  var getUrl = function getUrl(filter) {
    return "https://newsapi.org/v2/".concat(filter, "apiKey=e3215bd34807454996b9c3b1444aa82a");
  };

  var getAllSources =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var filter, responseSources, sources;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              filter = 'sources?';
              _context.next = 4;
              return fetch(getUrl(filter));

            case 4:
              responseSources = _context.sent;
              sources = responseSources.json();
              return _context.abrupt("return", sources);

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 9]]);
    }));

    return function getAllSources() {
      return _ref.apply(this, arguments);
    };
  }();

  var makeSourcesList = function makeSourcesList(sources) {
    var sourcesList = new Map();
    var i = 0;

    while (i < sources.length) {
      if (NEWS_CHANNELS.indexOf(sources[i].id) >= 0) {
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
      var filter, responseSource, news;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              filter = "top-headlines?sources=".concat(source, "&");
              _context2.next = 4;
              return fetch(getUrl(filter));

            case 4:
              responseSource = _context2.sent;
              news = responseSource.json();
              return _context2.abrupt("return", news);

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 9]]);
    }));

    return function getNews(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var createNewsPage =
  /*#__PURE__*/
  function () {
    function createNewsPage(news) {
      var _this = this;

      _classCallCheck(this, createNewsPage);

      this.news = news;
      this.createPage();
      this.articles = '';

      if (this.news.totalResults > 0) {
        this.news.articles.forEach(function (article) {
          return _this.addArticle(article);
        });
      }

      document.getElementById('wrapper').innerHTML += this.articles;
    }

    _createClass(createNewsPage, [{
      key: "createPage",
      value: function createPage() {
        var _this$news$source = this.news.source,
            id = _this$news$source.id,
            name = _this$news$source.name;
        BODY.innerHTML = "\n        <header class='header-news'>\n          <button class='header__button'>Go Back</button>\n          <h1 class='header__title'>".concat(name, "</h1>\n        </header>\n        <main>\n          <div id='wrapper' class='articles'></div>\n        </main>\n        <footer class='footer'>\n          <img alt='Channel Logo' src=").concat(CHANNELS_LOGO[id], " class='footer__logo'>\n        </footer>\n      ");
        document.querySelector('.header__button').addEventListener('click', function () {
          init();
        });
      }
    }, {
      key: "addArticle",
      value: function addArticle(article) {
        this.articles += "\n        <article class='article'>\n          <div class='article__image'>\n            <img alt='Article intro picture' src=".concat(article.urlToImage, " class='article__image_img'>\n          </div>\n          <h2 class='article__title'>").concat(article.title, "</h2>\n          <p class='article__description'>").concat(article.description || '', "</p>\n          <div class='article__info'>\n            <p class='article__info_author'><span class='article__info_label'>Author: </span>").concat(article.author || 'Unknown', "</p>\n            <time class='article__info_time'><span class='article__info_label'>Published at: </span>").concat(article.publishedAt ? new Date(article.publishedAt).toLocaleString() : 'Unknown', "</time>\n            <form action=\"").concat(article.url, "\" class='article__info_form'>\n                <button type=\"submit\" class='article__info_button'>Read</button>\n            </form>\n          </div>\n        </article>\n      ");
      }
    }]);

    return createNewsPage;
  }();

  var CreateChannels =
  /*#__PURE__*/
  function () {
    function CreateChannels(sources) {
      _classCallCheck(this, CreateChannels);

      this.channels = '';
      this.createPage();
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = sources.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var channel = _step.value;
          this.addChannel(channel);
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

      document.getElementById('wrapper').innerHTML = this.channels;
    }

    _createClass(CreateChannels, [{
      key: "createPage",
      value: function createPage() {
        BODY.innerHTML = "\n        <header class='header-channels'>\n          <h1 class='header__title'>Breaking news</h1>\n        </header>\n        <main>\n          <div id='wrapper' class='channels'></div>\n        </main>\n        <footer class='footer'>\n          <span class='footer__link'>Powered by <a href='https://newsapi.org/'>NewsAPI.org</a></span>\n        </footer>\n      ";
      }
    }, {
      key: "addChannel",
      value: function addChannel(channel) {
        var name = channel.name,
            id = channel.id,
            url = channel.url;
        var logo = CHANNELS_LOGO[id];
        this.channels += "\n        <section class='channel'>\n          <h2 class='channel__title'>".concat(name, "</h2>\n          <img src=").concat(logo, " alt=").concat(name, " class='channel__logo'>\n          <div class='channel__controls'><a href=").concat(url, " class='channel__controls_link'>Go to the website</a></div>\n          <button class='channel__controls_button' data-channel=").concat(id, " data-name='").concat(name, "'>Check news</button>\n        </section>\n      ");
      }
    }]);

    return CreateChannels;
  }();

  var init =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4() {
      var allSources, sources, checkNews;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return getAllSources();

            case 2:
              allSources = _context4.sent;
              sources = makeSourcesList(allSources.sources);
              new CreateChannels(sources);
              checkNews = document.querySelectorAll('.channel__controls_button');
              Array.from(checkNews).forEach(function (button) {
                button.addEventListener('click',
                /*#__PURE__*/
                function () {
                  var _ref4 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee3(e) {
                    var news;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return getNews(e.target.dataset.channel);

                          case 2:
                            news = _context3.sent;
                            new createNewsPage(_objectSpread({}, news, {
                              source: {
                                id: e.target.dataset.channel,
                                name: e.target.dataset.name
                              }
                            }));

                          case 4:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));

                  return function (_x2) {
                    return _ref4.apply(this, arguments);
                  };
                }());
              });

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    return function init() {
      return _ref3.apply(this, arguments);
    };
  }();

  init();
})();
