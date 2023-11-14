export const ORDER_LIMIT = 20;
export const MINIMUM_ORDER_FOR_DISCOUNTS = 10000;
export const MINIMUM_ORDER_FOR_FREEBIE = 120000;

export const RESTAURANT_MENU = {
  양송이수프: {
    CATEGORY: 'appetizers',
    PRICE: 6000,
  },
  타파스: {
    CATEGORY: 'appetizers',
    PRICE: 5500,
  },
  시저샐러드: {
    CATEGORY: 'appetizers',
    PRICE: 8000,
  },
  티본스테이크: {
    CATEGORY: 'main',
    PRICE: 55000,
  },
  바비큐립: {
    CATEGORY: 'main',
    PRICE: 54000,
  },
  해산물파스타: {
    CATEGORY: 'main',
    PRICE: 35000,
  },
  크리스마스파스타: {
    CATEGORY: 'main',
    PRICE: 25000,
  },
  초코케이크: {
    CATEGORY: 'desserts',
    PRICE: 15000,
  },
  아이스크림: {
    CATEGORY: 'desserts',
    PRICE: 5000,
  },
  제로콜라: {
    CATEGORY: 'drinks',
    PRICE: 3000,
  },
  레드와인: {
    CATEGORY: 'drinks',
    PRICE: 60000,
  },
  샴페인: {
    CATEGORY: 'drinks',
    PRICE: 25000,
  },
};

export const PROMOTION_DATES = [
  {
    TYPE: 'weekdays',
    DATES: [
      3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28,
      31,
    ],
  },
  { TYPE: 'weekends', DATES: [1, 2, 8, 9, 15, 16, 22, 23, 29, 30] },
  {
    TYPE: 'dDaySales',
    DATES: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ],
  },
  { TYPE: 'specialSales', DATES: [3, 10, 17, 24, 25, 31] },
];

export const PROMOTION_NAMES = {
  weekdays: '평일 할인',
  weekends: '주말 할인',
  dDaySales: '크리스마스 디데이 할인',
  specialSales: '특별 할인',
  freebie: '증정 이벤트',
}

export const PROMOTION_DISCOUNTS = {
  DAILY: 2023,
  D_DAY: 900,
  SPECIAL: 1000,
  FREEBIE: 25000,
};

export const ERROR_MESSAGES = {
  INVALID_DATE: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  INVALID_ORDER: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
};

export const INTERFACE_TEXT = {
  GREETING: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  DATE_PROMPT: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  MENU_PROMPT: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
  SUMMARY: '에 우테코 식당에서 받을 이벤트 혜택 미리 보기!',
  MENU_HEADER: '<주문 메뉴>',
  BASE_TOTAL_HEADER: '<할인 전 총주문 금액>',
  FREEBIE_HEADER: '<증정 메뉴>',
  DISCOUNTS_HEADER: '<혜택 내역>',
  DISCOUNTED_AMOUNT_HEADER: '<총혜택 금액>',
  PAYMENT_TOTAL_HEADER: '<할인 후 예상 결제 금액>',
  BADGE_HEADER: '<12월 이벤트 배지>',
  FREEBIE: '샴페인 1개',
  NOT_APPLICABLE: '없음',
  ZERO_DISCOUNTS: '0원'
};