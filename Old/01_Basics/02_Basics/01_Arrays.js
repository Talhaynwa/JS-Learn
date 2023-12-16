/* Shallow Copy:
A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent. */

/* Deep Copy :
A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. That behavior contrasts with the behavior of a shallow copy, in which changes to nested properties in the source or the copy may cause the other object to change too. */


/* Declaration: */

const myArr = [0,1,2,3,4,5]
const myHeroes = ["Shaktiman", "Batman"]
const myArr2 = new Array(1,2,3,4)


/* Array Method */

// myArr.push(6);
// myArr.push(7); //[0, 1, 2, 3, 4, 5, 6, 7]
// myArr.pop(); // [0, 1, 2, 3, 4, 5, 6]
// myArr.unshift(9);[9, 0, 1, 2, 3, 4, 5]
// myArr.shift(0);  [ 1, 2, 3, 4, 5 ]
// console.log(myArr.includes(9)); false
// console.log(myArr.indexOf(9)); -1 not present in array

// const newArr = myArr.join() // it converts array to string
// // console.log(typeof myArr)
// console.log(newArr)

//Slice, Splice

console.log("A ", myArr); // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)
console.log(myn1);  // [ 1, 2 ] * It gets the output as we wanted from an array without manupulating the original one.
console.log("B ", myArr);  // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)
console.log(myn2);  // [ 1, 2, 3 ] * It gets the output as we wanted from an array, but manupulate the original one.
console.log("C ", myArr);  // C  [ 0, 4, 5 ] * Like this








