import { createMenuPage } from '../..';
import createRestaurantCard from '../components/ui/restaurantCard';
import { dummyRestaurantData, dummyRestaurantMenuData } from '../libs/datas';
import { IHowtoListData } from '../libs/types';

const createMenuListener = (e: MouseEvent) => {
  const target = e.target as HTMLElement;
  const clicked = target.closest('.restaurants--card') as HTMLButtonElement;
  console.log(clicked);
  if (!clicked) return;

  const selectedRestaurant = clicked.dataset.restaurant;

  const dataRestaurant = dummyRestaurantData.filter(
    restaurant => restaurant.desc.title === selectedRestaurant
  )[0];

  const dataMenu = dummyRestaurantMenuData.filter(
    restaurant => restaurant.restaurant === selectedRestaurant
  )[0];

  createMenuPage(dataRestaurant, dataMenu);
};

export const createSectionExplore = () => {
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

const howtoListData: IHowtoListData[] = [
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

const createHowtoList = (data: IHowtoListData) => {
  const li = document.createElement('li');
  li.setAttribute('data-howto', data.id);
  li.textContent = data.text;

  return li;
};

export const createSectionHowto = () => {
  const section = document.createElement('section');
  section.classList.add('section', 'section--howto');

  const h1 = document.createElement('h1');
  const ul = document.createElement('ul');
  ul.classList.add('section--howto-list');

  howtoListData.map(item => ul.append(createHowtoList(item)));

  section.append(h1, ul);

  return section;
};

export const createSectionRestaurants = () => {
  const section = document.createElement('section');
  section.classList.add('section', 'section--restaurants');

  const h1 = document.createElement('h1');
  h1.textContent = 'Restaurants';

  const divRestaurantsCard = document.createElement('div');
  divRestaurantsCard.classList.add('restaurants--cards');
  divRestaurantsCard.addEventListener('click', (e: MouseEvent) => createMenuListener(e));

  dummyRestaurantData.map(restaurant =>
    divRestaurantsCard.append(createRestaurantCard(restaurant))
  );

  section.append(h1, divRestaurantsCard);
  return section;
};
