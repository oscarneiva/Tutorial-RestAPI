const express = require ('express');
const router = require('./routes/api');

// get a list of ninjas from the db
router.get('/ninjas', function(req, res){
    res.send({type: 'get'});
});

// add a new ninja to the db
router.post('/ninjas', function(req, res){
    res.send({type: 'post'});
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