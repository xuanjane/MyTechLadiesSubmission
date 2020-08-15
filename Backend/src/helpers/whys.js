const db = require("../models/why")


  exports.getAllWhys = async function() {
    const whys = await db.Why.query().select()
    return whys
  }
  
  exports.getWhyByEmail = async function(email) {
    const whyByEmail = await db.Why.query().select().where('email', email)
    return whyByEmail[0] || 'Not found'
  }

  exports.addWhy = async function(why) {
    try {
        const response = await db.Why.query().insert(why)
        return response
    } catch(err) {
        return { err }
    }
  }