class CoffeeMachine {
  constructor(power) {
    this.waterAmount = 0;
    console.log(`Создана кофеварка мощностью: ${power} ватт`);
  }
}

let coffeeMachine = new CoffeeMachine(100);

coffeeMachine.waterAmount = 200;

//console.log(coffeeMachine);