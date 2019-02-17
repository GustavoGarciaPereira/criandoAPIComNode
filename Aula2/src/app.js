'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();


//carregar as rotas
const indexRoute = require('./routes/index-route');
//carregar rotas dos produtos
const productRoute = require('./routes/product-route');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : false
}));


app.use('/',indexRoute);
app.use('/products',productRoute);


module.exports = app;