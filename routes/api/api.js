var express = require('express');
var router = express.Router();
let usersControler = require('../../controler/users')
var helper = require('../../helper/auth');
/* GET users listing. */
router.get('/Users',helper.authAdmin, usersControler.getusers)

router.get('/users/:id',helper.authUser, usersControler.getuser)

router.post('/users',helper.authAdmin,usersControler.insertUser)

router.delete('/users/:id',helper.authAdmin, usersControler.deleteUser)

router.put('/users/:id',helper.authUser,usersControler.updateUser)


module.exports = router;
