const promiseOne = new Promise(function(resolve,reject){    // new keyword gives a new instance of a promise or class
    // do any async task
    // DB calls , cryptography, network
    setTimeout(function(){
        console.log('Async task is completed')
        resolve();
    },1000)
}) 

promiseOne.then(function(){
    console.log("Promise consumed");
   
}) //.then has direct relation to resolve//.then has a callback


new Promise(function(resolve,reject){    
    setTimeout(function(){
        console.log('Async task 2')
        resolve();
    },1000)
}).then(function(){                             // can also write like this
    console.log("Async task 2 resolved");
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username :"Yashasvi", email:"abc@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);   // whatever we pass inresolve we'll get here
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Yashasvi", password: '12345'})
        } else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) =>{                      // in chaining the next then will get the value returned by the previous then
   console.log(username);
}).catch(function(error){
    console.log(error);         // if error = false we'll get username "Yashasvi"
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Javascript", password: '12345'})
        } else{
            reject("ERROR: JS went wrong")
        }
    },1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive   // as promise is a object so we dont consume it like this await promiseFive()
        console.log(response); // this willl directly print here no chaianig 
    } catch (error) {
        console.log(error);
        
    }  
}
//async await cannot directly handle error therefore we put in try catch block
consumePromiseFive()


async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json(); // will make response  a json // to convert the response to json takes time therefore we will have to await that as well
        console.log(data);  
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()


fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);                  // here no need of try catch or await as we know that first then will finish only then next then will start 
})
.catch((error) => console.log(error) )


//fetch creates a microtask queue that is a priority task queue, 
// hence first fetch executes first and then the rest of the callbacks