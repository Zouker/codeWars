/*
Can Santa save Christmas?

    Can Santa save Christmas?
    Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.

But he has only 24 hours left. Can he do it?

    Your Task:
You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .

*/

function determineTime(durations) {
    let hours = 0
    let minutes = 0
    let seconds = 0
    durations.map(el => el.split(':').map((el, index) => index === 0 ? hours += el * 1 : index === 1 ? minutes += el * 1 : seconds += el * 1))
    minutes += seconds / 60
    hours += minutes / 60
    return hours <= 24
}