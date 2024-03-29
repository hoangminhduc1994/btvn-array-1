// bai 1

// let findBigNumber = ((numbers) => {
//     let result = numbers.filter(number => number >= Math.max(...numbers));
//     return result[0];
// })
// let numbers = [6, 9, 4, 7]
// let largestNumber = findBigNumber(numbers);

// console.log(largestNumber);

// bai 2

let findBigNumber = ((numbers) => {
    let result = numbers.filter(number => number <= Math.min(...numbers));
    return result[0];
})
let numbers = [6, 9, 4, 7]
let largestNumber = findBigNumber(numbers);

console.log(largestNumber);


// bai 3

let calcModArr = [5, 9, 3, 6, 7]
let result1 = calcModArr.map((item, index) => {
    return item%2
}) 

console.log(result1);


// bai 4


// let repeatTenTimes= ((str) => {
//     const resultArray = new Array(10).fill(str);
//     const resultString = resultArray.join('');
//     return resultString;
// })

// const inputString = "Hello";
// const result = repeatTenTimes(inputString);
// console.log(result);


// bai 5

let repeatTenTimes= ((str) => {
    const resultArray = new Array(10).fill(str);
    const resultString = resultArray.join('-');
    return resultString;
})

const inputString = "Hello";
const result = repeatTenTimes(inputString);
console.log(result);