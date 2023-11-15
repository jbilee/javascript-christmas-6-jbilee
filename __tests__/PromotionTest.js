import Promotion from '../src/Promotion.js';

describe('Promotion 클래스 테스트', () => {
  test('입력한 날짜에 진행하는 이벤트 목록 추출 기능 테스트', () => {
    const TEST_DATES = [1, 3, 5, 26, 29, 31];
    const expected = [
      ['weekends', 'dDaySales'],
      ['weekdays', 'dDaySales', 'specialSales'],
      ['weekdays', 'dDaySales'],
      ['weekdays'],
      ['weekends'],
      ['weekdays', 'specialSales'],
    ];

    for (let i = 0; i < TEST_DATES.length; i += 1) {
      const newPromotion = new Promotion(TEST_DATES[i]);
      expect(newPromotion.getActivePromotions(TEST_DATES[i])).toEqual(
        expected[i],
      );
    }
  });

  test('평일 혜택 금액 계산 기능 테스트', () => {
    const TEST_DATES = [4, 5, 6];
    const TEST_CATEGORIES = [
      ['appetizers', 'desserts', 'drinks'],
      ['main', 'desserts', 'desserts'],
      ['appetizers', 'main', 'drinks'],
    ];
    const PROMOTION_TYPE = 'weekdays';
    const expected = [2023, 4046, 0];

    for (let i = 0; i < TEST_DATES.length; i += 1) {
      const newPromotion = new Promotion(TEST_DATES[i]);
      expect(
        newPromotion.calculateDiscounts(PROMOTION_TYPE, TEST_CATEGORIES[i]),
      ).toBe(expected[i]);
    }
  });

  test('주말 혜택 금액 계산 기능 테스트', () => {
    const TEST_DATES = [1, 2, 8];
    const TEST_CATEGORIES = [
      ['appetizers', 'main', 'drinks'],
      ['main', 'main', 'desserts'],
      ['appetizers', 'desserts', 'drinks'],
    ];
    const PROMOTION_TYPE = 'weekends';
    const expected = [2023, 4046, 0];

    for (let i = 0; i < TEST_DATES.length; i += 1) {
      const newPromotion = new Promotion(TEST_DATES[i]);
      expect(
        newPromotion.calculateDiscounts(PROMOTION_TYPE, TEST_CATEGORIES[i]),
      ).toBe(expected[i]);
    }
  });

  test('디데이 혜택 금액 계산 기능 테스트', () => {
    const TEST_DATES = [1, 10, 25];
    const TEST_CATEGORIES = [
      ['appetizers', 'main', 'drinks'],
      ['main', 'main', 'desserts'],
      ['appetizers', 'desserts', 'drinks'],
    ];
    const PROMOTION_TYPE = 'dDaySales';
    const expected = [1000, 1900, 3400];

    for (let i = 0; i < TEST_DATES.length; i += 1) {
      const newPromotion = new Promotion(TEST_DATES[i]);
      expect(
        newPromotion.calculateDiscounts(PROMOTION_TYPE, TEST_CATEGORIES[i]),
      ).toBe(expected[i]);
    }
  });

  test('입력한 주문의 모든 혜택 금액 추출 기능 테스트', () => {
    const TEST_DATES = [1, 3, 5, 26, 29, 31];
    const TEST_CATEGORIES = ['main', 'desserts', 'desserts'];
    const TEST_ORDER_TOTAL = 10000;
    const expected = [
      { weekends: 2023, dDaySales: 1000, freebie: 0 },
      { weekdays: 4046, dDaySales: 1200, specialSales: 1000, freebie: 0 },
      { weekdays: 4046, dDaySales: 1400, freebie: 0 },
      { weekdays: 4046, freebie: 0 },
      { weekends: 2023, freebie: 0 },
      { weekdays: 4046, specialSales: 1000, freebie: 0 },
    ];

    for (let i = 0; i < TEST_DATES.length; i += 1) {
      const newPromotion = new Promotion(TEST_DATES[i]);
      expect(
        newPromotion.getDiscounts(TEST_ORDER_TOTAL, TEST_CATEGORIES),
      ).toEqual(expected[i]);
    }
  });
});
