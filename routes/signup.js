'use strict'

const express = require('express')
const router = express.Router()
const knex = require('../knex')
const jwt = require('jsonwebtoken')
// const boom = require('boom')
const bcrypt = require('bcryptjs')
// const ev = require('express-validation')
// const validations = require('../validations/index')
// const gapi = require('googleapis')

router.post('/', function(req, res, next) {
  console.log('posting to signup route')
  let username = req.body.username
  let email = req.body.email
  // let profilePic = req.body.profile_picture_img
  let userBio = req.body.user_bio
console.log('username: ', username, 'password: ', req.body.password, 'email: ', email, 'user bio: ', userBio)

  if (username && req.body.password && email) {
    knex('users')
      .where('username', username)
      .then((data) => {
        if (data.length < 1) {
          console.log('data.lenght < 1!!!')
          let hashed = bcrypt.hashSync(req.body.password, 12)
          delete req.body.password
          req.body.hashed_password = hashed

          knex('users')
            .insert({ username: `${username}`, hashed_password: `${hashed}`, email: `${email}`, bio: `${userBio}` })
            .returning(['id', 'username', 'email', 'bio'])
            .then(userData =>  {
              console.log('new user data: ', userData)
              res.status(200).send(userData)
            })
        } else {
          res.status(409).json({ error: 'username already exists' })
        }
      })
  } else {
    res.status().json({ error: 'Please enter all required information' })
  }
})
module.exports = router
