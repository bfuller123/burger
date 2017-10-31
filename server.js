const express = require('express');
const app = express();
const mo = require('method-override');
const bp = require('body-parser');
const path = require('path');
const router = require('./controllers/burgers_controllers.js');
const exphandlebars = require("express-handlebars");

app.use(bp.json()); // support json encoded bodies
app.use(bp.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.engine("handlebars", exphandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const PORT = process.env.PORT || 3000;
app.use('/', router);
app.use('/add', router);
app.listen(PORT);
