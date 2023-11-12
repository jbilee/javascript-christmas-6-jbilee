import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import Order from './Order.js';
import Validation from './Validation.js';
import Promotion from './Promotion.js';
import { RESTAURANT_MENU } from './constants.js';

class App {
  async run() {
    const reservationDate = await this.getReservationDate();
    const order = await this.createOrder();
    const baseTotal = this.getBaseTotal(order.itemsOrdered);
    const promotions = new Promotion(reservationDate);
    const baseDiscount = promotions.getBaseDiscount(baseTotal, order.itemsOrdered);
    const additionalDiscount = promotions.calculateFreebieDiscount(baseTotal);
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
}

export default App;
