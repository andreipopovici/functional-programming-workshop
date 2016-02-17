module.exports = function arrayMap( arr, fn ) {
    return arr.reduce((prev, curr, i, initArr)=> {
        // prev = modified array
        // curr = current value of initial array
        // i = current index of initial array
        // initArr = our initial array
        prev.push(fn(initArr[i]))
        return prev
    }, [])
}