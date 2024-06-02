// Methods of declaring Objects

// const twitterUser = new Object();
// console.log(twitterUser);


/*
// Objects Methods
1) Object.assign({}, obj1, obj2, .......)
2) Object.keys()
3) Object.values()
4) Object.entries()
5) objectName.hasOwnProperty()
*/


const twitterUser = {};

twitterUser.id = "123abc";
twitterUser.name = "Rahul";
twitterUser.isLoggedIn = false;

// console.log(twitterUser);

const regularUser = {
    email: "rahul@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Rahul",
            middleName: null,
            lastName: "Singhania",
        }
    }
};

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName, regularUser.fullName.userFullName.middleName, regularUser.fullName.userFullName.lastName);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

const obj3 = {
    5: "a",
    6: "b"
}

const newObj = {...obj1, ...obj2, ...obj3}
// console.log(newObj);
// console.log("**************************************");

const newObj2 = Object.assign({}, obj1, obj2, obj3);
// console.log(newObj2);

// Example of Backend Data Declaration below 

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
    {
        id: 3,
        email: "b@gmail.com"
    }
];

console.log(users[1].id, users[1].email)

console.log(twitterUser);

console.log(Object.keys(twitterUser));
console.log(Object.values(twitterUser));

console.log(Object.entries(twitterUser));

console.log(twitterUser.hasOwnProperty('isLoggedIn'));
console.log(twitterUser.hasOwnProperty('isLogged'));