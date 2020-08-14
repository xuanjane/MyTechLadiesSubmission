const { tableName } = require('../src/models/user')

const SEED_USERS = [
  {
    firstName: 'Jane',
    lastName: 'Quek',
    email: 'xuanjane88@gmail.com',
    passwordHash: 'Jane',
  },
  {
    firstName: 'Tarzan',
    lastName: 'Jungle',
    email: 'tarzan@jungle.com',
    passwordHash: 'Tarzan',
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
