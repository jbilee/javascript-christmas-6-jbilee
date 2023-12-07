export const ORDER_LIMIT = 20;
export const MINIMUM_ORDER_FOR_DISCOUNTS = 10000;
export const MINIMUM_ORDER_FOR_FREEBIE = 120000;

export const REGEX = {
  date: /^([1-9]|[12]\d|3[01])$/,
  menuOrder: /^.*-\d{1,2}$/,
};

export const RESTAURANT_MENU = {
  양송이수프: {
    category: 'appetizer',
    price: 6000,
  },
  타파스: {
    category: 'appetizer',
    price: 5500,
  },
  시저샐러드: {
    category: 'appetizer',
    price: 8000,
  },
  티본스테이크: {
    category: 'main',
    price: 55000,
  },
  바비큐립: {
    category: 'main',
    price: 54000,
  },
  해산물파스타: {
    category: 'main',
    price: 35000,
  },
  크리스마스파스타: {
    category: 'main',
    price: 25000,
  },
  초코케이크: {
    category: 'dessert',
    price: 15000,
  },
  아이스크림: {
    category: 'dessert',
    price: 5000,
  },
  제로콜라: {
    category: 'drink',
    price: 3000,
  },
  레드와인: {
    category: 'drink',
    price: 60000,
  },
  샴페인: {
    category: 'drink',
    price: 25000,
  },
};

export const PROMOTIONS = {
  weekdays: {
    discounts: 2023,
  },
  weekends: {
    discounts: 2023,
  },
  dDay: {
    discounts: {
      base: 900,
      bonus: 100,
    },
  },
  specialDay: {
    discounts: 1000,
  },
  freebie: {
    discounts: 25000,
  },
};
