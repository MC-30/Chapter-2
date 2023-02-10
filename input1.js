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





