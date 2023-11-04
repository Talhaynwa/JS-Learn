
function sayMyName() {
console.log("T");
console.log("A");
console.log("L");
console.log("H");
console.log("A");
}

// sayMyName();  // Function ka declaration & () shows reference of fucntion.

function addTwoNumbers (number1, number2){    // Parameters
   console.log(number1 + number2);
}

// addTwoNumbers(3, 4) // 7 // Arguments

// const result = addTwoNumbers(3, 5) // 8
// console.log("Result: ", result); // here the value of result is undefined.


function addTwoNumbers (number1, number2){    // Parameters
//    let result = number1 + number2;
//    return result  // After return statement no code will be execute.
   
    return number1 + number2

}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Talha")); // Talha just logged in
// console.log(loginUserMessage("")); //  just logged in
// console.log(loginUserMessage());  // undefined just logged in

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());  // Please enter a username
 

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());  // sam just logged in
 

function calculateCartPrice (...num1){  // Rest Operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));  // [ 200, 400, 500 ]


function calculateCartPrice (val1, val2, ...num1){  // Rest Operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));  // [ 500, 2000 ]


const user = {
    username: "talha",
    price: 199
}
function handleObject(anyobject){
    // console.log(`Usernamr is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 199
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));  // 400 [1]
console.log(returnSecondValue([200, 400, 500, 1000])); // 500 [2]












