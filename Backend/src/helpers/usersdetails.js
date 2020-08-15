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
  
// //   exports.getUserByfirstName = async function(firstName) {
// //     const usersByfirstName = await db.User.query().select().where('firstName', firstName)
// //     return usersByfirstName
// //   }

// //   exports.getUserBylastName = async function(lastName) {
// //     const usersBylastName = await db.User.query().select().where('lastName', lastName)
// //     return usersBylastName
// //   }

//  exports.getUserByfullName = async function(fullName) {
//     const usersByfirstName = await db.User.query().select().where('firstName', fullName)     
//     if (JSON.stringify(usersByfirstName) === '[]') {
//       const usersBylastName = await db.User.query().select().where('lastName', fullName)
//       if (JSON.stringify(usersBylastName) === '[]') return 'Not found'
//       else return usersBylastName
//     }
//     return usersByfirstName
//   }

//   //Names should all be in small caps


  exports.addUsersdetails = async function(usersdetails) {
    try {
      const response = await db.Usersdetail.query().insert(usersdetails)
      return response
    } catch(err) {
      return { err }
    }
  }