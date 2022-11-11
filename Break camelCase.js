// Break camelCase
//
// Complete the solution so that the function will break up camel casing, using a space between words.
//
//     Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    let result = []
    let arr = string.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 'A' && arr[i] <= 'Z') {
            result.push(' ' + arr[i])
        } else {
            result.push(arr[i])
        }
    }
    return result.join('')
}