import { ORDER_LIMIT, RESTAURANT_MENU, ERROR_MESSAGES } from './constants.js';

const Validation = {
  checkDate(inputString) {
    const inputNumber = Number(inputString);

    if (
      inputNumber < 1 ||
      inputNumber > 31 ||
      inputString.includes('.') ||
      Number.isNaN(inputNumber)
    )
      throw new Error(ERROR_MESSAGES.INVALID_DATE);
  },

  checkMenuName(menuName) {
    if (!RESTAURANT_MENU[menuName])
      throw new Error(ERROR_MESSAGES.INVALID_ORDER);
  },

  checkItemCount(countString) {
    const countNumber = Number(countString);

    if (
      Number.isNaN(countNumber) ||
      countNumber < 1 ||
      countString.includes('.')
    )
      throw new Error(ERROR_MESSAGES.INVALID_ORDER);
  },

  checkItemLimit(orderQuantity) {
    if (orderQuantity > ORDER_LIMIT)
      throw new Error(ERROR_MESSAGES.INVALID_ORDER);
  },

  checkDrinksOnlyOrder(order) {
    const itemCategories = Object.keys(order).map(
      (item) => RESTAURANT_MENU[item].CATEGORY,
    );
    const itemSet = new Set(itemCategories);

    if (itemSet.size === 1 && itemSet.has('drink'))
      throw new Error(ERROR_MESSAGES.INVALID_ORDER);
  },
};

export default Validation;
