import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import Order from './Order.js';
import Validation from './Validation.js';

class App {
  async run() {
    const reservationDate = await this.getReservationDate();
    const order = await this.createOrder(reservationDate);
    
    const baseTotal = order.calculateBaseTotal();
    const discountTotal = order.getDiscountSummary(baseTotal);
    const baseDiscount = order.calculateBaseDiscount(discountTotal);

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
}

export default App;
