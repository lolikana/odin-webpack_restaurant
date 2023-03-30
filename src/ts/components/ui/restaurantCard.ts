import { IRestaurantCard } from '../../libs/types';
import createDivIconLike from '../buttons/iconLike';

const createTagNew = () => {
  const div = document.createElement('div');
  div.classList.add('restaurants--card-new');
  return div;
};

const createRestaurantCard = (data: IRestaurantCard) => {
  const article = document.createElement('article');
  const button = document.createElement('button');
  button.classList.add('restaurants--card');
  button.setAttribute('data-restaurant', data.desc.title);

  const divCardImg = document.createElement('div');
  divCardImg.classList.add('restaurants--card-img');

  if (data.tagNew === true) divCardImg.appendChild(createTagNew());

  const img = document.createElement('img');
  img.src = data.img;
  img.alt = `restaurant ${data.desc.title}`;
  divCardImg.appendChild(img);

  button.append(divCardImg);

  /** Create description card */
  const divDesc = document.createElement('div');
  divDesc.classList.add('restaurants--card-desc');

  const divDescText = document.createElement('div');
  divDescText.classList.add('restaurants--card-text');
  const h2 = document.createElement('h2');
  h2.textContent = data.desc.title;
  const p = document.createElement('p');
  p.textContent = data.desc.location;
  divDescText.append(h2, p);

  divDesc.append(divDescText, createDivIconLike(data.desc.title));

  button.append(divCardImg, divDesc);

  article.append(button);
  return article;
};

export default createRestaurantCard;
