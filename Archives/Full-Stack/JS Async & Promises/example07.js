const processUser = require('imaginary_service/process_user')

async function processAllUsers () {
  const sql = 'SELECT id FROM users'
  const users = await db.query(sql, [])
  for (const user of users) {
    await processUser(user.id)
  }
}