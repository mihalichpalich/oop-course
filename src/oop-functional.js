let timerId;

class CoffeeMachine {
  constructor(power, capacity) {
    this.waterAmount = 0;
    this.status = false;
    this.WATER_HEAT_CAPACITY = 4200;
    this.power = power;
    this.capacity = capacity;
  }

  getTimeToBoil() {
    return this.waterAmount * this.WATER_HEAT_CAPACITY * 80 / this.power;
  }

  setWaterAmount(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > this.capacity) {
      throw new Error(`Нельзя залить воды больше, чем ${this.capacity}`);
    }

    this.waterAmount = amount;
  };

  getWaterAmount() {
    return this.waterAmount;
  };

  // waterAmount(amount) {
  //   // вызов без параметра, значит режим геттера, возвращаем свойство
  //   if (!arguments.length) return this.waterAmount;

  //   // иначе режим сеттера
  //   if (amount < 0) {
  //     throw new Error("Значение должно быть положительным");
  //   }
  //   if (amount > this.capacity) {
  //     throw new Error("Нельзя залить воды больше, чем " + this.capacity);
  //   }

  //   this.waterAmount = amount;
  // }

  addWater(amount) {
    this.waterAmount += amount;

    if(this.waterAmount > this.capacity) {
      throw new Error(`Нельзя залить воды больше, чем ${this.capacity}`);
    }
  }

  onReady() {
    console.log('Кофе готов!');
  }

  setOnReady(newOnReady) {
    this.onReady = newOnReady;
  };

  run() {
    this.status = setTimeout(() => (this.status = false, this.onReady()), this.getTimeToBoil());
  }

  stop() {
    clearTimeout(timerId);
  }

  isRunning() {
    return !!this.status;
  }
}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

console.log(`До: ${coffeeMachine.isRunning()}`); // До: false

coffeeMachine.run();
console.log(`В процессе: ${coffeeMachine.isRunning()}`); // В процессе: true

coffeeMachine.setOnReady(function() {
  console.log(`После: ${coffeeMachine.isRunning()}`); // После: false
});

