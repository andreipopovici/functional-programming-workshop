function getShortMessages( messages ) {
    return messages.filter(
        (obj) => obj.message.length < 50
    ).map((msg)=>msg.message)
}

module.exports = getShortMessages