// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

function switchItUp(number) {
    let switchNumber;
    switch (number) {
        case 0:
            switchNumber = "Zero";
            break;
        case 1:
            switchNumber = "One";
            break;
        case 2:
            switchNumber = "Two";
            break;
        case 3:
            switchNumber = "Three";
            break;
        case 4:
            switchNumber = "Four";
            break;
        case 5:
            switchNumber = "Five";
            break;
        case 6:
            switchNumber = "Six";
            break;
        case 7:
            switchNumber = "Seven";
            break;
        case 8:
            switchNumber = "Eight";
            break;
        case 9:
            switchNumber = "Nine";
            break;
    }
    return switchNumber;
}