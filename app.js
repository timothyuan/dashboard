var express = require('express')
var app = express()
var path = require('path')


app.set('views', './views')
app.set('view engine', 'pug')


app.get('/', function (req, res) {
  res.render(‘index’)
})