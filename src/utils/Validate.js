import { ORDER_LIMIT, REGEX, RESTAURANT_MENU } from '../constants/constants.js';
import { ERRORS } from '../constants/strings.js';
import getNestedArrayFromString from './utilities.js';

const Validate = {
  date(input) {
    if (!REGEX.date.test(input)) {
      throw new Error(ERRORS.invalidDate);
    }
  },

  orderFormat(input) {
    if (!REGEX.menuOrder.test(input)) {
      throw new Error(ERRORS.invalidOrderFormat);
    }
  },

  menuOrder(input) {
    const items = input.split(',');
    let totalCount = 0;
    const categories = [];
    items.forEach((item) => {
      const [name, count] = item.split('-');
      if (!RESTAURANT_MENU[name]) {
        throw new Error(ERRORS.invalidItemOrder);
      }
      if (totalCount > ORDER_LIMIT) {
        throw new Error(ERRORS.invalidItemOrder);
      }
      categories.push(RESTAURANT_MENU[name].category);
      totalCount += Number(count);
    });
    if (categories.includes('drink') && categories.length === 1) {
      throw new Error(ERRORS.invalidItemCategories);
    }
  },
};

export default Validate;
