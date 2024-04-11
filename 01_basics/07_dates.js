// dates 

const date = new Date
// console.log(date)
console.log(date.toDateString())
console.log(date.toLocaleDateString())
// console.log(typeof date)        // date is object type


let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));                       // Date.now() gives value in millisecond , to get in seconds divide by 1000 then takle floor



let newDate = new Date()

console.log(newDate)
console.log(`${newDate.getDay()} and the time  is ${newDate.getTime()} `)


newDate.toLocaleString('default', {
    weekday: "long",
    
})