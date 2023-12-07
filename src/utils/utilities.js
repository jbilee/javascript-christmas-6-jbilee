import {
  MENU_COUNT_SEPARATOR,
  MENU_ITEM_SEPARATOR,
} from '../constants/strings.js';

export const getNestedArrayFromString = (string) => {
  return string
    .split(MENU_ITEM_SEPARATOR)
    .map((item) => item.split(MENU_COUNT_SEPARATOR));
};

export const getOrderSum = (array) => {
  return array.reduce((acc, cur) => {
    return acc + Number(cur[1]);
  }, 0);
}

export const hasDuplicateItem = (array) => {
  const items = array.reduce((acc, cur) => {
    acc.push(cur[0]);
    return acc;
  }, []);

  const set = new Set(items);
  if (items.length === set.size) {
    return false;
  }
  return true;
};
