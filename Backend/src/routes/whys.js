const express = require('express')
const router = express.Router()
const debug = require('debug')('app:whys')
const db = require('../models/index')
const whys = require('../helpers/whys')

const { UniqueViolationError } = require('objection')

/* GET why by email. */
router.get('/:email', async (req, res) => {
  const result = await whys.getWhyByEmail(req.params.email)
  res.status(200).json(result)
})

  /* POST whys listing */
  router.post('/', async (req, res) => {
    const result = await whys.addWhy(req.body)
  
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