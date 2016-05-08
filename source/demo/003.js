(function(){
	function checkscope() {
		this.scope = 'global scope';
		function fn() {
			return this.scope;
		}
		return fn;
	}

	var result = checkscope();
	console.log(result);
	console.log(result());
}());
