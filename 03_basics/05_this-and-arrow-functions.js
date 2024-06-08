const user = {
    username: 'Aditya',
    priceOfCourse: 1999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to the website!`);
        console.log(this);
    }
};

// user.welcomeMessage;
user.welcomeMessage();

user.username = "Yash";

user.welcomeMessage();

console.log(this); // Output for Node Environment => {}

// console.log(this) // Output for browser console => window object {}



// Function Declaration
function obj() {
    const username = "Aditya";
    console.log(this);
}

obj();

const obj2 = () => {
    console.log(this);
}

obj2();

// *************************************** Arrow Function **************************************

// 1) Implicit Return ( operation)
// 2) Explicit Return {return }


// Implicit Return 

const addTwoNum = (num1, num2) => num1 + num2;
console.log(addTwoNum(19, 32));

const addThreeNum = (num1, num2, num3) => (num1+num2+num3);
console.log(addThreeNum(12,10,8));

const object1 = () => ({productName: "Lenovo", storage: "8GB"});
console.log(object1());

// Explicit Return

const multiplyNum = (num1, num2) => {
    return num1 * num2;
};
console.log(multiplyNum(2,5));



// Use of Arrow Function

const myArray = [2,4,6,8,10];
myArray.forEach((value, index)=> {
    console.log(index,": ",value);
});