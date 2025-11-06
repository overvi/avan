/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblood"] = self["webpackChunkblood"] || []).push([["blog.1"],{

/***/ "./src/assets/js/blog.js":
/*!*******************************!*\
  !*** ./src/assets/js/blog.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/assets/js/nav.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nav__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack://blood/./src/assets/js/blog.js?");

/***/ }),

/***/ "./src/assets/js/nav.js":
/*!******************************!*\
  !*** ./src/assets/js/nav.js ***!
  \******************************/
/***/ (() => {

eval("const toggleBtn = document.getElementById(\"mobile-nav-toggle\");\nconst nav = document.getElementById(\"mobile-nav\");\nconst backdrop = document.getElementById(\"mobile-nav-backdrop\");\nconst closeBtn = document.getElementById(\"close-nav\");\n\nif (closeBtn) {\n  closeBtn.addEventListener(\"click\", () => {\n    if (navOpen) closeNav();\n  });\n}\n\n\n\nlet navOpen = false;\n\nfunction openNav() {\n  nav.classList.remove(\"opacity-0\", \"pointer-events-none\");\n  nav.classList.add(\"opacity-100\", \"pointer-events-auto\");\n\n  backdrop.classList.remove(\"opacity-0\", \"pointer-events-none\");\n  backdrop.classList.add(\"opacity-100\", \"pointer-events-auto\");\n\n  toggleBtn.classList.add(\"toggled\");\n  toggleBtn.parentElement.classList.add(\"has-toggled\");\n\n  navOpen = true;\n}\n\nfunction closeNav() {\n  nav.classList.remove(\"opacity-100\", \"pointer-events-auto\");\n  nav.classList.add(\"opacity-0\", \"pointer-events-none\");\n\n  backdrop.classList.remove(\"opacity-100\", \"pointer-events-auto\");\n  backdrop.classList.add(\"opacity-0\", \"pointer-events-none\");\n\n  toggleBtn.classList.remove(\"toggled\");\n  toggleBtn.parentElement.classList.remove(\"has-toggled\");\n\n  navOpen = false;\n}\n\ntoggleBtn.addEventListener(\"click\", (e) => {\n  e.stopPropagation();\n  navOpen ? closeNav() : openNav();\n});\n\nbackdrop.addEventListener(\"click\", (e) => {\n  if (navOpen && !nav.contains(e.target) && e.target !== toggleBtn) {\n    closeNav();\n  }\n});\n\n\n//# sourceURL=webpack://blood/./src/assets/js/nav.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/assets/js/blog.js"));
/******/ }
]);