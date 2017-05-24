'use strict'

const r = require('express').Router()
const k = require('../knex')
const humps = require('humps')
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

r.route('/posts').get((req, res, next) => {
    res.render('index')
}).post((req, res) => {
  k('yoga_posts')
  .returning(['id', 'varchar', 'email', ])
    .insert(humps.decamelizeKeys(req.body))
    .then((posts) => {
      console.log(posts);
      res.send(humps.camelizeKeys(post))
    }).done()
})
// // ------------------------- BY ID -----------------------------
r.route('/:id')
.get((req, res) => {
  let id = req.params.id
    k('yoga_posts')
    .where('id', id)
    .then((posts) => {
    res.send(humps.camelizeKeys(posts[0]))
  })
})
.patch((req, res, next) => {
  k('yoga_posts')
    .where('id', req.params.id)
    .update({ title: req.body.title, description: req.body.description}) //Thing you're updating (editing / patching)
    .returning(['id', 'title', 'description'])
    .then((posts) => {
      res.send(posts[0])
    })
})

.patch((req, res) => {
 let id = req.params.id
 k('yoga_posts').where('id', id).returning(['id', 'title',  'email' ])
   .update(humps.decamelizeKeys(req.body)).then((posts) => {
     res.send(humps.camelizeKeys(oneThing[0]))
   })
})
.delete((req, res) => {
  let id = req.params.id
  k('yoga_posts')
  .where('id', id)
  .returning(['user_id', 'title', 'description', 'post_id', 'post_id',  ])
    .del().then((posts) => {
      res.send(humps.camelizeKeys(posts[0]))
    })
})
module.exports = r
