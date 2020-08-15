const { tableName } = require('../src/models/usersdetails')

exports.up = (knex) => {
  return knex.schema.createTable(tableName, (table) => {
    //table.increments()
    table.increments('id').primary()
    table.text('email').index().references('email').inTable('users')
    table.text('workplace').notNullable()
    table.text('jobtitle')
    table.text('interestingfact')
    table.text('image')
    table.text('github').unique()
    table.text('linkedin').unique()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable(tableName)
}