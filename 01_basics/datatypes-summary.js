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
