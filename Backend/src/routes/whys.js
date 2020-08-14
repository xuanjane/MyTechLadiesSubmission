const express = require('express')
const router = express.Router()
const debug = require('debug')('app:whys')
const db = require('../models/index')

/* GET users listing. */
router.get('/', async (req, res) => {
  debug('Hello World!')

  const whys = await db.Why.query().select('email', 'reason')
  res.json(whys)
// res.json.parse(whys)
//res.send(whys)

    // const stringifiedJson = JSON.stringify(whys.email)
    // res.end(stringifiedJson)

   // why
})

module.exports = router