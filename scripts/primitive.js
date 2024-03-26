// Primitive data types
// console.log(typeof 'Hello World');
// console.log(typeof 123.3455);
// console.log(typeof typeof 123);
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof 23n);
// console.log(typeof Symbol('test'));

// Number literal
const sum = 2;
// sum = sum + 2;
// sum += 2;
// sum++;

// String Literal
let name = "\tPaul \n Ne'goes\"cu" +
" sdsdasdsa" + sum;

// Template literal
// Interpolation
let another = `Rezultatul este: ${sum + 5}!`;

function theTag(...args) {
  console.log(args);
}

// theTag(1, 2, 4);
// Tagged template literal
let toTag = theTag`Rezultatul este: ${sum + 5}!`;
// console.log(another);

let fName = 'Ioana';

if(4 < 3 && fName) {
  // condition is true
  console.log(`it's true`);
} else {
  // condition is false
  console.log(`it's false`);
}

if(fName) {
  theTag(fName);
}

fName && theTag(fName);

fName = fName || 'Paul';
console.log(fName === 'Paul' ? 'Este Paul' : 'Nu este Paul');
console.clear()
switch (sum) {
  case 2: 
    console.log('Este Paul')
    //fallthrough case
  case '2': 
    console.log('Este Andrei');
    break;
  default: 
    console.log('Nu e niciunul dintre cei doi');
    break;
}

// if(sum === 1) {
//   console.log('Este Paul');
// } else if(sum === '2') {
//   console.log('Este Andrei');
// } else {
//   console.log('Nu e niciunul dintre cei doi');
// }

{
  let i = 0;
  while(i < 5) {
    console.log(i);
    i += 1;
  }
}

for(let i = 5; i > 0; i-=1) {
  console.log(i);
}

console.clear();

let i = 0;
do {
  console.log(i);
  i += 1;
} while(i < 5);

