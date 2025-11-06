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

eval("document.querySelectorAll(\".datepicker-wrapper\").forEach((wrapper) => {\n  const textInput = wrapper.querySelector(\".text-input\");\n  const dateInput = wrapper.querySelector(\".datepicker-input\");\n\n  dateInput.addEventListener(\"change\", (event) => {\n    textInput.textContent = event.target.value;\n    wrapper.classList.add(\"init\");\n\n    wrapper.querySelector(\".select-icon\").classList.remove(\"rotate-180\");\n    event.target.value = \"\";\n  });\n});\n\n\n//# sourceURL=webpack://blood/./src/assets/js/dp.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/assets/js/dp.js"));
/******/ }
]);