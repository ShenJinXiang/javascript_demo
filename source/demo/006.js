// getter and setter
(function(){
	var o = {
		val: 11,
		get getVal() {
			return this.val;
		},
		set setVal(x) {
			this.val = x;
		}
	};

	console.log(o);
	console.log(o.getVal);
	o.setVal = 123;
	console.log(o.getVal);
}());
