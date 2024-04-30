//find if he is your frind
import inquirer from "inquirer";
let friend = await inquirer.prompt([
    {
        name: "name",
        message: "find if he is your friend :",
        type: "string"
    }
]);
if (friend.name == "wahaj" || friend.name == "talha" || friend.name == "salik") {
    console.log(`${friend.name} is your friend`);
}
else {
    console.log(`${friend.name} is not your friend`);
}
