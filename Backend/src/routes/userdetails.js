const express = require('express')
const router = express.Router()
const debug = require('debug')('app:userdetails')
const db = require('../models/index')

/* GET users listing. */
router.get('/', async (req, res) => {
  debug('Hello World!')

  const users = await db.UserDetail.query().select('email', 'workplace', 'jobtitle', 'interestingfact', 'image', 'github', 'linkedin')
  res.json(userdetails)
})

// router.get('/', async (req, res) => {
//     const breed = req.query.breed
//     const result = breed ? dogs.getDogsByBreed(breed) : dogs.getAllDogs()
//     res.status(200).json(result)
//   })
  
//   router.get('/:id', async (req, res) => {
//     const result = dogs.getDogById(req.params.id)
//     res.status(200).json(result)
//   })

module.exports = router