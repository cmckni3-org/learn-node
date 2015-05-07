var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = [];

chat.on('message', function(message) {
  chatlog.push(message);
});

chat.on('join', function(nickname) {
  users.push(nickname);
});

chat.emit('join', 'cmckni3');
chat.emit('message', 'Test');
chat.emit('mesage', 'Test2');