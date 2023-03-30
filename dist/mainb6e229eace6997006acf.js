"use strict";
(self["webpackChunkwebpack"] = self["webpackChunkwebpack"] || []).push([[179],{

/***/ 208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 607:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createMenuPage = void 0;
__webpack_require__(208);
const homepage_1 = __webpack_require__(941);
const menu_1 = __webpack_require__(385);
const main = document.getElementById('main');
const backHomeBtn = document.querySelector('.header--backhome');
const createHomepage = () => {
    main.append((0, homepage_1.createSectionExplore)(), (0, homepage_1.createSectionHowto)(), (0, homepage_1.createSectionRestaurants)());
};
createHomepage();
const createMenuPage = (dataRestaurant, dataMenu) => {
    main.textContent = '';
    main.classList.add('main--menu');
    backHomeBtn.style.display = 'block';
    main.append((0, menu_1.createTopPage)(dataRestaurant), (0, menu_1.createSectionMenu)(dataMenu));
};
exports.createMenuPage = createMenuPage;
backHomeBtn?.addEventListener('click', () => {
    main.textContent = '';
    main.classList.remove('main--menu');
    backHomeBtn.style.display = 'none';
    createHomepage();
});


/***/ }),

/***/ 744:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const helpers_1 = __webpack_require__(827);
const createDivIconLike = (title) => {
    const titleString = (0, helpers_1.replaceSpaceString)(title);
    const divLikeIcon = document.createElement('div');
    divLikeIcon.classList.add('icon-like');
    const label = document.createElement('label');
    label.htmlFor = `like-${titleString}`;
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = `like-${titleString}`;
    input.id = `like-${titleString}`;
    const iSolid = document.createElement('i');
    iSolid.classList.add('fa-solid', 'fa-heart', 'icon-solid');
    const iRegular = document.createElement('i');
    iRegular.classList.add('fa-regular', 'fa-heart', 'icon-regular');
    label.append(input, iSolid, iRegular);
    divLikeIcon.append(label);
    return divLikeIcon;
};
exports["default"] = createDivIconLike;


/***/ }),

/***/ 742:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const helpers_1 = __webpack_require__(827);
const createMenuDish = (restaurant, course, dish) => {
    const dishLabel = (0, helpers_1.replaceSpaceString)(dish.name);
    const restaurantString = (0, helpers_1.replaceSpaceString)(restaurant);
    const labelFor = `check-${restaurantString}-${course}-${dishLabel}`;
    const li = document.createElement('li');
    li.classList.add('menu--card');
    const label = document.createElement('label');
    label.htmlFor = labelFor;
    label.classList.add('menu--card-label');
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.name = labelFor;
    input.id = labelFor;
    const divDesc = document.createElement('div');
    divDesc.classList.add('menu--card-desc');
    const divDescText = document.createElement('div');
    divDescText.classList.add('desc--text');
    const h3 = document.createElement('h3');
    h3.classList.add('desc--text-title');
    h3.textContent = dish.name;
    const pText = document.createElement('p');
    pText.classList.add('desc--text-subTitle');
    pText.textContent = dish.desc;
    const pPrice = document.createElement('p');
    pPrice.classList.add('desc--price');
    pPrice.textContent = `${dish.price}$`;
    divDescText.append(h3, pText);
    divDesc.append(divDescText, pPrice);
    const divCheck = document.createElement('div');
    divCheck.classList.add('menu--card-check');
    const i = document.createElement('i');
    i.classList.add('fa-solid', 'fa-circle-check', 'icon-solid');
    divCheck.appendChild(i);
    label.append(input, divDesc, divCheck);
    li.append(label);
    return li;
};
const createMenuCard = (restaurant, menu, dishes) => {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    h2.textContent = menu;
    const ul = document.createElement('ul');
    ul.classList.add('menu--cards');
    dishes.map(dish => {
        ul.append(createMenuDish(restaurant, menu, dish));
    });
    article.append(h2, ul);
    return article;
};
exports["default"] = createMenuCard;


/***/ }),

/***/ 568:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const iconLike_1 = __importDefault(__webpack_require__(744));
const createTagNew = () => {
    const div = document.createElement('div');
    div.classList.add('restaurants--card-new');
    return div;
};
const createRestaurantCard = (data) => {
    const article = document.createElement('article');
    const button = document.createElement('button');
    button.classList.add('restaurants--card');
    button.setAttribute('data-restaurant', data.desc.title);
    const divCardImg = document.createElement('div');
    divCardImg.classList.add('restaurants--card-img');
    if (data.tagNew === true)
        divCardImg.appendChild(createTagNew());
    const img = document.createElement('img');
    img.src = data.img;
    img.alt = `restaurant ${data.desc.title}`;
    divCardImg.appendChild(img);
    button.append(divCardImg);
    const divDesc = document.createElement('div');
    divDesc.classList.add('restaurants--card-desc');
    const divDescText = document.createElement('div');
    divDescText.classList.add('restaurants--card-text');
    const h2 = document.createElement('h2');
    h2.textContent = data.desc.title;
    const p = document.createElement('p');
    p.textContent = data.desc.location;
    divDescText.append(h2, p);
    divDesc.append(divDescText, (0, iconLike_1.default)(data.desc.title));
    button.append(divCardImg, divDesc);
    article.append(button);
    return article;
};
exports["default"] = createRestaurantCard;


