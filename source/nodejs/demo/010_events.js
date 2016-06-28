var EventEmitter = require("events").EventEmitter;
var lift = new EventEmitter();

lift.on("click", function(arg1, arg2){
	console.log(arg1 + " click " + arg2);
});

lift.emit("click", "ni", "wo");
