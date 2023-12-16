/* # Primitive datatypes: */
// 1.string
// 2. NUmber
// 3. Boolean
// 4. null
// 5. undefined
// 6. NaN
// 7. Symbol => to make element unique
// 8. BigInt

const score = '100';
// console.log(typeof score); => String

const value = 100.3;
// console.log(typeof value); => Number

const isLoggedIn = false
// console.log(isLoggedIn); => Boolean

const outsideTemp = null
// console.log(outsideTemp); => null

let userEmail;
// console.log(userEmail); => undefined

const id = Symbol('123')
// console.log(id); => Symbol

const anotherId = Symbol('123')
// console.log(id === anotherId); => false

const bigNumber = 3466643165168431n
// console.log(bigNumber); => BigInt


/*Reference datatypes (Non Primitive): */
//Array, Objects, Functions
// Non Primitive datatype always return as Type of object.

const heros = ["shaktiman", "naagraj", "doga"]
// console.log(heros); => Array


let myObj = {
    name: "talha",
    age: 28,
}
// console.log(myObj); => Object


const myfunction = function(){
    console.log("Hello World");
}
// myfunction(); => Object Function




// ******************************************

// Stack(Primitive) & Heap(Non-Primitive) Memory

let myName = 'Talha Sayed'

let myPetName = myName
myPetName = 'Izharoddin'

// console.log(myName);
// console.log(myPetName);

let userOne = {
    email: "talha@gmail.com",
    id: "ybl@ybl"
}

let userTwo = userOne

userTwo.email = "talha@google.com"

console.log(userOne.email);
console.log(userTwo.email);
