function getRandomInt(min, max) {
    min = Math.ceil(min); // Round up to the nearest whole number
    max = Math.floor(max); // Round down to the nearest whole number
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
console.log(getRandomInt(1, 10)); // Generate a random integer between 1 and 10 (inclusive)
console.log(getRandomInt(-5, 5)); // Generate a random integer between -5 and 5 (inclusive)
