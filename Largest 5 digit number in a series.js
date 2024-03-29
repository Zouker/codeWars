// Largest 5 digit number in a series
//
// In the following 6 digit number:
//
//     283910
// 91 is the greatest sequence of 2 consecutive digits.
//
//     In the following 10 digit number:
//
//     1234567890
// 67890 is the greatest sequence of 5 consecutive digits.
//
//     Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.
//
//     Adapted from ProjectEuler.net

function solution(digits) {
    let result = []
    let arr = digits.toString().split('')
    for (let i = 0; i < arr.length - 4; i++) {
        result.push(arr[i] + arr[i + 1] + arr[i + 2] + arr[i + 3] + arr[i + 4])
    }
    let res = result.map(el => +el).sort((a, b) => b - a)
    return res[0]
}
