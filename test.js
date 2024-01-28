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
