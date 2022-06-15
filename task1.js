function countDublicated(text) {
    return text.toLowerCase().split('').filter((val, i, arr) => {
        return !!(arr.indexOf(val) !== i && arr.lastIndexOf(val) === i);
    }).length;
}

console.log(countDublicated('indivisibility'));
console.log(countDublicated('abcde'));
console.log(countDublicated('aA11'));
console.log(countDublicated('Indivisibilities'));