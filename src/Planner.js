import Promotion from './Promotion.js';
import { MINIMUM_ORDER_FOR_DISCOUNTS, RESTAURANT_MENU } from './constants.js';

class Planner {
  #userOrder;
  #promotions;

  constructor(date, order) {
    this.#userOrder = order;
    this.#promotions = new Promotion(date);
  }

  calculateBaseTotal() {
    const menuArray = this.#userOrder.getMenuArray();

    let total = 0;

    menuArray.forEach((menuItem) => {
      const [menuName, itemCount] = menuItem;
      const price = RESTAURANT_MENU[menuName].PRICE;
      total += price * itemCount;
    });

    return total;
  }

  getDiscountSummary() {
    const baseTotal = this.calculateBaseTotal();
    if (baseTotal < MINIMUM_ORDER_FOR_DISCOUNTS) return null;

    const menuCategories = this.#userOrder.getMenuCategories();
    const discountSummary = this.#promotions.getDiscounts(
      baseTotal,
      menuCategories,
    );

    return discountSummary;
  }

  calculateBaseDiscount() {
    const discountSummary = this.getDiscountSummary();
    if (!discountSummary) return 0;

    const baseDiscount = this.#promotions.getDiscountSum(discountSummary);
    return baseDiscount;
  }

  calculateTotalDiscount() {
    const discountSummary = this.getDiscountSummary();
    if (!discountSummary) return 0;

    const baseDiscount = this.#promotions.getDiscountSum(discountSummary);
    const additionalDiscount = discountSummary.freebie;

    return baseDiscount + additionalDiscount;
  }
}

export default Planner;
