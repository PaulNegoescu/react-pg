const fruit = ['apples', 'oranges', 'pears'];

for(let i = 0; i < fruit.length; i++) {
  const elem = fruit[i];
  console.log(elem);
}

fruit.push('bananas');
fruit.unshift('berries');

for(const elem of fruit) {
  console.log(elem);
}

console.log(fruit.pop(), fruit.shift());
console.log(fruit);
// console.log(fruit[0], fruit[1], fruit[2]);
