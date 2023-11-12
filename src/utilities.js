export const countItems = (array, itemToCount) => {
  let count = 0;
  for (let item = 0; item < array.length; item += 1) {
    if (array[item] === itemToCount) count += 1;
  }
  return count;
};
