(function(){
	var num = 10;

	function f1(n) {
		if(n < 1) {
			console.log("参数错误！");
			return;
		}
		if(n == 1) {
			return 1;
		}
		return 1 / f2(n) + f1(n - 1);
	}

	function f2(n) {
		if(n == 1) {
			return 1;
		}
		return n * f2(n - 1);
	}
	console.log(f1(1000));
})();
