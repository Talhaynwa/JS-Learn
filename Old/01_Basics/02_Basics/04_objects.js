const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj4 = {5:"a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
/* During assigning of objct, Here {} act as a target & remaining parameter act as a sources.*/


// const obj3 = {...obj1, ...obj2, ...obj4} // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    }
]

// users[1].email

const tinderUser = {
    id: '123abc',
    name: 'sammy',
    isLoggedIn: false
}

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'sammy', false ]
// console.log(Object.entries(tinderUser));  // Less Use [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true




const course = {
    coursename: 'js in hindi',
    price: '999',
    courseInstructor: "Talha"
}

const {courseInstructor} = course
const {courseInstructor: instructor} = course

console.log(courseInstructor); // Talha
console.log(instructor); // Talha

