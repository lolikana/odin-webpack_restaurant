import './sass/style.scss';

import { createHomepage } from './ts';
import { dummyRestaurantMenuData } from './ts/libs/datas';

createHomepage();

const restaurantsCards = document.querySelector('.restaurants--cards') as HTMLElement;

restaurantsCards.addEventListener('click', (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  const clicked = target.closest('.restaurants--card') as HTMLButtonElement;

  if (!clicked) return;

  const selectedRestaurant = clicked.dataset.restaurant;

  const data = dummyRestaurantMenuData.filter(
    restaurant => restaurant.restaurant === selectedRestaurant
  );
  console.log(data);
});
