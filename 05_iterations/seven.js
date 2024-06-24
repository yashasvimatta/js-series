// Map
const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums= myNums.map((nums) => nums + 10)              // add 10 to all numbers
console.log(newNums)
// map creates new array by applying a given function to each elemnt of existing array
// filter creates new array that contains elements form theexisting array that pass a particular condition


// chaining
const nums = myNums
                .map((num) => num * 10)
                .map((num) => num +1 )            // the num in this map will be the value returned from the first map . 
                .filter((num) => num >= 40)           //whenever chaiing happens the result gets passed to the second chain

console.log(nums)