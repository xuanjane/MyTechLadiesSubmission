const db = require("../models/usersdetails")


  exports.getAllUsersdetails = async function() {
    const usersdetails = await db.Usersdetail.query().select()
    return usersdetails
  }
  
  exports.getUsersdetailByEmail = async function(email) {
    const usersByEmail = await db.Usersdetail.query().select().where('email', email)
    return usersByEmail[0] || 'Not found'
  }

  exports.getUsersdetailByPassword = async function(password) {
    const usersByPassword = await db.Usersdetail.query().select().where('passwordHash', password)
    return usersByPassword[0] || 'Not found'
  }
  
  exports.addUsersdetails = async function(usersdetails) {
    try {
      const response = await db.Usersdetail.query().insert(usersdetails)
      return response
    } catch(err) {
      return { err }
    }
  }