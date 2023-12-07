import { Console } from '@woowacourse/mission-utils';
import { RESULTS, NONE } from '../constants/strings.js';
import { PROMOTIONS } from '../constants/constants.js';

const OutputView = {
  printTitle(date) {
    Console.print(RESULTS.title(date));
  },

  printMenu(menuOrder) {
    Console.print(RESULTS.menuOrderHeader);
    menuOrder.forEach(([name, count]) => {
      Console.print(`${name} ${count}개`);
    });
  },

  printBaseTotal(baseTotal) {
    Console.print(RESULTS.baseTotalHeader);
    Console.print(RESULTS.totalFormat(baseTotal));
  },

  printPromotions(summary) {
    Console.print(RESULTS.freebieHeader);
    if (summary.freebie > 0) {
      Console.print(RESULTS.freebie);
    } else {
      Console.print(NONE);
    }

    Console.print(RESULTS.promotionsHeader);
    Object.keys(summary).forEach((key) => {
      if (summary[key] !== 0) {
        Console.print(
          `${PROMOTIONS[key].title}: ${RESULTS.discountFormat(summary[key])}`,
        );
      }
    });
  },

  printDiscounts(discounts) {
    Console.print(RESULTS.discountsHeader);
    Console.print(RESULTS.discountFormat(discounts));
  },

  printDiscountedTotal(discountedTotal) {
    Console.print(RESULTS.discountedTotalHeader);
    Console.print(RESULTS.totalFormat(discountedTotal));
  },

  printBadge(badge) {
    Console.print(RESULTS.badgeHeader);
    if (!badge) {
      return Console.print(NONE);
    }
    return Console.print(badge);
  },
};

export default OutputView;
