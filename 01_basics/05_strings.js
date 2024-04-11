const name = "yashasvi"
const age = 23

console.log(`Hello my name is ${name} and my age is ${age}`);           //backticks

const webName = new String('dev-Yashasvi')
console.log(webName[3])                                   // outputs Y
console.log(webName.__proto__)                            // outputs {}


console.log(webName.length)
// console.log(webName.toLowerCase())

const newString = webName.substring(0,4)
// console.log(newString)

const anotherString = webName.slice(-5,2)
console.log(anotherString)

const onemorestring = "    yashasvi        "
console.log(onemorestring.trim())

const url = 'https://yashasvi%20matta'
a= url.replace("%20","_")

console.log(a.split("_"))