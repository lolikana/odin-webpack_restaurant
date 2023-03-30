import createRestaurantCard from '../components/ui/restaurantCard';
import { dummyRestaurantData } from '../libs/datas';
import { IHowtoListData } from '../libs/types';

const main = document.getElementById('main') as HTMLElement;

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

  dummyRestaurantData.map(restaurant =>
    divRestaurantsCard.append(createRestaurantCard(restaurant))
  );

  section.append(h1, divRestaurantsCard);
  return section;
};

export const createHomepage = () => {
  main.append(createSectionExplore(), createSectionHowto(), createSectionRestaurants());
};
