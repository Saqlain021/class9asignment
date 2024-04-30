import inquirer from "inquirer"
let comp = "rock"
let user = await inquirer.prompt([
    {
        name:"input",
        message:"select your option",
        type:"list",
        choices:["rock","paper","scissor"]
        
    }
]);
if (comp == user.input){
    console.log(`computer :${comp}
game is tie`);
}
else if (( comp =="rock" && user.input == "scissor") || (comp == "paper" && user.input =="rock" )|| (comp == "scissor" && user.input =="paper")){
    console.log(`computer:${comp} 
you loose`)
}
else {
    console.log(`computer:${comp}
you won`)
}
