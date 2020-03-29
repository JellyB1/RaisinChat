var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use(express.static('client'));

// code to add chat functionality, socket.io, external library

var io = require('socket.io')(server);

io.on('connection', function(socket) {

    console.log('User has entered');

    socket.on('message', function(msg) {
        io.emit('message', msg);
    });
});

server.listen(8080, function() {
    console.log('Chat server running');
});