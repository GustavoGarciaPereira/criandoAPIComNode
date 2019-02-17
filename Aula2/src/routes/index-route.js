'use strict'


const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        title:"node Store API",
        autor:"Gustavo Garcia Pereira",
        email:"gusgurtavo@gmail.com",
        versio:"0.0.1"
    });
});


module.exports = router;