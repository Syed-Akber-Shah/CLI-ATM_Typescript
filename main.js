import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["Withdraw", "Check balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let amountData = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        // = += -= (assignment operator)
        myBalance -= amountData.amount;
        console.log(`Your remainig balance is ${myBalance}`);
    }
    else if (operationAns.operation === "Check balance") {
        console.log(`Your current balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin code. Please try again.");
}
