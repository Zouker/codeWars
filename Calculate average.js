// Calculate average

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

find_average = (array) => !array || array.length === 0 ? 0 : array.reduce((value1, value2) => value1 + value2, 0) / array.length