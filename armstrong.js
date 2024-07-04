const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Enter a number: ', number => {
    if (isArmstrongNumber(number)) {
        console.log(`${number} is an Armstrong Number.`);
    } else {
        console.log(`${number} is not an Armstrong Number.`);
    }
    readline.close();
});
function isArmstrongNumber(number) {
    let sum = 0;
    const numberOfDigits = number.length;
    for (let digit of number) {
        sum += Math.pow(parseInt(digit), numberOfDigits);
    }
    return sum === parseInt(number);
}