export const countItems = (array, itemToCount) => {
  let count = 0;
  for (let item = 0; item < array.length; item += 1) {
    if (array[item] === itemToCount) count += 1;
  }
  return count;
};

export const getObjectFromString = (string) => {
  const array = string.split(',').map((element) => element.split('-'));
  const object = {};

  array.forEach((element) => {
    const [property, value] = element;
    object[property] = value;
  });

  return object;
};

export const getNestedArrayFromString = (string) => {
  const array = string.split(',').map((element) => element.split('-'));
  return array;
};
