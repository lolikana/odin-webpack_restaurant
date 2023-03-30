import './sass/style.scss';

import { IRestaurantCard, IRestaurantMenu } from './ts/libs/types';
import {
  createSectionExplore,
  createSectionHowto,
  createSectionRestaurants
} from './ts/pages/homepage';
import { createSectionMenu, createTopPage } from './ts/pages/menu';

const main = document.getElementById('main') as HTMLElement;
const backHomeBtn = document.querySelector('.header--backhome') as HTMLButtonElement;

const createHomepage = () => {
  main.append(createSectionExplore(), createSectionHowto(), createSectionRestaurants());
};

createHomepage();

export const createMenuPage = (
  dataRestaurant: IRestaurantCard,
  dataMenu: IRestaurantMenu
) => {
  main.textContent = '';
  main.classList.add('main--menu');

  backHomeBtn.style.display = 'block';

  main.append(createTopPage(dataRestaurant), createSectionMenu(dataMenu));
};

backHomeBtn?.addEventListener('click', () => {
  main.textContent = '';
  main.classList.remove('main--menu');

  backHomeBtn.style.display = 'none';
  createHomepage();
});
