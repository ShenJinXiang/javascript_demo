var url = require("url");
var urlstr = "https://github.com/ShenJinXiang/javascript_demo";
var o = url.parse(urlstr);
console.log(o);
var str = url.format(o);
console.log("-----------------");
console.log(str);
