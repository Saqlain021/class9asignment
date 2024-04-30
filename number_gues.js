//guess a number 
import inquirer from "inquirer";
let num = Math.floor(Math.random() * 10 + 1); //random number from 1 to 10
let condition = true;
while (condition) {
    let guess = await inquirer.prompt([
        {
            name: "guessing",
            message: "guess a number: ",
            type: "number"
        }
    ]);
    if (guess.guessing > num) {
        console.log("your guess is high");
    }
    else if (guess.guessing < num) {
        console.log("your guess is low");
    }
    else if (guess.guessing === num) {
        console.log("your guess is right");
    }
    else {
        console.log("not a number");
    }
    let restart = await inquirer.prompt([
        {
            name: "again",
            message: "try again: ",
            type: "confirm",
            default: true
        }
    ]);
    condition = restart.again;
}
console.log("END.");
