var http = require("http");
var url = "http://www.imooc.com";

function filterChapters(html) {
}

http.get(url, function(res){
	var html = '';
	res.on('data', function(data){
		html += data;
	});

	res.on('end', function(){
		//console.log(html);
		filterChapters(html);
	});
}).on('error', function() {
	console.log("获取数据出错！");
});
