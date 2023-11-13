import Promotion from './Promotion.js';
import Validation from './Validation.js';
import { MINIMUM_ORDER_FOR_DISCOUNTS, RESTAURANT_MENU } from './constants.js';
import { getNestedArrayFromString, getObjectFromNestedArray } from './utilities.js';

class Order {
  constructor(date, order) {
    this.#validateOrderFormat(order);
    this.menuArray = getNestedArrayFromString(order);
    this.#validateEligibility();
    this.promotions = new Promotion(date);
  }

  #validateOrderFormat(input) {
    const order = getNestedArrayFromString(input);

    order.forEach((menuItem) => {
      const [itemName, itemCount] = menuItem;

      Validation.checkMenu(itemName);
      Validation.checkItemCount(itemCount);
    });
  }

  #validateEligibility() {
    const order = getObjectFromNestedArray(this.menuArray);
  
    const totalItemCount = Object.values(order).reduce((acc, num) => {
      return acc + Number(num);
    }, 0);

    Validation.checkOrderLimit(totalItemCount);
    Validation.checkEligibility(order);
  }

  getMenuCategories() {
    const menuCategories = this.menuArray.reduce((acc, cur) => {
      for (let i = 0; i < cur[1]; i++) {
        acc.push(RESTAURANT_MENU[cur[0]].CATEGORY);
      }
      return acc;
    }, []);

    return menuCategories;
  }

  calculateBaseTotal() {
    const menuObject = getObjectFromNestedArray(this.menuArray);
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
    const discountSummary = this.promotions.getDiscounts(baseTotal, menuCategories);

    return discountSummary;
  }

  calculateBaseDiscount(discountSummary) {
    const baseDiscount = this.promotions.getDiscountSum(discountSummary);
    return baseDiscount;
  }
}

export default Order;
