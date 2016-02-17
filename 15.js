function loadUsers( userIds, load, done ) {
    return done(userIds.map((user)=> load(user, (returnedUser)=>returnedUser)))
}

module.exports = loadUsers

// Official solution: (Whaaa??)

// function loadUsers(userIds, load, done) {
//       var completed = 0
//       var users = []
//       userIds.forEach(function(id, index) {
//         load(id, function(user) {
//           users[index] = user
//           if (++completed === userIds.length) return done(users)
//         })
//       })
//     }
// 
//     module.exports = loadUsers