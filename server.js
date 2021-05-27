// Imports 

var express = require('express');
var bodyParser = require('body-parser');
var apiRouter = require('./apiRouter').router;

// instancite server 

var server = express();

//bodyparser

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());


//routes

server.get('/', function (req, res) {
    res.status(200).send('<h1> Hello cc </h1>');
});


server.use('/api/', apiRouter);

//serveru en ecoute


server.listen(8080, function () {
    console.log('Server en écoute')
})