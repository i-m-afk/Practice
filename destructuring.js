//function nameToFirstAndLast(fullName) {
//  return fullName.split(" ");
//}
//const [first, last] = nameToFirstAndLast("Rishav Kumar");
//console.log(first, last);
//
function nameToFirstAndLast(fullName) {
  const [first, last] = fullName.split(" ");
  return {
    f: first,
    l: last,
  };
}
// console.log(nameToFirstAndLast("Rishav Kumar"));
function nameToFirstAndLast(fullName) {
  const [first, last] = fullName.split(" ");
  return {
    f: first,
    l: last,
  };
}
// console.log(nameToFirstAndLast("Rishav Kumar"));

const { f: firstName, l: lastName } = nameToFirstAndLast("Rishav Kumar");
console.log(firstName);
