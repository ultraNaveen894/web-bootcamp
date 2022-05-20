var joke = require('give-me-a-joke');
var colors = require('colors');
 
console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap'.trap);

// To get a random dad joke
joke.getRandomDadJoke (function(joke) {
 console.log(joke.rainbow);
});
// console.log(joke)
