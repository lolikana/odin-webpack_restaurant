import { replaceSpaceString } from '../helpers/helpers';
import { IRestaurantCard } from '../libs/types';

const createTagNew = () => {
  const div = document.createElement('div');
  div.classList.add('restaurants--card-new');
  return div;
};

const createRestaurantCard = (data: IRestaurantCard) => {
  const dataTitleWithoutSpace = replaceSpaceString(data.desc.title);

  const article = document.createElement('article');
  const button = document.createElement('button');
  button.classList.add('restaurants--card');
  button.setAttribute('data-restaurant', dataTitleWithoutSpace);

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

  /*** Create like icon card */
  const divLikeIcon = document.createElement('div');
  divLikeIcon.classList.add('icon-like');

  const label = document.createElement('label');
  label.htmlFor = `like-${dataTitleWithoutSpace}`;

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.name = `like-${dataTitleWithoutSpace}`;
  input.id = `like-${dataTitleWithoutSpace}`;

  const iSolid = document.createElement('i');
  iSolid.classList.add('fa-solid', 'fa-heart', 'icon-solid');

  const iRegular = document.createElement('i');
  iRegular.classList.add('fa-regular', 'fa-heart', 'icon-regular');

  label.append(input, iSolid, iRegular);
  divLikeIcon.append(label);

  divDesc.append(divDescText, divLikeIcon);

  button.append(divCardImg, divDesc);

  article.append(button);
  return article;
};

export default createRestaurantCard;
