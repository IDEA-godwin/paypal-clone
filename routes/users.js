
var UserController = require('../controllers/UserController')
var express = require('express');
var router = express.Router();

router.post('/', UserController.createUser)
router.get('/', UserController.getUsers);
router.get('/:id', UserController.getUser)
router.put('/:id', UserController.editUser)
router.delete('/:id', UserController.deleteUser)

module.exports = router;
