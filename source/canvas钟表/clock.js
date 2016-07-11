(function(){
	var config = {
		width : 400,
		height : 400,
		radius : 190,
		borderWidth : 10,
		origin : {
			radius: 10,
			color : '#ccc'
		}
	};

	var canvas = document.getElementById('canvas');
	canvas.width = config.width;
	canvas.height = config.height;
	var context = canvas.getContext('2d');

	drawFream();
	drawOrigin();
	drawScale();

	function drawFream() {
		context.beginPath();
		context.arc(canvas.width / 2, canvas.height / 2, config.radius, 0, 2 * Math.PI, false);
		context.lineWidth = config.borderWidth;
		context.strokeStyle = '#000';
		context.closePath();
		context.stroke();
	}

	function drawOrigin() {
		context.beginPath();
		context.arc(canvas.width / 2, canvas.height / 2, config.origin.radius, 0, 2 * Math.PI, false);
		context.fillStyle = config.origin.color;
		context.closePath();
		context.fill();
	}
	
	function drawScale() {
		debugger;
		for(var i = 0; i < 60; i++) {
			context.save();
			context.translate(canvas.width / 2, canvas.height / 2);
			context.rotate(i * 6 * Math.PI / 180);
			context.moveTo(config.radius - 10, 0);
			context.lineTo(config.radius, 0);
			context.lineWidth = 1;
			context.closePath();
			context.stroke();
			context.restore();
		}
	}
}());
