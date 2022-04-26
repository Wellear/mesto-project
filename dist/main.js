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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ \"./pages/index.css\");\n\nvar profilePopup = document.querySelector('#popupProfile');\nvar elementsPopup = document.querySelector('#popupelements');\nvar imagePopup = document.querySelector('#imagePopup');\nvar elementsForm = elementsPopup.querySelector('#elementsForm');\nvar profileEditButton = document.querySelector('.profile__edit-button');\nvar elementsEditButton = document.querySelector('.profile__add-button');\nvar elementsImage = document.querySelector('elements__image');\nvar profileCloseButton = profilePopup.querySelector('#profileClose');\nvar elementsCloseButton = elementsPopup.querySelector('#elementsClose');\nvar imageCloseButton = imagePopup.querySelector('#imageClose');\nvar profileTitle = document.querySelector('.profile__title');\nvar profileAbout = document.querySelector('.profile__subtitle');\nvar profileForm = document.querySelector('.popup__form');\nvar nameInput = profilePopup.querySelector('#name');\nvar aboutInput = profilePopup.querySelector('#about');\nvar imageInPopup = imagePopup.querySelector('.popup__picture');\nvar imageTextInPopup = imagePopup.querySelector('.popup__text');\nvar elementsTemplate = document.querySelector('#elementsTemplate').content;\nvar elementsContainer = document.querySelector('.elements__list');\nvar cardTitle = document.querySelector('#imageTitle');\nvar cardLink = document.querySelector('#imageLink');\nvar initialCards = [{\n  name: 'Архыз',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'\n}, {\n  name: 'Челябинская область',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'\n}, {\n  name: 'Иваново',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'\n}, {\n  name: 'Камчатка',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'\n}, {\n  name: 'Холмогорский район',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'\n}, {\n  name: 'Байкал',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'\n}];\n\nfunction openPopup(popupId) {\n  popupId.classList.add('popup_opened');\n}\n\n;\n\nfunction closePopup(popupId) {\n  popupId.classList.remove('popup_opened');\n}\n\n;\n\nfunction submitFormHandler(evt) {\n  evt.preventDefault();\n  profileTitle.textContent = nameInput.value;\n  profileAbout.textContent = aboutInput.value;\n  closePopup(popupProfile);\n}\n\nfunction actualizationForm() {\n  nameInput.value = profileTitle.textContent;\n  aboutInput.value = profileAbout.textContent;\n}\n\nfunction clearForm(formId) {\n  formId.reset();\n}\n\nfunction createCard(name, link) {\n  var elementsElement = elementsTemplate.cloneNode(true);\n  var elementsImage = elementsElement.querySelector('#elementsImage');\n  elementsElement.querySelector('#elementsTitle').textContent = name;\n  elementsImage.setAttribute('src', link);\n  elementsImage.setAttribute('alt', name);\n  elementsElement.querySelector('.elements__like').addEventListener('click', function (evt) {\n    evt.target.classList.toggle('elements__like_active');\n  });\n  elementsElement.querySelector('#delButton').addEventListener('click', function (evt) {\n    evt.target.closest('#elementsItem').remove();\n  });\n\n  function addImageToPopup() {\n    openPopup(imagePopup);\n    imageInPopup.src = link;\n    imageInPopup.alt = name;\n    imageTextInPopup.textContent = name;\n  }\n\n  elementsImage.addEventListener('click', addImageToPopup);\n  return elementsElement;\n}\n\nelementsPopup.addEventListener('submit', function (evt) {\n  evt.preventDefault();\n  elementsContainer.prepend(createCard(cardTitle.value, cardLink.value));\n  clearForm(elementsForm);\n  closePopup(elementsPopup);\n});\nprofileEditButton.addEventListener('click', function () {\n  actualizationForm();\n  openPopup(profilePopup);\n});\nprofileCloseButton.addEventListener('click', function () {\n  closePopup(profilePopup);\n});\nelementsEditButton.addEventListener('click', function () {\n  openPopup(elementsPopup);\n});\nelementsCloseButton.addEventListener('click', function () {\n  clearForm(elementsForm);\n  closePopup(elementsPopup);\n});\nprofileForm.addEventListener('submit', submitFormHandler); //Благодарю\n\n;\ninitialCards.forEach(function (item) {\n  elementsContainer.prepend(createCard(item.name, item.link));\n});\nimageCloseButton.addEventListener('click', function () {\n  closePopup(imagePopup);\n});\n\n//# sourceURL=webpack://mesto-project/./src/index.js?");

/***/ }),

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project/./pages/index.css?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;