// Conditional Statements

// if(condition) {
//     // operation
// }

// Comparison Operator < , > , <= , >= , == , != , === , !==

// == only checks the value not the datatype
// === checks both the value as well as datatype


// const isLoggedIn = true;
// if(isLoggedIn) {
//     console.log("Yes I am logged in");
// }
// else {
//     console.log("No I am not logged in!");
// }



// const temperature = 90;
// if(temperature < 50) {
//     console.log("Temperature less than 50");
// }
// else {
//     console.log("Temperature is greater than 50");
// }

// const score = 200;
// if(score > 100) {
//     const power = "fly";
//     console.log(`Power of user: ${power}`);
// }
// console.log(`Power of user: ${power}`);



// if(score > 100) {
//     let power = "fly";
//     console.log(`Power of user: ${power}`);
// }
// console.log(`Power of user: ${power}`);




const balance = 1000;
// if(balance > 500) console.log("test true");


// Ternary Operator : Syntax => (condition) ? true statement : false statement;
// console.log((balance > 500) ? "Test True" : "Test False");

// if(balance < 500) {
//     console.log("less than 500");
// }

// else if(balance < 750) {
//     console.log("less than 750");
// }

// else if(balance < 900) {
//     console.log("less than 900");
// }

// else {
//     console.log("more than 1000");
// }


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard) {
    console.log("Allow to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}

