// Age in days
//
// Did you ever want to know how many days old are you? Complete the function which returns your age in days. The birthday is given in the following order: year, month, day.
//
//     For example if today is 30 November 2015 then
//
// ageInDays(2015, 11, 1) returns "You are 29 days old"
// The birthday is expected to be in the past.
//
//     Suggestions on how to improve the kata are welcome!

function ageInDays(year, month, day) {
    let days = Math.floor((new Date() - new Date(year, month - 1, day)) / (1000 * 60 * 60 * 24));
    return `You are ${days} days old`;
}