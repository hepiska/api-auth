var express = require('express');
var router = express.Router();
var model = require('../models');
let crypto = require('crypto');
let shortid = require('short-id');
let usersControler = require('../controler/users')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/signup',usersControler.insertUser);

router.post('/signin', usersControler.userSignin);

module.exports = router;
