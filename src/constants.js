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
    TYPE: 'WEEKDAYS',
    DATES: [
      3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28,
      31,
    ],
  },
  { TYPE: 'WEEKENDS', DATES: [1, 2, 8, 9, 15, 16, 22, 23, 29, 30] },
  {
    TYPE: 'D_DAY_SALES',
    DATES: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25,
    ],
  },
  { TYPE: 'SPECIAL_SALES', DATES: [3, 10, 17, 24, 25, 31] },
];
