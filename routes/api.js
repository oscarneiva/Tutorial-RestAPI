const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja')

// get a list of ninjas from the db
router.get('/ninjas', function(req, res){
    res.send({type: 'get'});
});

// add a new ninja to the db
router.post('/ninjas', function(req, res){
    
    // The lines 13 and 14 were replaced by the line 17
    /*var ninja = new Ninja(req.body);
    ninja.save();*/
    
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    });
});

// update a ninja in the db
router.put('/ninjas/:id', function(req, res){
    res.send({type: 'put'});
});

// get a list of ninjas from the db
router.delete('/ninjas/:id', function(req, res){
    res.send({type: 'delete'});
});

module.exports = router;