/***/ }),

/***/ 827:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.replaceSpaceString = void 0;
const replaceSpaceString = (text) => {
    return `${text.toLocaleLowerCase().replace(/\s/g, '')}`;
};
exports.replaceSpaceString = replaceSpaceString;


/***/ }),

/***/ 819:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.dummyRestaurantMenuData = exports.dummyRestaurantData = void 0;
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
exports.dummyRestaurantMenuData = [
    {
        restaurant: 'La Palette du gout',
        menu: [
            {
                course: 'starters',
                dishes: [
                    {
                        name: "Fricassée d'escargot",
                        desc: "Au piment d'Espelette",
                        price: 25
                    },
                    {
                        name: 'Foie gras de canard mi-cuit',
                        desc: 'Et ses copeaux de truffe noire',
                        price: 35
                    },
                    {
                        name: 'Œuf au plat',
                        desc: 'Assaisonné à la truffe sur lit de caviar',
                        price: 20
                    }
                ]
            },
            {
                course: 'mains',
                dishes: [
                    {
                        name: 'Filet de boeuf aux herbes',
                        desc: 'Accompagné de sa ribambelle de légumes',
                        price: 40
                    },
                    {
                        name: 'Parmentier de queue de boeuf',
                        desc: 'À la truffe noire sur sa purée de panais',
                        price: 35
                    },
                    {
                        name: 'Filet de turbot',
                        desc: 'Aux agrumes',
                        price: 44
                    }
                ]
            },
            {
                course: 'desserts',
                dishes: [
                    {
                        name: 'Paris-Brest',
                        desc: 'Revisité',
                        price: 18
                    },
                    {
                        name: "Macaron au chocolat d'exception",
                        desc: 'Et glace à la vanille de Madagascar',
                        price: 22
                    },
                    {
                        name: 'Mousse au chocolat',
                        desc: "Au piment d'Espelette et à la truffe noire",
                        price: 23
                    }
                ]
            }
        ]
    },
    {
        restaurant: 'La note enchantee',
        menu: [
            {
                course: 'starters',
                dishes: [
                    {
                        name: "Fricassée d'escargot",
                        desc: "Au piment d'Espelette",
                        price: 25
                    },
                    {
                        name: 'Foie gras de canard mi-cuit',
                        desc: 'Et ses copeaux de truffe noire',
                        price: 35
                    },
                    {
                        name: 'Œuf au plat',
                        desc: 'Assaisonné à la truffe sur lit de caviar',
                        price: 20
                    }
                ]
            },
            {
                course: 'mains',
                dishes: [
                    {
                        name: 'Filet de boeuf aux herbes',
                        desc: 'Accompagné de sa ribambelle de légumes',
                        price: 40
                    },
                    {
                        name: 'Parmentier de queue de boeuf',
                        desc: 'À la truffe noire sur sa purée de panais',
                        price: 35
                    },
                    {
                        name: 'Filet de turbot',
                        desc: 'Aux agrumes',
                        price: 44
                    }
                ]
            },
            {
                course: 'desserts',
                dishes: [
                    {
                        name: 'Paris-Brest',
                        desc: 'Revisité',
                        price: 18
                    },
                    {
                        name: "Macaron au chocolat d'exception",
                        desc: 'Et glace à la vanille de Madagascar',
                        price: 22
                    },
                    {
                        name: 'Mousse au chocolat',
                        desc: "Au piment d'Espelette et à la truffe noire",
                        price: 23
                    }
                ]
            }
        ]
    },
    {
        restaurant: 'A la francaise',
        menu: [
            {
                course: 'starters',
                dishes: [
                    {
                        name: "Fricassée d'escargot",
                        desc: "Au piment d'Espelette",
                        price: 25
                    },
                    {
                        name: 'Foie gras de canard mi-cuit',
                        desc: 'Et ses copeaux de truffe noire',
                        price: 35
                    },
                    {
                        name: 'Œuf au plat',
                        desc: 'Assaisonné à la truffe sur lit de caviar',
                        price: 20
                    }
                ]
            },
            {
                course: 'mains',
                dishes: [
                    {
                        name: 'Filet de boeuf aux herbes',
                        desc: 'Accompagné de sa ribambelle de légumes',
                        price: 40
                    },
                    {
                        name: 'Parmentier de queue de boeuf',
                        desc: 'À la truffe noire sur sa purée de panais',
                        price: 35
                    },
                    {
                        name: 'Filet de turbot',
                        desc: 'Aux agrumes',
                        price: 44
                    }
                ]
            },
            {
                course: 'desserts',
                dishes: [
                    {
                        name: 'Paris-Brest',
                        desc: 'Revisité',
                        price: 18
                    },
                    {
                        name: "Macaron au chocolat d'exception",
                        desc: 'Et glace à la vanille de Madagascar',
                        price: 22
                    },
                    {
                        name: 'Mousse au chocolat',
                        desc: "Au piment d'Espelette et à la truffe noire",
                        price: 23
                    }
                ]
            }
        ]
    },
    {
        restaurant: 'Les delices des sens',
        menu: [
            {
                course: 'starters',
                dishes: [
                    {
                        name: "Fricassée d'escargot",
                        desc: "Au piment d'Espelette",
                        price: 25
                    },
                    {
                        name: 'Foie gras de canard mi-cuit',
                        desc: 'Et ses copeaux de truffe noire',
                        price: 35
                    },
                    {
                        name: 'Œuf au plat',
                        desc: 'Assaisonné à la truffe sur lit de caviar',
                        price: 20
                    }
                ]
            },
            {
                course: 'mains',
                dishes: [
                    {
                        name: 'Filet de boeuf aux herbes',
                        desc: 'Accompagné de sa ribambelle de légumes',
                        price: 40
                    },
                    {
                        name: 'Parmentier de queue de boeuf',
                        desc: 'À la truffe noire sur sa purée de panais',
                        price: 35
                    },
                    {
                        name: 'Filet de turbot',
                        desc: 'Aux agrumes',
                        price: 44
                    }
                ]
            },
            {
                course: 'desserts',
                dishes: [
                    {
                        name: 'Paris-Brest',
                        desc: 'Revisité',
                        price: 18
                    },
                    {
                        name: "Macaron au chocolat d'exception",
                        desc: 'Et glace à la vanille de Madagascar',
                        price: 22
                    },
                    {
                        name: 'Mousse au chocolat',
                        desc: "Au piment d'Espelette et à la truffe noire",
                        price: 23
                    }
                ]
            }
        ]
    }
];


