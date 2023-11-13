import Validation from './Validation.js';
import { getNestedArrayFromString, getObjectFromString } from './utilities.js';

class Order {
  constructor(date, order) {
    this.#validateOrderFormat(order);
    this.#validateEligibility(order);
    this.reservationDate = date;
    this.itemsOrdered = getObjectFromString(order);
  }

  #validateOrderFormat(input) {
    const order = getNestedArrayFromString(input);

    order.forEach((menuItem) => {
      const [itemName, itemCount] = menuItem;

      Validation.checkMenu(itemName);
      Validation.checkItemCount(itemCount);
    });
  }

  #validateEligibility(input) {
    const order = getObjectFromString(input);
  
    const totalItemCount = Object.values(order).reduce((acc, num) => {
      return acc + Number(num);
    }, 0);

    Validation.checkOrderLimit(totalItemCount);
    Validation.checkEligibility(order);
  }
}

export default Order;
