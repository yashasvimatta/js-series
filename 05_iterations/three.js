// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}


//  Maps -> has only unique values and the order remains same as the one you enetred

const map = new Map()
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('FR',"France")
console.log(map)

for(const [key,value] of map){                  // to destructre we use [key,value] otherwise we will get['IN,'India'] this
    console.log(key,value);         
}


// for of doesnt work for objects