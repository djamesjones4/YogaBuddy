// Routes
'use strict'

const r = require('express').Router()
const k = require('../knex')
const humps = require('humps')
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
// HANDLING ALL MY ROUTING @ ONCE 👨🏻 LiL_Code

r.route('/')
.get((req, res) => {
  res.render('index')
})
.post((req, res) => {
  k('yoga_users')
  .returning(['id', 'username', 'password', 'email', 'profile_picture_img', 'bio'])
    .insert(humps.decamelizeKeys(req.body))
    .then((usersData) => {
      res.send(humps.camelizeKeys(usersData[0]))
    }).done()
})
// ------------------------- BY ID -----------------------------
r.route('/:id')
.get((req, res) => {
  let id = req.params.id
  k('yoga_users')
    .where('id', id)
    .then((userData) => {
      res.send(humps.camelizeKeys(userData[0]))
    })
})
.patch((req, res, next) => {
  k('yoga_users')
    .where('id', req.params.id)
    // Thing you're updating (editing / patching)
    .update({ message: req.body.message })
    .returning(['id', 'username', 'email', 'profile_picture_img', 'bio'])
    .then((edit) => {
      res.send(edit[0])
    })
})

// .patch((req, res) => {
//  let id = req.params.id;
//  k('users').where('id', id).returning(['id', 'varchar',  'email' ])
//    .update(humps.decamelizeKeys(req.body)).then((oneThing) => {
//      res.send(humps.camelizeKeys(oneThing[0]));
//    });
.delete((req, res) => {
  let id = req.params.id
  k('yoga_users')
  .where('id', id)
  .returning(['id', 'username', 'email', ' profile_picture_img', 'bio'])
    .del().then((oneThing) => {
      res.send(humps.camelizeKeys(oneThing[0]))
    })
})
module.exports = r
