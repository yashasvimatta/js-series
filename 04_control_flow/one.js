// if

const isUserloggedIn = true
const temprature = 41

if(temprature < 50) {
    console.log("less than 50");
}

if (temprature >20){
    var power = "hot"                               // if we use var it will print outside this scope as well
    console.log(`User power: ${power}`);
}

console.log(`${power}`)                             // printing outside scope on using var. therefore use let and const
// < ,>, <= , >= , == , != , ===, !==
const userLoggedIn = true
const debit = true

if(userLoggedIn && debit){                      // use && for AND operation
    console.log("allowed to buy")
}

if(userLoggedIn || debit){                  // use || for OR operation
    console.log("Allowed")
}