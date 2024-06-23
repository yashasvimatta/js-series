const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
   console.log(`${key} is ${myObject[key]}`);
}

const languages= ['english','hindi','sanskrit','marathi']
for(const key in languages){
    console.log(languages[key])
}

// const map = new Map()                                //maps are not iteratable using for in
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }

