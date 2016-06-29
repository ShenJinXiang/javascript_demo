var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('click', function(){
	console.log("click one~~~");
});

event.on('click', function(){
	console.log('click two~~~');
});

setInterval(function(){
	event.emit('click');
}, 1000);
