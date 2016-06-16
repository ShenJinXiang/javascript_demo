(function(){
	var num = 10;
	var count = 0;
	var data = [];
	var timer = setInterval(function(){
		console.log(count);
		data.push(new Date().toLocaleDateString().replace(/\//g, '-') + "  " + Math.floor(Math.random() * 10));
		if(count++ >= num) {
			clearInterval(timer);
			console.log("*************");
			console.log(data);
		}
	}, 1000);
})();
