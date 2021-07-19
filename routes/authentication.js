
var { Router } = require('express');
var router = Router();

var Authenticate = require('../controllers/authentication')

router.post('/', Authenticate.loginUser);

module.exports = router