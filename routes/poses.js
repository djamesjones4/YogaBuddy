const express = require('express')
const router = express.Router()
const knex = require('../knex')
const humps = require('humps')

/* GET poses */

router.get('/poses', (req, res, next) => {
  knex('poses')
    .select()
    .then((poses) => {
      console.log('poses');
      // res.send(poses)
    })
})
//
// router.get('/:id', (req, res, next) => {
//   let id = req.params.id
//   knex('poses')
//     .where('id', id)
//     .then((poses) => {
//       res.send(humps.camelizeKeys(poses[0]))
//     })
// })

module.exports = router
