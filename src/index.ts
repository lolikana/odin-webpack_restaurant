import './sass/style.scss';

import { dummyRestaurantData, dummyRestaurantMenuData } from './ts/libs/datas';
import { createHomepage } from './ts/pages/homepage';
import { createMenuPage } from './ts/pages/menu';

createHomepage();

const restaurantsCards = document.querySelector('.restaurants--cards') as HTMLElement;

restaurantsCards.addEventListener('click', (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  const clicked = target.closest('.restaurants--card') as HTMLButtonElement;

  if (!clicked) return;

  const selectedRestaurant = clicked.dataset.restaurant;

  const dataRestaurant = dummyRestaurantData.filter(
    restaurant => restaurant.desc.title === selectedRestaurant
  )[0];
  const dataMenu = dummyRestaurantMenuData.filter(
    restaurant => restaurant.restaurant === selectedRestaurant
  )[0];

  createMenuPage(dataRestaurant, dataMenu);
});
