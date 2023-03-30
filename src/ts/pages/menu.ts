import createDivIconLike from '../components/ui/iconLike';
import createMenuCard from '../components/ui/MenuCard';
import { IRestaurantCard, IRestaurantMenu } from '../libs/types';

const main = document.getElementById('main') as HTMLElement;

const createTopPage = (data: IRestaurantCard) => {
  const div = document.createElement('div');
  div.classList.add('menu--top');
  const img = document.createElement('img');
  img.src = data.img;
  img.alt = `${data.desc.title} restaurant`;

  div.appendChild(img);

  return div;
};

const createSectionMenu = (data: IRestaurantMenu) => {
  const section = document.createElement('section');
  section.classList.add('section', 'section--menu');

  const divName = document.createElement('div');
  divName.classList.add('menu--name', 'font-logo');

  const h1 = document.createElement('h1');
  h1.textContent = data.restaurant;

  divName.append(h1, createDivIconLike(data.restaurant));

  const divMenu = document.createElement('div');
  divMenu.classList.add('menu--carte');

  data.menu.map(item => {
    divMenu.append(createMenuCard(data.restaurant, item.course, item.dishes));

    section.append(divName, divMenu);
  });

  return section;
};

export const createMenuPage = (
  dataRestaurant: IRestaurantCard,
  dataMenu: IRestaurantMenu
) => {
  main.textContent = '';
  main.classList.add('main--menu');

  main.append(createTopPage(dataRestaurant), createSectionMenu(dataMenu));
};
