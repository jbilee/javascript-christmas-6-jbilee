import { MINIMUM_ORDER_FOR_FREEBIE, PROMOTION_DISCOUNTS } from './constants.js';

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

export const Calculator = {
  weekdayDiscount(menuCategories) {
    const itemCount = countItems(menuCategories, 'dessert');
    return PROMOTION_DISCOUNTS.DAILY * itemCount;
  },

  weekendDiscount(menuCategories) {
    const itemCount = countItems(menuCategories, 'main');
    return PROMOTION_DISCOUNTS.DAILY * itemCount;
  },

  dDayDiscount(date) {
    return (
      PROMOTION_DISCOUNTS.D_DAY_BASE + PROMOTION_DISCOUNTS.D_DAY_BONUS * date
    );
  },

  specialDiscount() {
    return PROMOTION_DISCOUNTS.SPECIAL;
  },

  freebieDiscount(total) {
    if (total >= MINIMUM_ORDER_FOR_FREEBIE) return PROMOTION_DISCOUNTS.FREEBIE;
    return 0;
  },
};

export const insertThousandsComma = (string) => {
  const characters = string.split('');

  if (characters.length < 4) return string;

  for (let i = -3; Math.abs(i) < characters.length; i -= 4) {
    characters.splice(i, 0, ',');
  }

  return characters.join('');
};
