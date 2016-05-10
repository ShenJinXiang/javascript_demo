var o = {x: 1, y :2}
console.log(o);
Object.defineProperty(o, 'x', {'value': 4, 'writable': false, enumerable: true, configurable: true});
console.log(o);
console.log(o.x);

Object.defineProperty(o, 'x', {'value': 4, 'writable': false, enumerable: false, configurable: true});
console.log(o);
console.log(o.x);
for(var k in o) {
	console.log(k);
}
