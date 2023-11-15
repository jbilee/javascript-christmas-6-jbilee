import { PROMOTION_DATES } from './constants.js';
import { countItems, Calculator } from './utilities.js';

class Promotion {
  #date;
  #activePromotions;

  constructor(date) {
    this.#date = date;
    this.#activePromotions = this.getActivePromotions(date);
  }

  getActivePromotions(date) {
    const array = [];

    for (let i = 0; i < PROMOTION_DATES.length; i += 1) {
      if (PROMOTION_DATES[i].DATES.includes(date)) {
        array.push(PROMOTION_DATES[i].TYPE);
      }
    }

    return array;
  }

  getDiscounts(baseTotal, menuCategories) {
    const discountTotal = {};

    this.#activePromotions.forEach((promotion) => {
      discountTotal[promotion] = this.calculateDiscounts(promotion, menuCategories);
    });
    discountTotal.freebie = Calculator.freebieDiscount(baseTotal);

    return discountTotal;
  }

  getDiscountSum(summary) {
    let sum = 0;

    for (let i = 0; i < this.#activePromotions.length; i += 1) {
      sum += summary[this.#activePromotions[i]];
    }

    return sum;
  }

  calculateDiscounts(promotion, menuCategories) {
    switch (promotion) {
      case 'weekdays':
        return Calculator.weekdayDiscount(menuCategories);
      case 'weekends':
        return Calculator.weekendDiscount(menuCategories);
      case 'dDaySales':
        return Calculator.dDayDiscount(this.#date);
      case 'specialSales':
        return Calculator.specialDiscount();
      default:
        return null;
    }
  }  
}

export default Promotion;
