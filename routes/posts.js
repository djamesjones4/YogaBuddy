'use strict'

const router = require('express').Router()
const knex = require('../knex')
const humps = require('humps')
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken')

router.route('/')
    .get((req, res) => {
        // console.log("in posts route")
        knex('posts')
            .then((posts) => {
                // console.log('posts', posts)
                return knex('comments')
                    .whereIn('post_id', posts.map(p => p.id))
                    .then((comments) => {
                        const commentsByPostId = comments.reduce((result, comment) => {
                            result[comment.post_id] = result[comment.post_id] || []
                            result[comment.post_id].push(comment)

                            return result
                        }, {})
                        posts.forEach((post) => {
                            post.comments = commentsByPostId[post.id] || []
                        })
                        res.json(posts)
                    })
            })
    })
    .post((req, res) => {
        knex('posts')
            .returning(['id', 'varchar', 'email', ])
            .insert(humps.decamelizeKeys(req.body))
            .then((posts) => {
                console.log(posts);
                res.send(humps.camelizeKeys(post))
            }).done()
    })
// // // ------------------------- BY ID -----------------------------
router.route('/:id')
    .get((req, res) => {
      console.log('post by id');
        let id = req.params.id
        knex('posts')
            .where('id', id)
            .then((posts) => {
              console.log(posts[0])
                res.send(humps.camelizeKeys(posts[0]))
            })
    })
    .patch((req, res) => {
        knex('posts')
            .where('id', req.params.id)
            .update({
                title: req.body.title,
                description: req.body.description
            }) //Thing you're updating (editing / patching)
            .returning(['id', 'title', 'description'])
            .then((posts) => {
                res.send(posts[0])
            })
    })

    .patch((req, res) => {
        let id = req.params.id
        knex('posts').where('id', id).returning(['id', 'title', 'email'])
            .update(humps.decamelizeKeys(req.body)).then((posts) => {
                res.send(humps.camelizeKeys(oneThing[0]))
            })
    })
    .delete((req, res) => {
        let id = req.params.id
        knex('posts')
            .where('id', id)
            .returning(['user_id', 'title', 'description', 'post_id', 'post_id', ])
            .del().then((posts) => {
                res.send(humps.camelizeKeys(posts[0]))
            })
    })
module.exports = router
