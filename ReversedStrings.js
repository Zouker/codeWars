// Complete the solution so that it reverses the string passed into it.

function solution(str) {
    const array = str.split('');
    const reversedStr = array.reduce((reversed, character) => {
        return character + reversed
    }, '')
    return reversedStr
}

// function solution(str){
//   return str.split('').reverse().join('');
// }