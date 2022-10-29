// Sum of Odd Cubed Numbers
//
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
    if (arr.map(el => typeof (el) === 'string' ? undefined : el).some(el => el === undefined)) {
        return undefined
    } else {
        return arr.map(el => Math.abs(el) % 2 === 1 ? el ** 3 : '').reduce((acc, el) => Number(acc) + Number(el))
    }
}