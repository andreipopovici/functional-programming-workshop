function reduce( arr, fn, initial ) {
    if(arr.length == 0) return initial
    var head = arr[0]   // item to operate on
    var result = fn(initial, head, arr.length, arr) // perform action (accumulate)
    var remaining = arr.slice(1)    // next
    return reduce(remaining, fn, result)    // recurse
    
    
    // correct solution:
    // return (function reduceOne(index, value) {   // returns a function and calls it!
    //     if (index > arr.length - 1) return value // end condition
    //     return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
    //   })(0, initial) // IIFE. kick off recursion with initial values
}

module.exports = reduce