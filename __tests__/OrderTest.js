import Order from '../src/Order.js';

describe('Order 클래스 테스트', () => {
  test('주문 총액이 만원 미만일 경우 할인 혜택 없음', () => {
    const TEST_DATE = '1';
    const TEST_ORDER = '양송이수프-1';
    const EXPECTED_DISCOUNT = 0;

    const newOrder = new Order(TEST_DATE, TEST_ORDER);
    const baseTotal = newOrder.calculateBaseTotal();
    const summary = newOrder.getDiscountSummary(baseTotal);
    const discount = newOrder.calculateTotalDiscount(summary);

    expect(discount).toBe(EXPECTED_DISCOUNT);
  });

  test('음료만 주문할 경우 예외 처리', () => {
    const TEST_DATE = '1';
    const TEST_ORDER = '레드와인-10';

    expect(() => {
      new Order(TEST_DATE, TEST_ORDER);
    }).toThrow('[ERROR]');
  });
});
