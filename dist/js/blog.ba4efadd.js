/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblood"] = self["webpackChunkblood"] || []).push([["blog"],{

/***/ "./src/assets/js/nav.js":
/*!******************************!*\
  !*** ./src/assets/js/nav.js ***!
  \******************************/
/***/ (() => {

eval("const toggleBtn = document.getElementById(\"mobile-nav-toggle\");\r\nconst nav = document.getElementById(\"mobile-nav\");\r\nconst backdrop = document.getElementById(\"mobile-nav-backdrop\");\r\n\r\nlet navOpen = false;\r\n\r\nfunction openNav() {\r\n  nav.classList.remove(\"opacity-0\", \"pointer-events-none\");\r\n  nav.classList.add(\"opacity-100\", \"pointer-events-auto\");\r\n\r\n  backdrop.classList.remove(\"opacity-0\", \"pointer-events-none\");\r\n  backdrop.classList.add(\"opacity-100\", \"pointer-events-auto\");\r\n\r\n  toggleBtn.classList.add(\"toggled\");\r\n  toggleBtn.parentElement.classList.add(\"has-toggled\");\r\n\r\n  navOpen = true;\r\n}\r\n\r\nfunction closeNav() {\r\n  nav.classList.remove(\"opacity-100\", \"pointer-events-auto\");\r\n  nav.classList.add(\"opacity-0\", \"pointer-events-none\");\r\n\r\n  backdrop.classList.remove(\"opacity-100\", \"pointer-events-auto\");\r\n  backdrop.classList.add(\"opacity-0\", \"pointer-events-none\");\r\n\r\n  toggleBtn.classList.remove(\"toggled\");\r\n  toggleBtn.parentElement.classList.remove(\"has-toggled\");\r\n\r\n  navOpen = false;\r\n}\r\n\r\ntoggleBtn.addEventListener(\"click\", (e) => {\r\n  e.stopPropagation();\r\n  navOpen ? closeNav() : openNav();\r\n});\r\n\r\nbackdrop.addEventListener(\"click\", (e) => {\r\n  if (navOpen && !nav.contains(e.target) && e.target !== toggleBtn) {\r\n    closeNav();\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://blood/./src/assets/js/nav.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/assets/js/nav.js"));
/******/ }
]);