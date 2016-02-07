function checkUsersValid( goodUsers ) {
    return function allUsersValid( submittedUsers ) {
        return submittedUsers.every(
            (submittedUser) => goodUsers.some(
                (goodUser)=> submittedUser.id === goodUser.id    
            )
        )
    }
}

module.exports = checkUsersValid