const user = {
    username: "Aditya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from database");
        // this symbolises current context
        console.log(`Username: ${this.username}`);
        console.log(this);
        // return this.username;
        
    }
}

// console.log(user["username"]); 
// console.log(user.getUserDetails());

// console.log(this);  // returns empty object {} in Node Environment
// console.log(this);  // returns window object in Browser Environment


// const promiseOne = new Promise(function(resolve, reject) {
    
// });
// const date = new Date();

// new creates new instance / new execution context

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this;     // Explicit Return
}

const userOne = new User("aditya", 8, true);
const userTwo = new User("narendra", 10, false);

console.log(userOne);
console.log(userTwo);