const express = require('express')
const router = express.Router()
const debug = require('debug')('app:usersdetails')
const db = require('../models/index')
const usersdetails = require('../helpers/usersdetails')
const users = require('../helpers/users')

const { UniqueViolationError } = require('objection')

/* GET usersdetails listing. */
// router.get('/', async (req, res) => {
//   const usersdetailslisting = await db.Usersdetail.query().select('workplace', 'jobtitle', 'interestingfact', 'image', 'github', 'linkedin')
//   res.json(usersdetailslisting)
// })


/* GET usersdetail only if email and password are entered correctly*/
router.get('/', async (req, res) => { 

    // No data is provided at this url unless a correct query is added
    if (req.query.email === undefined || req.query.passwordHash === undefined ) {
      res.status(200).json()
    }
    else{
      const email = req.query.email
      const password = req.query.passwordHash
      const emailresult = email ? await users.getUserByEmail(email) : await users.getAllUsers()
      const passwordresult = password? await users.getUserByPassword(password) : await users.getAllUsers() 

      // Check that the email and password matches before returning details
      if(JSON.stringify(emailresult[0]) === JSON.stringify(passwordresult[0])) {
        console.log("it matches")
        const usersdetailresult = email ? await usersdetails.getUsersdetailByEmail(email) : await usersdetails.getAllUsersdetails()
        res.status(200).json(usersdetailresult)
      }   
      else {
        res.status(455).send({
          input: 'wrong username or password',
        })
      }
    }  
  })
  

  
  /* POST users listing */
  router.post('/', async (req, res) => {
    const result = await usersdetails.addUsersdetails(req.body)
  
    // handle error
    if (result.err) {
      const err = result.err
      if (err instanceof UniqueViolationError) {
        res.status(409).send({
          message: err.message,
          type: 'UniqueViolation',
          data: {
            columns: err.columns,
            table: err.table,
            constraint: err.constraint
          }
        })
      } else {
        res.status(500).send({
          message: err.message,
          type: 'UnknownError',
          data: {}
        });
      }
  
      return
    }
  
    res.status(200).json(result)
  })
  


 module.exports = router