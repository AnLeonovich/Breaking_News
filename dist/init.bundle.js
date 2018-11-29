(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{286:function(n,r,e){"use strict";e.r(r);var t=e(287),a=e.n(t),o=e(288),i=e.n(o),c=e(289),s=e.n(c),l=e(290),u=e.n(l),p=e(291),d=e.n(p),f=e(292),g=e.n(f),h=e(293),m=e.n(h),_=e(294),b=e.n(_),v=e(295),x=e.n(v),w=["cnn","google-news","the-washington-times","the-new-york-times","national-geographic","fox-news","usa-today","the-wall-street-journal","mtv-news"],y={cnn:a.a,"fox-news":i.a,"google-news":s.a,"mtv-news":u.a,"national-geographic":d.a,"the-new-york-times":g.a,"the-wall-street-journal":m.a,"the-washington-times":b.a,"usa-today":x.a},k=document.querySelector("body");function E(n,r,e,t,a,o,i){try{var c=n[o](i),s=c.value}catch(n){return void e(n)}c.done?r(s):Promise.resolve(s).then(t,a)}function P(n){return function(){var r=this,e=arguments;return new Promise(function(t,a){var o=n.apply(r,e);function i(n){E(o,t,a,i,c,"next",n)}function c(n){E(o,t,a,i,c,"throw",n)}i(void 0)})}}var G=function(n){return"https://newsapi.org/v2/".concat(n,"apiKey=e3215bd34807454996b9c3b1444aa82a")},j=function(){var n=P(regeneratorRuntime.mark(function n(){var r,e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,"sources?",n.next=4,fetch(G("sources?"));case 4:return r=n.sent,e=r.json(),n.abrupt("return",e);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}},n,this,[[0,9]])}));return function(){return n.apply(this,arguments)}}(),R=function(n){for(var r=new Map,e=0;e<n.length;)w.indexOf(n[e].id)>=0&&r.set(n[e].id,n[e]),e++;return r},O=function(){var n=P(regeneratorRuntime.mark(function n(r){var e,t,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e="top-headlines?sources=".concat(r,"&"),n.next=4,fetch(G(e));case 4:return t=n.sent,a=t.json(),n.abrupt("return",a);case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}},n,this,[[0,9]])}));return function(r){return n.apply(this,arguments)}}();e(296);function T(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var A=function(){function n(r){var e=this;!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),this.news=r,this.createPage(),this.articles="",this.news.totalResults>0&&this.news.articles.forEach(function(n){return e.addArticle(n)}),document.getElementById("wrapper").innerHTML+=this.articles}var r,e,t;return r=n,(e=[{key:"createPage",value:function(){var n=this.news.source,r=n.id,e=n.name;k.innerHTML="\n      <header class='header-news'>\n        <button class='header__button'>Go Back</button>\n        <h1 class='header__title'>".concat(e,"</h1>\n      </header>\n      <main>\n        <div id='wrapper' class='articles'></div>\n      </main>\n      <footer class='footer'>\n        <img alt='Channel Logo' src=").concat(y[r]," class='footer__logo'>\n      </footer>\n    "),document.querySelector(".header__button").addEventListener("click",function(){z()})}},{key:"addArticle",value:function(n){this.articles+="\n      <article class='article'>\n        <div class='article__image'>\n          <img alt='Article intro picture' src=".concat(n.urlToImage," class='article__image_img'>\n        </div>\n        <h2 class='article__title'>").concat(n.title,"</h2>\n        <p class='article__description'>").concat(n.description||"","</p>\n        <div class='article__info'>\n          <p class='article__info_author'><span class='article__info_label'>Author: </span>").concat(n.author||"Unknown","</p>\n          <time class='article__info_time'><span class='article__info_label'>Published at: </span>").concat(n.publishedAt?new Date(n.publishedAt).toLocaleString():"Unknown",'</time>\n          <form action="').concat(n.url,"\" class='article__info_form'>\n              <button type=\"submit\" class='article__info_button'>Read</button>\n          </form>\n        </div>\n      </article>\n    ")}}])&&T(r.prototype,e),t&&T(r,t),n}();e(298);function C(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var F=function(){function n(r){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),this.channels="",this.createPage();var e=!0,t=!1,a=void 0;try{for(var o,i=r.values()[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var c=o.value;this.addChannel(c)}}catch(n){t=!0,a=n}finally{try{e||null==i.return||i.return()}finally{if(t)throw a}}document.getElementById("wrapper").innerHTML=this.channels}var r,e,t;return r=n,(e=[{key:"createPage",value:function(){k.innerHTML="\n      <header class='header-channels'>\n        <h1 class='header__title'>Breaking news</h1>\n      </header>\n      <main>\n        <div id='wrapper' class='channels'></div>\n      </main>\n      <footer class='footer'>\n        <span class='footer__link'>Powered by <a href='https://newsapi.org/'>NewsAPI.org</a></span>\n      </footer>\n    "}},{key:"addChannel",value:function(n){var r=n.name,e=n.id,t=n.url,a=y[e];this.channels+="\n      <section class='channel'>\n        <h2 class='channel__title'>".concat(r,"</h2>\n        <img src=").concat(a," alt=").concat(r," class='channel__logo'>\n        <div class='channel__controls'><a href=").concat(t," class='channel__controls_link'>Go to the website</a></div>\n        <button class='channel__controls_button' data-channel=").concat(e," data-name='").concat(r,"'>Check news</button>\n      </section>\n    ")}}])&&C(r.prototype,e),t&&C(r,t),n}();e(300),e(302);function S(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{},t=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e).filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.forEach(function(r){B(n,r,e[r])})}return n}function B(n,r,e){return r in n?Object.defineProperty(n,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[r]=e,n}function I(n,r,e,t,a,o,i){try{var c=n[o](i),s=c.value}catch(n){return void e(n)}c.done?r(s):Promise.resolve(s).then(t,a)}function L(n){return function(){var r=this,e=arguments;return new Promise(function(t,a){var o=n.apply(r,e);function i(n){I(o,t,a,i,c,"next",n)}function c(n){I(o,t,a,i,c,"throw",n)}i(void 0)})}}e.d(r,"init",function(){return z});var z=function(){var n=L(regeneratorRuntime.mark(function n(){var r,e,t;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j();case 2:r=n.sent,e=R(r.sources),new F(e),t=document.querySelectorAll(".channel__controls_button"),Array.from(t).forEach(function(n){n.addEventListener("click",function(){var n=L(regeneratorRuntime.mark(function n(r){var e;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,O(r.target.dataset.channel);case 2:e=n.sent,new A(S({},e,{source:{id:r.target.dataset.channel,name:r.target.dataset.name}}));case 4:case"end":return n.stop()}},n,this)}));return function(r){return n.apply(this,arguments)}}())});case 7:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},287:function(n,r,e){n.exports=e.p+"/images/CNN.svg"},288:function(n,r,e){n.exports=e.p+"/images/Fox_News.svg"},289:function(n,r,e){n.exports=e.p+"/images/Google.svg"},290:function(n,r,e){n.exports=e.p+"/images/MTV.svg"},291:function(n,r,e){n.exports=e.p+"/images/National_Geographiс.svg"},292:function(n,r,e){n.exports=e.p+"/images/New_York_Times.svg"},293:function(n,r,e){n.exports=e.p+"/images/WSJ.svg"},294:function(n,r,e){n.exports=e.p+"/images/Washington_Times.jpg"},295:function(n,r,e){n.exports=e.p+"/images/USA_Today.svg"},296:function(n,r,e){var t=e(297);"string"==typeof t&&(t=[[n.i,t,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(112)(t,a);t.locals&&(n.exports=t.locals)},297:function(n,r,e){(n.exports=e(81)(!1)).push([n.i,'.articles {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-row-gap: 40px;\r\n  padding: 40px;\r\n}\r\n\r\n.article {\r\n  display: grid;\r\n  grid-template:\r\n    "image title" 70px\r\n    "image description" 110px\r\n    "image info" 40px\r\n    /30% 65%;\r\n  grid-column-gap: 5%;\r\n  border-radius: 20px;\r\n  padding: 20px;\r\n  border: 1px solid rgba(0, 0, 0, 0.45);\r\n}\r\n\r\n.article__image {\r\n  grid-area: image;\r\n}\r\n\r\n.article__image_img {\r\n  width: 100%;\r\n  height: 100%;\r\n  border-radius: 20px;\r\n  border: 1px solid rgba(0, 0, 0, 0.45);\r\n}\r\n.article__title {\r\n  grid-area: title;\r\n  font-family: "Gentium";\r\n  padding: 5px;\r\n}\r\n\r\n.article__description {\r\n  grid-area: description;\r\n  font-family: "Gentium-Reg";\r\n  padding: 5px;\r\n  font-size: 100%;\r\n}\r\n\r\n.article__info {\r\n  grid-area: info;\r\n  display: grid;\r\n  align-content: end;\r\n  grid-column-gap: 15px;\r\n  grid-template:\r\n    "author button" 20px\r\n    "time button" 20px;\r\n}\r\n\r\n.article__info_author {\r\n  grid-area: author;\r\n  font-family: "Gentium-Reg";\r\n  align-self: self-end;\r\n}\r\n\r\n.article__info_time {\r\n  grid-area: time;\r\n  font-family: "Gentium-Reg";\r\n  align-self: self-end;\r\n}\r\n\r\n.article__info_form {\r\n  justify-self: right;\r\n}\r\n\r\n.article__info_button {\r\n  grid-area: button;\r\n  font-family: "Gentium";\r\n  height: 40px;\r\n  background-color: white;\r\n  border: 2px solid rgba(0, 0, 0, 0.45);\r\n  border-radius: 10px;\r\n  font-size: 18px;\r\n  width: 100px;\r\n}\r\n\r\n.article__info_label {\r\n  font-family: "Gentium";\r\n}\r\n\r\n.article__info_button:hover {\r\n  box-shadow: 0 0 10px rgba(0,0,0,0.5);\r\n  background-color: #FFE6EB;\r\n}\r\n\r\n.article__info_button:focus {\r\n  outline: none;\r\n}',""])},298:function(n,r,e){var t=e(299);"string"==typeof t&&(t=[[n.i,t,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(112)(t,a);t.locals&&(n.exports=t.locals)},299:function(n,r,e){(n.exports=e(81)(!1)).push([n.i,'.channels {\r\n  display: grid;\r\n  grid-template-columns: repeat(3, 352px);\r\n  padding: 32px 0;\r\n  grid-column-gap: 30px;\r\n  grid-row-gap: 30px;\r\n  justify-content: center;\r\n}\r\n\r\n.channel {\r\n  width: 300px;\r\n  margin: 0 25px;\r\n  border: 1px solid rgba(0, 0, 0, 0.45);\r\n  display: grid;\r\n  border-radius: 10px;\r\n  grid-template:\r\n    "title title" 38px\r\n    "image image" 122px\r\n    "link button" 30px;\r\n}\r\n\r\n.channel__title {\r\n  grid-area: title;\r\n  text-align: center;\r\n  font-family: "Gentium";\r\n  padding: 5px;\r\n  background-color: #FFE6EB;\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n}\r\n\r\n.channel__logo {\r\n  grid-area: image;\r\n  width: calc(100% - 20px);\r\n  height: 80px;\r\n  padding: 20px 10px;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.45);\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.45);\r\n}\r\n\r\n.channel__controls {\r\n  grid-area: link;\r\n  font-family: "Gentium-Reg";\r\n  text-align: center;\r\n  padding: 5.5px;\r\n  border-right: 1px solid rgba(0, 0, 0, 0.45);\r\n}\r\n\r\n.channel__controls_link {\r\n  color: black;\r\n  font-size: 16px;\r\n}\r\n\r\n.channel__controls_button {\r\n  grid-area: button;\r\n  font-family: "Gentium";\r\n  border: none;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n  background-color: white;\r\n  border-bottom-right-radius: 10px;\r\n}\r\n\r\n.channel__controls_button:hover {\r\n  box-shadow: 0 0 10px rgba(0,0,0,0.5);\r\n  background-color: #FFE6EB;\r\n}\r\n\r\n.channel__controls_link:hover {\r\n  color: #CC193D;\r\n}\r\n\r\n.channel__controls_button:focus {\r\n  outline: none;\r\n}\r\n',""])},300:function(n,r,e){var t=e(301);"string"==typeof t&&(t=[[n.i,t,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(112)(t,a);t.locals&&(n.exports=t.locals)},301:function(n,r,e){(n.exports=e(81)(!1)).push([n.i,'.header-news {\r\n  padding-bottom: 20px;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.45);\r\n  display: grid;\r\n  grid-template:\r\n    "button title"\r\n    /120px;\r\n}\r\n\r\n.header-channels {\r\n  padding-bottom: 20px;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.45);\r\n  display: grid;\r\n  grid-template:\r\n    "title";\r\n  justify-content: center;\r\n}\r\n\r\n.header__title {\r\n  grid-area: title;\r\n  font-size: 60px;\r\n  text-align: center;\r\n  font-family: "Gentium";\r\n}\r\n\r\n.header__button {\r\n  grid-area: button;\r\n  font-family: "Gentium";\r\n  height: 40px;\r\n  background-color: white;\r\n  border: 2px solid rgba(0, 0, 0, 0.45);\r\n  border-radius: 10px;\r\n  font-size: 18px;\r\n  width: 100px;\r\n  margin-top: 15px;\r\n}\r\n\r\n.header__button:hover {\r\n  box-shadow: 0 0 10px rgba(0,0,0,0.5);\r\n  background-color: #FFE6EB;\r\n}\r\n\r\n.header__button:focus {\r\n  outline: none;\r\n}\r\n',""])},302:function(n,r,e){var t=e(303);"string"==typeof t&&(t=[[n.i,t,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e(112)(t,a);t.locals&&(n.exports=t.locals)},303:function(n,r,e){(n.exports=e(81)(!1)).push([n.i,'.footer {\r\n  height: 80px;\r\n  text-align: center;\r\n}\r\n\r\n.footer__logo {\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.footer__link {\r\n  font-family: "Gentium-Reg";\r\n}',""])}}]);