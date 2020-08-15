const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res) {
  res.json({ message: 'Welcome and thanks for viewing my submission!' })
})

module.exports = router