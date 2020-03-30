const processUser = require('imaginary_service/process_user')

function processAllUsers () {
  const sql = 'SELECT id FROM users'
  return db.query(sql, [])
    .then(users => 
      users.reduce((lastPromise, user) => 
        lastPromise.then(_ => processUser(user.id))
      , Promise.resolve()))
}