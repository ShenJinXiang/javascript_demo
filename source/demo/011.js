function jia(x, y) {
	return x + y;
}
function jian(x, y) {
	return x - y;
}
function chen(x, y) {
	return x * y;
}
function chu(x, y) {
	return x / y;
}

function jisuan(x, y, f) {
	return f(x, y);
}
function fun(x, y) {
	return x * x * x * y;
}

console.log(jisuan(12, 2, jia));
console.log(jisuan(12, 2, jian));
console.log(jisuan(12, 2, chen));
console.log(jisuan(12, 2, chu));
console.log(jisuan(2, 5, fun));
