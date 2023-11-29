const express = require('express');
const UserController = require('../controller/users.js');
const router = express.Router();

//Create - post
router.post('/', UserController.createNewUser);

//Read - Get
router.get('/', UserController.getAllUsers);

//UPDATE - PATCH
router.patch('/:idUser', UserController.updateUser);
//DELETE
router.delete('/:idUser', UserController.deleteuser);


module.exports = router;