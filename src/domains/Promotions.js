import {
  CURRENT_YEAR,
  CURRENT_MONTH,
  CHRISTMAS_DATE,
  BASE_DISCOUNT,
  PROMOTIONS,
  DAY_STRINGS,
  RESTAURANT_MENU,
} from '../constants/constants.js';

class Promotions {
  #date;
  #day;

  constructor(reservationDate) {
    this.#date = Number(reservationDate);
    this.#day = new Date(CURRENT_YEAR, CURRENT_MONTH, reservationDate).getDay();
    console.log('Day of week: ' + this.#day + ` ${DAY_STRINGS[this.#day]}`);
  }

  getWeekdayDiscounts(menuOrder) {
    if (!PROMOTIONS.weekdays.days.includes(DAY_STRINGS[this.#day])) {
      return BASE_DISCOUNT;
    }
    const numberOfDesserts = menuOrder.reduce((acc, [item, count]) => {
      if (RESTAURANT_MENU[item].category === 'dessert') {
        return acc += Number(count);
      }
      return acc;
    }, 0);

    return numberOfDesserts * PROMOTIONS.weekdays.discounts;
  }

  getWeekendDiscounts(menuOrder) {
    if (!PROMOTIONS.weekends.days.includes(DAY_STRINGS[this.#day])) {
      return BASE_DISCOUNT;
    }
    const numberOfMains = menuOrder.reduce((acc, [item, count]) => {
      if (RESTAURANT_MENU[item].category === 'main') {
        acc += Number(count);
      }
    }, 0);

    return numberOfMains * PROMOTIONS.weekends.discounts;
  }

  getDDayDiscounts() {
    if (this.#date > CHRISTMAS_DATE) {
      return BASE_DISCOUNT;
    }

    return PROMOTIONS.dDay.discounts.base + PROMOTIONS.dDay.discounts.bonus * this.#date;
  }

  getSpecialDayDiscounts() {
    if (
      PROMOTIONS.specialDay.days.includes(DAY_STRINGS[this.#day]) ||
      this.#date === CHRISTMAS_DATE
    ) {
      return PROMOTIONS.specialDay.discounts;
    }
    return BASE_DISCOUNT;
  }

  getFreebieDiscounts(totalOrder) {
    if (totalOrder < PROMOTIONS.freebie.requirement) {
      return BASE_DISCOUNT;
    }
    return PROMOTIONS.freebie.discounts;
  }

  getTotalDiscounts(menuOrder) {
    let discountSummary = {};

    discountSummary.weekdays = this.getWeekdayDiscounts(menuOrder);
    discountSummary.weekends = this.getWeekendDiscounts(menuOrder);
    discountSummary.dDay = this.getDDayDiscounts(menuOrder);
    discountSummary.specialDay = this.getSpecialDayDiscounts(menuOrder);
    discountSummary.freebie = this.getFreebieDiscounts(menuOrder);

    return discountSummary;
  }

  getApplicablePromotions() {
    const day = new Date().getDay(CURRENT_YEAR, CURRENT_MONTH, this.#date);
    const promotionNames = Object.keys(PROMOTIONS);
    const promotions = [];

    promotionNames.forEach((promotion) => {
      if (
        day <= PROMOTIONS[promotion].endDate &&
        PROMOTIONS[promotion]?.days.includes(DAY_STRINGS[day])
      ) {
      }
    });
  }
}

export default Promotions;
