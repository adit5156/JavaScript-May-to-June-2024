async function getAllUsers() {
    try {
        const response = await fetch('https://api.github.com/users/adit5156');
        const data = await response.json();
        console.log(data);
    }
    catch(error) {
        console.log("Error: ", error);
    }
}
getAllUsers();


fetch('https://api.github.com/users/adit5156')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);
})
.catch(function(error) {
    console.log("Error: ", error);
});