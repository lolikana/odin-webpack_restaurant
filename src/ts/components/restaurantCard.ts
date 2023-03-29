import { replateSpaceString } from '../helpers/helpers';
import { IRestaurantCard } from '../libs/types';

const createTagNew = () => {
  const div = document.createElement('div');
  div.classList.add('restaurants--card-new');
  return div;
};

const createRestaurantCard = (data: IRestaurantCard) => {
  const article = document.createElement('article');
  const anchor = document.createElement('a');
  anchor.href = '#';
  anchor.classList.add('restaurants--card');

  const divCardImg = document.createElement('div');
  divCardImg.classList.add('restaurants--card-img');

  if (data.tagNew === true) divCardImg.appendChild(createTagNew());

  const img = document.createElement('img');
  img.src = data.img;
  img.alt = `restaurant ${data.desc.title}`;
  divCardImg.appendChild(img);

  anchor.append(divCardImg);

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
  label.htmlFor = `like-${replateSpaceString(data.desc.title)}`;

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.name = `like-${replateSpaceString(data.desc.title)}`;
  input.id = `like-${replateSpaceString(data.desc.title)}`;

  const iSolid = document.createElement('i');
  iSolid.classList.add('fa-solid', 'fa-heart', 'icon-solid');

  const iRegular = document.createElement('i');
  iRegular.classList.add('fa-regular', 'fa-heart', 'icon-regular');

  label.append(input, iSolid, iRegular);
  divLikeIcon.append(label);

  divDesc.append(divDescText, divLikeIcon);

  anchor.append(divCardImg, divDesc);

  article.append(anchor);
  return article;
};

export default createRestaurantCard;
