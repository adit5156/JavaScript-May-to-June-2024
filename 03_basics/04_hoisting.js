function one() {
    const username = "Aditya";

    function two() {
        const website = "google";
        console.log(username);
    }
    // console.log(website);

    two();

    // console.log(website);
}

// one();

if(true) {
    const username = "Aditya";

    if(username === "Aditya") {
        const website = "@google";
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ****************** Function Declarations and Function Expressions ********************



// function declaration 

console.log(addOne(6));

function addOne(num1) {
    return num1 + 1;
}



// Function Expression

console.log(addTwo(10));

const addTwo = function(num2) {
    return num2 + 2;
}