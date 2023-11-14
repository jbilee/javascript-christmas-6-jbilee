import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import OutputView from './OutputView.js';
import Order from './Order.js';
import Validation from './Validation.js';

class App {
  async run() {
    OutputView.printGreeting();

    const reservationDate = await this.getReservationDate();
    const order = await this.createOrder(reservationDate);

    OutputView.printDescription(reservationDate);

    this.runPlanner(order);
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

  runPlanner(order) {
    const orderArray = order.getMenuArray();
    const baseTotal = order.calculateBaseTotal();
    const discountTotal = order.getDiscountSummary(baseTotal);
    const baseDiscount = order.calculateBaseDiscount(discountTotal);
    const totalDiscount = order.calculateTotalDiscount(discountTotal);
    const paymentTotal = baseTotal - baseDiscount;
    
    OutputView.printMenu(orderArray);
    OutputView.printBaseTotal(baseTotal);
    OutputView.printFreebie(discountTotal);
    OutputView.printDiscountSummary(discountTotal);
    OutputView.printTotalDiscounts(totalDiscount);
    OutputView.printPaymentTotal(paymentTotal);
  }
}

export default App;
