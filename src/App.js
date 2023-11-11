import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';
import { RESTAURANT_MENU, PROMOTION_DATES } from './constants.js';

class App {
  async run() {
    const reservationDate = await this.getReservationDate();
    const order = await this.getOrder();
    const baseTotal = this.getBaseTotal(order);
    const activePromotions = this.getActivePromotions(reservationDate);
  }

  async getReservationDate() {
    let input;

    do {
      try {
        input = await InputView.readDate();
        this.validateDate(input);
      } catch (error) {
        Console.print(error.message);
        input = null;
      }
    } while (!input);

    return Number(input);
  }

  async getOrder() {
    let input;

    do {
      try {
        input = await InputView.readMenu();
        this.validateOrder(input);
      } catch (error) {
        Console.print(error.message);
        input = null;
      }
    } while (!input);

    return input;
  }

  validateDate(inputString) {
    const inputNumber = Number(inputString);
    if (
      inputNumber < 1 ||
      inputNumber > 31 ||
      inputString.includes('.') ||
      Number.isNaN(inputNumber)
    )
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
  }

  validateOrder(inputString) {
    const order = {};

    inputString.split(',').forEach((input) => {
      const itemOrdered = input.split('-');
      const [menuName, itemCount] = itemOrdered;

      if (
        !RESTAURANT_MENU[menuName] ||
        Number.isNaN(Number(itemCount)) ||
        itemCount.includes('.') ||
        Number(itemCount) < 1
      )
        throw new Error(
          '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
        );

      order[menuName] = itemCount;
    });

    const totalItemCount = Object.values(order).reduce((acc, num) => {
      return acc + Number(num);
    }, 0);

    if (totalItemCount > 20)
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');

    const itemCategories = Object.keys(order).map(
      (item) => RESTAURANT_MENU[item].CATEGORY,
    );
    const itemSet = new Set(itemCategories);

    if (itemSet.size === 1 && itemSet.has('drinks'))
      throw new Error('[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.');
  }

  getBaseTotal(order) {
    const itemsOrdered = order.split(',').map((item) => item.split('-'));
    let total = 0;

    for (let i = 0; i < itemsOrdered.length; i += 1) {
      total +=
        RESTAURANT_MENU[itemsOrdered[i][0]].PRICE * Number(itemsOrdered[i][1]);
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

}

export default App;
