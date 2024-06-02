const marvelHeroes = ["Spiderman", "Iron Man", "Thor"];
const dcHeroes = ["Batman", "Flash", "Superman"];

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes);
// console.log(marvelHeroes[3]);
// console.log(marvelHeroes[3][2]);

// const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);

const allNewHeroes = [...marvelHeroes, ...dcHeroes];
console.log(allNewHeroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
console.log(anotherArray);
console.log(anotherArray.flat(Infinity));

console.log(Array.isArray("Aditya"));
console.log(Array.from("Aditya"));
console.log(Array.from({ name: "Aditya" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

let totalScore = Array.of(score1,score2,score3);
console.log(totalScore);