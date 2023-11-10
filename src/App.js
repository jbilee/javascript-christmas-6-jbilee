import { Console } from '@woowacourse/mission-utils';
import InputView from './InputView.js';

class App {
  async run() {
    const reservationDate = await this.getReservationDate();
  }

  async getReservationDate() {
    let input;

    do {
      try {
        input = await InputView.readDate();
        this.validateDate(input);
      } catch (error) {
        Console.print(error.message);
        input = null;
      }
    } while (!input);

    return input;
  }

  validateDate(inputString) {
    const inputNumber = Number(inputString);
    if (inputNumber < 1 || inputNumber > 31 || inputString.includes('.'))
      throw new Error('[ERROR] 유효한 날짜(1~31)가 아닙니다.');
    if (Number.isNaN(inputNumber))
      throw new Error('[ERROR] 숫자만 입력해 주세요.');
  }
}

export default App;
