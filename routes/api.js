const express = require ('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// get a list of ninjas from the db
router.get('/ninjas', function(req, res, next){
  
  var student = {
  disciplines: [
      {name: "Filosofia", total: 100, done: 10, link:"/themes/filosofia"},
      {name: "Sociologia", total: 110, done: 21, link:"/themes/sociologia"},
      {name: "Português", total: 123, done: 25, link:"/themes/portugues"},
      {name: "Literatura", total: 154, done: 33, link:"/themes/literatura"},
      {name: "Redação", total: 160, done: 160, link:"/themes/redacao"},
      {name: "História", total: 125, done: 15, link:"/themes/historia"},
      {name: "Geografia", total: 166, done: 18, link:"/themes/geografia"},
      {name: "Idiomas", total: 181, done: 39, link:"/themes/idiomas"},
      {name: "Biologia", total: 122, done: 22, link:"/themes/biologia"},
      {name: "Química", total: 134, done: 37, link:"/themes/quimica"},
      {name: "Física", total: 153, done: 41, link:"/themes/fisica"},
      {name: "Matemática", total: 123, done: 44, link:"/themes/matematica"}
    ],
    gemeralExercises: [
      {name: "Filosofia", total: 400, done: 10, link:"/"},
      {name: "Sociologia", total: 538, done: 21, link:"/"},
      {name: "Português", total: 373, done: 25, link:"/"},
      {name: "Literatura", total: 454, done: 454, link:"/"},
      {name: "Redação", total: 562, done: 160, link:"/"},
      {name: "História", total: 485, done: 15, link:"/"},
      {name: "Geografia", total: 266, done: 18, link:"/"},
      {name: "Idiomas", total: 481, done: 39, link:"/"},
      {name: "Biologia", total: 472, done: 22, link:"/"},
      {name: "Química", total: 434, done: 37, link:"/"},
      {name: "Física", total: 483, done: 41, link:"/"},
      {name: "Matemática", total: 453, done: 44, link:"/"}
    ],
    weekExercises: [
      {name: "Filosofia", total: 10, done: 0, link:"/"},
      {name: "Sociologia", total: 10, done: 0, link:"/"},
      {name: "Português", total: 10, done: 9, link:"/"},
      {name: "Literatura", total: 10, done: 9, link:"/"},
      {name: "Redação", total: 10, done: 3, link:"/"},
      {name: "História", total: 10, done: 1, link:"/"},
      {name: "Geografia", total: 10, done: 0, link:"/"},
      {name: "Idiomas", total: 10, done: 3, link:"/"},
      {name: "Biologia", total: 10, done: 10, link:"/"},
      {name: "Química", total: 10, done: 10, link:"/"},
      {name: "Física", total: 10, done: 0, link:"/"},
      {name: "Matemática", total: 10, done: 4, link:"/"}
    ]
  };

  res.send(student);

});

/*
router.get('/ninjas', function(req, res, next){
     Ninja.find({}).then(function(ninjas){
        res.send(ninjas);
    }); 
    Ninja.geoNear(
        {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
        {maxDistance: 100000, spherical: true}
    ).then(function(ninjas){
        res.send(ninjas);
    }).catch(next);
});
*/

// add a new ninja to the db
router.post('/ninjas', function(req, res, next){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

// update a ninja in the db
router.put('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        });
    }).catch(next);
});

// delete a ninja from the db
router.delete('/ninjas/:id', function(req, res, next){
    Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

module.exports = router;
