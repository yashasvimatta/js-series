//reducer 
const myList = [1,2,3]              
// const myTotal = myList.reduce(function (acc, currval){   // for first iteration accumulator will take value that is provided after comma (here its 0)
//     console.log(`acc: ${acc}`)           // currvalue will iterate through array and after first iteration acc +currvalue will be given as acc value
//     return acc + currval
// }, 0)


const myTotal2 = myList.reduce((acc, curr) => acc+curr, 0)

console.log(myTotal2);

const shoppingCart = [
    {
        itemName: "shoe",
        price: 40
    },
    {
        itemName: "purse",
        price: 150
    },
    {
        itemName: "dress",
        price: 35
    },
    {
        itemName: "jeans",
        price: 45
    },
]

const totalPrice = shoppingCart.reduce((acc,item)=> acc + item.price,0)
console.log(totalPrice)