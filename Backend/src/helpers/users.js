const db = require("../models/user")
//const user = require("../models/user")

  exports.getAllUsers = async function() {
    const users = await db.User.query().select()
    return users
  }
  
  exports.getUserById = async function(id) {
    const usersById = await db.User.query().select().where('id', id)
    return usersById[0] || 'Not found'
  }
  
//   exports.getUserByfirstName = async function(firstName) {
//     const usersByfirstName = await db.User.query().select().where('firstName', firstName)
//     return usersByfirstName
//   }

//   exports.getUserBylastName = async function(lastName) {
//     const usersBylastName = await db.User.query().select().where('lastName', lastName)
//     return usersBylastName
//   }

 exports.getUserByfullName = async function(name) {
    const usersByfirstName = await db.User.query().select().where('firstName', name)  
  
    if (JSON.stringify(usersByfirstName) === '[]') {
      //console.log('testing')
      const usersBylastName = await db.User.query().select().where('lastName', name)
      if (JSON.stringify(usersBylastName) === '[]') return 'Not found'
      else return usersBylastName
    }
    return usersByfirstName
  }

  //Names should all be in small caps

  exports.getUserByEmail = async function(email) {
    const usersByEmail = await db.User.query().select().where('email', email)  
      return usersByEmail
  }

  exports.getUserByPassword = async function(password) {
    const usersByPassword = await db.User.query().select().where('passwordHash', password)
    return usersByPassword
  }

  exports.addUser = async function(user) {
    try {
      const response = await db.User.query().insert(user)
      return response
    } catch(err) {
      return { err }
    }
  }