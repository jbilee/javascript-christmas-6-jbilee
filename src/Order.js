import Validation from './Validation.js';

class Order {
  constructor(date, order) {
    this.reservationDate = date;
    this.itemsOrdered = this.getItemsOrdered(order);
    this.orderObject = this.#validateOrderFormat(this.itemsOrdered);
    this.#validateEligibility(this.orderObject);
  }

  #validateOrderFormat(itemsOrdered) {
    const order = {};

    itemsOrdered.forEach((itemOrdered) => {
      const [menuName, itemCount] = itemOrdered;

      Validation.checkMenu(menuName);
      Validation.checkItemCount(itemCount);

      order[menuName] = itemCount;
    });

    return order;
  }

  getItemsOrdered(input) {
    const itemsOrdered = input.split(',').map((item) => item.split('-'));
    return itemsOrdered;
  }

  #validateEligibility(order) {
    const totalItemCount = Object.values(order).reduce((acc, num) => {
      return acc + Number(num);
    }, 0);

    Validation.checkOrderLimit(totalItemCount);
    Validation.checkEligibility(order);
  }
}

export default Order;
