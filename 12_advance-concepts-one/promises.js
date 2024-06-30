// The promise object represents the eventual completion or failure of the asynchronous operation and it's resulting vale.

// States of Promises
// 1) Pending
// 2) Fulfilled
// 3) Rejected

// *******************************    Promise Creation    *****************************

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise Created, Async Task Completed");
    resolve();
  }, 1000);
});

// *******************************    Promise Consumption   *****************************

promiseOne.then(function () {
  console.log("Promise Consumed, Resolved!");
});

// *******************************    Promise Creation & Promise Consumption    **************************

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise 2 Created, Async task completed");
    resolve();
  }, 1000);
})
.then(function () {
  console.log("Promise 2 Resolved");
});

// *******************************    Promise Creation    *****************************

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({
      username: "Aditya",
      phNo: "8653244006",
      email: "aditya@google.com",
    });
  }, 1000);
});

// *******************************    Promise Consumption    *****************************

promiseThree.then(function (user) {
  console.log(user);
});

// *******************************    Promise Creation    *****************************

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Anurag", address: "India, Earth" });
  }, 1000);
});

// *******************************    Promise Consumption   *****************************

promiseFour.then(function(user) {
    console.log(user);
    return user.address;
})
.then(function(response) {
    console.log(response);
});

// *******************************    Promise Creation    *****************************

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true;
        if(!error) {
            resolve({username: "Akash", password: 123});
        }
        else {
            reject("Error: 404");
        }
    },1000);
});

// *******************************    Promise Consumption    *****************************

promiseFive
.then(function(user) {
    console.log(user);
    return user.username;
})
.then(function(response) {
    console.log(response);
})
.catch(function(error) {
    console.log(error);
})
.finally(function() {
    console.log("Promise has been resolved / rejected");
});

// *******************************    Promise Creation    *****************************

const promiseSix = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = true;
        if(!error) {
            resolve({username: "JavaScript", password: 123});
        }
        else {
            reject("Error: JS went wrong");
        }
    },1000);
});

// *******************************    Promise Consumption    *****************************

async function promiseSixConsumption() {
    try{
        const response= await promiseSix;
        console.log(response);
    }
    catch(error) {
        console.log(error);
    }
}
promiseSixConsumption();


// ******************************************************************

// async function getAllUsers() {
//   try{
//     const response = await fetch("https://api.github.com/users/adit5156");
//     const data = await response.json();
//     console.log(data);
//   }
//   catch(error) {
//     console.log("Error: ", error);
//   }
// }
// getAllUsers();

// ******************************************************************

fetch("https://api.github.com/users/adit5156")
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
})
.catch(function(error) {
  console.log("Error: ", error);
});