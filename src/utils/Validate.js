import { ORDER_LIMIT, REGEX, RESTAURANT_MENU } from '../constants/constants.js';
import { ERRORS } from '../constants/strings.js';
import { hasDuplicateItem, getNestedArrayFromString, getOrderSum } from './utilities.js';

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
    const menuOrder = getNestedArrayFromString(input);

    if (hasDuplicateItem(menuOrder)) {
      throw new Error(ERRORS.duplicateItem);
    }

    const totalCount = getOrderSum(menuOrder);
    const categories = [];

    menuOrder.forEach(([name, count]) => {
      if (!RESTAURANT_MENU[name]) {
        throw new Error(ERRORS.invalidItemOrder);
      }
      if (totalCount > ORDER_LIMIT) {
        throw new Error(ERRORS.invalidItemCount);
      }
      categories.push(RESTAURANT_MENU[name].category);
    });
    if (categories.includes('drink') && categories.length === 1) {
      throw new Error(ERRORS.invalidItemCategories);
    }
  },
};

export default Validate;
