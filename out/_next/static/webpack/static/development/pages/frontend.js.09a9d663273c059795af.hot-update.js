webpackHotUpdate("static/development/pages/frontend.js",{

/***/ "./pages/frontend.js":
/*!***************************!*\
  !*** ./pages/frontend.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_BannerLanding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BannerLanding */ "./components/BannerLanding.js");






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Joe Rocha's Development Front-end Skills"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: "Joe Rocha's Front-end Skills."
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BannerLanding__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Front-end Skills",
    description: 'Tech on Tech on Tech',
    bgImage: "../static/images/js.jpg",
    colorOverlay: "#000"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "main"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "one"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "major"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "My Toolbox")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "two",
    className: "spotlights"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "image"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://brainhub.eu/blog/wp-content/uploads/2018/06/react-libraries-javascript-professional-should-know-featured.png",
    alt: "React"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "major"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "React, CSS-in-JS, and State Management")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "My current favorites, as you'll find that this site is built in React with styled components. With these libraries, I'm able to rapidly build out reusable UI components in JSX and CSS-in-JS. Unidirectional data flows, integrated DevTools and auto optimization is just a few reasons I enjoy React. Add a state management library like MobX or Redux and now we can build a large-scale React app.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "image"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../static/images/babel.png",
    alt: "Acura Newsletter"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "major"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "ES6, Babel, and webpack")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Want a blazing fast website that is compatible with all browser types? You're going to need Babel and webpack. This will allow us to leverage the latest features as well in ES6+. I've been scoring around ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "98 score"), " on Google Page Speed thanks to these tools!")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "image"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "../static/images/node.png",
    alt: "UCLA Campus"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "major"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Node & Everything else")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Thanks to Node.js, JavaScript is no longer limited to the front-end. I've been using Node, Express and Next.JS to deliver sites like this one for the last few years. Other tools that I enjoy leveraging, include NPM, Yarn, Gulp, Grunt, CSS3, HTML5 and more."))))))));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/frontend")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=frontend.js.09a9d663273c059795af.hot-update.js.map