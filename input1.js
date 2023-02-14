//1

const readLine = require('readline-sync');

let answer = readLine.question("Do you want to hear a joke?\nYour answer: ");
console.log(answer);
if (answer == "yes"){
    console.log(`Why do cows wear bells?\nBecause their horns don’t work.`);
} else {
    console.log("end of program");
}

let answer3 = Number(readLine.question("Enter a number: "));
if (answer3 % 2 == 0){

    console.log("divisible by 2");

} else{
    console.log("not divisible by 2");
}
if (answer3 % 3 == 0){
    console.log("divisible by 3");
}  else{
    console.log("not divisible by 3");
}
if (answer3 % 4 == 0) {
    console.log("divisible by 4");

}  else{
    console.log("not divisible by 4");
}
if (answer3 % 5 == 0) {
    console.log("divisible by 5");
}  else{
    console.log("not divisible by 5");
}
if (answer3 % 6 == 0) {
    console.log("divisible by 6");
}  else{
    console.log("not divisible by 6");
}

let answer4 = Number(readLine.question("Guess my secret number!: "));

if (answer4 % 8 == 8){

    console.log("You Win!");

}

if (answer4 > 8){

    console.log("Too high");

}

if (answer4 < 8){
    console.log("To low")
}

else {

    console.log("you win!");

}



let mealPrice = Number(readLine.question("Enter meal price: "));
let tax = (mealPrice *.08 );
let diff = mealPrice + tax;
console.log(`new cost: = ${mealPrice}`);








