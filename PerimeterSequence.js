// Perimeter sequence
// The first three stages of a sequence are shown.


// The blocksize is a by a and a ≥ 1.

// What is the perimeter of the nth shape in the sequence (n ≥ 1) ?

function perimeterSequence(a, n) {
    let perimeter = (a + a) * 2;
    sequence = perimeter * n;
    return sequence;
}

// or

//   function perimeterSequence(a,n) {
//     return a * 4 * n;
//   }