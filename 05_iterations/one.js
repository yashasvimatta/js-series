for(let i = 0; i <= 10; i++) {  
    if(i === 5){
        console.log(i) 
    }    
}

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index]);
}

//break and continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`got 5`);
        break;          // goes out of for loop
    }
   console.log(`Value of i is ${index}`);
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue                    // it will continue to next iteration of loop
    }
   console.log(`Value of i is ${index}`);
    
}