import { Console } from '@woowacourse/mission-utils';
import { INTERFACE_TEXT } from './constants.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(INTERFACE_TEXT.DATE_PROMPT);
    return input;
  },

  async readMenu() {
    const input = await Console.readLineAsync(INTERFACE_TEXT.MENU_PROMPT);
    return input;
  },
};

export default InputView;
