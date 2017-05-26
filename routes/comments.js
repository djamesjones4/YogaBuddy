const r = require('express').Router()
const k = require('../knex')

r.route('/')
 .get((req, res, next) => {
  k('comments')
    .where({ post_id: req.params.post_id })
    .then(comments => res.json(comments))
    .catch(err => next(err))
 })
//
.post((req, res, next) => {
  k('comments')
    .insert({ content: req.body.content, post_id: req.params.post_id })
    .where({ post_id: req.params.post_id })
    .returning('*')
    .then(comments => res.json(comments[0]))
    .catch(err => next(err))
})

.patch((req, res, next) => {
  k('comments')
    .update({ content: req.body.content })
    .where({ post_id: req.params.post_id, id: req.params.id })
    .returning('*')
    .then(comments => res.json(comments[0]))
    .catch(err => next(err))
})

.delete((req, res, next) => {
  k('comments')
    .del()
    .where({ post_id: req.params.post_id, id: req.params.id })
    .then(() => res.end())
    .catch(err => next(err))
})

function validate(req, res, next) {
  const errors = [];
  ['content'].forEach(field => {
    if (!req.body[field] || req.body[field].trim() === '') {
      errors.push({ field, messages: ["cannot be blank"] })
    }
  })
  if (errors.length) return res.status(422).json({ errors })
  next()
}

module.exports = r
