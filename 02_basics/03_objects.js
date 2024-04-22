// object literals  no singelton is created 
const mySym = Symbol("key1")


const User = {
    name: "Yashasvi",
    "full name": "Jane Doe",
    age:  18,
    location : "Texas",
    email: "yashasvi@gmail.com",
    isLoggedIn: false,
    [mySym]:  "mykey1"
}


// User.email = "yashasvi@google.com"
// console.log(User["email"])
// Object.freeze(User)                                 // this will freeze the value , you cant change it 
// User.email = "yashasvi@hotmail.com"
// console.log(User["email"]) 

User.greeting = function(){
    console.log("Hello User") 
}
console.log(User.greeting())

User.greetingTwo = function(){
    console.log(`Hello  user, ${this.name}`);           // this is used to refernce the same object 
}
console.log(User.greetingTwo())