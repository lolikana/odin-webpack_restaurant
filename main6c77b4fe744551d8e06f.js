"use strict";
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([[179],{

/***/ 208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 607:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_require__(208);
const ts_1 = __webpack_require__(294);
(0, ts_1.createHomepage)();


/***/ }),

/***/ 294:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createHomepage = void 0;
const main = document.getElementById('main');
const createSectionExplore = () => {
    const section = document.createElement('section');
    section.classList.add('section', 'section--explore');
    const divCurrent = document.createElement('div');
    const pCurrent = document.createElement('p');
    divCurrent.classList.add('section--explore-current');
    pCurrent.classList.add('section--explore-city', 'icon-solid');
    pCurrent.textContent = 'Paris, Belleville';
    divCurrent.appendChild(pCurrent);
    const divFind = document.createElement('div');
    const h1Find = document.createElement('h1');
    const pFind = document.createElement('p');
    const anchorFind = document.createElement('a');
    divFind.classList.add('section--explore-find');
    h1Find.textContent = 'Order the menu that fit you';
    pFind.textContent = 'Find some outstanding restaurants selected with care by our team';
    anchorFind.href = '#';
    anchorFind.classList.add('btn', 'btn-main');
    anchorFind.textContent = 'Explore our restaurants';
    divFind.append(h1Find, pFind, anchorFind);
    section.append(divCurrent, divFind);
    return section;
};
const howtoListData = [
    {
        id: '1',
        text: 'Choose a restaurant'
    },
    {
        id: '2',
        text: 'Arrange your menu'
    },
    {
        id: '3',
        text: 'Enjoy on site'
    }
];
const createHowtoList = (data) => {
    const li = document.createElement('li');
    li.setAttribute('data-howto', data.id);
    li.textContent = data.text;
    return li;
};
const createSectionHowto = () => {
    const section = document.createElement('section');
    section.classList.add('section', 'section--howto');
    const h1 = document.createElement('h1');
    const ul = document.createElement('ul');
    ul.classList.add('section--howto-list');
    howtoListData.map(item => ul.append(createHowtoList(item)));
    section.append(h1, ul);
    return section;
};
const createHomepage = () => {
    main.append(createSectionExplore(), createSectionHowto());
};
exports.createHomepage = createHomepage;


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(607));
/******/ }
]);
//# sourceMappingURL=main6c77b4fe744551d8e06f.js.map