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

/***/ 433:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const helpers_1 = __webpack_require__(827);
const createTagNew = () => {
    const div = document.createElement('div');
    div.classList.add('restaurants--card-new');
    return div;
};
const createRestaurantCard = (data) => {
    const article = document.createElement('article');
    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.classList.add('restaurants--card');
    const divCardImg = document.createElement('div');
    divCardImg.classList.add('restaurants--card-img');
    if (data.tagNew === true)
        divCardImg.appendChild(createTagNew());
    const img = document.createElement('img');
    img.src = data.img;
    img.alt = `restaurant ${data.desc.title}`;
    divCardImg.appendChild(img);
    anchor.append(divCardImg);
    const divDesc = document.createElement('div');
    divDesc.classList.add('restaurants--card-desc');
    const divDescText = document.createElement('div');
    divDescText.classList.add('restaurants--card-text');
    const h2 = document.createElement('h2');
    h2.textContent = data.desc.title;
    const p = document.createElement('p');
    p.textContent = data.desc.location;
    divDescText.append(h2, p);
    const divLikeIcon = document.createElement('div');
    divLikeIcon.classList.add('icon-like');
    const label = document.createElement('label');
    label.htmlFor = `like-${(0, helpers_1.replateSpaceString)(data.desc.title)}`;
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = `like-${(0, helpers_1.replateSpaceString)(data.desc.title)}`;
    input.id = `like-${(0, helpers_1.replateSpaceString)(data.desc.title)}`;
    const iSolid = document.createElement('i');
    iSolid.classList.add('fa-solid', 'fa-heart', 'icon-solid');
    const iRegular = document.createElement('i');
    iRegular.classList.add('fa-regular', 'fa-heart', 'icon-regular');
    label.append(input, iSolid, iRegular);
    divLikeIcon.append(label);
    divDesc.append(divDescText, divLikeIcon);
    anchor.append(divCardImg, divDesc);
    article.append(anchor);
    return article;
};
exports["default"] = createRestaurantCard;


/***/ }),

/***/ 827:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.replateSpaceString = void 0;
const replateSpaceString = (text) => {
    return `${text.toLocaleLowerCase().replace(/\s/g, '')}`;
};
exports.replateSpaceString = replateSpaceString;


/***/ }),

/***/ 294:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createHomepage = void 0;
const restaurantCard_1 = __importDefault(__webpack_require__(433));
const datas_1 = __webpack_require__(819);
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
const createSectionRestaurants = () => {
    const section = document.createElement('section');
    section.classList.add('section', 'section--restaurants');
    const h1 = document.createElement('h1');
    h1.textContent = 'Restaurants';
    const divRestaurantsCard = document.createElement('div');
    divRestaurantsCard.classList.add('restaurants--cards');
    datas_1.dummyRestaurantData.map(restaurant => divRestaurantsCard.append((0, restaurantCard_1.default)(restaurant)));
    section.append(h1, divRestaurantsCard);
    return section;
};
const createHomepage = () => {
    main.append(createSectionExplore(), createSectionHowto(), createSectionRestaurants());
};
exports.createHomepage = createHomepage;


/***/ }),

/***/ 819:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dummyRestaurantData = void 0;
const jay_wennington_N_Y88TWmGwA_unsplash_jpg_1 = __importDefault(__webpack_require__(120));
const louis_hansel_shotsoflouis_qNBGVyOCY8Q_unsplash_jpg_1 = __importDefault(__webpack_require__(554));
const stil_u2Lp8tXIcjw_unsplash_jpg_1 = __importDefault(__webpack_require__(759));
const toa_heftiba_DQKerTsQwi0_unsplash_jpg_1 = __importDefault(__webpack_require__(995));
exports.dummyRestaurantData = [
    {
        tagNew: true,
        img: jay_wennington_N_Y88TWmGwA_unsplash_jpg_1.default,
        desc: {
            title: 'La Palette du gout',
            location: 'Menilmontant'
        }
    },
    {
        tagNew: true,
        img: toa_heftiba_DQKerTsQwi0_unsplash_jpg_1.default,
        desc: {
            title: 'La note enchantee',
            location: 'Charonne'
        }
    },
    {
        tagNew: false,
        img: stil_u2Lp8tXIcjw_unsplash_jpg_1.default,
        desc: {
            title: 'A la francaise',
            location: 'Cite Rouge'
        }
    },
    {
        tagNew: false,
        img: louis_hansel_shotsoflouis_qNBGVyOCY8Q_unsplash_jpg_1.default,
        desc: {
            title: 'Les delices des sens',
            location: 'Folie-Mericourt'
        }
    }
];


/***/ }),

/***/ 120:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/a4f8ff417d5edf70e6c0.jpg";

/***/ }),

/***/ 554:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/09d204ed638b7fa6d5b2.jpg";

/***/ }),

/***/ 759:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/4e7cf3326cf48aa765f6.jpg";

/***/ }),

/***/ 995:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/images/7117d0406a6abbc82d57.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(607));
/******/ }
]);
//# sourceMappingURL=main941d75e902cc34699cea.js.map