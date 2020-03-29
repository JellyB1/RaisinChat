var socket = io();

$('form').submit(function() {
    var person = $('#initials').val();
    var text = $('#message').val();
    var chatEntry = person + ' says: ' + text;

    socket.emit('message', chatEntry);
    
    $('#message').val('');
    return false;
});

socket.on('message', function(msg) {
    $('<li>').text(msg).appendTo('#history');
});
