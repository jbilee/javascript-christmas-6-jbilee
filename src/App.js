import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import OutputView from './OutputView.js';
import Order from './Order.js';
import Validation from './Validation.js';
import Planner from './Planner.js';

class App {
  async run() {
    OutputView.printGreeting();

    const reservationDate = await this.getReservationDate();
    const order = await this.createOrder();
    const planner = new Planner(reservationDate, order);

    OutputView.printDescription(reservationDate);

    this.runPlanner(order, planner);
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

  async createOrder() {
    let newOrder;

    do {
      try {
        const input = await InputView.readMenu();
        newOrder = new Order(input);
      } catch (error) {
        Console.print(error.message);
      }
    } while (!newOrder);

    return newOrder;
  }

  runPlanner(order, planner) {
    const orderArray = order.getMenuArray();
    const baseTotal = planner.calculateBaseTotal();
    const discountTotal = planner.getDiscountSummary();
    const baseDiscount = planner.calculateBaseDiscount();
    const totalDiscount = planner.calculateTotalDiscount();
    const paymentTotal = baseTotal - baseDiscount;
    OutputView.printMenu(orderArray);
    OutputView.printBaseTotal(baseTotal);
    OutputView.printFreebie(discountTotal);
    OutputView.printDiscountSummary(discountTotal);
    OutputView.printTotalDiscounts(totalDiscount);
    OutputView.printPaymentTotal(paymentTotal);
    OutputView.printBadge(totalDiscount);
  }
}

export default App;
