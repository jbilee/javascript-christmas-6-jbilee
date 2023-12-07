export const MENU_ITEM_SEPARATOR = ',';
export const MENU_COUNT_SEPARATOR = '-';
export const NONE = '없음';
export const MONTH_STRING = '12';

export const DAY_STRINGS = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

export const PROMPTS = {
  reservationDate:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  menuOrder:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
};

export const RESULTS = {
  title: (date) =>
    `${MONTH_STRING}월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  menuOrderHeader: '\n<주문 메뉴>',
  baseTotalHeader: '\n<할인 전 총주문 금액>',
  freebieHeader: '\n<증정 메뉴>',
  freebie: '샴페인 1개',
  promotionsHeader: '\n<혜택 내역>',
  discountsHeader: '\n<총혜택 금액>',
  discountedTotalHeader: '\n<할인 후 예상 결제 금액>',
  badgeHeader: `\n<${MONTH_STRING}월 이벤트 배지>`,
  discountFormat: (number) => `-${number}원`,
  totalFormat: (number) => `${number}원`,
};

const ERROR_PREFIX = '[ERROR]';

export const ERRORS = {
  invalidDate: `${ERROR_PREFIX} 유효하지 않은 날짜입니다. 다시 입력해 주세요.`,
  invalidOrderFormat: `${ERROR_PREFIX} 유효하지 않은 주문입니다. 다시 입력해 주세요.`,
  invalidItemCount: `${ERROR_PREFIX} 유효하지 않은 주문입니다. 다시 입력해 주세요.`,
  invalidItemOrder: `${ERROR_PREFIX} 유효하지 않은 주문입니다. 다시 입력해 주세요.`,
  duplicateItem: `${ERROR_PREFIX} 유효하지 않은 주문입니다. 다시 입력해 주세요.`,
  invalidItemCategories: `${ERROR_PREFIX} 유효하지 않은 주문입니다. 다시 입력해 주세요.`,
};
