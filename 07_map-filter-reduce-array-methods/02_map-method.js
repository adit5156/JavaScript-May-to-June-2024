// Map Method

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNumbers = myNumbers.map((element) => {
//     return element + 10;
// });
// console.log("Using Map Method: ", newNumbers);

// For Each Variant 

// const newNumbersArr = [];
// myNumbers.forEach((element) => {
//     newNumbersArr.push(element + 10);
// });
// console.log("Using For Each Method: ", newNumbersArr);


// *************************************************************************

// Chaining Methods

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNums = myNumbers.map((element) => element * 10).map((element) => element + 1);
console.log(newNums);

newNums = myNumbers.map((element) => element * 10).map((element) => element + 1).filter((element) => element >= 40);
console.log(newNums);