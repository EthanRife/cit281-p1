/*
    CIT 281 Project 1
    Name: Your Name
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let string = "abcdefghijklmnopqrstuvwxyz";
//tester console.log(alphabet[0]);
//I took some inspiration from this website https://www.coderrocketfuel.com/article/generate-a-random-letter-from-the-alphabet-using-javascript
let length = getRandomInteger(5, 26);
let i;
let text = '';
for (i = 0; i <= length; i++) {
    text += (string[getRandomInteger(0,string.length)]);
}
console.log(text);