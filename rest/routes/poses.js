const express = require('express')
const router = express.Router()
const knex = require('../knex');
const humps = require('humps');

/* GET poses */

router.get('/poses', (req, res, next) => {
  res.render('index')
  knex('yoga_poses')
  .then(poses => {
    console.log(poses);
    res.send('poses')
  })
})

module.exports = router
