// Routes
'use strict'

const router = require('express').Router()
const knex = require('../knex')
const humps = require('humps')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// HANDLING ALL MY ROUTING @ ONCE 👨🏻 LiL_Code

router.route('/')
.get((req, res) => {
  knex('users')
.then((userData) => {
  res.send(humps.camelizeKeys(userData))
})
})
.post((req, res) => {
  knex('users')
  .returning(['id', 'username', 'password', 'email', 'profile_picture_img', 'bio'])
    .insert(humps.decamelizeKeys(req.body))
    .then((usersData) => {
      res.send(humps.camelizeKeys(usersData[0]))
    }).done()
})
// ------------------------- BY ID -----------------------------

router.post('/', function(req, res, next) {
  console.log('in post route')
  let username = req.body.username
  let password = req.body.password

  if (username) {
    knex('users')
    .where('username', username)
    .then((data) => {
      if (data.length > 0) {
        bcrypt.compare(password, data[0].hashed_password, (err, result) => {
          if (result) {
            let token = jwt.sign({
              exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30),
              username: data[0].username,
              id: data[0].id,
              is_admin: data[0].is_admin
            }, 'secret')
            // secret in production should be process.env.JWT_KEY
            res.cookie('token', token, {
              httpOnly: true
            })
            // send status and change state
            res.status(200).send('hello')
          } else {
            res.status(401).send({ error: 'Bad username or password' })
          }
        })
      } else {
        res.status(401).send({ error: 'Bad username or password' })
      }
    })
  }
})



//
// router.route('/:id')
// .get((req, res) => {
//   let id = req.params.id
//   knex('users')
//     .where('id', id)
//     .select(['id', 'username', 'email', 'profile_picture_img', 'bio', 'created_at'])
//     .then((userData) => {
//       res.send(humps.camelizeKeys(userData[0]))
//     })
// })
// .patch((req, res, next) => {
//   knex('users')
//     .where('id', req.params.id)
//     // Thing you're updating (editing / patching)
//     .update({ message: req.body.message })
//     .returning(['id', 'username', 'email', 'profile_picture_img', 'bio'])
//     .then((edit) => {
//       res.send(edit[0])
//     })
// })
//
// .patch((req, res) => {
//   let id = req.params.id
//   knex('users').where('id', id).returning(['id', 'varchar', 'email'])
//    .update(humps.decamelizeKeys(req.body)).then((oneThing) => {
//      res.send(humps.camelizeKeys(oneThing[0]))
//    })
// })
// .delete((req, res) => {
//   let id = req.params.id
//   knex('users')
//   .where('id', id)
//   .returning(['id', 'username', 'email', ' profile_picture_img', 'bio'])
//     .del().then((oneThing) => {
//       res.send(humps.camelizeKeys(oneThing[0]))
//     })
// })
module.exports = router
