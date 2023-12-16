let myDate = new Date();
// console.log(myDate.toString()); // Sat Nov 04 2023 05:07:14 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // Sat Nov 04 2023
// console.log(myDate.toISOString()); // 2023-11-04T05:08:57.906Z
// console.log(myDate.toJSON()); 2023-11-04T05:09:39.057Z
// console.log(myDate.toLocaleDateString()); // 11/4/2023
// console.log(myDate.toLocaleString()); // 11/4/2023, 5:11:18 AM

// console.log(typeof myDate); // object

// let myCreatedDate = new Date (2023, 0, 23)
// let myCreatedDate = new Date (2023, 0, 23, 5, 3)

// console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023
// * Headers, if you notice the months starts from 0.

// console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 5:03:00 AM

let myCreatedDate = new Date ("2023-01-14") 
// console.log(myCreatedDate.toLocaleString()); = 1/14/2023, 12:00:00 AM Method

// Time Stamps: -

let myTimeStamp = Date.now()
// console.log(myTimeStamp);                 // this will give time in miliseconds from 1970
// console.log(myCreatedDate.getTime());      // this will also give time in miliseconds from 1970

// console.log(Date.now()/1000); // 1699075495.36
// console.log(Math.floor(Date.now()/1000)); // 1699075530


let newDate = new Date()
console.log(newDate); //2023-11-04T05:26:32.710Z
console.log(newDate.getMonth()); // 10
console.log(newDate.getDay()); // 6


newDate.toLocaleString('default', {
    weekday: 'long'
})
