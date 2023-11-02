/* # Primitive datatypes: */
// 1.string
// 2. NUmber
// 3. Boolean
// 4. null
// 5. undefined
// 6. NaN
// 7. Symbol => to make element unique
// 8. BigInt

const score = 100;
const valvue = 100.3;

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3466643165168431n


/*Reference datatypes (Non Primitive): */
//Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "talha",
    age: 28,
}

const myfunction(){
    console.log("Hello World");
}