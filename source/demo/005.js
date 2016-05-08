(function(){
	function idObj(id) {
		var _id = id;
		return {
			getId: function() {
				return _id;
			},
			setId: function(id) {
				_id = id;
			}
		};
	}

	var i = idObj(123);
	console.log(i.getId());
	i.setId(234);
	console.log(i.getId());
}());
