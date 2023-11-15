import Order from '../src/Order.js';
import Planner from '../src/Planner.js';

describe('Planner 클래스 테스트', () => {
  test('주문 총액이 만원 미만일 경우 할인 혜택 없음', () => {
    const TEST_DATE = 1;
    const TEST_ORDER = new Order('양송이수프-1');
    const expected = 0;

    const planner = new Planner(TEST_DATE, TEST_ORDER);

    expect(planner.calculateTotalDiscount()).toBe(expected);
  });

  test('총 주문 금액 계산 기능 테스트', () => {
    const TEST_DATE = 1;
    const TEST_ORDER = new Order(
      '타파스-1,해산물파스타-2,아이스크림-3,레드와인-2',
    );
    const expected = 210500;

    const planner = new Planner(TEST_DATE, TEST_ORDER);

    expect(planner.calculateBaseTotal()).toBe(expected);
  });

  test('총혜택 계산 기능 테스트', () => {
    const TEST_DATES = [1, 25, 31];
    const TEST_ORDERS = [
      '시저샐러드-1,크리스마스파스타-1',
      '바비큐립-3,레드와인-2',
      '티본스테이크-1,초코케이크-3,샴페인-1',
    ];
    const expected = [3023, 29400, 32069];

    for (let i = 0; i < TEST_DATES.length; i += 1) {
      const order = new Order(TEST_ORDERS[i]);
      const planner = new Planner(TEST_DATES[i], order);
      expect(planner.calculateTotalDiscount()).toBe(expected[i]);
    }
  });
});
