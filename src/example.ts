import * as readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';
import {MathFunctions} from './MathFunctions';

(async () => {
    const rl = readline.createInterface({input, output});
    const menuText: string = 'What would you like to do?\r\n' +
        '1) Find fibonacci number.\r\n' +
        '2) Find fibonacci number (recursive).\r\n' +
        '3) Find factorial.\r\n' +
        '4) Find factorial (recursive).\r\n';

    let answer: number;

    do {
        answer = parseInt(await rl.question(menuText));
        let number: number = parseInt(await rl.question('Write a number\r\n'));
        let result: number | null = null;

        switch (answer) {
            case 1:
                result = await MathFunctions.findFibonacciNumber(number);
                break;
            case 2:
                result = await MathFunctions.findFibonacciNumberRecursive(number);
                break;
            case 3:
                result = await MathFunctions.factorial(number);
                break;
            case 4:
                result = await MathFunctions.factorialRecursive(number);
                break;
            default:
                console.log('Incorrect number. Exiting...');
        }

        if (result !== null) {
            console.log('Result: ' + result);
        }

    } while (answer > 0 && answer < 5);

    rl.close();

    return;
})();
