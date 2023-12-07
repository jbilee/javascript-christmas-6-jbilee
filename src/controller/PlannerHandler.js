import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import Validate from '../utils/Validate.js';
import Promotions from '../domains/Promotions.js';
import OutputView from '../views/OutputView.js';
import Calculator from '../domains/Calculator.js';

class PlannerHandler {
  #promotions;

  async start() {
    const reservationDate = Number(await this.getReservationDate());
    this.#promotions = new Promotions(reservationDate);
    const menuOrder = await this.getMenuOrder();

    const orderTotal = Calculator.getOrderTotal(menuOrder);
    const discountSummary = this.#promotions.getDiscountSummary(menuOrder);
    const discounts = Calculator.getDiscounts(discountSummary);

    this.printResults(
      reservationDate,
      menuOrder,
      orderTotal,
      discountSummary,
      discounts,
      Calculator.getDiscountedTotal(orderTotal, discounts),
      Calculator.getBadge(discounts),
    );
  }

  async getReservationDate() {
    let reservationDate;
    do {
      try {
        reservationDate = await InputView.readDate();
        Validate.date(reservationDate);
      } catch (error) {
        Console.print(error);
        reservationDate = null;
      }
    } while (!reservationDate);
    return reservationDate;
  }

  async getMenuOrder() {
    let menuOrder;
    do {
      try {
        menuOrder = await InputView.readMenuOrder();
        Validate.orderFormat(menuOrder);
        Validate.menuOrder(menuOrder);
      } catch (error) {
        Console.print(error);
        menuOrder = null;
      }
    } while (!menuOrder);
    return menuOrder.split(',').map((item) => item.split('-'));
  }

  printResults(
    date,
    order,
    baseTotal,
    promotions,
    discounts,
    discountedTotal,
    badge,
  ) {
    OutputView.printTitle(date);
    OutputView.printMenu(order);
    OutputView.printBaseTotal(baseTotal);
    OutputView.printPromotions(promotions);
    OutputView.printDiscounts(discounts);
    OutputView.printDiscountedTotal(discountedTotal);
    OutputView.printBadge(badge);
  }
}

export default PlannerHandler;
