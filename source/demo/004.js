(function(){
	function counter() {
		var n = 0;
		return {
			count: function() {
				return n++;
			},
			reset: function() {
				n = 0;
			}
		}
	}

	var c = counter();
	var d = counter();

	console.log("c count -> " + c.count());
	console.log("c count -> " + c.count());
	console.log("c count -> " + c.count());
	console.log("c count -> " + c.count());
	console.log("c count -> " + c.count());
	console.log("c reset -> " + c.reset());
	console.log("c count -> " + c.count());
	console.log("c count -> " + c.count());

	console.log("d count -> " + d.count());
	console.log("d count -> " + d.count());
	console.log("d count -> " + d.count());
	console.log("d reset -> " + d.reset());
	console.log("d count -> " + d.count());
	console.log("d count -> " + d.count());
}());
