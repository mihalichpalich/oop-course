const WATER_HEAT_CAPACITY = 4200;

class CoffeeMachine {
  constructor(power) {
    this.waterAmount = 0;
    this.power = power;
  }

  getBoilTime() {
    return this.waterAmount * WATER_HEAT_CAPACITY * 80 / this.power;
  }

  onReady() {
    console.log('Кофе готов!');
  }

  run() {
    setTimeout(this.onReady, this.getBoilTime());
  }
}

let coffeeMachine = new CoffeeMachine(100000);
coffeeMachine.waterAmount = 200;

//console.log(coffeeMachine.power);

coffeeMachine.run();
