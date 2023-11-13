import { MINIMUM_ORDER_FOR_FREEBIE, PROMOTION_DISCOUNTS } from './constants.js';

export const countItems = (array, itemToCount) => {
  let count = 0;
  for (let item = 0; item < array.length; item += 1) {
    if (array[item] === itemToCount) count += 1;
  }
  return count;
};

export const getObjectFromNestedArray = (array) => {
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
  weekdayDiscount(itemCount) {
    return PROMOTION_DISCOUNTS.DAILY * itemCount;
  },

  weekendDiscount(itemCount) {
    return PROMOTION_DISCOUNTS.DAILY * itemCount;
  },

  dDayDiscount(date) {
    return PROMOTION_DISCOUNTS.D_DAY + 100 * date;
  },

  specialDiscount() {
    return PROMOTION_DISCOUNTS.SPECIAL;
  },

  freebieDiscount(total) {
    if (total >= MINIMUM_ORDER_FOR_FREEBIE) return PROMOTION_DISCOUNTS.FREEBIE;
    return 0;
  },
};
