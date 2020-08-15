const { tableName } = require('../src/models/why')

exports.up = (knex) => {
  return knex.schema.createTable(tableName, (table) => {
    table.increments('id').primary()
    table.text('email').index().references('email').inTable('users')
    table.text('reason').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable(tableName)
}

