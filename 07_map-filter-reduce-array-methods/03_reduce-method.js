const myNums = [1, 2, 3, 4, 5, 6];

let myTotal = myNums.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
// console.log(myTotal);

// myTotal = myNums.reduce((accumulator, currentValue) => {
//     console.log(`Accumulator: ${accumulator} and Current Value: ${currentValue}`);
//     return accumulator + currentValue;
// }, 0);
// console.log(myTotal);

// myTotal = myNums.reduce((accumulator, currentValue) => {
//     console.log(`Accumulator: ${accumulator} and Current Value: ${currentValue}`);
//     return accumulator + currentValue;
// }, 3);
// console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
];

const shoppingCartTotal = shoppingCart.reduce((accumulator, element) => {
    return accumulator + element.price;
},0);
console.log("Price to Pay: ",shoppingCartTotal);