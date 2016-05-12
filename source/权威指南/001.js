/**
 * 通过id查找多个元素
 * 接受任意多的字符串参数
 */
function getElementsByIds(/*ids...*/){
	var elements = {};
	for(var i = 0; i < arguments.length; i++) {
		var id = arguments[i];
		var elt = document.getElementById(id);
		if( elt == null ) {
			throw new Error("No element with id:" + id);
		}
		elements[id] = elt;
	}
	return elements;
}
