const readLine = require('readline-sync');

let answer =  readLine.question("Do you want to quit? (Y/y/N/n):");
while (answer != "Y" && answer !="y" && answer !="N" && answer !="n"){
    console.log("invalid choice");
    answer = readLine.question("Try again. (Y/y/N/n:");
}
console.log(`You typed ${answer}`);

let answer2 =  readLine.question("Choose option A,B,or C (case sensitive):");
while (answer2 != "A" && answer2 !="B" && answer2 !="C"){
    console.log("invalid choice");
    answer2 = readLine.question("Try again. Choose option A,B,or C (case sensitive):");
}
console.log(`You typed ${answer2}`);

let answer3 =  readLine.question("Choose option 1,2, or 3:");
while (answer3 != "1" && answer3 !="2" && answer3 !="3"){
    console.log("invalid choice");
    answer2 = readLine.question("Try again. Choose option 1,2,or 3 :");
}
console.log(`You typed ${answer3}`);

let answer4 =  readLine.question("Choose a number between 0 - 10:");
while (answer4 != "0" && answer4 !="1" && answer4 !="2" && answer4 !="3" && answer4 !="4" && answer4 !="5" && answer4 !="6" && answer4 !="7" && answer4 !="8" && answer4 !="9" && answer4 !="10"){
    console.log("invalid choice");
    answer4 = readLine.question("Try again. Choose a number between 0 - 10 :");
}
console.log(`You typed ${answer4}`);

let answer5 =  Number(readLine.question("Choose a positive number:"));
while (answer5 != 0){
   if (answer5 <0){ console.log("invalid choice");
    answer5 = readLine.question("Try again. Choose a positive number :");
    }
}
console.log(`You typed ${answer5}`);

let answer6 =  Number(readLine.question("Choose a negative number:"));
while (answer6 != 0){
    if (answer6 >0){ console.log("invalid choice");
        answer6 = readLine.question("Try again. Choose a negative number :");
    }
}
console.log(`You typed ${answer6}`);

