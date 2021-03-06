'use strict'

const app = require('../src/app');
const debug = require('debug')('nodestr:server');
const http = require('http');

const port = normalizePort(process.env.PORT || '8080');
app.set('port',port);

const server = http.createServer(app);



server.listen(port);
server.on('error ', onError);
console.log("API rodando na porta: " + port);

function normalizePort(val){
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }
    if(port >= 0){
        return port;
    }
    return false;
}

function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe' + port : 'Port' + port;

    switch(error.code){
        case 'EACCES':
            console.error(bind + ' require elevated');
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            break;
        default:
            throw error;
    }
}