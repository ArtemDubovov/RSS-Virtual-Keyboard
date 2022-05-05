/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  padding-top: 50px;\\n  background-color: rgb(241, 223, 241);\\n}\\nbody textarea {\\n  width: 820px;\\n  display: block;\\n  margin: 0px auto 100px;\\n  padding-bottom: 50px;\\n  height: 250px;\\n  padding: 15px;\\n  font-size: 18px;\\n  font-family: sans-serif;\\n}\\nbody .keyboard {\\n  background-color: #33CCCC;\\n  padding: 10px;\\n  box-sizing: content-box;\\n  border: 5px solid black;\\n  border-radius: 15px;\\n  margin: auto;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-wrap: wrap;\\n  gap: 5px;\\n  width: 820px;\\n}\\nbody .keyboard button {\\n  height: 48px;\\n  min-width: 48px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border: none;\\n  transition: border-radius 0.3s, background-color 0.3s;\\n  background-color: #009999;\\n  border-radius: 5px;\\n  color: rgb(241, 223, 241);\\n  padding: 10px;\\n  border: 1px solid #009999;\\n}\\nbody .keyboard button:hover {\\n  background-color: #5CCCCC;\\n  border: 1px solid #006363;\\n}\\nbody .keyboard button:active {\\n  background-color: #FF7400;\\n  border: 1px solid #006363;\\n}\\nbody .keyboard button[data-value=Enter] {\\n  width: 130px;\\n}\\nbody .keyboard button[data-value=ShiftLeft] {\\n  width: 114px;\\n}\\nbody .keyboard button[data-value=ShiftRight] {\\n  width: 96px;\\n}\\nbody .keyboard button[data-value=Space] {\\n  width: 345px;\\n}\\nbody .keyboard button[data-value=Tab] {\\n  width: 58px;\\n}\\nbody .keyboard .button-active {\\n  border-radius: 25px;\\n  background-color: #FF7400;\\n}\\nbody .keyboard .button-option {\\n  background-color: #006363;\\n}\\nbody .keyboard .button-container {\\n  color: #fff;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://rss-virtual-keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://rss-virtual-keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://rss-virtual-keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://rss-virtual-keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://rss-virtual-keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://rss-virtual-keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://rss-virtual-keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://rss-virtual-keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _scripts_modules_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../scripts/modules/createClass */ \"./src/scripts/modules/createClass.js\");\n/* harmony import */ var _scripts_modules_data_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../scripts/modules/data/buttons */ \"./src/scripts/modules/data/buttons.js\");\n/* harmony import */ var _scripts_modules_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../scripts/modules/wrapper */ \"./src/scripts/modules/wrapper.js\");\n/* harmony import */ var _scripts_modules_area__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../scripts/modules/area */ \"./src/scripts/modules/area.js\");\n/* harmony import */ var _scripts_modules_optionsLogic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../scripts/modules/optionsLogic */ \"./src/scripts/modules/optionsLogic.js\");\n/* harmony import */ var _modules_resize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/resize */ \"./src/scripts/modules/resize.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet listButtons = [];\r\nconst sizeAndFormatLanguage = { \r\n    lang : 0,                    // lang 0 - eng,   1 - rus\r\n    size : 0,                    // size 0 - lower, 1 - uppers\r\n}\r\n\r\n// initial keyboard\r\n\r\n\r\n\r\nlet area = (0,_scripts_modules_area__WEBPACK_IMPORTED_MODULE_4__.createArea)();\r\n\r\ndocument.body.appendChild(area);\r\nlet keyboard = (0,_scripts_modules_wrapper__WEBPACK_IMPORTED_MODULE_3__.createKeyboard)();\r\n// create buttons\r\n\r\nfor(let el of _scripts_modules_data_buttons__WEBPACK_IMPORTED_MODULE_2__.BUTTONS){\r\n    let button = new _scripts_modules_createClass__WEBPACK_IMPORTED_MODULE_1__.Button(el.options, el.keys);\r\n    let btn;\r\n    if(el.options){\r\n        btn = button.createButton('button-option', el.keys, el.keycode);\r\n    } else { \r\n        btn = button.createButton('button', el.keys[sizeAndFormatLanguage.lang][sizeAndFormatLanguage.size], el.keycode);\r\n        btn.dataValues = [el.keys[0][0], el.keys[0][1], el.keys[1][0], el.keys[1][1]];\r\n    }\r\n    \r\n    console.log(btn.dataValues);\r\n    listButtons.push(btn);\r\n    keyboard.appendChild(btn);\r\n}\r\n\r\n// events body\r\n\r\ndocument.body.addEventListener('keydown', (event) =>{\r\n    let listButtons = keyboard.children;\r\n    if(event.code == 'CapsLock'){\r\n        let btn = document.querySelector(`[data-value=${event.code}]`);\r\n        btn.classList.toggle('button-active');\r\n        (0,_scripts_modules_optionsLogic__WEBPACK_IMPORTED_MODULE_5__.checkOptions)(event.code, listButtons, _modules_resize__WEBPACK_IMPORTED_MODULE_6__.resize, sizeAndFormatLanguage);\r\n        return;\r\n    }\r\n    (0,_scripts_modules_optionsLogic__WEBPACK_IMPORTED_MODULE_5__.checkOptions)(event.code, listButtons, _modules_resize__WEBPACK_IMPORTED_MODULE_6__.resize, sizeAndFormatLanguage);\r\n    let btn = document.querySelector(`[data-value=${event.code}]`);\r\n    btn.classList.add('button-active');\r\n    event.target.removeEventListener('keydown', _scripts_modules_optionsLogic__WEBPACK_IMPORTED_MODULE_5__.checkOptions);\r\n\r\n   \r\n\r\n});\r\n\r\ndocument.body.addEventListener('keyup', (event) => {\r\n    if(event.code == 'CapsLock'){\r\n        return;\r\n    }\r\n    let listButtons = keyboard.children;\r\n    (0,_scripts_modules_optionsLogic__WEBPACK_IMPORTED_MODULE_5__.checkOptions)(event.code, listButtons, _modules_resize__WEBPACK_IMPORTED_MODULE_6__.resize, sizeAndFormatLanguage);\r\n    let btn = document.querySelector(`[data-value=${event.code}]`);\r\n    btn.classList.remove('button-active');\r\n})\r\n\r\nkeyboard.addEventListener('click', (event) => {\r\n    console.log(event.target);\r\n})\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/modules/area.js":
/*!*************************************!*\
  !*** ./src/scripts/modules/area.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createArea\": () => (/* binding */ createArea)\n/* harmony export */ });\nfunction createArea(){\r\n    let area = document.createElement('textarea');\r\n    area.setAttribute('autofocus', 'autofocus');\r\n    return area;\r\n}\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/scripts/modules/area.js?");

