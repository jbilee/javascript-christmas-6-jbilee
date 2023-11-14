import { Console } from '@woowacourse/mission-utils';
import { INTERFACE_TEXT, PROMOTION_NAMES } from './constants.js';
import { insertThousandsComma } from './utilities.js';

const OutputView = {
  printGreeting() {
    Console.print(INTERFACE_TEXT.GREETING);
  },

  printDescription(date) {
    Console.print(`12월 ${date}일${INTERFACE_TEXT.SUMMARY}`);
  },

  printMenu(order) {
    Console.print('');
    Console.print(INTERFACE_TEXT.MENU_HEADER);

    order.forEach((menuItem) => {
      const [itemName, itemCount] = menuItem;
      Console.print(`${itemName} ${itemCount}개`);
    });
  },

  printBaseTotal(baseTotal) {
    Console.print('');
    Console.print(INTERFACE_TEXT.BASE_TOTAL_HEADER);

    const text = insertThousandsComma(baseTotal.toString());
    Console.print(`${text}원`);
  },

  printFreebie(summary) {
    Console.print('');
    Console.print(INTERFACE_TEXT.FREEBIE_HEADER);

    if (!summary || summary.freebie === 0)
      return Console.print(INTERFACE_TEXT.NOT_APPLICABLE);
    return Console.print(INTERFACE_TEXT.FREEBIE);
  },

  printDiscountSummary(summary) {
    Console.print('');
    Console.print(INTERFACE_TEXT.DISCOUNTS_HEADER);

    if (!summary) return Console.print(INTERFACE_TEXT.NOT_APPLICABLE);

    const promotions = Object.keys(summary);

    for (let i = 0; i < promotions.length; i += 1) {
      if (summary[promotions[i]] === 0) continue;
      const price = insertThousandsComma(summary[promotions[i]].toString());
      Console.print(`${PROMOTION_NAMES[promotions[i]]}: -${price}원`);
    }
    return null;
  },

  printTotalDiscounts(discounted) {
    Console.print('');
    Console.print(INTERFACE_TEXT.DISCOUNTED_AMOUNT_HEADER);

    if (discounted === 0) return Console.print(INTERFACE_TEXT.ZERO_DISCOUNTS);

    const text = insertThousandsComma(discounted.toString());
    return Console.print(`-${text}원`);
  },

  printPaymentTotal(paymentTotal) {
    Console.print('');
    Console.print(INTERFACE_TEXT.PAYMENT_TOTAL_HEADER);

    const text = insertThousandsComma(paymentTotal.toString());
    Console.print(`${text}원`);
  },
};

export default OutputView;
