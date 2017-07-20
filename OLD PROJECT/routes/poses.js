const r = require('express').Router()
const k = require('../knex')
const humps = require('humps')

/* GET poses */

r.route('/')
  .get((req, res, next) => {
  k('poses')
    .then((poses) => {
      res.send(poses)
    })
})

r.route('/:id')
.get((req, res, next) => {
  let id = req.params.id
  k('poses')
    .where('id', id)
    .then((poses) => {
      res.send(humps.camelizeKeys(poses[0]))
    })
})

module.exports = r
