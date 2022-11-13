// Factorial
//
// Your task is to write function factorial.
//
// https://en.wikipedia.org/wiki/Factorial

function factorial(n) {
    if (n < 2)
        return 1;
    for (let i = n - 1; i >= 1; i--) {
        n *= i;
    }
    return n;
}