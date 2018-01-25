let timerId;

class Machine {
  constructor(power) {
    this._enabled = false;
    this._power = power;
  }

  enable() {
    this._enabled = true;
  };

  disable() {
    this._enabled = false;
  };
}

class CoffeeMachine extends Machine {
  constructor(...args) {
    super(...args);
    this.waterAmount = 0;
    //console.log(this._power);
  }

  setWaterAmount(amount) {
    this.waterAmount = amount;
  };

  onReady() {
    console.log('Кофе готово!');
  }

  run() {
    if (this._enabled) {
      timerId = setTimeout(this.onReady, 1000);
    } else {
      console.log('ошибка, кофеварка выключена!');
    }
  };

  disable() {
    super.disable();
    if (!this._enabled) {
      clearTimeout(timerId);
    }
  };
}

class Fridge extends Machine {
  constructor(...args) {
    super(...args);
    this.food = [];
    this.maxPower = this._power / 100;
  }

  addFood(...args) {
    if (this._enabled) {
      this.food.push(...args);
    } else {
      console.log('ошибка, холодильник выключен');
    }

    if (this.food.length + args.length > this.maxPower) {
      console.log('ошибка, слишком много еды');
    }
  }

  filterFood(filter) {
    return this.food.filter(filter);
  };

  removeFood(item) {
    var idx = this.food.indexOf(item);
    if (idx != -1) this.food.splice(idx, 1);
  };

  getFood() {
    return (this.food).slice();
  };

  disable() {
    super.disable();
    if (this.food.length) {
      console.log("ошибка, в холодильнике есть еда");
    }
  };
}

let fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.disable();



// fridge.addFood({
//   title: "котлета",
//   calories: 100
// });
// fridge.addFood({
//   title: "сок",
//   calories: 30
// });
// fridge.addFood({
//   title: "зелень",
//   calories: 10
// });
// fridge.addFood({
//   title: "варенье",
//   calories: 150
// });

// var dietItems = fridge.filterFood(function(item) {
//   return item.calories < 50;
// });

// //fridge.removeFood("нет такой еды"); // без эффекта
// console.log(fridge.getFood().length); // 4

// dietItems.forEach(function(item) {
//   console.log(item.title); // сок, зелень
//   fridge.removeFood(item);
// });

// console.log(fridge.getFood().length); // 2

// var coffeeMachine = new CoffeeMachine(10000);
// coffeeMachine.setWaterAmount(50);
// coffeeMachine.enable();
// coffeeMachine.run();
// coffeeMachine.disable();
