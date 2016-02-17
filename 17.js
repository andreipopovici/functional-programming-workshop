// "use strict"
// function curryN( fn, n ) {    
//     var argsArray = []  // remember our args to apply later
//     var argLength = n || fn.length  // count recursion
//     
//     console.log(argLength)
//     console.log(argsArray)
//     
//     function recurse(arg){
//     
//         if(argLength === 1){    // recursion stop condition
//             argsArray.push(arg) // adds it to the main argsArray
//             console.log("end of recursion")
//             console.log(argsArray)
//             return fn.apply(null, argsArray)    // finally, run original func with all args
//         }
//     
//         argsArray.push(arg) // adds it to the main argsArray
//         argLength = --argLength;
//         return recurse(arg) // and recurses
//     }
// }

// gave up at this point, here's the official solution using bind *d'oh!*

function curryN(fn, n) {
  n = n || fn.length
  return function curriedN(arg) {
    if (n <= 1) return fn(arg)
    return curryN(fn.bind(this, arg), n - 1)
  }
}

module.exports = curryN