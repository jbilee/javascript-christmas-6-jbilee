import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import Order from './Order.js';
import Validation from './Validation.js';
import { RESTAURANT_MENU, PROMOTION_DATES } from './constants.js';
import { countItems } from './utilities.js';

class App {
  async run() {
    const reservationDate = await this.getReservationDate();
    const order = await this.createOrder();
    const baseTotal = this.getBaseTotal(order.itemsOrdered);
    const activePromotions = this.getActivePromotions(reservationDate);
    const baseDiscount = this.getBaseDiscount(baseTotal, order.itemsOrdered, reservationDate, activePromotions);
    const additionalDiscount = this.calculateFreebieDiscount(baseTotal);
    const discountTotal = baseDiscount + additionalDiscount;
    const paymentTotal = baseTotal - baseDiscount;
  }

  async getReservationDate() {
    let input;

    do {
      try {
        input = await InputView.readDate();
        Validation.checkDate(input);
      } catch (error) {
        Console.print(error.message);
        input = null;
      }
    } while (!input);

    return Number(input);
  }

  async createOrder(date) {
    let newOrder;

    do {
      try {
        const input = await InputView.readMenu();
        newOrder = new Order(date, input);
      } catch (error) {
        Console.print(error.message);
      }
    } while (!newOrder);

    return newOrder;
  }

  getBaseTotal(order) {
    let total = 0;

    for (let i = 0; i < order.length; i += 1) {
      total +=
        RESTAURANT_MENU[order[i][0]].PRICE * Number(order[i][1]);
    }

    return total;
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

  getBaseDiscount(baseTotal, order, date, promotions) {
    if (baseTotal < 10000) return 0;

    const menuNames = order.reduce((acc, cur) => {
      for (let i = 0; i < cur[1]; i++) {
        acc.push(cur[0]);
      }
      return acc;
    },[]);

    const categories = [];

    menuNames.forEach((name) => {
      categories.push(RESTAURANT_MENU[name].CATEGORY);
    });

    let discountTotal = 0;

    promotions.forEach((promotion) => {
      switch(promotion) {
        case 'WEEKDAYS': {
          const discount = this.calculateWeekdayDiscount(countItems(categories, 'desserts'));
          discountTotal += discount;
          break;
        }
        case 'WEEKENDS': {
          const discount = this.calculateWeekendDiscount(countItems(categories, 'main'));
          discountTotal += discount;
          break;
        }
        case 'D_DAY_SALES': {
          const discount = this.calculateDDayDiscount(date);
          discountTotal += discount;
          break;
        }
        case 'SPECIAL_SALES': {
          const discount = this.calculateSpecialDiscount();
          discountTotal += discount;
          break;
        }
        default:
          throw new Error('[ERROR]')
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

export default App;
