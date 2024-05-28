const accountId = 144553;
let accountEmail = "aditya@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2; not allowed
accountEmail = "singh@gmail.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.log(accountState)

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/* 
Prefer not to use var 
because of issue in block and function local scope
*/