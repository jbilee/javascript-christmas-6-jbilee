import { Console } from '@woowacourse/mission-utils';
import InputView from '../views/InputView.js';
import Validate from '../utils/Validate.js';
import MenuOrder from '../domains/MenuOrder.js';
import Promotions from '../domains/Promotions.js';

class PlannerHandler {
  #menuOrder;
  #promotions;

  async start() {
    const reservationDate = await this.getReservationDate();
    this.#promotions = new Promotions(reservationDate);

    const menuOrder = await this.getMenuOrder();
    this.#menuOrder = new MenuOrder(menuOrder);

    // get results
    // print results
  }

  async getReservationDate() {
    let reservationDate;
    do {
      try {
        reservationDate = await InputView.readDate();
        Validate.date(reservationDate);
      } catch ({ _, message }) {
        Console.print(message);
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
      } catch ({ _, message }) {
        Console.print(message);
        menuOrder = null;
      }
    } while (!menuOrder);
    return menuOrder;
  }
}

export default PlannerHandler;
