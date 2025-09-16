// ================================================
//               Language: JavaScript
//               Topic   : [Function]
//               Problem :👉👉 [6]
//               Want    :  HigherOrderFunction.js
//               file    : HigherOrderFunction.js 
// ================================================

function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction);