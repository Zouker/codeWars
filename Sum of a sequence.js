// Sum of a sequence
//
// Your task is to make function, which returns the sum of a sequence of integers.
//
//     The sequence is defined by 3 non-negative values: begin, end, step (inclusive).
//
//     If begin value is greater than the end, function should returns 0
//
// Examples
//
// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

const sequenceSum = (begin, end, step) => {
    if (begin > end) return 0
    let result = 0
    for (let number = begin; number <= end; number = number + step) {
        result = result + number
    }
    return result
};
