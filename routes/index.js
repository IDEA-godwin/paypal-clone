
var { authenticate } = require('../config/jwt')
var { Router } = require('express');
var router = Router();

var usersRouter = require('./users');
var authRouter = require('./authentication')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/users', authenticate, usersRouter);
router.use('/auth', authRouter);

module.exports = router;
