const { tableName } = require('../src/models/user')

const SEED_USERS = [
  {
    firstName: 'jane',
    lastName: 'quek',
    email: 'xuanjane88@gmail.com',
    passwordHash: 'jane',
  },
  {
    firstName: 'tarzan',
    lastName: 'jungle',
    email: 'tarzan@jungle.com',
    passwordHash: 'tarzan',
  }
]


exports.seed = (knex) => {
  return knex(tableName)
    // Deletes all existing entries
    .del()
    .then(function () {
      // Inserts seed user entries
      return knex(tableName).insert(SEED_USERS)
    })
};
