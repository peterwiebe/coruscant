export const getId = (url: string) => {
  if (!url) {
    return null;
  }
  const deconstructedString = url.split('/');
  const id = deconstructedString[deconstructedString.length - 2];

  return id;
};
