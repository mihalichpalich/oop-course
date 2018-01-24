class CoffeeMachine {
  constructor(power) {
    this.waterAmount = 0;
  }

  getBoilTime() {
    return 1000; // точная формула расчета будет позже
  }

  onReady() {
    console.log('Кофе готов!');
  }

  run() {
    setTimeout(this.onReady, this.getBoilTime());
  }
}

let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
