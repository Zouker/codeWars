// Describe a list
//
// Write function describeList which returns "empty" if the list is empty or "singleton" if it contains only one element or "longer"" if more.

function describeList(x) {
    if (!x.length) return 'empty'
    if (x.length === 1) return 'singleton'
    if (x.length > 1) return 'longer'
}