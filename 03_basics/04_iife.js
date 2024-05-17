// Immediately Invoked Function Expressions (IIFE)


(function one(){                                    // named iife
    // named IIFE                                   // in order to avoid the pollution from globalscope we use iife 
    console.log(`DB CONNECTED`);
})();                                               // we need to add the semicolon as iife doesnt know where to leave the context  


( (name) => {
    console.log(`DB Connected ${name}`);           // output DB Connected yashasvi
})("yashasvi")