/***/ }),

/***/ 941:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createSectionRestaurants = exports.createSectionHowto = exports.createSectionExplore = void 0;
const __1 = __webpack_require__(607);
const restaurantCard_1 = __importDefault(__webpack_require__(568));
const datas_1 = __webpack_require__(819);
const createMenuListener = (e) => {
    const target = e.target;
    const clicked = target.closest('.restaurants--card');
    console.log(clicked);
    if (!clicked)
        return;
    const selectedRestaurant = clicked.dataset.restaurant;
    const dataRestaurant = datas_1.dummyRestaurantData.filter(restaurant => restaurant.desc.title === selectedRestaurant)[0];
    const dataMenu = datas_1.dummyRestaurantMenuData.filter(restaurant => restaurant.restaurant === selectedRestaurant)[0];
    (0, __1.createMenuPage)(dataRestaurant, dataMenu);
};
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
exports.createSectionExplore = createSectionExplore;
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
exports.createSectionHowto = createSectionHowto;
const createSectionRestaurants = () => {
    const section = document.createElement('section');
    section.classList.add('section', 'section--restaurants');
    const h1 = document.createElement('h1');
    h1.textContent = 'Restaurants';
    const divRestaurantsCard = document.createElement('div');
    divRestaurantsCard.classList.add('restaurants--cards');
    divRestaurantsCard.addEventListener('click', (e) => createMenuListener(e));
    datas_1.dummyRestaurantData.map(restaurant => divRestaurantsCard.append((0, restaurantCard_1.default)(restaurant)));
    section.append(h1, divRestaurantsCard);
    return section;
};
exports.createSectionRestaurants = createSectionRestaurants;


/***/ }),

/***/ 385:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createSectionMenu = exports.createTopPage = void 0;
const iconLike_1 = __importDefault(__webpack_require__(744));
const MenuCard_1 = __importDefault(__webpack_require__(742));
const createTopPage = (data) => {
    const div = document.createElement('div');
    div.classList.add('menu--top');
    const img = document.createElement('img');
    img.src = data.img;
    img.alt = `${data.desc.title} restaurant`;
    div.appendChild(img);
    return div;
};
exports.createTopPage = createTopPage;
const createSectionMenu = (data) => {
    const section = document.createElement('section');
    section.classList.add('section', 'section--menu');
    const divName = document.createElement('div');
    divName.classList.add('menu--name', 'font-logo');
    const h1 = document.createElement('h1');
    h1.textContent = data.restaurant;
    divName.append(h1, (0, iconLike_1.default)(data.restaurant));
    const divMenu = document.createElement('div');
    divMenu.classList.add('menu--carte');
    data.menu.map(item => {
        divMenu.append((0, MenuCard_1.default)(data.restaurant, item.course, item.dishes));
        section.append(divName, divMenu);
    });
    return section;
};
exports.createSectionMenu = createSectionMenu;


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
//# sourceMappingURL=mainb6e229eace6997006acf.js.map