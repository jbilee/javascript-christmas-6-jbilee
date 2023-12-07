export const PROMPTS = {
  reservationDate: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  menuOrder: '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
};

const ERROR_PREFIX = '[ERROR]';

export const ERRORS = {
  invalidDate: `${ERROR_PREFIX} 유효한 날짜가 아닙니다.`,
  invalidOrderFormat: `${ERROR_PREFIX} 주문 메뉴가 형식에 맞지 않습니다.`,
  invalidItemCount: `${ERROR_PREFIX} 주문 메뉴는 1개 이상, 20개 이하여야 합니다.`,
  invalidItemOrder: `${ERROR_PREFIX} 메뉴에 없는 아이템입니다.`,
  invalidItemCategories: `${ERROR_PREFIX} 음료만 주문할 수 없습니다.`,
};
