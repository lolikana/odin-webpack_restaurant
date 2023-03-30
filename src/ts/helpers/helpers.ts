export const replaceSpaceString = (text: string) => {
  return `${text.toLocaleLowerCase().replace(/\s/g, '')}`;
};