/***/ }),

/***/ "./src/scripts/modules/createClass.js":
/*!********************************************!*\
  !*** ./src/scripts/modules/createClass.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": () => (/* binding */ Button)\n/* harmony export */ });\n//language - 0 : english, 1 : russian\r\n\r\nclass Button{\r\n    constructor(options, keys, ){\r\n        this.options = options, \r\n        keys = keys;\r\n    }\r\n\r\n    createButton(styleButton, startValue, setAttrValue){\r\n\r\n        let btn = document.createElement('button');\r\n        btn.classList.add(styleButton);\r\n        btn.textContent = startValue;\r\n        btn.setAttribute('data-value', setAttrValue);\r\n       \r\n        return btn;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/scripts/modules/createClass.js?");

/***/ }),

/***/ "./src/scripts/modules/data/buttons.js":
/*!*********************************************!*\
  !*** ./src/scripts/modules/data/buttons.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BUTTONS\": () => (/* binding */ BUTTONS)\n/* harmony export */ });\n// options: false, keys [english], [russian]\r\n\r\nconst BUTTONS = [\r\n    {   \r\n        keycode: 'Backquote',\r\n        options: false, \r\n        keys : [['`','~'], ['ё', 'Ё']],\r\n    },\r\n    {\r\n        keycode: 'Digit1',\r\n        options: false, \r\n        keys : [['1','!'], ['1', '!']],\r\n    },\r\n    {   \r\n        keycode: 'Digit2',\r\n        options: false, \r\n        keys : [['2','@'], ['2', '\\\"']],\r\n    },\r\n    {  \r\n         keycode: 'Digit3',\r\n        options: false, \r\n        keys : [['3','#'], ['3', '№']],\r\n    },\r\n    {   \r\n        keycode: 'Digit4',\r\n        options: false, \r\n        keys : [['4','$'], ['4', ';']],\r\n    },\r\n    {\r\n        keycode: 'Digit5',\r\n        options: false, \r\n        keys : [['5','%'], ['5', '%']],\r\n    },\r\n    {\r\n        keycode: 'Digit6',\r\n        options: false, \r\n        keys : [['6','^'], ['6', ':']],\r\n    },\r\n    {\r\n        keycode: 'Digit7',\r\n        options: false, \r\n        keys : [['7','&'], ['7', '?']],\r\n    },\r\n    {\r\n        keycode: 'Digit8',\r\n        options: false, \r\n        keys : [['8','*'], ['8', '*']],\r\n    },\r\n    {\r\n        keycode: 'Digit9',\r\n        options: false,\r\n        keys : [['9','('], ['9', '(']],\r\n    },\r\n    {\r\n        keycode: 'Digit0',\r\n        options: false, \r\n        keys : [['0',')'], ['0', ')']],\r\n    },\r\n    {\r\n        keycode: 'Minus',\r\n        options: false, \r\n        keys : [['-','_'], ['-', '_']],\r\n    },\r\n    {\r\n        keycode: 'Equal',\r\n        options: false, \r\n        keys : [['=','+'], ['=', '+']],\r\n    },\r\n    {\r\n        keycode: 'Backspace',\r\n        options: true,\r\n        keys : 'Backspace',\r\n    },\r\n    {\r\n        keycode: 'Tab',\r\n        options: true, \r\n        keys : 'Tab',\r\n    },\r\n    {\r\n        keycode: 'KeyQ',\r\n        options: false, \r\n        keys : [['q','Q'], ['й', 'Й']],\r\n    },\r\n    {\r\n        keycode: 'KeyW',\r\n        options: false, \r\n        keys : [['w','W'], ['ц', 'Ц']],\r\n    },\r\n    {\r\n        keycode: 'KeyE',\r\n        options: false, \r\n        keys : [['e','E'], ['у', 'У']],\r\n    },\r\n    {\r\n        keycode: 'KeyR',\r\n        options: false, \r\n        keys : [['r','R'], ['к', 'К']],\r\n    },\r\n    {\r\n        keycode: 'KeyT',\r\n        options: false, \r\n        keys : [['t','T'], ['е', 'Е']],\r\n    },\r\n    {\r\n        keycode: 'KeyY',\r\n        options: false, \r\n        keys : [['y','Y'], ['н', 'Н']],\r\n    },\r\n    {\r\n        keycode: 'KeyU',\r\n        options: false, \r\n        keys : [['u','U'], ['г', 'Г']],\r\n    },\r\n    {\r\n        keycode: 'KeyI',\r\n        options: false, \r\n        keys : [['i','I'], ['ш', 'Ш']],\r\n    },\r\n    {\r\n        keycode: 'KeyO',\r\n        options: false, \r\n        keys : [['o','O'], ['щ', 'Щ']],\r\n    },\r\n    {\r\n        keycode: 'KeyP',\r\n        options: false, \r\n        keys : [['p','P'], ['з', 'З']],\r\n    },\r\n    {\r\n        keycode: 'BracketLeft',\r\n        options: false, \r\n        keys : [['[','{'], ['х', 'Х']],\r\n    },\r\n    {\r\n        keycode: 'BracketRight',\r\n        options: false, \r\n        keys : [[']','}'], ['ъ', 'Ъ']],\r\n    },\r\n    {\r\n        keycode: 'Backslash',\r\n        options: false, \r\n        keys : [['\\\\','|'], ['\\\\', '/']],\r\n    },\r\n    {\r\n        keycode: 'Delete',\r\n        options: true, \r\n        keys : 'Del',\r\n    },\r\n    {\r\n        keycode: 'CapsLock',\r\n        options: true, \r\n        keys : 'CapsLock',\r\n    },\r\n    {\r\n        keycode: 'KeyA',\r\n        options: false, \r\n        keys : [['a','A'], ['ф', 'Ф']],\r\n    },\r\n    {\r\n        keycode: 'KeyS',\r\n        options: false, \r\n        keys : [['s','S'], ['ы', 'Ы']],\r\n    },\r\n    {\r\n        keycode: 'KeyD',\r\n        options: false, \r\n        keys : [['d','D'], ['в', 'В']],\r\n    },\r\n    {\r\n        keycode: 'KeyF',\r\n        options: false, \r\n        keys : [['f','F'], ['а', 'А']],\r\n    },\r\n    {\r\n        keycode: 'KeyG',\r\n        options: false, \r\n        keys : [['g','G'], ['п', 'П']],\r\n    },\r\n    {\r\n        keycode: 'KeyH',\r\n        options: false, \r\n        keys : [['h','H'], ['р', 'Р']],\r\n    },\r\n    {\r\n        keycode: 'KeyJ',\r\n        options: false, \r\n        keys : [['j','J'], ['о', 'О']],\r\n    },\r\n    {\r\n        keycode: 'KeyK',\r\n        options: false, \r\n        keys : [['k','K'], ['л', 'Л']],\r\n    },\r\n    {\r\n        keycode: 'KeyL',\r\n        options: false, \r\n        keys : [['l','L'], ['д', 'Д']],\r\n    },\r\n    {\r\n        keycode: 'Semicolon',\r\n        options: false, \r\n        keys : [[';',':'], ['ж', 'Ж']],\r\n    },\r\n    {\r\n        keycode: 'Quote',\r\n        options: false, \r\n        keys : [['\\'','\\\"'], ['э', 'Э']],\r\n    },\r\n    {\r\n        keycode: 'Enter',\r\n        options: true, \r\n        keys : 'Enter',\r\n    },\r\n    {\r\n        keycode: 'ShiftLeft',\r\n        options: true, \r\n        keys : 'Shift',\r\n    },\r\n    {\r\n        keycode: 'KeyZ',\r\n        options: false, \r\n        keys : [['z','Z'], ['я', 'Я']],\r\n    },\r\n    {\r\n        keycode: 'KeyX',\r\n        options: false, \r\n        keys : [['x','X'], ['ч', 'Ч']],\r\n    },\r\n    {\r\n        keycode: 'KeyC',\r\n        options: false, \r\n        keys : [['c','C'], ['с', 'С']],\r\n    },\r\n    {\r\n        keycode: 'KeyV',\r\n        options: false, \r\n        keys : [['v','V'], ['м', 'М']],\r\n    },\r\n    {\r\n        keycode: 'KeyB',\r\n        options: false, \r\n        keys : [['b','B'], ['и', 'И']],\r\n    },\r\n    {\r\n        keycode: 'KeyN',\r\n        options: false, \r\n        keys : [['n','N'], ['т', 'Т']],\r\n    },\r\n    {\r\n        keycode: 'KeyM',\r\n        options: false, \r\n        keys : [['m','M'], ['ь', 'Ь']],\r\n    },\r\n    {\r\n        keycode: 'Comma',\r\n        options: false, \r\n        keys : [[',','<'], ['б', 'Б']],\r\n    },\r\n    {\r\n        keycode: 'Period',\r\n        options: false, \r\n        keys : [['.','>'], ['ю', 'Ю']],\r\n    },\r\n    {\r\n        keycode: 'Slash',\r\n        options: false, \r\n        keys : [['/','?'], ['.', ',']],\r\n    },\r\n    {\r\n        keycode: 'ArrowUp',\r\n        options: true, \r\n        keys : '▲',\r\n    },\r\n    {\r\n        keycode: 'ShiftRight',\r\n        options: true, \r\n        keys : 'Shift',\r\n    },\r\n    {\r\n        keycode: 'ControlLeft',\r\n        options: true, \r\n        keys : 'Ctrl',\r\n    },\r\n    {\r\n        keycode: 'MetaLeft',\r\n        options: true, \r\n        keys : 'Win',\r\n    },\r\n    {\r\n        keycode: 'AltLeft',\r\n        options: true, \r\n        keys : 'Alt',\r\n    },\r\n    {\r\n        keycode: 'Space',\r\n        options: true, \r\n        keys : 'Space',\r\n    },\r\n    {\r\n        keycode: 'AltRight',\r\n        options: true, \r\n        keys : 'Alt',\r\n    },\r\n    {\r\n        keycode: 'ArrowLeft',\r\n        options: true, \r\n        keys : '◄',\r\n    },\r\n    {\r\n        keycode: 'ArrowDown',\r\n        options: true, \r\n        keys : '▼',\r\n    },\r\n    {\r\n        keycode: 'ArrowRight',\r\n        options: true, \r\n        keys : '►',\r\n    },\r\n    {\r\n        keycode: 'ControlRight',\r\n        options: true, \r\n        keys : 'Ctrl',\r\n    },\r\n]\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/scripts/modules/data/buttons.js?");

