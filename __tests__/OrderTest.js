import Order from '../src/Order.js';

describe('Order 클래스 테스트', () => {
  test.each([
    ['티본스테이크:1,레드와인:1'],
    ['티본스테이크=1,레드와인=1'],
    ['티본스테이크-1 레드와인-1'],
  ])('주문 포맷이 틀릴 경우 예외 처리', (input) => {
    const TEST_DATE = '1';

    expect(() => {
      new Order(TEST_DATE, input);
    }).toThrow('[ERROR]');
  });

  test.each([['티본스테이크-30'], ['티본스테이크-1,제로콜라-19,초코케이크-1']])(
    '주문 가능한 메뉴 갯수를 초과할 경우 예외 처리',
    (input) => {
      const TEST_DATE = '1';

      expect(() => {
        new Order(TEST_DATE, input);
      }).toThrow('[ERROR]');
    },
  );

  test('음료만 주문할 경우 예외 처리', () => {
    const TEST_DATE = '1';
    const TEST_ORDER = '레드와인-10';

    expect(() => {
      new Order(TEST_DATE, TEST_ORDER);
    }).toThrow('[ERROR]');
  });
});
