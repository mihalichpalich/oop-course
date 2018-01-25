let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

for (let key in rabbit) {
  if (!rabbit.hasOwnProperty(key)) continue; // пропустить "не свои" свойства
  //console.log(`${key} = ${rabbit[key]}`); // выводит только "jumps"
}

var data = Object.create(null);
data.text = "Привет";

console.log(data.text);
console.log(data.toString);