'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title:"node Store API",
        autor:"Gustavo Garcia Pereira",
        email:"gusgurtavo@gmail.com",
        versio:"0.0.1"
    });
});

const create = router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

const put = router.put('/:id', (req, res, next) => {
    const id = req.params.id;

    res.status(201).send({
        id:id, 
        item: req.body
    });
});

const del = router.delite('/', (req, res, next) => {
    res.status(200).send(req.body);
});


app.use('/',route);
app.use('/products',create);
app.use('/products',put);
app.use('/products',del);

module.exports = app;