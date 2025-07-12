/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkblood"] = self["webpackChunkblood"] || []).push([["dp"],{

/***/ "./src/assets/js/dp.js":
/*!*****************************!*\
  !*** ./src/assets/js/dp.js ***!
  \*****************************/
/***/ (() => {

eval("document.querySelectorAll(\".datepicker-wrapper\").forEach((wrapper) => {\r\n  const textInput = wrapper.querySelector(\".text-input\");\r\n  const dateInput = wrapper.querySelector(\".datepicker-input\");\r\n\r\n  dateInput.addEventListener(\"change\", (event) => {\r\n    textInput.textContent = event.target.value;\r\n    wrapper.classList.add(\"init\");\r\n\r\n    wrapper.querySelector(\".select-icon\").classList.remove(\"rotate-180\");\r\n    event.target.value = \"\";\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://blood/./src/assets/js/dp.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/assets/js/dp.js"));
/******/ }
]);