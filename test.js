const uniqureArray = (arr) => {
    return [...new Set(arr)]
};
console.log(uniqureArray([5, 7, 1, 2, 3, 4, 3, 1, 1]));

const sortArray = (arr) => {
    return arr.sort((a, b) => a > b ? 1 : -1);
}
console.log(sortArray([5, 7, 1, 2, 3, 4, 3, 1, 1]));


const findVowels = (arr) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return arr.toLowerCase().split('').reduce((acc, char) => (vowels.includes(char) ? acc + 1 : acc), 0)
}
console.log(findVowels('helloo'));


const reverseString = (data) => {
    return data.split(' ').reverse().join(' ');
}
console.log(reverseString('welcome to home'));

const users = [
    {
        id: 4,
        name: 'John',
        isActive: true
    },
    {
        id: 3,
        name: 'Tony',
        isActive: false
    },
    {
        id: 5,
        name: 'David',
        isActive: true
    }
];

const getNames = (arr) => { return users.map(x => x.name) };

console.log(getNames(users));

const getActiveNames = (arr) => { return users.filter(x => x.isActive).map(x => x.name) };

console.log(getActiveNames(users));

const getSortedNames = (arr) => { return users.sort((a, b) => a.id < b.id ? -1 : 1).map(x => x.name) };

console.log(getSortedNames(users));

const checkNameExists = (name, arr) => { return arr.some(x => x.name === name) };


console.log(checkNameExists('Tony', users));

function triggerCtrlMinus() {
    // Create a new custom event
    const customEvent = new Event('keydown', {
        bubbles: true,
        cancelable: true
    });

    // Set properties of the event
    Object.defineProperty(customEvent, 'key', { value: '-' });
    Object.defineProperty(customEvent, 'ctrlKey', { value: true });

    // Dispatch the custom event
    document.dispatchEvent(customEvent);
}
function findEighthWorkingDayOfMonth(year, month) {
    // Initialize date to the 1st day of the month
    let currentDate = new Date(year, month, 1);
    let workingDayCount = 0;

    // Iterate through each day of the month
    while (workingDayCount < 8) {
        // Move to the next day
        currentDate.setDate(currentDate.getDate() + 1);

        // Check if the current day is a working day (Monday to Friday)
        const dayOfWeek = currentDate.getDay();
        if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Not Sunday (0) or Saturday (6)
            workingDayCount++;
        }
    }

    // Return the day of the month for the 8th working day
    return currentDate.getDate();
}


describe('findEighthWorkingDayOfMonth function', () => {
    test('March 2024', () => {
        expect(findEighthWorkingDayOfMonth(2024, 2)).toBe(17); // March is 2nd month (0-based index), 17th is the 8th working day
    });

    test('February 2022', () => {
        expect(findEighthWorkingDayOfMonth(2022, 1)).toBe(14); // February is 1st month (0-based index), 14th is the 8th working day
    });

    // Add more test cases as needed for different months and years
});

function endOfPreviousMonth() {
    var today = new Date();
    var previousMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    var endOfPreviousMonth = new Date(previousMonth.getFullYear(), previousMonth.getMonth() + 1, 0);
    return endOfPreviousMonth;
}