var http = require("http");
http.createServer(function(req, resp){
	resp.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
	resp.write("<h1>ShenJinXiang</h1>");
	resp.write("<p>一个好人！！！</p>");
	resp.write('<div>这是一个div盒子。</div>')
	resp.end();
}).listen(7878);
console.log("HTTP server is listening at port 7878\n");
