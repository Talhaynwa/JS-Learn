const marvel_heroes = ["Thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes); //[ 'Thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// const allheroes = marvel_heroes.concat(dc_heroes)
// console.log(allheroes);


/* Spread Operator */
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes);


/* flat */
const another_array = [1,2,3, [4,5,6], 7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


/* For Data Scraping */

console.log(Array.isArray("Talha")); // false
console.log(Array.from("Talha")); // [ 'T', 'a', 'l', 'h', 'a' ]
console.log(Array.from({name: "Talha"})); // interesting // []

/* To make an array from variables & function values */

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // [ 100, 200, 300 ]


// Learn isArra , from, Array.of



