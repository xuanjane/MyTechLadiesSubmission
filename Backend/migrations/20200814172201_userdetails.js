const { tableName } = require('../src/models/userdetails')

exports.up = (knex) => {
  return knex.schema.createTable(tableName, (table) => {
    table.increments()
    table.text('email').unsigned().index().references('email').inTable('users')
    table.text('workplace').notNullable().primary()
    table.text('jobtitle')
    table.text('interestingfact')
    table.text('image')
    table.text('github')
    table.text('linkedin')
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable(tableName)
}