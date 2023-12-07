import {
  PROMOTIONS,
  RESTAURANT_MENU,
  BADGE_TIERS,
} from '../constants/constants.js';

class Calculator {
  static getDiscounts(summary) {
    const keys = Object.keys(summary);
    let total = 0;
    keys.forEach((key) => {
      total += summary[key];
    });

    return total;
  }

  static getDiscountedTotal(orderTotal, discounts) {
    if (orderTotal < PROMOTIONS.freebie.requirement) {
      return orderTotal - discounts;
    }
    return orderTotal - discounts + PROMOTIONS.freebie.discounts;
  }

  static getOrderTotal(menuOrder) {
    return menuOrder.reduce((acc, [name, count]) => {
      return acc + Number(count) * RESTAURANT_MENU[name].price;
    }, 0);
  }

  static getBadge(discounts) {
    if (discounts >= BADGE_TIERS.santa.requirement) {
      return BADGE_TIERS.santa.name;
    }
    if (discounts >= BADGE_TIERS.tree.requirement) {
      return BADGE_TIERS.tree.name;
    }
    if (discounts >= BADGE_TIERS.star.requirement) {
      return BADGE_TIERS.star.name;
    }
    return null;
  }
}

export default Calculator;
