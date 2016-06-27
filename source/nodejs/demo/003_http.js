var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, 
		{
			'Content-Type' : 'text/html;charset=utf-8',
			'refresh' : 1
		});
	res.end("<h1>hello world</h1><p>" + getDateStr() + "</p>");
}).listen(1337, '127.0.0.1');
console.log("Server running at http://127.0.0.1:1337");

function getDateStr() {
	var d = new Date();
	var year = d.getFullYear();
	var month = tw(d.getMonth());
	var day = tw(d.getDate());
	var hour = tw(d.getHours());
	var minute = tw(d.getMinutes());
	var second = tw(d.getSeconds());
	return year + "年" + month + "月" + day + '日' + " " + hour + ":" + minute + ":" + second;
}

function tw(n) {
	return (n > 9) ? ('' + n) : ("0" + n);
}
