const express = require('express');
const router = express.Router();
const knex = require('../db/knex');


module.exports = {
  
  getAll: (req, res) => {
    knex('part')
    .then((part)=>{
       // console.log(part);
      res.json(part)
    })
  },
  
  getOne:(req, res) => {
    knex(part).form('part').where('id', req.params.id)
    .then((part)=>{
      res.json(part)
    })
  },
  createNew:(req, res) => {
    console.log(req.body);
    knex('part').insert({
      url_img: req.body.url_img,
      partName: req.body.partName,
      partNumber: req.body.partNumber,
      price: req.body.price,
      detail: req.body.detail,
      inCart: req.body.inCart
      }).then(()=>{
        knex('part').then((part)=>{
          res.json(part)
        })

      })

  }, 
updated : (req, res) => {
  knex('part').where('id', req.params.id).update({
    url_img: req.body.url_img,
    partName: req.body.partName,
    partNumber: req.body.partNumber,
    price: req.body.price,
    detail: req.body.detail,
    inCart: req.body.inCart
  }).then(() => {
    knex.select().form('part').then((part) => {
      res.json(part)
    })
  })
},
  remove : (req, res) => {
  knex('part').delete().where('id', req.params.id)
    .then(() => {
      res.json(part);
  })
}
}