// Routes
'use strict'

const router = require('express').Router();
const knex = require('../knex');
const humps = require('humps');
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
//HANDLING ALL MY ROUTING @ ONCE 👨🏻 LiL_Code

router.route('/')
.get((req, res) => {
console.log("homepage")
})
// .post((req, res) => {
//   knex('users')
//   .returning(['id', 'varchar', 'email'])
//     .insert(humps.decamelizeKeys(req.body))
//     .then((oneThing) => {
//       res.send(humps.camelizeKeys(oneThing[0]))
//     }).done()
// })
// // ------------------------- BY ID -----------------------------
// router.route('/:id')
// .get((req, res) => {
//   let id = req.params.id;
//     knex('users')
//     .where('id', id)
//     .then((oneThing) => {
//     res.send(humps.camelizeKeys(oneThing[0]))
//   })
// })
// .patch((req, res, next) => {
//   k('users')
//     .where('id', req.params.id)
//     // Thing you're updating (editing / patching)
//     .update({ message: req.body.message })
//     .returning(['id', 'name', 'message'])
//     .then((edit) => {
//       res.send(edit[0])
//     })
// })
//
// // .patch((req, res) => {
// //  let id = req.params.id;
// //  k('users').where('id', id).returning(['id', 'varchar',  'email' ])
// //    .update(humps.decamelizeKeys(req.body)).then((oneThing) => {
// //      res.send(humps.camelizeKeys(oneThing[0]));
// //    });
// .delete((req, res) => {
//   let id = req.params.id;
//   k('users')
//   .where('id', id)
//   .returning(['id', 'varchar', 'email', ])
//     .del().then((oneThing) => {
//       res.send(humps.camelizeKeys(oneThing[0]));
//     });
// });
module.exports = router
