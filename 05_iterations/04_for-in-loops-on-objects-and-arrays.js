const myGames = {
  game1: "Clash of Clans",
  game2: "Valorant",
  game3: "CS Go",
};

for(const key in myGames) {
    // console.log(key, " : ", myGames[key]);
}

const myLanguages = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    swift: "Swift by Apple"
};

for(const key in myLanguages) {
    // console.log(key, " : ", myLanguages[key]);
    // console.log(`${key} shortcut is for ${myLanguages[key]}`);
}


// When we apply for in loop on Arrays we get keys(index of array) as well as the values

const programming = ['js', 'rb', 'py', 'java', 'cpp'];

for(const key in programming) {
    console.log(`The value at index ${key} is ${programming[key]}`);
}