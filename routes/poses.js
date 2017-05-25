const express = require('express')
const router = express.Router()
const knex = require('../knex')
const humps = require('humps')

/* GET yoga_poses */

router.get('/', (req, res, next) => {
  res.render('index')
  knex('yoga_poses')
  .then((poses) => {
    res.send(poses)
  })
})

router.get('/:id', (req, res, next) => {
  let id = req.params.id
  res.render('index')
  knex('yoga_poses')
  .where('id', id)
  .then((poses) => {
    res.send(humps.camelizeKeys(poses[0]))
  })
})

module.exports = router
