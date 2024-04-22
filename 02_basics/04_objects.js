// const user = new Object()           // empty singleton object 

const user = {}                     // empty non-singelton object

user.id = "12346abc"
user.name = "Yashasvi"
user.contact = "1234567890"
user.isLoggedIn = false

// console.log(user)                 

const userTwo ={
    email: "abc@gmail.com",
    address: {
        streetAddress: {
            Line1: "413 SummitAve",
            Line2: "Apt 1234"
        },
        city: 'Arlington',
        state: "Texas",
        zipcode: "76010"
    }
}

// console.log(userTwo.address?.streetAddress.Line1);          // ?- if that value exists then return it

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = Object.assign({}, obj1, obj2)                 // assign operateor takes the source object and stores them in target {}
// console.log(obj3)
const obj4 = {...obj1, ...obj2}                             // better to use spread operator just like arrays
// console.log(obj4)


// when values come from database

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
// console.log(users[1].email)


console.log(user)
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

// console.log(Object.hasOwnProperty('isLoggedIn'))

//------------------------------------------------------------------------//

// destructure 

const program = {
    programName: "MS",
    universityName: "UTA",
    specialization: "CSE"
}

// easier way to extract values , syntactic sugar but is used widely 

const {universityName } = program               // this way there is no need to write program.univresityName everytime to get that value
// const {universityName: name } = program      // can use this also console.log(name)
console.log(universityName)                     // outputs UTA


[
    {},
    {},
    {}
]