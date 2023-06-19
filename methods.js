let a = [1, 3, 4, 4, 5, 3, 2];
const s = a.reduce((sum, number) => {
  return sum + number;
}, 0);
console.log(s);

const items = [
  { price: 10 },
  { price: 10 },
  { price: 10 },
  { price: 10 },
  { price: 10 },
  { price: 10 },
];
// total price
const s2 = items.reduce((sum, item) => {
  return sum + item.price;
}, 0);
console.log(s2);
