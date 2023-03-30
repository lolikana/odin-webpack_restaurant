import { replaceSpaceString } from '../../helpers/helpers';

/*** Create like icon card */
const createDivIconLike = (title: string) => {
  const titleString = replaceSpaceString(title);

  const divLikeIcon = document.createElement('div');
  divLikeIcon.classList.add('icon-like');

  const label = document.createElement('label');
  label.htmlFor = `like-${titleString}`;

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.name = `like-${titleString}`;
  input.id = `like-${titleString}`;

  const iSolid = document.createElement('i');
  iSolid.classList.add('fa-solid', 'fa-heart', 'icon-solid');

  const iRegular = document.createElement('i');
  iRegular.classList.add('fa-regular', 'fa-heart', 'icon-regular');

  label.append(input, iSolid, iRegular);
  divLikeIcon.append(label);

  return divLikeIcon;
};

export default createDivIconLike;
