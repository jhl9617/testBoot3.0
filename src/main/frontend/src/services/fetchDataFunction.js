export const myLoaderFunction = async (fetchFunction) => {
  const response = await fetchFunction();
  return await response.json();

};
