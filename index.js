import inquirer from "inquirer";
async function askQuestion() {
    var answers = await inquirer.prompt([
        {
            type: "list",
            name: "operator",
            message: "What type of calculation do you want to perform?",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter your first number for the operation: "
        },
        {
            type: "number",
            name: "num2",
            message: "Enter your second number for the operation: "
        }
    ]);
    if (answers.operator == "Addition") {
        console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
    }
    else if (answers.operator == "Subtraction") {
        console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
    }
    else if (answers.operator == "Multiplication") {
        console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 * answers.num2}`);
    }
    else if (answers.operator == "Division") {
        console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
    }
}
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want to do another calculation? (Type Y or N): ",
        });
    } while (again.restart.toLowerCase == "y");
    {
    }
}
startAgain();
