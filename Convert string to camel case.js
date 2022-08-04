// Convert string to camel case
//
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
//
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
    if (str === '') {
        return ''
    }
    const arr = str.split(/[-_]/g)
    const upper = arr.map((el, i) => {
        return el[0] !== el[i] ? el[0].toUpperCase() + el.substr(1) : el;
    });
    return upper.join('')
}
