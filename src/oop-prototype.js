let animal = {
  eats: true,
};

function Rabbit(name) {
  this.name = name;
  //console.log(name);
}

Rabbit.prototype = {
  jumps: true,
  constructor: Rabbit
};

Rabbit.prototype.meows = false;

let rabbit = new Rabbit("Кроль");

//console.log(rabbit.meows);

let rabbit2 = new rabbit.constructor("Крольчиха");


//menu

var options = {
  width: 100,
  height: 200
};

function Menu(options) {
  options = Object.create(options);
  options.width = 300;

  console.log(`width: ${options.width}`); // возьмёт width из наследника
  console.log(`height: ${options.height}`); // возьмёт height из исходного объекта
}

var menu = new Menu(options);

console.log(`original width: ${options.width}`); // width исходного объекта
console.log(`original height: ${options.height}`); // height исходного объекта