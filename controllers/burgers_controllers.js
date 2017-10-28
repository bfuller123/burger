const express = require('express');
const burger = require('./../models/burgers.js');
const router = express.Router();

router.get('/', function(req, res){
  res.send('Hello!');
})

module.exports = router;
