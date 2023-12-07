import { REGEX } from './constants/constants.js';
import InputView from './views/InputView.js';

class App {
  async run() {
    this.getReservationDate();
  }

  async getReservationDate() {
    const reservationDate = await InputView.readDate();
    this.validateDate(reservationDate);
  }

  validateDate(input) {
    if (!REGEX.date.test(input)) {
      throw new Error('[ERROR]');
    }
  }
}

export default App;
