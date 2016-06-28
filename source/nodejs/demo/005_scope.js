var globalVariable = 'This is global variable';	// 全局变量
function globalFunction() {	//全局函数
	var localVariable = 'This is local variable';	// 局部变量
	console.log("Visit global/local variable");
	console.log(globalVariable);
	console.log(localVariable);
	globalVariable = 'This is changed variable';
	console.log(globalVariable);
	function localFunction() {
		var innerLacalVariable = 'This is inner local variable';
		console.log("Visit global/local/innerLocal variable");
		console.log(globalVariable);
		console.log(localVariable);
		console.log(innerLacalVariable);
	}
	localFunction();
}

globalFunction();
