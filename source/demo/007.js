// getter and setter and ±Õ°ü
(function(){
	function nObj() {
		var n = 100;
		return {
			get count() {
				return n;
			},
			set count(x) {
				n = x;
			}
		};
	}
	var a = nObj();
	var b = nObj();
	console.log(a.count);
	console.log(b.count);
	a.count = 123;
	b.count = 345;
	console.log(a.count);
	console.log(b.count);

}());
