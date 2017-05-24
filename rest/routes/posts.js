
'use strict'
const r = require('express').Router()
const k = require('../knex')
const humps = require('humps')
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

// router.get('/poses', (req, res, next) => {
//   res.render('index')
//   knex('yoga_poses')
//   .then(poses => {
//     console.log(poses);
//     res.send('poses')
//   })
// })
//
// module.exports = router
r.route('/posts').get((req, res, next) => {
    res.render('index')
}).post((req, res) => {
  k('yoga_posts')
  .returning(['id', 'varchar', 'email', ])
    .insert(humps.decamelizeKeys(req.body))
    .then((posts) => {
      console.log(posts);
      res.send(humps.camelizeKeys(post));
    }).done();
});
// // ------------------------- BY ID -----------------------------
// r.route('/:id')
// .get((req, res) => {
//   let id = req.params.id;
//     k('users')
//     .where('id', id)
//     .then((oneThing) => {
//     res.send(humps.camelizeKeys(oneThing[0]));
//   })
// })
// .patch((req, res, next) => {
//   k('users')
//     .where('id', req.params.id)
//     .update({ message: req.body.message }) //Thing you're updating (editing / patching)
//     .returning(['id', 'name', 'message'])
//     .then((edit) => {
//       res.send(edit[0])
//     })
// })
//
// //.patch((req, res) => {
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
// module.exports = r;
