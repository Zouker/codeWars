// Find the stray number
//
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.
//
//     Complete the method which accepts such an array, and returns that single different number.
//
//     The input array will always be valid! (odd-length >= 3)
//
// Examples
//     [1, 1, 2] ==> 2
//     [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    let array = numbers.sort((a, b) => a - b)
    if (array[0] !== array[1]) {
        return array[0]
    }
    if (array[array.length - 1] !== array[array.length - 2]) {
        return array[array.length - 1]
    }
}