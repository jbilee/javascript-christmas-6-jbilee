import { RESTAURANT_MENU, PROMOTION_DATES } from './constants.js';
import { countItems } from './utilities.js';

class Promotion {
  constructor(date) {
    this.date = date;
    this.activePromotions = this.getActivePromotions(this.date);
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

  getBaseDiscount(baseTotal, order) {
    if (baseTotal < 10000) return 0;

    const menuNames = order.reduce((acc, cur) => {
      for (let i = 0; i < cur[1]; i++) {
        acc.push(cur[0]);
      }
      return acc;
    }, []);

    const categories = [];

    menuNames.forEach((name) => {
      categories.push(RESTAURANT_MENU[name].CATEGORY);
    });

    let discountTotal = 0;

    this.activePromotions.forEach((promotion) => {
      switch (promotion) {
        case 'WEEKDAYS': {
          const discount = this.calculateWeekdayDiscount(
            countItems(categories, 'desserts'),
          );
          discountTotal += discount;
          break;
        }
        case 'WEEKENDS': {
          const discount = this.calculateWeekendDiscount(
            countItems(categories, 'main'),
          );
          discountTotal += discount;
          break;
        }
        case 'D_DAY_SALES': {
          const discount = this.calculateDDayDiscount(this.date);
          discountTotal += discount;
          break;
        }
        case 'SPECIAL_SALES': {
          const discount = this.calculateSpecialDiscount();
          discountTotal += discount;
          break;
        }
        default:
          throw new Error('[ERROR]');
      }
    });

    return discountTotal;
  }

  calculateWeekdayDiscount(itemCount) {
    return 2023 * itemCount;
  }

  calculateWeekendDiscount(itemCount) {
    return 2023 * itemCount;
  }

  calculateDDayDiscount(date) {
    return 900 + 100 * date;
  }

  calculateSpecialDiscount() {
    return 1000;
  }

  calculateFreebieDiscount(total) {
    if (total >= 120000) return 25000;
    return 0;
  }
}

export default Promotion;
