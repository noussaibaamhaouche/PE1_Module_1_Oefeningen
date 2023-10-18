// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden



// Voeg hier je eigen code in
let getal1 = ParseFloat(await userInput.question('Geef een getal in));
let getal2 = ParseFloat(await userinput.question('Geef een andere getal in));
 console.log('De som van' + getal1 + 'en'+ getal2 + 'is'+ (getal1 +getal2));                                                



process.exit();
