// Abbreviate a Two Word Name

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name) {
    let arr = name.split(' ');
    let firstChar = arr[0].charAt(0).toUpperCase();
    let secondChar = arr[1].charAt(0).toUpperCase();
    let result = firstChar + '.' + secondChar;
    return result;
}

// or

// function abbrevName(name){
//     return name.split(' ')[0].charAt(0).toUpperCase() + '.' + name.split(' ')[1].charAt(0).toUpperCase();
//   }