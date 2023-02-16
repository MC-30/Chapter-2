const readLine = require('readline-sync');
let num1 = Number(readLine.question("Enter first number: "));
let num2 = Number(readLine.question("Enter first number: "));
let sum = num1 + num2;
console.log(`${num1} + ${num2} = ${sum}`);

let num3 = Number(readLine.question("Enter first number: "));
let num4 = Number(readLine.question("Enter first number: "));
let diff = num3 - num4;
console.log(`${num3} - ${num4} = ${diff}`);


let num5 = Number(readLine.question("Enter first number: "));
let num6 = Number(readLine.question("Enter first number: "));
let product = num5 * num6;
console.log(`${num5} * ${num6} = ${product}`);

let num7 = Number(readLine.question("Enter first number: "));
let num8 = Number(readLine.question("Enter first number: "));
let quotient = num7 / num8;
console.log(`${num7} divided by ${num8} = ${quotient}`);

let num9 = Number(readLine.question("Enter first number: "));
let num10 = Number(readLine.question("Enter first number: "));
let remainder = num9 % num10;
console.log(`${num9} divided by ${num10} = ${quotient} with a remainder of ${remainder}`);

let firstName = readLine.question("Enter first name: ");
let lastName = readLine.question("Enter last name: ");

   console.log(`Welcome ${lastName},${firstName}`);

let title = readLine.question("Enter your title: ");
let lastName2 = readLine.question("Enter last name: ");
let suffix = readLine.question("Enter your suffix: ");
console.log(`Welcome ${title} ${lastName2},${suffix}.`);

let streetNum = readLine.question("Enter your street number: ");
let streetName = readLine.question("Enter your street name: ");
let streetType = readLine.question("Enter your street type: ");
let City = readLine.question("Enter your city: ");
let state = readLine.question("Enter your state: ");
let zipCode = readLine.question("Enter your zip code: ");
console.log(`${streetNum} ${streetName}\n${City} ${state} ${zipCode}`);
