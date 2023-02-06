// Variables store data for later use

//Create a variable with let
let myVariable = "value";
let myNewVariable = 7;
let myBool = true;

//Accessing variable values
console.log(myVariable);
console.log(myNewVariable+5);
console.log(myBool && true);

//Update value stored in a variable
myNewVariable = 10;
console.log(myNewVariable);

//increase by 1
myNewVariable=myNewVariable+1;
console.log(myNewVariable);

//Decrease by 1
myNewVariable=myNewVariable-1;
console.log(myNewVariable);

//Multiply by 3
myNewVariable = myNewVariable * 3;
console.log(myNewVariable);

//Divide by 3
myNewVariable = myNewVariable / 3;
console.log(myNewVariable);

//Divide and return the remainder
myNewVariable = myNewVariable % 2; // 10/2 = 5 with 0 remainder
console.log(myNewVariable);

// Shortcuts!
let x = 100;
x=x+1 //add 1
x++ //add 1

let y=50;
y=y-1 //minus 1
y--; //minus 1

let z = 12;
z = z+5 //add 5
z+=5;

let answer = 45;
answer = answer -2; //subtract 2
answer -=2; //subtract 2

//other shortcuts
answer *= 7; //multiply by 7
answer /= 2; //divide by 2

//Keywords
const pi = 3.14;
const username = "myUser123";
//constants cannot change values
var old = 123;
//var is the old way to create variables instead of let.
//Dont use it!