const express = require('express');
const app = express();
const mo = require('method-override');
const bp = require('body-parser');
const path = require('path');
const router = require('./controllers/burgers_controllers.js');


const PORT = process.env.PORT || 3000;
app.use('/', router);
app.listen(PORT);
