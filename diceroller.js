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




//version: 2

//const readline = require('readline');

//const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
//});

//function rollDice(diceNotation) {
//    // Regex pattern: Captures dice count, size, optional bonus
//    const dicePattern = /^(\d+)d(\d+)([+-]\d+)?$/i;
//    const match = diceNotation.match(dicePattern);

//    if (!match) {
//        throw new Error("Invalid input! Use format: (e.g., 3d6, 1d20+5, 2d8-3).");
//    }

//    let quantity = parseInt(match[1], 10);
//    let size = parseInt(match[2], 10);
//    let bonus = match[3] ? parseInt(match[3], 10) : 0;

//    if (quantity <= 0 || size <= 0) {
//        throw new Error("Dice quantity and size must be greater than 0.");
//    }

//    let rolls = [];
//    for (let i = 0; i < quantity; i++) {
//        rolls.push(Math.floor(Math.random() * size) + 1);
//    }

//    let sum = 0;
//    for (let i = 0; i < rolls.length; i++) {
//        sum += rolls[i];
//    }
//    finalTotal = sum + bonus;

//    //let sum = rolls.reduce((a, b) => a + b, 0);
//    //let finalTotal = sum + bonus;

//    console.log(`🎲 Rolls: ${rolls.join(", ")}`);
//    console.log(`🔢 Sum: ${sum} ${bonus ? (bonus > 0 ? `+ ${bonus}` : `- ${Math.abs(bonus)}`) : ""}`);
//    console.log(`✨ Final Total: ${finalTotal}`);
//}

//rl.question("Enter dice roll (e.g., 3d6, 1d20+5): ", (input) => {
//    try {
//        rollDice(input);
//    } catch (error) {
//        console.error(`❌ Error: ${error.message}`);
//    }
//    rl.close();
//});





//version: 3


// diceRoller.js

//// Retrieve command-line arguments
//const args = process.argv.slice(3);

//// Check if the right number of arguments is provided
//if (args.length !== 3) {
//    console.error('Usage: node diceRoller.js <number_of_dice> <sides_per_die> <Bonus> Optional');
//    process.exit(1);
//}

//function rollDice(diceNotation) {
//    // Regex pattern: Captures dice count, size, optional bonus
//    const dicePattern = /^(\d+)d(\d+)([+-]\d+)?$/i;
//    const match = diceNotation.match(dicePattern);

//    if (!match) {
//        throw new Error("Invalid input! Use format: (e.g., 3d6, 1d20+5, 2d8-3).");
//    }

//    let quantity = parseInt(match[1], 10);
//    let size = parseInt(match[2], 10);
//    let bonus = match[3] ? parseInt(match[3], 10) : 0;

//    if (quantity <= 0 || size <= 0) {
//        throw new Error("Dice quantity and size must be greater than 0.");
//    }

//    let rolls = [];
//    for (let i = 0; i < quantity; i++) {
//        rolls.push(Math.floor(Math.random() * size) + 1);
//    }

//    let sum = 0;
//    for (let i = 0; i < rolls.length; i++) {
//        sum += rolls[i];
//    }
//    finalTotal = sum + bonus;

//    //let sum = rolls.reduce((a, b) => a + b, 0);
//    //let finalTotal = sum + bonus;

//    console.log(`🎲 Rolls: ${rolls.join(", ")}`);
//    console.log(`🔢 Sum: ${sum} ${bonus ? (bonus > 0 ? `+ ${bonus}` : `- ${Math.abs(bonus)}`) : ""}`);
//    console.log(`✨ Final Total: ${finalTotal}`);
//}

//rl.question("Enter dice roll (e.g., 3d6, 1d20+5): ", (input) => {
//    try {
//        rollDice(input);
//    } catch (error) {
//        console.error(`❌ Error: ${error.message}`);
//    }
//    rl.close();
//});





//version: 4

function rollDice(diceNotation) {
    const dicePattern = /^(\d+)d(\d+)([+-]\d+)?$/i;
    const match = diceNotation.match(dicePattern);

    if (!match) {
        console.error("❌ Invalid input! Use format: (e.g., 3d6, 1d20+5, 2d8-3).\n");
        process.exit(1);
    }

    let quantity = parseInt(match[1], 10);
    let size = parseInt(match[2], 10);
    let bonus = match[3] ? parseInt(match[3], 10) : 0;

    if (quantity <= 0 || size <= 0) {
        console.error("❌ Dice quantity and size must be greater than 0.\n");
        process.exit(1);
    }

    let rolls = Array.from({ length: quantity }, () => Math.floor(Math.random() * size) + 1);
    let sum = rolls.reduce((a, b) => a + b, 0);
    let finalTotal = sum + bonus;

    console.log(`🎲 Rolls: [${rolls.join(", ")}] ➝ Sum: ${sum}${bonus ? (bonus > 0 ? ` + ${bonus}` : ` - ${Math.abs(bonus)}`) : ""} ➝ ✨ Final Total: ${finalTotal}`);
}

const args = process.argv.slice(2);
if (args.length === 0) {
    console.error("❌ Please provide a dice notation (e.g., 3d6, 1d20+5).\n");
    process.exit(1);
}

rollDice(args[0]);
