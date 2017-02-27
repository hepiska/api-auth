var express = require('express');
var router = express.Router();
var model = require('../../models')

router.get('/', function(req, res) {
    model.Guest.findAll().then(function(guests) {
        res.json(guests)
    })
})
router.post('/', function(req, res) {
    //console.log(req.body);
    model.Guest.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        antend: req.body.antend
    }).then(function() {
        res.send('data inserted')
    })
})

router.get('/:id', function(req, res) {
    console.log(req.params.id);
    model.Guest.find({
        where: {
            id: req.params.id
        }
    }).then(function(guest) {
        res.json(guest)
    })
})

router.delete('/:id',function(req,res){

})


module.exports = router;
