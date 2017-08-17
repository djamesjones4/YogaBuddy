const router = require('express').Router()
const knex = require('../knex')
const humps = require('humps')

/* GET poses */

router.route('/')
  .get((req, res, next) => {
  knex('poses')
    .then((poses) => {
      res.send(poses)
    })
})

router.route('/:id')
.get((req, res, next) => {
  let id = req.params.id
  knex('poses')
    .where('id', id)
    .then((poses) => {
      res.send(humps.camelizeKeys(poses[0]))
    })
})

module.exports = router
