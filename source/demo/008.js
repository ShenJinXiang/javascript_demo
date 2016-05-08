// range.js
(function(){
	function Range(from, to) {
		this.from = from;
		this.to = to;
	}

	Range.prototype = {
		includes: function(x) {
			return this.from <= x && x <= this.to;
		},
		foreach: function(f) {
			for(var x = Math.ceil(this.from); x <= this.to; x++) {
				f(x);
			}
		},
		toString: function() {
			return "(" + this.from + "..." + this.to + ")";
		}
	}

	var r = new Range(1, 3);
	console.log(r.includes(2));
	r.foreach(console.log);
	console.log(r);
	console.log(r.toString());
	console.log("------------");
	for(var k in r) {
		console.log(k + " : ", r[k]);
	}

	var F = function() {};
	console.log(F.prototype.constructor === F);

	var o = {x: 1, y: 2};
	var p1 = Object.create(o);
	console.log(o);
	console.log(p1);
	console.log(p1.prototype);
}());
