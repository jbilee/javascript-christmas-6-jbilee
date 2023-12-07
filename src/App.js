import PlannerHandler from './controller/PlannerHandler.js';

class App {
  async run() {
    const handler = new PlannerHandler();
    handler.start();
  }
}

export default App;
