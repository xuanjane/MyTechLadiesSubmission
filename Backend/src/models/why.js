'use strict'

const { Model } = require('objection')
const tableName = 'why'

class Why extends Model {
  static get tableName () {
    return tableName
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['email'],
      properties: {
        reason: { type: 'string' },
        email: { type: 'string', minLength: 1, maxLength: 255 }
      }
    }
  }
}

module.exports = {
  Why,
  model: Why,
  tableName
}