/***/ }),

/***/ "./src/scripts/modules/optionsLogic.js":
/*!*********************************************!*\
  !*** ./src/scripts/modules/optionsLogic.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkOptions\": () => (/* binding */ checkOptions)\n/* harmony export */ });\nfunction checkOptions(key, listButtons, resize, sizeAndFormatLanguage){\r\n    switch(key){\r\n        case 'CapsLock':\r\n            let regExp = /^Key/i;\r\n            resize(listButtons, sizeAndFormatLanguage, true, regExp);\r\n            break;\r\n        case 'ShiftRight':\r\n        case 'ShiftLeft':\r\n            resize(listButtons, sizeAndFormatLanguage, false);\r\n            break;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/scripts/modules/optionsLogic.js?");

/***/ }),

/***/ "./src/scripts/modules/resize.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/resize.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resize\": () => (/* binding */ resize)\n/* harmony export */ });\nfunction resize(parent, sizeAndFormatLanguage, checkRegExp = false, regExp = '/.+/gi'){\r\n    for(let el of parent){\r\n        if(!el.dataValues){\r\n            continue;\r\n        }\r\n        if(checkRegExp){\r\n            if(!regExp.test(el.dataset.value)) continue;} \r\n        if(sizeAndFormatLanguage.size == 0 && sizeAndFormatLanguage.lang == 0){\r\n            el.textContent = el.dataValues[1];\r\n        } else if(sizeAndFormatLanguage.size == 1 && sizeAndFormatLanguage.lang == 0){\r\n            el.textContent = el.dataValues[0];\r\n        } else if(sizeAndFormatLanguage.size == 0 && sizeAndFormatLanguage.lang == 1){\r\n            el.textContent = el.dataValues[3];\r\n        } else if(sizeAndFormatLanguage.size == 1 && sizeAndFormatLanguage.lang == 1){\r\n            el.textContent = el.dataValues[2];\r\n        }\r\n    }\r\n    if(sizeAndFormatLanguage.size == 0){\r\n        sizeAndFormatLanguage.size = 1;\r\n    } else {\r\n        sizeAndFormatLanguage.size = 0;\r\n    }\r\n}\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/scripts/modules/resize.js?");

/***/ }),

/***/ "./src/scripts/modules/wrapper.js":
/*!****************************************!*\
  !*** ./src/scripts/modules/wrapper.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createKeyboard\": () => (/* binding */ createKeyboard)\n/* harmony export */ });\nfunction createKeyboard(){\r\n    const WRAPPER = document.createElement('section');\r\n    // for(let i = 0; i < 5; i++){\r\n    //     let row = document.createElement('div');\r\n    //     row.classList.add('row');\r\n    //     WRAPPER.appendChild(row);\r\n    // }\r\n    WRAPPER.classList.add('keyboard');\r\n    document.body.appendChild(WRAPPER);\r\n    return WRAPPER;\r\n}\n\n//# sourceURL=webpack://rss-virtual-keyboard/./src/scripts/modules/wrapper.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;