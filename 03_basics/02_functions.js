// function calculateCartPrice(num1) {
//     return num1;
// }

// console.log(calculateCartPrice(200, 400, 500));


// REST Operator ... => returns an array

// function calculateCartPrice(...num1) {
//     return num1;
// }

// console.log(calculateCartPrice(200,300,400,500,1000)); // Output => [200,300,400,500,1000]

// function calculateCartPrice(value1, value2, ...num1) {
//     return num1;
// }

// console.log(calculateCartPrice(200,300,400,500,1000)); // Output => [400,500,1000]

const user = {
    username: 'Aditya',
    price: 199
};

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user);
handleObject({
    username: "Lenovo",
    price: 50000
});


const myNewArray = [200, 400, 600, 1000];

function returnSecondValue(getArray) {
    return `Second Value = ${getArray[1]}`;
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([2,10,15,19]));
