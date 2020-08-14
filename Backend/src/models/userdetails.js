'use strict'

const { Model } = require('objection')
const tableName = 'userdetails'

class Userdetail extends Model {
  static get tableName () {
    return tableName
  }

  fullName () {
    return `${this.firstName} ${this.lastName}`
  }

  static get jsonSchema () {
    return {
      type: 'object',
      required: ['email'],
      properties: {
        id: { type: 'integer' },
        email: { type: 'string', minLength: 1, maxLength: 255 },
        workplace: { type: 'string', maxLength: 255},
        jobtitle: { type: 'string', maxLength: 255},
        interestingfact: { type: 'string'},
        image:  { type: 'string'},
        github: { type: 'string'},
        linkedin: { type: 'string'},
      }
    }
  }
}

module.exports = {
  Userdetail,
  model: Userdetail,
  tableName
}
