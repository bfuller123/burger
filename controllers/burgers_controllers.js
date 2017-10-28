const express = require('express');
const burger = require('./../models/burgers.js');
const app = express().listen(process.env.PORT || 3000);
