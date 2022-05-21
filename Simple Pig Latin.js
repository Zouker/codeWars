// Simple Pig Latin
//
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//     Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

pigIt = (str) => str.split(' ').map(el => el.slice(1) + el[0]).map(el => el !== '!' && el !== '?' ? el + 'ay' : el).join(' ')