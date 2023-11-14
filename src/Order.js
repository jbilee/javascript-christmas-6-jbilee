import Promotion from './Promotion.js';
import Validation from './Validation.js';
import { MINIMUM_ORDER_FOR_DISCOUNTS, RESTAURANT_MENU } from './constants.js';
import { getNestedArrayFromString, getObjectFromString } from './utilities.js';

class Order {
  #userOrder
  #promotions

  constructor(date, order) {
    this.#validateOrderFormat(order);
    this.#validateEligibility(order);
    this.#userOrder = order;
    this.#promotions = new Promotion(date);
  }

  #validateOrderFormat(input) {
    const order = getNestedArrayFromString(input);

    order.forEach((menuItem) => {
      const [itemName, itemCount] = menuItem;

      Validation.checkMenu(itemName);
      Validation.checkItemCount(itemCount);
    });
  }

  #validateEligibility(input) {
    const order = getObjectFromString(input);
  
    const totalItemCount = Object.values(order).reduce((acc, num) => {
      return acc + Number(num);
    }, 0);

    Validation.checkOrderLimit(totalItemCount);
    Validation.checkEligibility(order);
  }

  getMenuArray() {
    const menuArray = getNestedArrayFromString(this.#userOrder);
    return menuArray;
  }

  getMenuCategories() {
    const menuArray = this.getMenuArray();
    const menuCategories = menuArray.reduce((acc, cur) => {
      for (let i = 0; i < cur[1]; i++) {
        acc.push(RESTAURANT_MENU[cur[0]].CATEGORY);
      }
      return acc;
    }, []);

    return menuCategories;
  }

  calculateBaseTotal() {
    const menuObject = getObjectFromString(this.#userOrder);
    const menuNames = Object.keys(menuObject);
    let total = 0;

    for (let i = 0; i < menuNames.length; i += 1) {
      const price = RESTAURANT_MENU[menuNames[i]].PRICE;
      const quantity = Number(menuObject[menuNames[i]]);
      total += price * quantity;
    }

    return total;
  }

  getDiscountSummary(baseTotal) {
    if (baseTotal < MINIMUM_ORDER_FOR_DISCOUNTS) return null;

    const menuCategories = this.getMenuCategories();
    const discountSummary = this.#promotions.getDiscounts(baseTotal, menuCategories);

    return discountSummary;
  }

  calculateBaseDiscount(discountSummary) {
    const baseDiscount = this.#promotions.getDiscountSum(discountSummary);
    return baseDiscount;
  }
}

export default Order;
