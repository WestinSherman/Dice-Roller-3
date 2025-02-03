//const readline = require('readline');

//const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
//});

//function rollDice(diceNotation) {
//    const match = diceNotation.match(/(\d+)d(\d+)/i);
//    if (!match) {
//        console.log("Invalid input. Use format like '3d6' or '1d20'.");
//        return;
//    }

//    let quantity = parseInt(match[1]);
//    let size = parseInt(match[2]);

//    if (size <= 0 || quantity <= 0) {
//        console.log("Dice size and quantity must be greater than zero.");
//        return;
//    }

//    let rolls = [];
//    for (let i = 0; i < quantity; i++) {
//        rolls.push(Math.floor(Math.random() * size) + 1);
//   } 

//    const sum = rolls.reduce((a, b) => a + b, 0);
//    console.log(`You rolled: ${rolls.join(', ')} (Total: ${sum})`);
//}

//rl.question("Enter dice roll (e.g., '3d6', '1d20'): ", (input) => {
//    rollDice(input);
//    rl.close();
//});



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function rollDice(diceNotation) {
    // Regex pattern: Captures dice count, size, optional bonus
    const dicePattern = /^(\d+)d(\d+)([+-]\d+)?$/i;
    const match = diceNotation.match(dicePattern);

    if (!match) {
        throw new Error("Invalid input! Use format: (e.g., 3d6, 1d20+5, 2d8-3).");
    }

    let quantity = parseInt(match[1], 10);
    let size = parseInt(match[2], 10);
    let bonus = match[3] ? parseInt(match[3], 10) : 0;

    if (quantity <= 0 || size <= 0) {
        throw new Error("Dice quantity and size must be greater than 0.");
    }

    let rolls = [];
    for (let i = 0; i < quantity; i++) {
        rolls.push(Math.floor(Math.random() * size) + 1);
    }

    let sum = rolls.reduce((a, b) => a + b, 0);
    let finalTotal = sum + bonus;

    console.log(`🎲 Rolls: ${rolls.join(", ")}`);
    console.log(`🔢 Sum: ${sum} ${bonus ? (bonus > 0 ? `+ ${bonus}` : `- ${Math.abs(bonus)}`) : ""}`);
    console.log(`✨ Final Total: ${finalTotal}`);
}

rl.question("Enter dice roll (e.g., 3d6, 1d20+5): ", (input) => {
    try {
        rollDice(input);
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
    }
    rl.close();
});