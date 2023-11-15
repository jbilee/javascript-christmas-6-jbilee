import Validation from './Validation.js';
import { RESTAURANT_MENU } from './constants.js';
import { getNestedArrayFromString, getObjectFromString } from './utilities.js';

class Order {
  #userOrder;

  constructor(order) {
    this.#validateOrderFormat(order);
    this.#validateEligibility(order);
    this.#userOrder = order;
  }

  #validateOrderFormat(input) {
    const order = getNestedArrayFromString(input);

    order.forEach((menuItem) => {
      const [itemName, itemCount] = menuItem;

      Validation.checkMenuName(itemName);
      Validation.checkItemCount(itemCount);
    });
  }

  #validateEligibility(input) {
    const order = getObjectFromString(input);
    const menuItems = Object.values(order)

    const totalItemCount = menuItems.reduce((acc, num) => {
      return acc + Number(num);
    }, 0);

    Validation.checkItemLimit(totalItemCount);
    Validation.checkDrinksOnlyOrder(order);
  }

  getMenuArray() {
    const array = getNestedArrayFromString(this.#userOrder);

    const menuArray = array.map((item) => {
      const [menuName, itemCount] = item;
      return [menuName, Number(itemCount)];
    });

    return menuArray;
  }

  getMenuCategories() {
    const menuArray = this.getMenuArray();

    const menuCategories = menuArray.reduce((list, item) => {
      const [menuName, itemCount] = item;
      for (let i = 0; i < itemCount; i+= 1) {
        list.push(RESTAURANT_MENU[menuName].CATEGORY);
      }
      return list;
    }, []);

    return menuCategories;
  }
}

export default Order;
