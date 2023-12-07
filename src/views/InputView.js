import { Console } from '@woowacourse/mission-utils';
import { PROMPTS } from '../constants/strings.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(PROMPTS.reservationDate);
    return input;
  },
};

export default InputView;