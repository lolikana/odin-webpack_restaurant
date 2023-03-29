export const replateSpaceString = (text: string) => {
  return `${text.toLocaleLowerCase().replace(/\s/g, '')}`;
};
