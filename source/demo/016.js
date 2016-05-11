// 016.js
/**
 * 打印日期： yyyy-MM-dd HH:mm:ss
 */
function logDate(date) {
	date = date || new Date();
	var year = date.getFullYear();
	var month = date.getMonth();
	var d = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();

	console.log(year + '-' + getStr(month) + '-' + getStr(d) + ' ' + getStr(hour) + ':' + getStr(minute) + ':' + getStr(second));
	
	function getStr(d) {
		return (d > 9) ? ('' + d) : ('0' + d);
	}
}

function sayHello(name) {
	name = name || 'world';
	console.log('hello ' + name + "!");
}

exports.date = logDate;
exports.hello = sayHello;
