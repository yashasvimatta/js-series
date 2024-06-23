const languages= ['english','hindi','sanskrit','marathi','kashmiri']

const values = languages.forEach((item) => {
    console.log(item)
});
console.log(values);                // output will be undefined . forEach doesnt return values 


//filter
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter ( (num) => num > 4 )          // filter returns values
console.log(newNums)                                        // outut [ 5, 6, 7, 8, 9, 10 ]


const newNums2 = myNums.filter ( (num) => {                 //in paranthesis it returns itself but if you open a scopre then you have to explicitly return the values .
        return num >4
} )          
console.log(newNums2)                                       // ouptut [ 5, 6, 7, 8, 9, 10 ]

//same thing using forEach
const newNums3 = []
myNums.forEach((nums) => {
    if(nums > 4){
        newNums3.push(nums)
    }
})
console.log(newNums3)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks = books.filter((item) => item.genre == 'History')
// console.log(userBooks);                                                           // output objects of book three and seven

const userBooks1 = books.filter((item) => {
    return item.publish >= 1995 && item.genre ==="History"})
console.log(userBooks1)                                                             // output object of book three