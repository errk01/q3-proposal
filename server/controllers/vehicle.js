const express = require('express');
const router = express.Router();
const knex = require('../db/knex');


module.exports = {
  
  getAll: (req, res) => {
    knex('vehicle')
    .then((vehicle)=>{
      // console.log(vehicle);
      res.json(vehicle)
    })
  },
  
  getOne:(req, res) => {
    knex(vehicle).form('vehicle').where('id', req.params.id)
    .then((vehicle)=>{
      res.json(vehicle)
    })
  },
  createNew:(req, res) => {
    knex('vehicle').insert({
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        engine: req.body.engine,
        reason: req.body.reason,
        note: req.body.note
      }).then(()=>{
        knex.select().form(vehicle).then((vehicle)=>{
          res.json(vehicle)
        })

      })

  }, 
updated : (req, res) => {
  knex('vehicle').where('id', req.params.id).update({
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    engine: req.body.engine,
    reason: req.body.reason,
    note: req.body.note
  }).then(() => {
    knex.select().form('vehicle').then((vehicle) => {
      res.json(vehicle)
    })
  })
},
  remove : (req, res) => {
  knex('vehicle').delete().where('id', req.params.id)
    .then(() => {
      res.json(vehicle);
  })
}
}