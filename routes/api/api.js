var express = require('express');
var router = express.Router();
let usersControler = require('../../controler/users')

/* GET users listing. */
router.get('/Users', usersControler.getusers)

router.get('/users/:id', usersControler.getuser)

router.post('/users',usersControler.insertUser)

router.delete('/users/:id', usersControler.deleteUser)

router.put('/users/:id',usersControler.updateUser)


module.exports = router;
