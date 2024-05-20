#!/urs/bin/env node
import inquirer from "inquirer";

// // Computer will generate random number>-Done
// // User input for guessing number>-Done
// // Compare user input number  with computer generated random number and show result>-Done

 const randomNumber =Math.floor(Math.random()*6+1);
 console.log(randomNumber);
const answers= await inquirer.prompt([
    {
        name:"userguessednumber",
        type:"number",
        message:"Please guess a number between 1-6:",
    },
]);
if (answers.userguessednumber === randomNumber) {
console.log("Congratulations! you have guessed a coreect number");
}
else {
    console.log("You have guessed a wrong number");

}