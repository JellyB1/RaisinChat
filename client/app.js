var socket = io();

$('form').submit(function() {
    var person = $('#initials').val();
    var text = $('#message').val();
    var chatEntry = person + ' says: ' + text;
    // alert(chatEntry);

    socket.emit('message', chatEntry);


    // socket.emit('message', text);

    // these will reset the input boxes, ready to write new message
    // $('#initials').val('');
    $('#message').val('');
    return false;
});

socket.on('message', function(msg) {
    $('<li>').text(msg).appendTo('#history');
});