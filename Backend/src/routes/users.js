const express = require('express')
const router = express.Router()
const debug = require('debug')('app:users')
const db = require('../models/index')
const users = require('../helpers/users')

const { UniqueViolationError } = require('objection')


// const request = require('request');
 
// var options = {
//     url: '/fulllist',
//     auth: {
//         username: 'ScottWRobinson',
//         password: 'myPassword'
//     }
// };
 
// request.get(options);













/* GET users listing without password */
router.get('/fulllist', async (req, res) => {
//  debug('Hello World!')
  const userslisting = await db.User.query().select('firstName', 'lastName', 'email')
  res.json(userslisting)
})

// /* GET user by first name. */
// router.get('/', async (req, res) => {
//   const firstName = req.query.firstName
//   const result = firstName ? await users.getUserByfirstName(firstName) : await users.getAllUsers()
//   res.status(200).json(result)
// })

/* GET user by full name. */
router.get('/', async (req, res) => { 
  // if (Object.keys(req.query).length === 0 || req.query.name === undefined ) {
  //   res.status(200).json()
  // }
  const requestname = req.query.id
  console.log(requestname)

  //res.setHeader("Authorization", "Basic abcde");
  
  res.redirect('/users/fulllist');



  // No data is provided at this url unless a correct query is added
  if (req.query.name === undefined ) {
    res.status(200).json()
  }
  else{
    const name = req.query.name
    const result = name ? await users.getUserByfullName(name) : await users.getAllUsers()
    res.status(200).json(result)
  }  
})

/* GET user by id. */
router.get('/:id', async (req, res) => {
  const result = await users.getUserById(req.params.id)
  res.status(200).json(result)
})


/* POST users listing */
router.post('/', async (req, res) => {
  const result = await users.addUser(req.body)

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
