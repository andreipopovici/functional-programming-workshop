function duckCount() {
    return Array.apply(null, arguments).reduce( (prev, curr) => {
        return prev + Object.prototype.hasOwnProperty.call(curr,"quack")
    }, 0)
}

module.exports = duckCount