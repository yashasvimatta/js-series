//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);                   // outputs false



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Thor", "IronMan", "CaptainAmerica"];             //array
let myObj = {                                               // object. inside an object there can be any type of datatype
    name: "Yashasvi",
    age: 22,
    isUser: false
}

const myFunction = function(){
    console.log("Hello Yashasvi");
}

console.log(typeof myFunction)              /// outputs - function  // called object function
console.log(typeof heros)              /// outputs - object  



// ---------------------------memory----------------

// Stack(for primitive data types) , Heap (for non-primitive data types)

let myName = "Sasha"

let newName = myName 
newName = "Sarah"
console.log(myName)             
console.log(newName)
/*
in primitive type the values are stored in a stack 
and we get copies of the value . so here the 
copy was changed.
*/

let userOne = {
    email: "userone@gmail.com",
    phone: 9827891234
};

let userTwo = userOne

userTwo.email = "usertwo@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)
/*
in non-primitive type the values are stored in a heap
and it is a refernce to the same value. So here the 
changes happen in the same value.
*/