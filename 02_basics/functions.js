// console.log("A");
// console.log("d");
// console.log("i");
// console.log("t");
// console.log("y");
// console.log("a");

// Function Definition
function sayMyName() {
  console.log("A");
  console.log("d");
  console.log("i");
  console.log("t");
  console.log("y");
  console.log("a");
}

// Function Calling
// sayMyName();

function addTwoNumbers(number1, number2) {
  // Function Parameters
  console.log(number1 + number2);
}

// addTwoNumbers(3,9);  // Function Arguments

function addTwoMoreNumbers(num1, num2) {
  // const result = num1 + num2;
  // return result;
  console.log("Aditya");
  return num1 + num2;
}

// const results = addTwoMoreNumbers(11, 19);
// console.log("Result: " , results);

// console.log("Result: ",addTwoMoreNumbers(9, 44));

function loginUserMessage(username) {
  if (username === undefined || username === null || username === "") {
    return `Enter a valid username!!!`;
  } else {
    return `${username} just logged in!`;
  }
}

// const loginResult = loginUserMessage("Aditya");
// console.log(loginResult);

function loginMessage2(username) {
  if (!username) {
    return `Enter a valid username!!!`;
  } else {
    return `${username} just logged in`;
  }
}

const loginResult2 = loginMessage2("Aditya");
console.log(loginResult2);