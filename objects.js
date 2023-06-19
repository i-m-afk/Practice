let car = {
  make: "honda",
  model: "i10",
  isUsed: true,
  makeNoise() {
    console.log("Vroom");
  },
};
console.log(car.make);
car.makeNoise();

let book = {
  title: "Harry Potter",
  Author: {
    name: "JK Rolling",
    age: 64,
  },
};
console.log(book.Author.age);
