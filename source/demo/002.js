(function(){
	var scope = 'global scope';
	function checkscope() {
		var scope = 'local scope';
		function fn() {
			return scope;
		}
		return fn;
	}

	var result = checkscope();
	console.log(result);
	console.log(result());
	console.log(checkscope.scope);
}());
