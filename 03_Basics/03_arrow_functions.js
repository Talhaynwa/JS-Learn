// const user = {
//     username: "talha",
//     price: 999,
    
//     welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`); // torefer current context this keyword is use.
        // console.log(this);
//     }

// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // {}

// function chai (){
//     let username = "talha   "
//     console.log(this.username);
// }

// chai() // undefined

// const chai = function (){
//         let username = "talha   "
//     console.log(this.username);
// }

// chai() // undefined

// const chai =  () => {
//         let username = "talha   "
    // console.log(this.username); // undefined
    // console.log(this); // {}

// }

// chai() 



// const addTwo = (num1, num2) => {  // => Normal Arrow function
//     return num1 + num2
// }

// console.log(addTwo(5, 3));



// const addTwo = (num1, num2) =>  num1 + num2

// console.log(addTwo(5, 3));

// const addOne = (num3, num4) => ( num3 + num4 )

const addOne = (num3, num4) => ({username: "talha"} ) //{ username: 'talha' } 




console.log(addOne(3, 4));