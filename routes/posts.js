'use strict'

const r = require('express').Router()
const k = require('../knex')
const humps = require('humps')
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken')

r.route('/')
    .get((req, res) => {
        console.log("in posts route")
        k('posts')
            .then((posts) => {
                console.log('posts', posts)
                return k('comments')
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
        k('posts')
            .returning(['id', 'varchar', 'email', ])
            .insert(humps.decamelizeKeys(req.body))
            .then((posts) => {
                console.log(posts);
                res.send(humps.camelizeKeys(post))
            }).done()
    })
// // // ------------------------- BY ID -----------------------------
r.route('/:id')
    .get((req, res) => {
        let id = req.params.id
        k('posts')
            .where('id', id)
            .then((posts) => {
                res.send(humps.camelizeKeys(posts[0]))
            })
    })
    .patch((req, res) => {
        k('posts')
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
        k('posts').where('id', id).returning(['id', 'title', 'email'])
            .update(humps.decamelizeKeys(req.body)).then((posts) => {
                res.send(humps.camelizeKeys(oneThing[0]))
            })
    })
    .delete((req, res) => {
        let id = req.params.id
        k('posts')
            .where('id', id)
            .returning(['user_id', 'title', 'description', 'post_id', 'post_id', ])
            .del().then((posts) => {
                res.send(humps.camelizeKeys(posts[0]))
            })
    })
module.exports = r
