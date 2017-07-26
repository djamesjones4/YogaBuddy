const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const index = require('./routes/index')
const users = require('./routes/users')
const posts = require('./routes/posts')
const poses = require('./routes/poses')
const comments = require('./routes/comments')
const feed = require('./routes/feed')
// const contributors = require('./routes/contributors')

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'client')))

// app.use('/', index)
app.use('/', feed)
app.use('/api/users', users)
app.use('/api/posts', posts)
app.use('/api/posts', comments)
app.use('/api/poses', poses)
// app.use('/api/contributors', contributors)

// feeds all angular routes to index.html
app.use('*', function(req, res, next) {
  res.sendFile('index.html', { root: path.join(__dirname, '/client') })
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.json('error')
})

module.exports = app
