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
		context.save();
		context.beginPath();
		context.arc(canvas.width / 2, canvas.height / 2, config.radius, 0, 2 * Math.PI, false);
		context.arc(canvas.width / 2, config.height / 2, config.radius - config.borderWidth, 0, 2 * Math.PI, true);
		context.fillStyle = "#333";
		context.shadowColor = "#444";
		context.shadowBlur = 50;
		context.closePath();
		context.fill();
		context.restore();
	}

	function drawOrigin() {
		context.save();
		context.beginPath();
		context.arc(canvas.width / 2, canvas.height / 2, config.origin.radius, 0, 2 * Math.PI, false);
		context.fillStyle = config.origin.color;
		context.closePath();
		context.fill();
		context.restore();
	}
	
	function drawScale() {
		for(var i = 0; i < 60; i++) {
			var obj = {
				sx : config.radius - 15 - config.borderWidth,
				sy : 0,
				ex : config.radius - config.borderWidth - 5,
				ey : 0,
				color : "#333",
				width : 1
			};
			context.save();
			context.translate(canvas.width / 2, canvas.height / 2);
			context.rotate(i * 6 * Math.PI / 180);
			context.beginPath();
			if(i % 5 == 0) {
				obj.width = 3;
				obj.color = "#000";
			}
			if(i % 15 == 0) {
				obj.sx = config.radius - 20 - config.borderWidth;
			}
			context.moveTo(obj.sx, obj.sy);
			context.lineTo(obj.ex, obj.ey);
			context.strokeStyle = obj.color;
			context.lineWidth = obj.width;
			context.closePath();
			context.stroke();
			context.restore();
		}
	}

	function drawNumbers() {
	}
}());
