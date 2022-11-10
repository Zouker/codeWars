// Human Readable Time
//
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
//
// You can find some examples in the test fixtures.

function humanReadable(seconds) {
    const HH = Math.floor(seconds / 3600)
    const MM = Math.floor((seconds % 3600) / 60)
    const SS = Math.floor((seconds % 3600) % 60)
    const HHres = HH > 0 ? `${HH.toString().length > 1 ? `${HH}` : `${0}${HH}`}` : '00'
    const MMres = MM > 0 ? `${MM.toString().length > 1 ? `${MM}` : `${0}${MM}`}` : '00'
    const SSres = SS > 0 ? `${SS.toString().length > 1 ? `${SS}` : `${0}${SS}`}` : '00'
    return `${HHres}:${MMres}:${SSres}`
}
