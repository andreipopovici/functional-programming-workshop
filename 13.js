function repeat( operation, num ) {
    // modify this so it can be interrupted
    if ( num <= 0 ) return
    operation()
    return setInterval(repeat, 0, operation, --num)
}

module.exports = repeat