import { replaceSpaceString } from '../../helpers/helpers';
import { IMenuDishes } from '../../libs/types';

const createMenuDish = (restaurant: string, course: string, dish: IMenuDishes) => {
  const dishLabel = replaceSpaceString(dish.name);
  const restaurantString = replaceSpaceString(restaurant);
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

  /** Create description */
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

  /** Create Icon check */
  const divCheck = document.createElement('div');
  divCheck.classList.add('menu--card-check');

  const i = document.createElement('i');
  i.classList.add('fa-solid', 'fa-circle-check', 'icon-solid');

  divCheck.appendChild(i);

  label.append(input, divDesc, divCheck);

  li.append(label);

  return li;
};

const createMenuCard = (restaurant: string, menu: string, dishes: IMenuDishes[]) => {
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

export default createMenuCard;
